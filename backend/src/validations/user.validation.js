import Joi from "joi";

const registerSchema = Joi.object({
    fullname: Joi.string().trim().min(2).max(50).required(),
    email: Joi.string().email().required(),
    username: Joi.string().trim().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    phoneNumber: Joi.string().pattern(/^[0-9]{10,15}$/).required().messages({
        "string.pattern.base": "Phone number must be 10-15 digits"
    }),
    role: Joi.string().valid("user", "owner", "admin").default("user")
});

const loginSchema = Joi.object({
    email: Joi.string().email().optional(),
    username: Joi.string().trim().optional(),
    password: Joi.string().required()
}).or("email", "username").messages({
    "object.missing": "Either email or username is required"
});

const changePasswordSchema = Joi.object({
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().min(6).disallow(Joi.ref("oldPassword")).required().messages({
        "any.invalid": "New password must be different from the old password"
    })
});

export { registerSchema, loginSchema, changePasswordSchema };
