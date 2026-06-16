import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generatedAccessandRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()
        // Save the refresh token in the database
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return { refreshToken, accessToken }

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access tokens.")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    // 1. Get user data from request body
    const { fullname, email, username, password, phoneNumber, role } = req.body;

    // 2. Validation check
    if (
        [fullname, email, username, password, phoneNumber].some(
            (field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400, "All fields are required");
    }

    // 3. Unique check
    const existedUser = await User.findOne({ email });


    if (existedUser) {
        throw new ApiError(409, "User with email already exists");
    }

    // 4. Role status logic
    let userStatus = "approved";
    if (role === "owner") {
        userStatus = "pending";
    }

    // 5. Create user in database (avatar is initially empty)
    const user = await User.create({
        fullname,
        avatar: "", // The user can update their profile avatar later
        email,
        password,
        username: username.toLowerCase(),
        phoneNumber,
        role: role || "user",
        status: userStatus
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }

    return res
        .status(201)
        .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
    // 1. Get login data from request body
    const { email, username, password } = req.body;

    // 2. Validation check (either username or email must be provided)
    if (!username && !email) {
        throw new ApiError(400, "Username or email is required");
    }

    // 3. Find the user in the database
    const user = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!user) {
        throw new ApiError(444, "User does not exist");
    }

    // 4. Password verify karna
    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials");
    }

    // 5. Tokens generate karna
    const { accessToken, refreshToken } = await generatedAccessandRefreshTokens(user._id);

    // 6. Database se password aur refresh token remove karke object banana
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    // Cookie ke liye secure options set karna
    const options = {
        httpOnly: true, // Prevents frontend JS from reading cookies (Secure approach)
        secure: true
    };

    // 7. Cookies set karna aur response bhejna
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged in successfully"
            )
        );
});

const logoutUser = asyncHandler(async (req, res) => {
    // req.user is populated by 'verifyJWT' middleware
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // Remove the refresh token from the database
            }
        },
        {
            new: true
        }
    );

    // Browser se cookies clear karne ke liye options
    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    // 1. Extract the incoming refresh token from cookies or body
    const incomingRefreshToken = req.cookies?.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request: Refresh token missing");
    }

    try {
        // 2. Decode the token
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        // 3. Find the user in the database
        const user = await User.findById(decodedToken?._id);

        if (!user) {
            throw new ApiError(401, "Invalid refresh token");
        }

        // 4. Verify that the provided token matches the one stored in the database
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token has expired or been used");
        }

        const options = {
            httpOnly: true,
            secure: true
        };

        // 5. Generate new tokens
        const { accessToken, refreshToken: newRefreshToken } = await generatedAccessandRefreshTokens(user._id);

        // 6. Set cookies and send response
        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    { accessToken, refreshToken: newRefreshToken },
                    "Access token refreshed successfully"
                )
            );

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token");
    }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
    // 1. Get old and new passwords from the request body
    const { oldPassword, newPassword } = req.body;

    // 2. Find the current logged-in user in the database via req.user
    const user = await User.findById(req.user?._id); // Fixed: using req.user?._id for safer access

    // 3. Verify the old password
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password");
    }

    // 4. Assign the new password (it will be hashed by the Mongoose hook)
    user.password = newPassword;
    await user.save({ validateBeforeSave: false });

    // 5. Send success response
    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "Password changed successfully")
        );
});

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                req.user, // Select fields are already excluded via verifyJWT middleware
                "Current user fetched successfully"
            )
        );
});

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser
};



