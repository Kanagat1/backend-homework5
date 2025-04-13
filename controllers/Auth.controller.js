import { Borrower } from "../models/Borrower.js"; 
import { hashPassword, checkValidPassword } from "../services/bcrypt.js";
import jwt from "jsonwebtoken";

class AuthController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const emailAlreadyExist = await Borrower.findOne({ email }) ;
      if(emailAlreadyExist)  {
        return res.status(409).json({ message: "Даная эл.почта занята!"})
      }
      
      const hashedPassword = await hashPassword(password)  

      const newBorrower = await new Borrower({
        name,
        email,
        password: hashedPassword
      }).save(); 
      res.status(201).json({ borrow: newBorrower})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  async login(req, res) {
    try {
        const { email, password } = req.body;
        const borrower = await Borrower.findOne({ email });
        if (!Borrower) {
            return res.status(404).json({ message: "Неверный email или пароль!"})
        }
      
       const passwordIsValid = await checkValidPassword(password, borrower.password);
       if (!passwordIsValid) {
        return res.status(404).json({ message: "Неверный email или пароль!"})
       };

       const token = jwt.sign(
        { borrowerId: borrower._id, password: borrower.password  } ,//Payload
        "secretkey", // Secret key
        { expiresIn: "12h" } // Expires in
       );
       res.json({ token})
        
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

 


}



export default new AuthController();
