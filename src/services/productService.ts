import Product from '../models/productModel';

class ProductService {
  async getAllProducts() {
    return await Product.findAll();
  }

  async getProductById(id: number) {
    return await Product.findByPk(id);
  }

  async createProduct(data: Product) {
    return await Product.create(data);
  }

  async updateProduct(id: number, data: { name?: string; description?: string; price?: number }) {
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