const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");

// Admin Dashboard Route
router.get("/admin/dashboard", isLoggedIn, isAdmin, async (req, res) => {
  const products = await Product.find({});
  res.render("adminDashboard", { products });
});

module.exports = router;
