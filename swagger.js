import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
//Swagger Schemas
import librarianSchema from "./docs/schemas/librarian.js";
import authorSchema from "./docs/schemas/author.js";
import borrowerSchema from "./docs/schemas/borrower.js";
import bookSchema from "./docs/schemas/book.js";
//Swagger Paths
import authPaths from "./docs/paths/auth.js";
import libraryPaths from "./docs/paths/library.js"
import librarianPaths from "./docs/paths/librarian.js";




const swaggerDoc = swaggerJSDoc({
    definition: {
        openapi: "3.1.1",
    info: {
        title: "Librarian System",
        version: "1.0.0",
        description: "Список API библиотеки"
    },
    components: {
        schemas: {
           Librarian: librarianSchema,
           Author: authorSchema,
           Borrower: borrowerSchema,
           Book: bookSchema
        },
        securitySchemes: {
           BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
           }
        }
    },
    paths: {
       ...authPaths,
       ...libraryPaths,
       ...librarianPaths
        }
    },
   apis: []
})

export function setupSwagger(app) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
}