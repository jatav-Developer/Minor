const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const User = require("../models/user");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");
const { calculateBMR, calculateTDEE, getGoalCalories } = require("../utils/healthUtils");

router.get("/user/dashboard", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.render("userDashboard", { user });
});

router.get("/user/profile", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.render("viewProfile", { user });
});

router.get("/user/health-goal", isLoggedIn, (req, res) => {
  res.render("setHealthGoal", { user: req.user });
});

router.post("/user/health-goal", isLoggedIn, async (req, res) => {
  const { healthGoal, activityLevel,height,weight } = req.body;
  await User.findByIdAndUpdate(req.session.userId, { healthGoal, activityLevel,height,weight});
  res.redirect("/user/dashboard");
});

router.get("/user/health-track", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.render("health-track",{user});
});

router.get("/user/diet-plan", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);

  // Calculate BMR and TDEE
  const bmr = calculateBMR(user.gender, user.weight, user.height, user.age);
  const tdee = calculateTDEE(bmr, user.activityLevel);

  // Get goal-calorie target
  const goalCalories = getGoalCalories(tdee, user.healthGoal);
  

  // Suggest daily meal breakdown (60% Carbs, 25% Protein, 15% Fat)
  const carbs = (goalCalories * 0.6) / 4;  // 1g carbs = 4 calories
  const protein = (goalCalories * 0.25) / 4; // 1g protein = 4 calories
  const fat = (goalCalories * 0.15) / 9; // 1g fat = 9 calories

  // Render the page with suggested diet plan
  res.render("dietPlan", {
    user,
    goalCalories,
    carbs,
    protein,
    fat
  });
});

// routes/goalRoutes.js ya userRoutes.js me add karo
router.get("/diet-suggestion", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);

  const tdee = user.tdee || 2000; // fallback value
  const goal = user.healthGoal || "Maintain";

  const dietPlans = {
    "Lose Weight": {
      breakfast: ["Oats with almond milk", "Boiled egg", "Green tea"],
      lunch: ["Grilled chicken salad", "Brown rice"],
      dinner: ["Steamed veggies", "Lentil soup"]
    },
    "Gain Muscle": {
      breakfast: ["Scrambled eggs", "Peanut butter toast", "Banana"],
      lunch: ["Chicken breast", "Quinoa", "Veggies"],
      dinner: ["Paneer tikka", "Sweet potato"]
    },
    "Maintain": {
      breakfast: ["Upma", "Fruits", "Milk"],
      lunch: ["Roti + Dal + Veg", "Salad"],
      dinner: ["Khichdi", "Curd", "Sauteed veggies"]
    }
  };

  let selectedPlan = dietPlans["Maintain"];
  const goalKey = goal.trim().toLowerCase();

  if (goalKey === "lose weight") selectedPlan = dietPlans["Lose Weight"];
  else if (goalKey === "gain muscle") selectedPlan = dietPlans["Gain Muscle"];

  res.render("dietResult", {
    goal,
    targetCalories: tdee,
    dietPlan: selectedPlan
  });
});


module.exports = router;