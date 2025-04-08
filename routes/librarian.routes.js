
import express from  "express";
import { registerValidator, loginValidator } from "../validators/auth.validator.js";
import AuthController from "../controllers/Auth.controller.js";

const router = express.Router();

// Регистрация нового библиотекаря
router.post("/register", registerValidator, AuthController.register);

// Вход библиотекаря
router.post("/login", loginValidator, AuthController.login );

export default router; 