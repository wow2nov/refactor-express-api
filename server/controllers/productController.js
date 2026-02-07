import ProductService from "../services/productService.js";

const getAllProducts = async (req, res) => {
  const { keywords, category } = req.query;
  const products = await ProductService.getAllProducts(keywords, category);
  res.json({ data: products });
};

const getProductById = async (req, res) => {
  const product = await ProductService.getProductById(req.params.id);
  res.json({ data: product });
};

const createProduct = async (req, res) => {
  // Input DTO
  const { name, price, image, description, category } = req.body;

  const product = await ProductService.createProduct({
    name,
    price,
    image,
    description,
    category,
  });

  // Output DTO
  res.json({
    data: {
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
    },
  });
};

const updateProduct = async (req, res) => {
  const { name, price, image, description, category } = req.body;

  const product = await ProductService.updateProduct(req.params.id, {
    name,
    price,
    image,
    description,
    category,
  });

  res.json({
    data: {
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
    },
  });
};

const deleteProduct = async (req, res) => {
  await ProductService.deleteProduct(req.params.id);
  res.json({ message: "Product deleted successfully" });
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
