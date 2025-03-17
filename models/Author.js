import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }]
});

export const Author = mongoose.model("Author", authorSchema);
