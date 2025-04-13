import { request } from "express";

const libraryPaths = {
  "/api/authors": {
    post: {
      summary: "new authors",
      tags: ["Author"],
      responses: {
        201: {
          description: "This route create authors books",
        },
      },

      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              $ref: "#/components/schemas/Author",
            },
          },
        },
      },
    },

    get: {
      summary: "Fetch all authors",
      tags: ["Author"],
      responses: {
        200: {
          description: "This route return all authors",
          content: {
            "application/json": {
              schema: {
                type: "array",
                $ref: "#/components/schemas/Author",
              },
            },
          },
        },
      },
    },
  },
  "api/authors/{id}": {
    patch: {
      summary: "Update author by id",
      tags: ["Author"],
      responses: {
        200: {
          description: "This route return the selected author",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/Author",
              },
            },
          },
        },
      },
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
    },
    delete: {
      summary: "Delete author by id",
      tags: ["Author"],
      responses: {
        200: {
          description: "This route delete the selected author",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/Author",
              },
            },
          },
        },
      },
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
    },
  },

  "/api/books": {
    post: {
      summary: "new books",
      tags: ["Book"],
      responses: {
        201: {
          description: "This route create  books",
        },
      },

      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              $ref: "#/components/schemas/Book",
            },
          },
        },
      },
    },

    get: {
      summary: "Fetch all books",
      tags: ["Book"],
      responses: {
        200: {
          description: "This route return all  books",
          content: {
            "application/json": {
              schema: {
                type: "array",
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
      },
    },
  },
  "api/books/{id}": {
    patch: {
      summary: "Update book by id",
      tags: ["Book"],
      responses: {
        200: {
          description: "This route return the selected author",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
      },
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
    },
    delete: {
      summary: "Delete book by id",
      tags: ["Book"],
      responses: {
        200: {
          description: "This route delete the selected book",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/Book",
              },
            },
          },
        },
      },
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
    },
  },

  "/api/borrowers": {
    post: {
      summary: "new borrowers",
      tags: ["Borrower"],
      responses: {
        201: {
          description: "This route create  borrowers",
        },
      },

      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              $ref: "#/components/schemas/Borrower",
            },
          },
        },
      },
      security: [{ BearerAuth: [] }],
    },
  },
  "/api/borrowers/borrow": {
    post: {
      summary: "Borrow  books borrows",
      tags: ["Borrower"],
      responses: {
        200: {
          description: "This route borrow books borrows",
        },
      },
      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              type: "object",
              // $ref: "#/components/schemas/Borrower",
              properties: {
                borrowerId: {
                  type: "string",
                },
                bookId: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  },
  "/api/borrowers/return": {
    post: {
      summary: "Return  books borrows",
      tags: ["Borrower"],
      responses: {
        200: {
          description: "This route return books borrows",
        },
      },
      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              type: "object",
              // $ref: "#/components/schemas/Borrower",
              properties: {
                borrowerId: {
                  type: "string",
                },
                bookId: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  },
};

export default libraryPaths;
