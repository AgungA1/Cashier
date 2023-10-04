import Joi from "joi";

const userLoginValidation = Joi.object({
    username: Joi.string().max(100).required(),
    password: Joi.string().max(100).required(),
});

const getUserValidation = Joi.string().max(100).required();

export {
    userLoginValidation,
    getUserValidation
}