import express, { Request, Response } from 'express';
import helloRoutes from './routes/helloRoutes';
import productRoutes from './routes/productRoutes';
import { setupSwagger } from './swagger';

const app = express();
const port = process.env.PORT || 3000;

// 配置 express.json() 中間件以解析 JSON 請求體
app.use(express.json());


// 使用 hello 路由
app.use('/api/hello', helloRoutes);
// 使用 product 路由
app.use('/api/products', productRoutes);

// 设置 Swagger
setupSwagger(app);

// 重定向根路径到 /api-docs
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
