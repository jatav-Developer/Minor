const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// GET: All Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    //  products = products.reverse();
    res.render('products', { products });
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
});

// GET: Form to Add New Product
router.get('/new', (req, res) => {
  res.render('addProduct');
});

// Search Route
router.get("/search", async (req, res) => {
  const query = req.query.q;
  if (!query || query.trim() === '') {
    // Agar query empty hai toh redirect to home (ya blank list)
    return res.redirect("/products"); // ya [] pass karo
  }

  const regex = new RegExp(query.trim(), 'i'); // trim() to remove extra spaces

  const products = await Product.find({
    $or: [
      { name: regex },
      { brand: regex },
      { category: regex }
    ]
  });
  
  res.render("products", { products });
});


// GET: Single Product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render('product', { product });
  } catch (err) {
    res.status(404).send('Product not found');
  }
});


// POST: Add New Product
router.post('/', async (req, res) => {
  try {
    const {
      name,
      brand,
      category,
      image,
      price,
      quantity,
      ingredients,
      benefits,
      usage,
      sideEffects,
      warnings,
      certifications,
      availabilityLinks,
      inStock
    } = req.body;

    const newProduct = new Product({
      name,
      brand,
      category,
      image,
      price,
      quantity,
      ingredients: ingredients.split(',').map(i => i.trim()),
      benefits: benefits.split(',').map(b => b.trim()),
      usage,
      sideEffects: sideEffects.split(',').map(s => s.trim()),
      warnings: warnings.split(',').map(w => w.trim()),
      certifications: certifications.split(',').map(c => c.trim()),
      availabilityLinks: availabilityLinks.split(',').map(l => l.trim()),
      inStock: inStock === 'true' // Convert string to boolean
    });

    await newProduct.save();
    res.redirect('/products');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error saving product');
  }
});


// Filter by category
router.get("/category/:cat", async (req, res) => {
  const category = req.params.cat;

  try {
    const products = await Product.find({ category });
    res.render("products", { products });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong.");
  }
});

module.exports = router;
