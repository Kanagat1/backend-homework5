import express from "express";
import libraryRoutes from "./routes/library.js";
import { connectDatabase } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"
import cors from "cors"

const app = express();
const PORT = 3001;
 
app.use(express.json()); // Middleware для обработки JSON
app.use(cors())
// Подключение маршрутов библиотеки
app.use("/api", libraryRoutes);
app.use("/auth", authRoutes);


  
    app.listen(PORT, async() => {
      await connectDatabase();
      console.log(`Server running on http://localhost:${PORT}`);
    });
  