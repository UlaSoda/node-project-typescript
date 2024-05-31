import swaggerAutogen from "swagger-autogen";

const swaggerAutogenInstance = swaggerAutogen();

const doc = {
  info: {
    title: "Sample API",
    description: "Description",
  },
  host: "localhost:3000",
  components: {
    schemas: {
      Product: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 19 },
          name: { type: 'string', example: 'Product 2' },
          description: { type: 'string', example: 'Description for Product 2' },
          price: { type: 'number', format: 'float', example: 20.99 },
        },
      },
    },
  },
  apis: [
    './src/routes/productRoutes.ts',
  ],
};

const outputFile = "./swagger-output.json";
const routes = ["./src/app.ts"];

swaggerAutogenInstance(outputFile, routes, doc);