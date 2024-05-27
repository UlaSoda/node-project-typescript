import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import swaggerDefinition from './swaggerDefinition';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API application with Swagger',
    },
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // 文件路径，根据项目实际情况调整
};

// const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
};
