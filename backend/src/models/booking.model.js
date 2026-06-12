import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    property: {
        type: Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },
    tenant: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    }
}, { timestamps: true });

export const Booking = mongoose.model("Booking", bookingSchema);
