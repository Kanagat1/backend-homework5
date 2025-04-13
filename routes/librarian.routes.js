
import express from  "express";
import { registerValidator, loginValidator } from "../validators/auth.validator.js";
import LibrarianController from "../controllers/Librarian.Controller.js";

const router = express.Router();

// Регистрация нового библиотекаря
router.post("/register", registerValidator, LibrarianController.register);

// Вход библиотекаря
router.post("/login", loginValidator, LibrarianController.login );

export default router; 