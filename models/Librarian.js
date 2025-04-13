import mongoose from "mongoose"

/**
 * 
 * 
 */
const LibrarianSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'librarian' },
});



export const Librarian = mongoose.model("Librarian", LibrarianSchema);