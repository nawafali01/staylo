import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Property } from "../models/property.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// 1. CREATE: Add New Property (Secure - Owner/Admin Only)
const addProperty = asyncHandler(async (req, res) => {
    // Check karna ke user ka role 'owner' ya 'admin' mein se koi ek ho
    if (req.user?.role !== "owner" && req.user?.role !== "admin") {
        throw new ApiError(403, "Only property owners or admins can list properties");
    }

    // Frontend se text data get karna
    const { title, description, price, location, city } = req.body;

    // Validation: Koi field khali na ho
    if (
        [title, description, location, city].some((field) => field?.trim() === "") || 
        !price
    ) {
        throw new ApiError(400, "All fields are required");
    }

    // Multiple images handle karna jo Multer se aayengi
    const imageLocalFiles = req.files;

    if (!imageLocalFiles || imageLocalFiles.length === 0) {
        throw new ApiError(400, "At least one property image is required");
    }

    // Saari images ko loop chala kar Cloudinary par upload karna
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

    // Database mein Property create karna
    const property = await Property.create({
        title,
        description,
        price,
        location,
        city: city.toLowerCase(),
        images: imageUrls,
        owner: req.user._id // Login user/admin ki ID reference mein chali gayi
    });

    return res
        .status(201)
        .json(new ApiResponse(201, property, "Property listed successfully"));
});

// 2. READ: Saari Available Properties Get Karna (Public Route)
const getAllProperties = asyncHandler(async (req, res) => {
    // Sirf wo properties nikalna jo available hain (isAvailable: true)
    const properties = await Property.find({ isAvailable: true })
        .populate("owner", "fullname email phoneNumber") // Owner ka data sath lane ke liye
        .sort("-createdAt"); // Fresh listings pehle aayengi

    return res
        .status(200)
        .json(new ApiResponse(200, properties, "All properties fetched successfully"));
});

// 3. READ: Kisi Single Property Ki Details Dekhna (Public Route)
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

// 4. READ: Logged-in Owner Ki Apni Listed Properties (Secure - Dashboard)
const getOwnerProperties = asyncHandler(async (req, res) => {
    const properties = await Property.find({ owner: req.user._id });

    return res
        .status(200)
        .json(new ApiResponse(200, properties, "Owner properties fetched successfully"));
});

// 5. UPDATE: Property Details Update Karna (Secure - Only Real Owner or Admin)
const updateProperty = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;
    const { title, description, price, location, city, isAvailable } = req.body;

    const property = await Property.findById(propertyId);

    if (!property) {
        throw new ApiError(404, "Property not found");
    }

    // Security Check: Kya edit karne wala khud owner hai ya admin hai?
    if (!property.owner.equals(req.user._id) && req.user.role !== "admin") {
        throw new ApiError(403, "You do not have permission to update this property");
    }

    // Jo fields frontend se aayi hain unhe update kar do
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

// 6. DELETE: Property Remove Karna (Secure - Only Real Owner or Admin)
const deleteProperty = asyncHandler(async (req, res) => {
    const { propertyId } = req.params;

    const property = await Property.findById(propertyId);

    if (!property) {
        throw new ApiError(404, "Property not found");
    }

    // Security Check: Sirf asli owner ya admin hi urra sakta hai
    if (!property.owner.equals(req.user._id) && req.user.role !== "admin") {
        throw new ApiError(403, "You do not have permission to delete this property");
    }

    await Property.findByIdAndDelete(propertyId);

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Property deleted successfully"));
});

// Exporting all controllers at once
export { 
    addProperty, 
    getAllProperties, 
    getPropertyById, 
    getOwnerProperties,
    updateProperty,
    deleteProperty
};