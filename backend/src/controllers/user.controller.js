import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const generatedAccessandRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()
        //    refresh token ko backend main save karny k liye
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return { refreshToken, accessToken }

    } catch (error) {
        // console.log("Mera Asli Error Yeh Hai:", error);
        throw new ApiError(500, "something went wrong while genereting refresh and access token. ")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    // 1. Frontend se simple text data get karna
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
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists");
    }

    // 4. Role status logic
    let userStatus = "approved";
    if (role === "owner") {
        userStatus = "pending";
    }

    // 5. Database mein create karna (Avatar abhi empty string jayega)
    const user = await User.create({
        fullname,
        avatar: "", // Baad mein user profile update karke change kar sakega
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
    // 1. Data lena req.body se
    const { email, username, password } = req.body;

    // 2. Validation check (email ya username mein se ek cheez honi chahiye)
    if (!username && !email) {
        throw new ApiError(400, "Username or email is required");
    }

    // 3. User ko find karna database mein
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
        httpOnly: true, // Is se frontend ka JS cookies ko read nahi kar sakega (Secure approach)
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
    // req.user humein 'verifyJWT' middleware se milega
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // Database se refresh token field ko remove kar rahe hain
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
    // 1. Frontend se incoming refresh token nikalna (cookies ya body se)
    const incomingRefreshToken = req.cookies?.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request: Refresh token missing");
    }

    try {
        // 2. Token ko decode karna
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        // 3. Database se user find karna
        const user = await User.findById(decodedToken?._id);

        if (!user) {
            throw new ApiError(401, "Invalid refresh token");
        }

        // 4. Match karna ke jo token aaya hai wo database wale token se match hota hai ya nahi
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token has expired or been used");
        }

        const options = {
            httpOnly: true,
            secure: true
        };

        // 5. Naye tokens generate karna (Variables ke naam exact match hone chahiye)
        const { accessToken, refreshToken: newRefreshToken } = await generatedAccessandRefreshTokens(user._id);

        // 6. Cookies set karke response bhejna
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
    // 1. Frontend se purana aur naya password lena
    const { oldPassword, newPassword } = req.body;

    // 2. req.user se current logged-in user ko database se find karna
    const user = await User.findById(req.user?._id); // 🌟 Fixed: req.user?._id use kiya

    // 3. Purana password verify karna
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password");
    }

    // 4. Naya password assign karna (Mongoose hook isko khud hash kar dega)
    user.password = newPassword;
    await user.save({ validateBeforeSave: false });

    // 5. Success response bhejna
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
                req.user, // Isme password aur refreshToken pehle se hi excluded hain (verifyJWT ki wajah se)
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



