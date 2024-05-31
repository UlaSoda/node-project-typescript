import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "Products", // 与数据库中的表名称对应
    timestamps: false,
  }
);

export default Product;
