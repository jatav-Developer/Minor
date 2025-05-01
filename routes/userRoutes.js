const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const User = require("../models/user");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");

router.get("/user/dashboard", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.render("userDashboard", { user });
});


module.exports = router;