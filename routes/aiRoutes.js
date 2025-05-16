const express = require("express");
const router = express.Router();
const getDietSuggestion = require("../utils/gemini");
const { calculateBMR, calculateTDEE, getGoalCalories } = require("../utils/healthUtils");
const User = require("../models/user");

router.get('/searchUsingAi', (req, res) => {
  res.render('searchUsingAi');
});

router.post("/diet-suggestion", async (req, res) => {
  const user = await User.findById(req.session.userId);
  const goal = user.healthGoal || "Maintain";
  const age = user.age;
  const gender = user.gender;
  const allergies = user.allergies || "none";
  const prompt = `
Suggest a full day healthy diet plan for a ${age}-year-old ${gender} with goal: ${goal}. 
Avoid any food that includes: ${allergies || 'none'}.Return the result as a JavaScript object in the following format:
  {
    breakfast: [...],
    lunch: [...],
    dinner: [...]
  };Return only the JSON object without code formatting or variable assignment — just plain JSON.
`;

 
    // Calculate BMR and TDEE
    const bmr = calculateBMR(user.gender, user.weight, user.height, user.age);
    const tdee = calculateTDEE(bmr, user.activityLevel);
  
    // Get goal-calorie target
    const goalCalories = getGoalCalories(tdee, user.healthGoal);
  try {

    const suggestion = await getDietSuggestion(prompt);
    const dietPlan = JSON.parse(suggestion.replace(/```json|```/g, ''));
    res.render("dietResult", { 
      goal,
    targetCalories: tdee,
    dietPlan });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to get AI diet suggestion");
  }
});

module.exports = router;
