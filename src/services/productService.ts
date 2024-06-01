import Product from "../models/productModel";
import { getProductCompany } from '../viewmodel/ProductCompanyViewModel';

class ProductService {
  async getAllProducts() {
    return await Product.findAll();
  }
  async getProductsPages(offset: number, limit: number) {
    return await Product.findAndCountAll({
      offset: offset,
      limit: limit,
    });
  }
  async getAllProductCompany() {
    return await getProductCompany();
  }
  async getProductById(id: number) {
    return await Product.findByPk(id);
  }

  async createProduct(data: Product) {
    return await Product.create(data);
  }

  async updateProduct(
    id: number,
    data: { name?: string; description?: string; price?: number }
  ) {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update(data);
      return product;
    }
    return null;
  }

  async deleteProduct(id: number) {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      return true;
    }
    return false;
  }
}

export default new ProductService();
