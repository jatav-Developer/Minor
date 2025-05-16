const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const User = require("../models/user");
const getDietSuggestion = require("../utils/gemini");

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

// GET: Form to Add New Product Using AI
router.get('/newai', (req, res) => {
  res.render('addProductUsingai1');
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

// POST: Add New Product
router.post('/ai', async (req, res) => {
  const {
      name,
      brand
    } = req.body;
    const prompt = `Give me detailed information about name: ${name} and brand: ${brand} in the following format:
    {
  name: '',
  brand: '',
  category: 'Supplement',
  image: '',  // Add a relevant image URL
  price: ,  // in INR
  quantity: '',  // e.g., '1000mg, 90 softgels'
  ingredients: [],
  benefits: [],
  usage: '',
  sideEffects: [],
  warnings: [],
  certifications: [],
  availabilityLinks: [],
  inStock: true
}
  Fill in realistic values. in json not use array`;
  try {
  
    const result = await getDietSuggestion(prompt);  
    const productInformation = JSON.parse(result.replace(/```json|```javasript|```/g, '')); 
    console.log(productInformation);
       
    res.render("addProductUsingai", { productInformation });
  } catch (err) {
    console.error(err);
    res.status(400).send('Error saving product');
  }
});

// POST: Search Product
router.post('/ai/search', async (req, res) => {
  const {
      name,
      brand
    } = req.body;
    const prompt = `detail information about product name:${name} and brand:${brand} in following format:
    {
  "productName": "string",                      // Product ka naam
  "description": "string",                      // Short description of the product
  "image": "string",                            //Provide a relevant product image URL
  "keyFeatures": ["string", "..."],             // Major selling points or features

  "typicalNutritionalInformationPerServing": {  // Serving ke hisaab se nutrition details
    "protein": "string",
    "bcaas": "string",
    "eaas": "string",
    "glutamicAcid": "string",
    "calories": "string",
    "proteinPercentagePerServing": "string"
  },

  "typicalIngredients": ["string", "..."],      // Ingredients list

  "potentialBenefits": ["string", "..."],       // Health and performance benefits

  "howToUse": ["string", "..."],                // Instructions for consumption

  "suitability": ["string", "..."],             // Target audience (who can use)

  "flavorVariations": ["string", "..."],        // Available flavors

  "certifications": ["string", "..."],          // Certifications by bodies/organizations

  "awards": ["string", "..."],                  // Awards won by the product

  "customerReviews": {
    "positive": [
      {
        "user": "string",                       // Reviewer username
        "comment": "string"                     // Positive review comment
      }
    ],
    "negative": [
      {
        "user": "string",                       // Reviewer username
        "comment": "string"                     // Negative review comment
      }
    ],
    "summary": "string"                         // Summary of customer feedback
  },

  "importantNote": "string"                     // Caution/extra info
} in json
`;
  try {
  
    const result = await getDietSuggestion(prompt);  
    const productInformation = JSON.parse(result.replace(/```json|```javasript|```/g, '')); 
       
    res.render("showProductInformation", { product :productInformation });
  } catch (err) {
    console.error(err);
    res.status(400).send('Error saving product');
  }
});

router.get("/suggest/products", async (req, res) => {
  const user = await User.findById(req.session.userId);
  const prompt = `
  User Details:
  - Gender: ${user.gender}
  - Age: ${user.age}
  - Weight: ${user.weight} kg
  - Height: ${user.height} cm
  - Health Goal: ${user.healthGoal}
  - Activity Level: ${user.activityLevel}
  - Diet Type: ${user.dietType} (Vegetarian or Non-Vegetarian)
  - Food Preference: ${user.foodPreference} (Desi, Modern, or Mixed)
  - Medical History: ${user.medicalhistory} 
  Based on this data, suggest health supplements or products.
  in the following format:
  {
  "suggestedSupplements": [  // Array of recommended supplements
    {
      "name": "string",          // Name of the supplement
      "description": "string",   // What it is and how it's used
      "reasoning": "string"      // Why it's being recommended
    }
  ],
  "importantConsiderations": [  // Array of key health/advice points
    "string"
  ],
  "recommendation": "string"     // Final summarized advice or action plan
}
  Keep the language simple and helpful. in json.
  `;
  try {
   
    const suggestion = await getDietSuggestion(prompt);    
    const productSuggestion = JSON.parse(suggestion.replace(/```json|```javasript|```/g, ''));        
    res.render("suggestProduct", { productSuggestion });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to get AI diet suggestion");
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
