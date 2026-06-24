import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    property: {
        type: Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },
    tenant: {
        type: Schema.Types.ObjectId,
        ref: "User", // Sirf normal 'user' ya admin hi book kar sakega
        required: true
    },
    checkInDate: {
        type: Date,
        required: [true, "Check-in date is required"]
    },
    checkOutDate: {
        type: Date,
        required: [true, "Check-out date is required"]
    },
    totalPrice: {
        type: Number,
        required: [true, "Total price is required"]
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    }
}, { timestamps: true });

export const Booking = mongoose.model("Booking", bookingSchema);