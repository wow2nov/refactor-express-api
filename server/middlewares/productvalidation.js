const validateProduct = (req, res, next) => {
    const { name, price, image, description, category } = req.body;
  
    if (!name || typeof name !== "string") {
      return res.status(400).json({ message: "Invalid name" });
    }
  
    if (typeof price !== "number" || price <= 0) {
      return res.status(400).json({ message: "Invalid price" });
    }
  
    if (!image || typeof image !== "string") {
      return res.status(400).json({ message: "Invalid image" });
    }
  
    if (
      !description ||
      typeof description !== "string" ||
      description.length < 10
    ) {
      return res.status(400).json({ message: "Invalid description" });
    }
  
    if (!category || typeof category !== "string") {
      return res.status(400).json({ message: "Invalid category" });
    }
  
    next();
  };
  
  export default { validateProduct };
  