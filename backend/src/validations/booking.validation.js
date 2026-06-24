import Joi from "joi";

const createBookingSchema = Joi.object({
    propertyId: Joi.string().hex().length(24).required().messages({
        "string.hex": "Invalid property ID",
        "string.length": "Invalid property ID"
    }),
    checkInDate: Joi.date().iso().greater("now").required().messages({
        "date.greater": "Check-in date must be in the future"
    }),
    checkOutDate: Joi.date().iso().greater(Joi.ref("checkInDate")).required().messages({
        "date.greater": "Check-out date must be after check-in date"
    }),
    totalPrice: Joi.number().positive().required()
});

const updateBookingStatusSchema = Joi.object({
    status: Joi.string().valid("confirmed", "cancelled").required().messages({
        "any.only": "Status must be 'confirmed' or 'cancelled'"
    })
});

export { createBookingSchema, updateBookingStatusSchema };
