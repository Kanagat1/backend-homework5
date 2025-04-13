const authPaths = {
  "/auth/register": {
    post: {
      summary: "New borrow registration",
      tags: ["Auth"],
      responses: {
        201: {
          description: "This route return new user data",
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
                  description: "Email address of borrow",
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
  "/auth/login": {
    post: {
      summary: "Login borrow",
      tags: ["Auth"],
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
                  description: "Email address of borrow",
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

export default authPaths;
