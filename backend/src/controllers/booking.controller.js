import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Booking } from "../models/booking.model.js";
import { Property } from "../models/property.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createBooking = asyncHandler(async (req, res) => {

    const { propertyId, checkInDate, checkOutDate, totalPrice } = req.body;

    if (!propertyId || !checkInDate || !checkOutDate || !totalPrice) {
        throw new ApiError(400, "All fields are required for booking");
    }

    // 3. Check karna ke property database mein hai ya nahi
    const property = await Property.findById(propertyId);
    if (!property) {
        throw new ApiError(404, "Property not found");
    }

    // 4. Check karna ke property available hai ya nahi
    if (!property.isAvailable) {
        throw new ApiError(400, "This property is already booked or unavailable");
    }

    // 5. Security Check: Owner khud apni property book na kar sake
    if (property.owner.equals(req.user._id)) {
        throw new ApiError(400, "You cannot book your own property");
    }

    // 6. Booking create karna database mein
    // Status default mein "pending" hi rahega jab tak owner accept na kare
    const booking = await Booking.create({
        property: propertyId,
        tenant: req.user._id, // Login hue user ki ID
        checkInDate,
        checkOutDate,
        totalPrice
    });

    return res
        .status(201)
        .json(new ApiResponse(201, booking, "Booking request sent successfully to owner"));
});

const getTenantBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ tenant: req.user._id })
        .populate("property", "title price location images") // Property ki details sath lane ke liye
        .sort("-createdAt");

    return res
        .status(200)
        .json(new ApiResponse(200, bookings, "Tenant bookings fetched successfully"));
});

const updateBookingStatus = asyncHandler(async (req, res) => {
    const { bookingId } = req.params;
    const { status } = req.body; // Frontend se "confirmed" ya "cancelled" aayega

    // 1. Validation check karna
    if (!["confirmed", "cancelled"].includes(status)) {
        throw new ApiError(400, "Invalid status type. Must be 'confirmed' or 'cancelled'");
    }

    // 2. Booking find karna aur sath hi property ka data bhi populate karna
    const booking = await Booking.findById(bookingId).populate("property");
    if (!booking) {
        throw new ApiError(404, "Booking request not found");
    }

    // 3. SECURITY CHECK: Kya yeh banda waqai is property ka owner hai?
    // booking.property.owner se humein property ke malik ki ID milti hai
    if (!booking.property.owner.equals(req.user._id) && req.user.role !== "admin") {
        throw new ApiError(403, "You do not have permission to update this booking status");
    }

    // 4. Status update karna
    booking.status = status;
    await booking.save();

    // 5. 🌟 AUTOMATIC LOGIC: Agar booking confirm ho gayi hai, to property ko unavailable kar do
    if (status === "confirmed") {
        const property = await Property.findById(booking.property._id);
        property.isAvailable = false;
        await property.save({ validateBeforeSave: false });
    }

    // Note: Agar pehle se confirmed thi aur ab cancel ho rahi hai, to aap isAvailable ko true bhi kar sakte hain.

    return res
        .status(200)
        .json(new ApiResponse(200, booking, `Booking status successfully updated to ${status}`));
});

export { createBooking, getTenantBookings, updateBookingStatus };

