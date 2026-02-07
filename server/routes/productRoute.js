import { Router } from "express";
import ProductController from "../controllers/productController.js";
import ProductValidation from "../middlewares/productvalidation.js";

const router = Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);

router.post(
  "/",
  ProductValidation.validateProduct,
  ProductController.createProduct
);

router.put(
  "/:id",
  ProductValidation.validateProduct,
  ProductController.updateProduct
);

router.delete("/:id", ProductController.deleteProduct);

export default router;
