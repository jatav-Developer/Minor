// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email:{ type: String, required: true },
  fullName: String,
  age: Number,
  gender: String,
  phone: String,
  address: String,
  isAdmin: { type: Boolean, default: false },
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  weight: Number, // in kg
  height: Number, // in cm
  healthGoal: {
    type: String,
    enum: ["Lose Weight", "Maintain Weight", "Gain Muscle","Gain Weight","Athletic performance"],
    default: "Maintain Weight"
  },
  activityLevel: {
    type: String,
    enum: ["Sedentary", "Moderate", "Active"],
    default: "Moderate"
  },
  dietType: {
    type: String,
    enum: ["Vegetarian", "Non-Vegetarian","Mixed"],
    default: "Vegetarian"
  },
  foodPreference: {
    type: String,
    enum: ["Desi", "Modern", "Mixed"],
    default: "Desi"
  },
  medicalhistory:{
    type:String,
    enum: ["Healthy","digestion problem", "Diabetes", "kidney issues", "liver problems","PCOS","thyroid","allergies"],
    default: "Healthy"
  }
  
});

// Password hashing
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password
userSchema.methods.comparePassword = function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
