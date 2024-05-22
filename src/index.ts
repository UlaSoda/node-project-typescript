import express, { Request, Response } from 'express';
import helloRoutes from '../routes/hello';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 基本路由
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// 使用 hello 路由
app.use('/api/hello', helloRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
