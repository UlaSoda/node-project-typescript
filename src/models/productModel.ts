export interface Product {
  /**
   * product唯一碼
   */
  id: number;
  /**
   * 名稱
   */
  name: string;
  /**
   * 描述
   */
  description: string;
  /**
   * 價格
   */
  price: number;
}
export class ProductModel {
  private products: Product[] = [];
  private currentId = 1;

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  create(product: Omit<Product, 'id'>): Product {
    const newProduct = { ...product, id: this.currentId++ };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, product: Omit<Product, 'id'>): Product | undefined {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...product, id };
      return this.products[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
