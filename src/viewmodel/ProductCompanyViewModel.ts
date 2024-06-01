import Product from "../models/productModel";
import Company from '../models/companyModel';
interface ProductViewModel {
  productId: number;
  productName: string;
  description: string;
  price: number;
  companyName: string;
  companyLocation: string;
}

export const getProductCompany = async (): Promise<ProductViewModel[]> => {
  const products = await Product.findAll({
    include: [Company],
  });

  return products.map(product => ({
    productId: product.id,
    productName: product.name,
    description: product.description,
    price: product.price,
    companyName: product.companyDetails?.company,
    companyLocation: product.companyDetails?.location,
  }));
};