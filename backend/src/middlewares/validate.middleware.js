import { ApiError } from "../utils/ApiError.js";

// Returns an Express middleware that validates req.body against the given Joi schema
const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        const message = error.details.map((d) => d.message).join(", ");
        throw new ApiError(400, message);
    }
    next();
};

export { validate };
