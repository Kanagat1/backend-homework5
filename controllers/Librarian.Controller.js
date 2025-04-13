 import { Librarian } from "../models/Librarian.js";
 import { hashPassword, checkValidPassword } from "../services/bcrypt.js";
 import jwt from "jsonwebtoken";

class LibrarianController{
 async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const emailAlreadyExist = await Librarian.findOne({ email }) ;
      if(emailAlreadyExist)  {
        return res.status(409).json({ message: "Даная эл.почта занята!"})
      }
      
      const hashedPassword = await hashPassword(password)  

      const newLibrarian = await new Librarian({
        name,
        email,
        password: hashedPassword
      }).save(); 
      res.status(201).json({ librarian: newLibrarian})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Вход (аутентификация) библиотекаря
 async login(req, res) {
    try {
      const { email, password } = req.body;
      const librarian = await Librarian.findOne({ email });
      if (!Librarian) {
        return res.status(404).json({ message: 'Librarian not found' });
      }
      const isValidPassword = await checkValidPassword(password, librarian.password);
      if (!isValidPassword) {
        return res.status(404).json({ message: 'Неверный email или пароль!' });
      }

      const token = jwt.sign(
              { librarianId: librarian._id, password: librarian.password  } ,//Payload
              "secretkey", // Secret key
              { expiresIn: "12h" } // Expires in
             );
             res.json({ token})

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new LibrarianController