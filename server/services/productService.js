import ProductRepository from "../repositories/productRepository.js";

const getAllProducts = async (keywords, category) => {
  const query = {};

  if (keywords) query.name = new RegExp(keywords, "i");
  if (category) query.category = new RegExp(category, "i");

  return ProductRepository.findAll(query);
};

const getProductById = async (id) => {
  return ProductRepository.findById(id);
};

const createProduct = async (productData) => {
  return ProductRepository.create({
    ...productData,
    created_at: new Date(),
  });
};

const updateProduct = async (id, productData) => {
  return ProductRepository.update(id, {
    ...productData,
    modified_at: new Date(),
  });
};

const deleteProduct = async (id) => {
  return ProductRepository.delete(id);
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
