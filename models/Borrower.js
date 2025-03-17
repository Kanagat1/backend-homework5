import mongoose from "mongoose";

const borrowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  
});

export const Borrower = mongoose.model("Borrower", borrowerSchema);
