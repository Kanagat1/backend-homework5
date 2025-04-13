const authorSchema = {
    type: "object",
    properties: {
        _id: {
            type: "string"
        },
        name: {
            type: "string",
             example: "John Doe"
        },
        bio: {
            type: "string",
          
        },
        books: {
            type: "string",
        },
      
    }
}

export default authorSchema