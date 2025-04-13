const bookSchema = {
    type: "object",
    properties: {
        _id: {
            type: "string"
        },
        title: {
            type: "string"
        },
        author: {
            type: "string",
          
        },
        isAvailable: {
            type: "boolean",
        },
      
    }
}

export default bookSchema