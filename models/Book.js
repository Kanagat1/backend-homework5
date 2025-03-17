import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author", required: true },
  isAvailable: { type: Boolean, default: true }
});

export const Book = mongoose.model("Book", bookSchema);
