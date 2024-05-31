import express, { Request, Response } from "express";
import helloRoutes from "./routes/helloRoutes";
import productRoutes from "./routes/productRoutes";
// import { setupSwagger } from './setupSwagger';
import sequelize from "./config/database";
import dotenv from "dotenv";

import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("../swagger-output.json");

// 指定 .env 文件的路径
dotenv.config({ path: "./config/.env" });

// 调试路径和环境变量
console.log("Working directory:", process.cwd());
console.log("DB_SERVER:", process.env.DB_SERVER);

const app = express();
const port = process.env.PORT || 3000;

// 配置 express.json() 中間件以解析 JSON 請求體
app.use(express.json());

// 使用 hello 路由
app.use("/api/hello", helloRoutes);
// 使用 product 路由
app.use("/api/products", productRoutes);
// 设置 Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 重定向根路径到 /api-docs
app.get("/", (req, res) => {
  // #swagger.ignore = true
  res.redirect("/api-docs");
});

// 同步数据库
sequelize
  .sync() // `force: true` 会先删除已存在的表，然后再创建
  // sequelize.sync({ force: true })  // `force: true` 会先删除已存在的表，然后再创建
  .then(() => {
    console.log("Database & tables created!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });
