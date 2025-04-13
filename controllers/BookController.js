import { Book } from "../models/Book.js";
import { Author } from "../models/Author.js";

class BookController {
  async create(req, res) {
    try {
      const { title, authorId, isAvailable } = req.body;
      const author = await Author.findById(authorId);
      if (!author) return res.status(404).json({ message: "Author not found" });

      const book = await new Book({ title, author: authorId, isAvailable }).save();
      await Author.findByIdAndUpdate(authorId, { $push: { books: book._id } });
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const books = await Book.find().populate("author", "name");
      console.log(books.author);
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
      res.json(book || { message: "Book not found" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await Book.findByIdAndDelete(id);
      res.status(result ? 204 : 404).send(result ? null : { message: "Book not found" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new BookController();
