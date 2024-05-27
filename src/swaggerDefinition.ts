// src/swaggerDefinition.ts

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'This is a sample API with Swagger documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: '開發用 server',
      },
      // Add additional servers here for different environments
    ],
    tags: [
      {
        name: 'Products',
        description: 'API endpoints for managing products',
      },
      // Add additional tags for different parts of your API
    ],
    paths: {
      '/api/products': {
        get: {
          summary: '取得所有products',
          tags: ['Products'],
          responses: {
            200: {
              description: 'List of products',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        id: { type: 'integer', example: 1 },
                        name: { type: 'string', example: 'Product A' },
                        description: { type: 'string', example: 'This is product A' },
                        price: { type: 'number', example: 9.99 },
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: 'Products not found',
            },
          },
        },
        post: {
          summary: '新增product',
          tags: ['Products'],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: { type: 'string', example: 1 },
                    description: { type: 'string', example: 'This is product A'  },
                    price: { type: 'number', example: 9.99 },
                  },
                  required: ['name', 'price'],
                },
              },
            },
          },
          responses: {
            201: {
              description: 'Product created successfully',
            },
            400: {
              description: 'Invalid data provided',
            },
          },
        },
      },
      '/api/products/{id}': {
        get: {
          summary: '使用ID取得指定product',
          tags: ['Products'],
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: {
                type: 'integer',
              },
              description: 'The product ID',
            },
          ],
          responses: {
            200: {
              description: 'A single product',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      name: { type: 'string' },
                      description: { type: 'string' },
                      price: { type: 'number' },
                    },
                  },
                },
              },
            },
            404: {
              description: 'Product not found',
            },
          },
        },
        put: {
          summary: '使用ID更新指定product',
          tags: ['Products'],
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: {
                type: 'integer',
              },
              description: 'The product ID',
            },
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    description: { type: 'string' },
                    price: { type: 'number' },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'Product updated successfully',
            },
            400: {
              description: 'Invalid data provided',
            },
            404: {
              description: 'Product not found',
            },
          },
        },
        delete: {
          summary: '使用ID刪除指定product',
          tags: ['Products'],
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: {
                type: 'integer',
              },
              description: 'The product ID',
            },
          ],
          responses: {
            204: {
              description: 'Product deleted successfully',
            },
            404: {
              description: 'Product not found',
            },
          },
        },
      },
    },
  };
  
  export default swaggerDefinition;
  