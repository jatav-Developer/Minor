const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const User = require("../models/user");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");
const { calculateBMR, calculateTDEE, getGoalCalories } = require("../utils/healthUtils");
const getDietSuggestion = require("../utils/gemini");

router.get("/user/dashboard", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.render("userDashboard", { user });
});

router.get("/user/profile", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.render("viewProfile", { user });
});

router.get("/user/health-goal", isLoggedIn, async(req, res) => {
  const user = await User.findById(req.session.userId);
  res.render("setHealthGoal", { user });
});

router.post("/user/health-goal", isLoggedIn, async (req, res) => {
  const { healthGoal, activityLevel,height,weight,gender,age,dietType,foodPreference,medicalhistory} = req.body;
  await User.findByIdAndUpdate(req.session.userId, { healthGoal, activityLevel,height,weight,gender,age,dietType,foodPreference,medicalhistory});
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

Based on the above information, generate a personalized:
1. Full-day diet plan (breakfast, lunch, dinner, snacks) using ${user.dietType} food and keeping a ${user.foodPreference} Indian-style taste.
2. Daily routine with timings for wake-up, meals, workout, and sleep.
3. Some simple tips to achieve the goal faster (in 3 bullet points).

Keep the language clear and include common Indian foods (e.g., poha, dal, roti, sabzi, idli, etc.).
Calories for each meal should be approximate.
Return the result as a JavaScript object in the following format:
{

  "personalizedPlan": {

    "fullDayDietPlan": {

      "breakfast": [

        {

          "option": "string", // 

          "description": "string", 

          "approxCalories": "string" 

        },

        // ... more breakfast options (array of objects)

      ],

      "midMorningSnack": [

        {

          "option": "string",

          "description": "string",

          "approxCalories": "string"

        },

        // ... more mid-morning snack options

      ],

      "lunch": [

        {

          "option": "string",

          "description": "string",

          "approxCalories": "string"

        },

        // ... more lunch options

      ],

      "eveningSnack": [

        {

          "option": "string",

          "description": "string",

          "approxCalories": "string"

        },

        // ... more evening snack options

      ],

      "dinner": [

        {

          "option": "string",

          "description": "string",

          "approxCalories": "string"

        },

        // ... more dinner options

      ]

    },

    "dailyRoutine": {

      "wakeUp": "string", // eg. 6:00 - 6:30

      "breakfastTime": "string",

      "midMorningSnackTime": "string",

      "lunchTime": "string",

      "workoutTime": "string",

      "eveningSnackTime": "string",

      "dinnerTime": "string",

      "sleepTime": "string"

    },

    "tipsForFasterGoalAchievement": [

      "string", // 

      // ... more tips (array of strings)

    ]

  }

};
 in json`;
   
      // Calculate BMR and TDEE
      const bmr = calculateBMR(user.gender, user.weight, user.height, user.age);
      const tdee = calculateTDEE(bmr, user.activityLevel);
    
      // Get goal-calorie target
      const goalCalories = getGoalCalories(tdee, user.healthGoal);
    try {
  
      const suggestion = await getDietSuggestion(prompt);    
      const dietPlan = JSON.parse(suggestion.replace(/```json|```javasript|```/g, ''));
      
      res.render("dietResult", { personalizedPlan: dietPlan.personalizedPlan });
    } catch (err) {
      console.error(err);
      res.status(500).send("Failed to get AI diet suggestion");
    }
});

router.get("/exercise/suggest", isLoggedIn, async (req, res) => {
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
  Give a 7-day goal-based workout split with exercises. Mention rest days, include tips.
  in the following format:
  {
  "workoutPlan": {
    "goal": "Overall goal of workout plan",
    "split": [
      "Monday: Focus area",
      "Tuesday: Focus area",
      "... up to Sunday"
    ],
    "detailedPlan": {
      "Monday": {
        "focus": "Body parts focused on",
        "warmUp": "Short warm-up description",
        "exercises": [
          {
            "name": "Exercise Name",
            "sets": 0,
            "reps": "0-0 OR to failure",
            "duration": "Optional (for plank, etc.)"
          }
        ],
        "coolDown": "Cool-down description"
      },
      "...Repeat for each day..."
    },
    "tipsForMuscleGain": [
      {
        "title": "Tip title",
        "details": "Detailed advice"
      }
    ],
    "note": "Final summary or motivation note"
  }
}

  in json.
  `;
  try {
   
    const suggestion = await getDietSuggestion(prompt);    
    const exerciseSuggestion = JSON.parse(suggestion.replace(/```json|```javasript|```/g, ''));        
    res.render("suggestExercise", { data:exerciseSuggestion });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to get AI diet suggestion");
  }

});

module.exports = router;