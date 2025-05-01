const express = require('express');
const router = express.Router();
const User = require("../models/user");
const { isLoggedIn } = require("../middlewares/auth");

router.post("/add-to-cart/:id", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  const productId = req.params.id;

  const existingItem = user.cart.find(item => item.productId.equals(productId));
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    user.cart.push({ productId, quantity: 1 });
  }

  await user.save();
  res.redirect("/cart");
});

router.get("/cart", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId).populate("cart.productId");
  res.render("cart", { user });
});

// Update quantity in cart
router.post("/cart/update/:id", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  const productId = req.params.id;
  const newQty = parseInt(req.body.quantity);

  const item = user.cart.find(item => item.productId.equals(productId));
  if (item) {
    item.quantity = newQty > 0 ? newQty : 1;
  }

  await user.save();
  res.redirect("/cart");
});

// Remove item from cart
router.post("/cart/remove/:productId", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  const productId = req.params.productId;

  user.cart = user.cart.filter(item => item.productId.toString() !== productId);
  await user.save();

  res.redirect("/cart");
});


module.exports = router;