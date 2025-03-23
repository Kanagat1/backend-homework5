import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "./general.validator.js";

const name = body("name")
    .exists()
    .withMessage("Поле name обязательна!")
    .isString()
    .withMessage("Поле name должна быть строчкой!")
    .isLength({ min: 3 })
    .withMessage("Поле name должна содержать минимум 3 символа!");

const email = body("email")
    .exists()
    .withMessage("Поле email обязательна!")
    .isEmail()
    .withMessage("Поле email должно иметь в себе символ '@'!");

const password = body("password")
    .exists()
    .withMessage("Поле password обязательна!")
    .isString()
    .withMessage("Поле password должна быть строчкой!")
    .isStrongPassword()
    .withMessage("Ваш пароль слишком простой!");

  export const registerValidator = createCustomValidatorMiddleware([
    name,
    email,
    password
  ]);
  
  export const loginValidator = createCustomValidatorMiddleware([
    email,
    password
  ]);