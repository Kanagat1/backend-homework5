const librarianSchema = {
    type: "object",
    properties: {
        _id: {
            type: "string"
        },
        name: {
            type: "string"
        },
        email: {
            type: "string",
            description: "Email adress of Librarian",
            example: "example@mail.kz"
        },
        password: {
            type: "string",
            description: "Hashed password by bcrypt.js"
        },
        role: {
            type: "string"
        }
    }
}

export default librarianSchema