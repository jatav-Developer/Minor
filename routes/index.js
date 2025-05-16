const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async(req, res) => {
  try {
      const products = await Product.find().limit(5);
      res.render('home', { products });
    } catch (err) {
      res.status(500).send('Error fetching products');
    }
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Save the message or send an email to support (You can use a service like nodemailer)
  console.log("Message received from:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Send confirmation or redirect
  res.redirect("/thank-you");
});

router.get("/thank-you", (req, res) => {
  res.render("thank-you");
});

module.exports = router;