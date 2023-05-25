const joi = require('joi')
export const registerSchema = joi.object(
    {
        name:joi.string().required(),
        email: joi.string().email().exist().required(),
        password: joi.string().required().min(8),
        role:joi.string().required()
    }
)

export const loginSchema = joi.object({
    email:joi.string().required(),
    password:joi.string().required()
})