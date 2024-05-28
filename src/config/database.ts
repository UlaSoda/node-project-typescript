import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// 确保在其他代码之前尽早加载 .env 文件
dotenv.config({ path: './config/.env' });

// 调试环境变量
console.log('DB_SERVER:', process.env.DB_SERVER);

const sequelize = new Sequelize(
  process.env.DB_DATABASE as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT as string, 10),
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true, // Use this if you're on Windows Azure
      },
    },
  }
);

export default sequelize;
