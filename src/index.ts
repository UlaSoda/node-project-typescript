import express, { Request, Response } from 'express';
import helloRoutes from './routes/helloRoutes';

const app = express();
const port = process.env.PORT || 3000;

// 配置 express.json() 中間件以解析 JSON 請求體
app.use(express.json());


// 使用 hello 路由
app.use('/api/hello', helloRoutes);

app.post('/data', (req: Request, res: Response) => {
  // 直接訪問 req.body 中的 JSON 數據
  const data = req.body;
  res.json({
    message: 'Data received successfully',
    receivedData: data,
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
