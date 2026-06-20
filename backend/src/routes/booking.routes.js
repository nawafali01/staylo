import { Router } from "express";
import { 
    createBooking, 
    getTenantBookings, 
    updateBookingStatus 
} from "../controllers/booking.controller.js";
import { 
    sendMessage, 
    getConversations, 
    getMessages 
} from "../controllers/message.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT); // Secure all booking routes

router.route("/create").post(createBooking);
router.route("/my-bookings").get(getTenantBookings);
router.route("/status/:bookingId")
    .patch(updateBookingStatus)
    .put(updateBookingStatus);

// Messaging routes
router.route("/messages/send").post(sendMessage);
router.route("/conversations").get(getConversations);
router.route("/messages/:conversationId").get(getMessages);

export default router;