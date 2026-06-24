import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Property } from "../models/property.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// 1. CREATE: Add New Property
const addProperty = asyncHandler(async (req, res) => {
    if (req.user?.role !== "owner" && req.user?.role !== "admin") {
        throw new ApiError(403, "Only property owners or admins can list properties");
    }

    const { title, description, price, location, city } = req.body;

    const imageLocalFiles = req.files;

    if (!imageLocalFiles || imageLocalFiles.length === 0) {
        throw new ApiError(400, "At least one property image is required");
    }

    const imageUrls = [];

    for (const file of imageLocalFiles) {
        const uploadedImage = await uploadOnCloudinary(file.path);
        if (uploadedImage?.url) {
            imageUrls.push(uploadedImage.url);
        }
    }

    if (imageUrls.length === 0) {
        throw new ApiError(500, "Failed to upload property images to cloud");
    }

    const property = await Property.create({
        title,
        description,
        price,
        location,
        city: city.toLowerCase(),
        images: imageUrls,
        owner: req.user._id
    });

    return res
        .status(201)
        .json(new ApiResponse(201, property, "Property listed successfully"));
});

// 2. READ: Get All Properties
const getAllProperties = asyncHandler(async (req, res) => {
    const properties = await Property.find({ isAvailable: true })
        .populate("owner", "fullname email phoneNumber")
        .sort("-createdAt");

    return res
        .status(200)
        .json(new ApiResponse(200, properties, "All properties fetched successfully"));
});

// 3. READ: Get Property Details
const getPropertyById = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;

    const property = await Property.findById(propertyId)
        .populate("owner", "fullname email phoneNumber");

    if (!property) {
        throw new ApiError(404, "Property not found");
    }

    return res
        .status(200)
        .json(new ApiResponse(200, property, "Property details fetched successfully"));
});

// 4. READ: Owner's Properties
const getOwnerProperties = asyncHandler(async (req, res) => {
    const properties = await Property.find({ owner: req.user._id });

    return res
        .status(200)
        .json(new ApiResponse(200, properties, "Owner properties fetched successfully"));
});

// 5. UPDATE: Update Property
const updateProperty = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;
    const { title, description, price, location, city, isAvailable } = req.body;

    const property = await Property.findById(propertyId);

    if (!property) {
        throw new ApiError(404, "Property not found");
    }

    if (!property.owner.equals(req.user._id) && req.user.role !== "admin") {
        throw new ApiError(403, "You do not have permission to update this property");
    }

    if (title) property.title = title;
    if (description) property.description = description;
    if (price) property.price = price;
    if (location) property.location = location;
    if (city) property.city = city.toLowerCase();
    if (typeof isAvailable !== "undefined") property.isAvailable = isAvailable;

    const updatedProperty = await property.save({ validateBeforeSave: false });

    return res
        .status(200)
        .json(new ApiResponse(200, updatedProperty, "Property updated successfully"));
});

// 6. DELETE: Delete Property
const deleteProperty = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;

    const property = await Property.findById(propertyId);

    if (!property) {
        throw new ApiError(404, "Property not found");
    }

    if (!property.owner.equals(req.user._id) && req.user.role !== "admin") {
        throw new ApiError(403, "You do not have permission to delete this property");
    }

    await Property.findByIdAndDelete(propertyId);

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Property deleted successfully"));
});

export { 
    addProperty, 
    getAllProperties, 
    getPropertyById, 
    getOwnerProperties,
    updateProperty,
    deleteProperty
};