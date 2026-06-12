import { Router } from "express";
import { 
    createBooking, 
    getTenantBookings, 
    updateBookingStatus 
} from "../controllers/booking.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT); // Secure all booking routes

router.route("/create").post(createBooking);
router.route("/my-bookings").get(getTenantBookings);
router.route("/status/:bookingId")
    .patch(updateBookingStatus)
    .put(updateBookingStatus);

export default router;