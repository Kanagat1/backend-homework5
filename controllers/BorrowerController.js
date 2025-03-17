import { Borrower } from "../models/Borrower.js";
import { Book } from "../models/Book.js";

class BorrowerController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const borrower = await new Borrower({ name }).save();
      res.status(201).json(borrower);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async borrow(req, res) {
    try {
      const { borrowerId, bookId } = req.body;
      const borrower = await Borrower.findById(borrowerId);
      const book = await Book.findById(bookId);

      if (!borrower || !book || !book.isAvailable) {
        return res.status(400).json({ message: "Borrower or book not found, or book is unavailable" });
      }

      borrower.borrowedBooks.push(book._id);
      book.isAvailable = false;

      await borrower.save();
      await book.save();

      res.json({ message: `${borrower.name} арендовал книгу под названием "${book.title}"` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async return(req, res) {
    try {
      const { borrowerId, bookId } = req.body;
      const borrower = await Borrower.findById(borrowerId);
      const book = await Book.findById(bookId);
      

      if (!borrower || !book) {
        return res.status(404).json({ message: "Borrower or book not found" });
      }

      borrower.borrowedBooks = borrower.borrowedBooks.filter(
        (borrowedBookId) => borrowedBookId.toString() !== bookId
      );
      book.isAvailable = true;

      await borrower.save();
      await book.save();
    
    

      res.json({ message: `${borrower.name} вернул книгу под названием "${book.title}" автора ${author.name}`});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new BorrowerController();
