import Joi from "joi";

const addPropertySchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).required(),
    description: Joi.string().trim().min(10).required(),
    price: Joi.number().positive().required(),
    location: Joi.string().trim().required(),
    city: Joi.string().trim().lowercase().required()
});

const updatePropertySchema = Joi.object({
    title: Joi.string().trim().min(3).max(100).optional(),
    description: Joi.string().trim().min(10).optional(),
    price: Joi.number().positive().optional(),
    location: Joi.string().trim().optional(),
    city: Joi.string().trim().lowercase().optional(),
    isAvailable: Joi.boolean().optional()
}).min(1).messages({
    "object.min": "At least one field is required to update"
});

export { addPropertySchema, updatePropertySchema };
