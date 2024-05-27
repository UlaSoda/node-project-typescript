import { Product, ProductModel } from '../models/productModel';

export class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel();
  }

  getAllProducts(): Product[] {
    return this.productModel.getAll();
  }

  getProductById(id: number): Product | undefined {
    return this.productModel.getById(id);
  }

  createProduct(product: Omit<Product, 'id'>): Product {
    return this.productModel.create(product);
  }

  updateProduct(id: number, product: Omit<Product, 'id'>): Product | undefined {
    return this.productModel.update(id, product);
  }

  deleteProduct(id: number): boolean {
    return this.productModel.delete(id);
  }
}