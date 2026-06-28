import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Booking } from "../models/booking.model.js";
import { Property } from "../models/property.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// 1. CREATE: Create a Booking
const createBooking = asyncHandler(async (req, res) => {
    const { propertyId, checkInDate, checkOutDate, totalPrice } = req.body;

    const property = await Property.findById(propertyId);
    if (!property) {
        throw new ApiError(404, "Property not found");
    }

    if (!property.isAvailable) {
        throw new ApiError(400, "This property is already booked or unavailable");
    }

    if (property.owner.equals(req.user._id)) {
        throw new ApiError(400, "You cannot book your own property");
    }

    const booking = await Booking.create({
        property: propertyId,
        tenant: req.user._id,
        checkInDate,
        checkOutDate,
        totalPrice
    });

    return res
        .status(201)
        .json(new ApiResponse(201, booking, "Booking request sent successfully to owner"));
});

// 2. READ: Get Tenant's Bookings
const getTenantBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ tenant: req.user._id })
        .populate("property", "title price location images")
        .sort("-createdAt");

    return res
        .status(200)
        .json(new ApiResponse(200, bookings, "Tenant bookings fetched successfully"));
});

// 3. UPDATE: Update Booking Status
const updateBookingStatus = asyncHandler(async (req, res) => {
    const { bookingId } = req.params;
    const { status } = req.body;

    const booking = await Booking.findById(bookingId).populate("property");
    if (!booking) {
        throw new ApiError(404, "Booking request not found");
    }

    if (!booking.property.owner.equals(req.user._id) && req.user.role !== "admin") {
        throw new ApiError(403, "You do not have permission to update this booking status");
    }

    booking.status = status;
    await booking.save();

    if (status === "confirmed") {
        const property = await Property.findById(booking.property._id);
        property.isAvailable = false;
        await property.save({ validateBeforeSave: false });
    }

    return res
        .status(200)
        .json(new ApiResponse(200, booking, `Booking status successfully updated to ${status}`));
});

export { createBooking, getTenantBookings, updateBookingStatus };
