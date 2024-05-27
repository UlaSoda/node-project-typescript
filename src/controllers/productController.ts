import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public getAllProducts = (req: Request, res: Response): void => {
    const products = this.productService.getAllProducts();
    res.json(products);
  }

  public getProductById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const product = this.productService.getProductById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }

  public createProduct = (req: Request, res: Response): void => {
    const product = req.body;
    const newProduct = this.productService.createProduct(product);
    res.status(201).json(newProduct);
  }

  public updateProduct = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const product = req.body;
    const updatedProduct = this.productService.updateProduct(id, product);
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }

  public deleteProduct = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);
    const success = this.productService.deleteProduct(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }
}
