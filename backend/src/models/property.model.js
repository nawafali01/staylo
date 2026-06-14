import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String, // City/Province
        required: true,
        trim: true
    },
    listingCategory: {
        type: String, // For Rent, For Sale
        enum: ["For Rent", "For Sale"]
    },
    propertyType: {
        type: String,
    },
    streetAddress: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
    },
    bedrooms: {
        type: Number,
        default: 0
    },
    bathrooms: {
        type: Number,
        default: 0
    },
    propertySize: {
        type: Number, // sqft
        default: 0
    },
    furnishing: {
        type: String,
        enum: ["Furnished", "Unfurnished", "Semi-furnished"],
        default: "Unfurnished"
    },
    amenities: [
        {
            type: String
        }
    ],
    infrastructure: [
        {
            type: String
        }
    ],
    images: [
        {
            type: String // Cloudinary URLs
        }
    ],
    isAvailable: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected", "available", "occupied"],
        default: "pending"
    }
}, { timestamps: true });

export const Property = mongoose.model("Property", propertySchema);
