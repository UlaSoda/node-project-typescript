import { Table, Column, Model, PrimaryKey, HasMany } from 'sequelize-typescript';
import Product from "../models/productModel";

@Table({
  timestamps: false, // 禁用 createdAt 和 updatedAt
})
export default class Company extends Model<Company> {
  @PrimaryKey
  @Column
  company!: string;

  @Column
  location!: string;

  @HasMany(() => Product)
  products!: Product[];
}