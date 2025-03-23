import express from "express";
import AuthorController from "../controllers/AuthorController.js";
import BookController from "../controllers/BookController.js";
import BorrowerController from "../controllers/BorrowerController.js";
import { authBorrower } from "../middleware/auth.middleware.js";

const router = express.Router();

// Авторы
router.post("/authors", AuthorController.create);
router.get("/authors", AuthorController.getAll);
router.patch("/authors/:id", AuthorController.update);
router.delete("/authors/:id", AuthorController.delete);

// Книги
router.post("/books", BookController.create);
router.get("/books", BookController.getAll);
router.patch("/books/:id", BookController.update);
router.delete("/books/:id", BookController.delete);

// Читатели
router.post("/borrowers", authBorrower,BorrowerController.create);
router.post("/borrowers/borrow", BorrowerController.borrow);
router.post("/borrowers/return", BorrowerController.return);

export default router;
