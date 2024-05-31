import { Request, Response } from "express";
import productService from "../services/productService";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res
      .status(500)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
};
const getAllProductsPages = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const offset = (page - 1) * limit;

    const { rows, count } = await productService.getProductsPages(
      offset,
      limit
    );

    res.status(200).json({
      total: count,
      page: page,
      limit: limit,
      data: rows,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(
      parseInt(req.params.id, 10)
    );
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
};

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res
      .status(400)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.updateProduct(
      parseInt(req.params.id, 10),
      req.body
    );
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res
      .status(400)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const success = await productService.deleteProduct(
      parseInt(req.params.id, 10)
    );
    if (success) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: (err as Error).message || "An unknown error occurred" });
  }
};

export default {
  getAllProducts,
  getAllProductsPages,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
