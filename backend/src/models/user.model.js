import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true
    },
    avatar: {
        type: String, // Cloudinary URL (Profile picture ke liye accha hai, isko optional ya required rakh sakte hain)
        default: ""
    },
    role: {
        type: String,
        enum: ["user", "owner", "admin"], // Sirf yeh teen roles hi allow honge
        default: "user" // By default naya account user ka banega
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "approved" // Users direct approved honge, lekin agar role owner hai to admin check karega
    },
    refreshToken: {
        type: String,
    }
}, { timestamps: true });

// Password hashing hook
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
});

// Password verification method
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Access Token Generation
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname,
            role: this.role // JWT token mein role bhej rahe hain taake frontend/backend par use ho sake
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        }
    );
};

// Refresh Token Generation
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
        }
    );
};

export const User = mongoose.model("User", userSchema);