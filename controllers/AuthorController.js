import { Author } from "../models/Author.js";

class AuthorController {
  async create(req, res) {
    try {
      const { name, bio } = req.body;
      const author = await new Author({ name, bio }).save();
      res.status(201).json(author);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const authors = await Author.find().populate("books", "title");
      res.json(authors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const author = await Author.findByIdAndUpdate(id, req.body, { new: true });
      res.json(author || { message: "Author not found" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await Author.findByIdAndDelete(id);
      res.status(result ? 204 : 404).send(result ? null : { message: "Author not found" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new AuthorController();
