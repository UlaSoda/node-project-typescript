import { Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Company from '../models/companyModel';
import { INTEGER, STRING } from 'sequelize';

@Table({
  timestamps: false, // 禁用 createdAt 和 updatedAt
})
export default class Product extends Model<Product> {
  @PrimaryKey
  @Column({
    field: 'name', // 資料表欄位名稱
  })
  name!: string;

  @Column
  description!: string;

  @Column
  price!: number;

  @ForeignKey(() => Company)
  @Column({
    type: STRING,
    allowNull: true, // 外鍵允許為 null
  })
  company!: string;

  @BelongsTo(() => Company)
  companyDetails!: Company;
}