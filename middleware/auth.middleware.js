import jwt from "jsonwebtoken"

export function authBorrower(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({ message: "Токен не валиден!"});
    }
    const token = authHeader.replace(/^Bearer\s/, "");

    try {
        const decoded = jwt.verify(token, "secretkey");
        req.borrowerId = decoded.userId;
        req.password = decoded.password;
        next();
    } catch (error) {
        res.status(401).json({ message: "Невалидный токен!"})
    }
}


export function authLibrarian(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({ message: "Токен не валиден!"});
    }
    const token = authHeader.replace(/^Bearer\s/, "");

    try {
        const decoded = jwt.verify(token, "secretkey");
        req.librarianId = decoded.userId;
        req.password = decoded.password;
        next();
    } catch (error) {
        res.status(401).json({ message: "Невалидный токен!"})
    }
}
