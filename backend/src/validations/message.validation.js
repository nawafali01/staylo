import Joi from "joi";

const sendMessageSchema = Joi.object({
    receiverId: Joi.string().hex().length(24).required().messages({
        "string.hex": "Invalid receiver ID",
        "string.length": "Invalid receiver ID"
    }),
    text: Joi.string().trim().min(1).required(),
    subject: Joi.string().trim().optional()
});

export { sendMessageSchema };
