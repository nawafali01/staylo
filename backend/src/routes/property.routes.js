import { Router } from "express";
import { 
    addProperty, 
    getAllProperties, 
    getPropertyById, 
    getOwnerProperties, 
    updateProperty, 
    deleteProperty 
} from "../controllers/property.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

// Public routes
router.route("/").get(getAllProperties);
router.route("/:propertyId").get(getPropertyById);

// Secure routes
router.route("/add-property").post(
    verifyJWT,
    upload.array("images", 10),
    addProperty
);

router.route("/my-properties").get(verifyJWT, getOwnerProperties);

router.route("/:propertyId")
    .put(verifyJWT, updateProperty)
    .delete(verifyJWT, deleteProperty);

export default router;