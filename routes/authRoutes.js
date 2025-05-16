const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Product = require('../models/product');

// SIGNUP - GET
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

// SIGNUP - POST
router.post("/signup", async (req, res) => {
  const { fullName, age, gender, phone, address, username, email, password } = req.body;

  try {
    const user = new User({ 
      fullName,
      age,
      gender,
      phone,
      address,
      username,
      email,
      password, 
    });
    await user.save();

    // Auto login after signup
    req.session.userId = user._id;
    req.session.isAdmin = user.isAdmin;
    // 👇 Redirect based on role
    if (user.isAdmin) {
      res.redirect("/admin/dashboard");
    } else {
      res.redirect("/user/dashboard");
    }

  } catch (err) {
    console.error(err);
    res.send("Error creating user");
  }
});

// LOGIN - GET
router.get("/login", (req, res) => {
  res.render("auth/login");
});

// LOGIN - POST
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).populate('cart.productId');
  if (!user) return res.send("User not found");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.send("Invalid credentials");

  req.session.userId = user._id;
  req.session.isAdmin = user.isAdmin;

  // 👇 Redirect based on role
  if (user.isAdmin) {
    res.redirect("/admin/dashboard");
  } else {
    res.redirect("/user/dashboard");
  }
  
});

// LOGOUT
router.get("/logout",async (req, res) => {
  req.session.destroy();
  try
  {
    const products = await Product.find().limit(5);
    res.render('home', { products });
  }
  catch(err)
  {
    res.status(500).send('Error fetching products');
  }
  
});

module.exports = router;
