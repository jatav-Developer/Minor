// utils/healthUtils.js

function calculateBMR(gender, weight, height, age) {
    if (gender === "Male") {
      return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      return 10 * weight + 6.25 * height - 5 * age - 161;
    }
  }
  
  function calculateTDEE(bmr, activityLevel) {
    const activityMultipliers = {
      Sedentary: 1.2,
      Moderate: 1.55,
      Active: 1.75,
      VeryActive: 1.9
    };
    return bmr * (activityMultipliers[activityLevel] || 1.2); // Default to sedentary if not matched
  }
  
  function getGoalCalories(tdee, goal) {
    switch (goal) {
      case "Lose Weight":
        return tdee - 500;
      case "Gain Muscle":
        return tdee + 300;
      case "Maintain":
      default:
        return tdee;
    }
  }
  
  module.exports = {
    calculateBMR,
    calculateTDEE,
    getGoalCalories
  };
  