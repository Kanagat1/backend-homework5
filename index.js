import express from "express";
import mongoose from "mongoose";
import libraryRoutes from "./routes/library.js";

const app = express();
const PORT = 3001;
const connectionString = "mongodb://127.0.0.1:27017/homework"
 
app.use(express.json()); // Middleware для обработки JSON

// Подключение маршрутов библиотеки
app.use("/api", libraryRoutes);

// Подключение к MongoDB
async function connectDatabase() {
    try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log("Failed to connect to MongoDB:", error.message);
    }
  
    
}

  
    app.listen(PORT, async() => {
      await connectDatabase();
      console.log(`Server running on http://localhost:${PORT}`);
    });
  
