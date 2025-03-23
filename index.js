import express from "express";
import libraryRoutes from "./routes/library.js";
import { connectDatabase } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"
import cors from "cors"

const app = express();
const PORT = 3001;
// const connectionString = "mongodb://127.0.0.1:27017/homework"
 
app.use(express.json()); // Middleware для обработки JSON
app.use(cors())
// Подключение маршрутов библиотеки
app.use("/api", libraryRoutes);
app.use("/auth", authRoutes);

// Подключение к MongoDB
// async function connectDatabase() {
//     try {
//     await mongoose.connect(connectionString);
//     console.log("Connected to MongoDB");
        
//     } catch (error) {
//         console.log("Failed to connect to MongoDB:", error.message);
//     }
  
    
// }

  
    app.listen(PORT, async() => {
      await connectDatabase();
      console.log(`Server running on http://localhost:${PORT}`);
    });
  