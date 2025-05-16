// utils/gemini.js
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});



async function getDietSuggestion(prompt) {
  try {
    
    const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
    
    
    return result.text;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Sorry, I couldn't generate a suggestion at the moment.";
  }
}

module.exports = getDietSuggestion;

