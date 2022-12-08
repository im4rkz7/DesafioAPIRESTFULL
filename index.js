const express = require("express");
const { Router } = express;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let products = [];
const PORT = 8080;

const productRouter = Router();

// Return all products.
productRouter.get("/", (req, res) => res.json(products));

// Return product by id.
productRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  // Validate id.
  if (!idValid(id)) {
    res.status(400).json({ error: "Producto no encontrado" });
    return;
  }

  const productFilter = products.find((product) => product.id === parseInt(id));

  res.status(200).json({ product: productFilter });
});

// Add product.
productRouter.post("/", (req, res) => {
  const id = products ? products.length + 1 : 1;
  const productToAdd = { ...req.body, id };

  products.push(productToAdd);

  res.status(200).json({ productToAdd });
});

// Update product by id.
productRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { product } = req.body;

  // Validate id.
  if (!idValid(id)) {
    res.status(400).json({ error: "Producto no encontrado" });
    return;
  }

  const previous = products[id - 1];
  products[id - 1] = { ...product, id: parseInt(id) };

  res.json({ productUpdate: product, previous });
});

// Delete product by id.
productRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Validate id.
  if (!idValid(id)) {
    res.status(400).json({ error: "Producto no encontrado" });
    return;
  }

  const productoToDelete = products[id - 1];

  products = products.filter((product) => product.id !== parseInt(id));
  updateId();
  res.json({ productoToDelete, productsUpdate: products });
});

app.use("/api/productos", productRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Validate id.
const idValid = (id) => {
  const idParseado = parseInt(id);

  // Validate that the id is a number.
  if (isNaN(id)) {
    return false;
  }

  // Validate that the id is in range.
  if (idParseado > products.length || idParseado <= 0) {
    return false;
  }

  return true;
};

// Update products id.
const updateId = () => {
  for (let i = 0; i < products.length; i++) {
    products[i].id = i + 1;
  }
};
