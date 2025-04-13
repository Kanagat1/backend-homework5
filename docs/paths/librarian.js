const librarianPaths = {
    "/librarians/register": {
      post: {
        summary: "New librarian registration",
        tags: ["librarianAuth"],
        responses: {
          201: {
            description: "This route return new librarian",
          },
        },
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    example: "John Doe",
                  },
  
                  email: {
                    type: "string",
                    description: "Email address of librarian",
                    example: "example@mail.kz",
                  },
                  password: {
                    type: "string",
                    description: "Hashed password by bcrypt.js",
                    example: "Qwerty123!",
                  },
                  role: {
                    type: "string"
                }
                },
              },
            },
          },
        },
      },
    },
    "/librarians/login": {
      post: {
        summary: "Login librarian",
        tags: ["librarianAuth"],
        responses: {
          200: {
            description: "This route return JWT",
          },
        },
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    description: "Email address of librarian",
                    example: "example@mail.kz",
                  },
                  password: {
                    type: "string",
                    description: "Hashed password by bcrypt.js",
                    example: "Qwerty123!",
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  
  export default librarianPaths;
  