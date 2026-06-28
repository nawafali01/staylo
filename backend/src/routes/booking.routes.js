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
import { validate } from "../middlewares/validate.middleware.js";
import { createBookingSchema, updateBookingStatusSchema } from "../validations/booking.validation.js";
import { sendMessageSchema } from "../validations/message.validation.js";

const router = Router();

router.use(verifyJWT);

router.route("/create").post(validate(createBookingSchema), createBooking);
router.route("/my-bookings").get(getTenantBookings);
router.route("/status/:bookingId")
    .patch(validate(updateBookingStatusSchema), updateBookingStatus)
    .put(validate(updateBookingStatusSchema), updateBookingStatus);

// Messaging routes
router.route("/messages/send").post(validate(sendMessageSchema), sendMessage);
router.route("/conversations").get(getConversations);
router.route("/messages/:conversationId").get(getMessages);

export default router;