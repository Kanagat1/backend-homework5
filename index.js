import express from "express";
import librarianRoutes from "./routes/librarian.routes.js"
import libraryRoutes from "./routes/library.routes.js";
import { connectDatabase } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js"
import cors from "cors"
import { setupSwagger } from "./swagger.js";

const app = express();
const PORT = 3001;
 
app.use(express.json()); // Middleware для обработки JSON
app.use(cors())
// Подключение маршрутов библиотеки
app.use("/librarians", librarianRoutes);
app.use("/api", libraryRoutes);
app.use("/auth", authRoutes);


  
    app.listen(PORT, async() => {
      await connectDatabase();
      setupSwagger(app);
      console.log(`Server running on http://localhost:${PORT}`);
    });
  