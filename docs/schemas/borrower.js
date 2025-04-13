const borrowerSchema = {
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
            description: "Email adress of borrower",
            example: "example@mail.kz"
        },
        password: {
            type: "string",
        },
        // borrowedBooks:{
        //     type: "string"
        // }
      
    }
}

export default borrowerSchema