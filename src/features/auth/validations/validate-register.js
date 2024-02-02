import Joi from "joi";
import validate from "../../../utils/validate";

const registerSchema = Joi.object({
  firstName: Joi.string().required().trim().messages({
    "string.empty": "First name is required",
  }),
  lastName: Joi.string().required().trim().messages({
    "string.empty": "Last name is required",
  }),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ])
    .required()
    .messages({
      "alternatives.match": "Invalid email address or mobile number",
    }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters long and contain only alphanumeric characters",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "Confirm password is required",
    "any.only": "Confirm Password does not match the password",
  }),
});

const validateRegister = (input) => validate(registerSchema)(input);
export default validateRegister;
