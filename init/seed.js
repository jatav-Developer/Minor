const mongoose = require('mongoose');
const Product = require('../models/product');

mongoose.connect('mongodb://localhost:27017/healthProducts');

const seedProducts = [
  {
    name: 'Protein Powder',
    brand: 'MuscleX',
    category: 'Supplement',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s',
    price: 1499,
    quantity: '1kg',
    ingredients: ['Whey Protein', 'BCAAs', 'Creatine'],
    benefits: ['Muscle growth', 'Recovery', 'Strength'],
    usage: 'Take 1 scoop after workout with milk or water.',
    sideEffects: ['Bloating'],
    warnings: ['Not for children under 12'],
    certifications: ['FSSAI', 'ISO'],
    availabilityLinks: ['https://example.com/product1'],
    inStock: true
  },
  {
    name: 'Vitamin C',
    brand: 'NutriCare',
    category: 'Vitamin',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQAv8dwgXxbP14tp6uPNGNhVWy7Ae-l_QkQ&s',
    price: 299,
    quantity: '60 tablets',
    ingredients: ['Vitamin C', 'Zinc'],
    benefits: ['Boosts immunity', 'Antioxidant'],
    usage: '1 tablet daily after meal.',
    sideEffects: [],
    warnings: ['Do not exceed daily dose'],
    certifications: ['FSSAI'],
    availabilityLinks: ['https://example.com/product2'],
    inStock: true
  },
  {
    name: 'Herbal Green Tea',
    brand: 'OrganicFit',
    category: 'Beverage',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIJ0n9h1Jcetj8ZYeyVpTEJF7JMmNcsbEbg&s',
    price: 499,
    quantity: '250g',
    ingredients: ['Green Tea', 'Lemongrass', 'Tulsi'],
    benefits: ['Detox', 'Weight loss', 'Improves digestion'],
    usage: '1 tsp in hot water twice a day.',
    sideEffects: [],
    warnings: [],
    certifications: ['Organic India Certified'],
    availabilityLinks: ['https://example.com/product3'],
    inStock: false
  },
  {
    name: 'Omega-3 Fish Oil',
    brand: 'HealthVibe',
    category: 'Supplement',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s',
    price: 899,
    quantity: '1000mg, 90 softgels',
    ingredients: ['Fish Oil', 'EPA', 'DHA'],
    benefits: ['Heart health', 'Joint support', 'Brain function'],
    usage: 'Take 1 softgel twice a day with meals.',
    sideEffects: ['Fishy burps'],
    warnings: ['Consult doctor if pregnant'],
    certifications: ['FSSAI', 'GMP'],
    availabilityLinks: ['https://example.com/product4'],
    inStock: true
  },
  {
    name: 'Ashwagandha Capsules',
    brand: 'HerbalRoot',
    category: 'Ayurvedic',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s',
    price: 399,
    quantity: '60 capsules',
    ingredients: ['Ashwagandha Extract'],
    benefits: ['Stress relief', 'Energy boost', 'Improves sleep'],
    usage: '1 capsule twice daily after meals.',
    sideEffects: [],
    warnings: ['Avoid in hyperthyroidism'],
    certifications: ['Ayush Certified'],
    availabilityLinks: ['https://example.com/product5'],
    inStock: true
  },
  {
    name: 'Multivitamin Gummies',
    brand: 'VitaJoy',
    category: 'Vitamin',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s',
    price: 599,
    quantity: '30 gummies',
    ingredients: ['Vitamin A', 'C', 'D', 'E', 'Zinc'],
    benefits: ['Daily nutrition', 'Immunity', 'Bone health'],
    usage: 'Chew 1 gummy daily',
    sideEffects: ['Mild nausea (rare)'],
    warnings: ['Keep away from children'],
    certifications: ['FSSAI'],
    availabilityLinks: ['https://example.com/product6'],
    inStock: false
  },
  {
    "name": "Ancient DHA Ayurvedic",
    "brand": "OrganicFit",
    "category": "Ayurvedic",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1470,
    "quantity": "250g",
    "ingredients": [
      "DHA",
      "Ashwagandha"
    ],
    "benefits": [
      "Brain function",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [
      "Consult doctor if pregnant"
    ],
    "certifications": [
      "ISO",
      "GMP"
    ],
    "availabilityLinks": [
      "https://example.com/product1"
    ],
    "inStock": true
  },
  {
    "name": "Earth Magnesium Herbal",
    "brand": "HealthVibe",
    "category": "Herbal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1119,
    "quantity": "1kg",
    "ingredients": [
      "Magnesium",
      "Tulsi"
    ],
    "benefits": [
      "Stress relief",
      "Energy",
      "Detox"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Do not exceed daily dose"
    ],
    "certifications": [
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product2"
    ],
    "inStock": false
  },
  {
    "name": "Natural Biotin Beverage",
    "brand": "HerbalRoot",
    "category": "Beverage",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 637,
    "quantity": "500ml",
    "ingredients": [
      "Biotin",
      "Zinc",
      "Vitamin C",
      "Moringa"
    ],
    "benefits": [
      "Energy",
      "Heart health",
      "Muscle growth"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [],
    "certifications": [
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product3"
    ],
    "inStock": false
  },
  {
    "name": "Whey DHA Protein",
    "brand": "NatureWell",
    "category": "Protein",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 832,
    "quantity": "250g",
    "ingredients": [
      "DHA",
      "Omega-3"
    ],
    "benefits": [
      "Brain function",
      "Bone health",
      "Antioxidant"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "ISO"
    ],
    "availabilityLinks": [
      "https://example.com/product4"
    ],
    "inStock": true
  },
  {
    "name": "Pure Iron Protein",
    "brand": "FitLife",
    "category": "Protein",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 221,
    "quantity": "60 tablets",
    "ingredients": [
      "Iron",
      "Whey Protein",
      "Ginger",
      "BCAAs"
    ],
    "benefits": [
      "Weight loss",
      "Antioxidant",
      "Muscle growth"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [
      "Consult doctor if pregnant"
    ],
    "certifications": [
      "Ayush Certified",
      "ISO"
    ],
    "availabilityLinks": [
      "https://example.com/product5"
    ],
    "inStock": true
  },
  {
    "name": "Plus Creatine Vitamin",
    "brand": "PowerPlus",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 918,
    "quantity": "500ml",
    "ingredients": [
      "Creatine",
      "Zinc"
    ],
    "benefits": [
      "Antioxidant",
      "Brain function",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [
      "Avoid in hyperthyroidism"
    ],
    "certifications": [
      "GMP",
      "Ayush Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product6"
    ],
    "inStock": true
  },
  {
    "name": "Herbal Moringa Beverage",
    "brand": "HerbalRoot",
    "category": "Beverage",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2117,
    "quantity": "60 tablets",
    "ingredients": [
      "Moringa",
      "Turmeric",
      "Iron",
      "Whey Protein"
    ],
    "benefits": [
      "Energy",
      "Joint support",
      "Muscle growth"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "GMP",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product7"
    ],
    "inStock": false
  },
  {
    "name": "Organic DHA Beverage",
    "brand": "NatureWell",
    "category": "Beverage",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1855,
    "quantity": "1kg",
    "ingredients": [
      "DHA",
      "Calcium",
      "Whey Protein"
    ],
    "benefits": [
      "Joint support",
      "Antioxidant",
      "Better digestion"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Consult doctor if pregnant"
    ],
    "certifications": [
      "ISO"
    ],
    "availabilityLinks": [
      "https://example.com/product8"
    ],
    "inStock": false
  },
  {
    "name": "Plus Vitamin C Vitamin",
    "brand": "NatureWell",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1390,
    "quantity": "60 tablets",
    "ingredients": [
      "Vitamin C",
      "Whey Protein",
      "Turmeric"
    ],
    "benefits": [
      "Antioxidant",
      "Stress relief",
      "Joint support"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Consult doctor if pregnant"
    ],
    "certifications": [
      "Organic Certified",
      "ISO"
    ],
    "availabilityLinks": [
      "https://example.com/product9"
    ],
    "inStock": false
  },
  {
    "name": "Daily Whey Protein Vitamin",
    "brand": "NatureWell",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1069,
    "quantity": "500ml",
    "ingredients": [
      "Whey Protein",
      "Calcium"
    ],
    "benefits": [
      "Heart health",
      "Bone health"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [],
    "certifications": [
      "Ayush Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product10"
    ],
    "inStock": true
  },
  {
    "name": "Natural Biotin Beverage",
    "brand": "OrganicFit",
    "category": "Beverage",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1436,
    "quantity": "500ml",
    "ingredients": [
      "Biotin",
      "EPA",
      "Whey Protein"
    ],
    "benefits": [
      "Stress relief",
      "Weight loss"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Consult doctor if pregnant"
    ],
    "certifications": [
      "ISO",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product11"
    ],
    "inStock": false
  },
  {
    "name": "Essential Tulsi Vitamin",
    "brand": "VitaJoy",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 756,
    "quantity": "90 capsules",
    "ingredients": [
      "Tulsi",
      "Creatine",
      "Green Tea"
    ],
    "benefits": [
      "Brain function",
      "Stress relief"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [],
    "certifications": [
      "Ayush Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product12"
    ],
    "inStock": false
  },
  {
    "name": "Herbal Creatine Beverage",
    "brand": "FitLife",
    "category": "Beverage",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1890,
    "quantity": "250g",
    "ingredients": [
      "Creatine",
      "Moringa",
      "Green Tea"
    ],
    "benefits": [
      "Weight loss",
      "Stress relief",
      "Brain function"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Avoid in hyperthyroidism"
    ],
    "certifications": [
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product13"
    ],
    "inStock": false
  },
  {
    "name": "Plus Ginger Vitamin",
    "brand": "NatureWell",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1761,
    "quantity": "1kg",
    "ingredients": [
      "Ginger",
      "Iron",
      "Zinc"
    ],
    "benefits": [
      "Bone health",
      "Weight loss",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [
      "Consult doctor if pregnant"
    ],
    "certifications": [
      "Ayush Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product14"
    ],
    "inStock": true
  },
  {
    "name": "Advanced EPA Supplement",
    "brand": "HealthVibe",
    "category": "Supplement",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 901,
    "quantity": "250g",
    "ingredients": [
      "EPA",
      "Whey Protein",
      "Omega-3",
      "Creatine"
    ],
    "benefits": [
      "Better digestion",
      "Detox",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "Organic Certified",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product15"
    ],
    "inStock": false
  },
  {
    "name": "Essential Creatine Vitamin",
    "brand": "NutriCare",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 487,
    "quantity": "250g",
    "ingredients": [
      "Creatine",
      "Whey Protein",
      "Zinc"
    ],
    "benefits": [
      "Stress relief",
      "Antioxidant",
      "Detox"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [],
    "certifications": [
      "GMP",
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product16"
    ],
    "inStock": false
  },
  {
    "name": "Pure Magnesium Protein",
    "brand": "FitLife",
    "category": "Protein",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1924,
    "quantity": "1kg",
    "ingredients": [
      "Magnesium",
      "Creatine"
    ],
    "benefits": [
      "Energy",
      "Brain function"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Do not exceed daily dose"
    ],
    "certifications": [
      "GMP"
    ],
    "availabilityLinks": [
      "https://example.com/product17"
    ],
    "inStock": true
  },
  {
    "name": "Rooted Calcium Ayurvedic",
    "brand": "PowerPlus",
    "category": "Ayurvedic",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 588,
    "quantity": "1000mg, 60 softgels",
    "ingredients": [
      "Calcium",
      "Moringa",
      "EPA",
      "Creatine"
    ],
    "benefits": [
      "Immunity boost",
      "Muscle growth",
      "Better digestion"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [],
    "certifications": [
      "Organic Certified",
      "GMP"
    ],
    "availabilityLinks": [
      "https://example.com/product18"
    ],
    "inStock": true
  },
  {
    "name": "Daily Iron Vitamin",
    "brand": "HealthVibe",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2199,
    "quantity": "500ml",
    "ingredients": [
      "Iron",
      "Green Tea"
    ],
    "benefits": [
      "Muscle growth",
      "Brain function",
      "Immunity boost"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [
      "Not for children under 12"
    ],
    "certifications": [
      "FSSAI",
      "GMP"
    ],
    "availabilityLinks": [
      "https://example.com/product19"
    ],
    "inStock": false
  },
  {
    "name": "Classic Calcium Ayurvedic",
    "brand": "NatureWell",
    "category": "Ayurvedic",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2045,
    "quantity": "500ml",
    "ingredients": [
      "Calcium",
      "Magnesium",
      "Ginger"
    ],
    "benefits": [
      "Brain function",
      "Joint support"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "Ayush Certified",
      "ISO"
    ],
    "availabilityLinks": [
      "https://example.com/product20"
    ],
    "inStock": false
  },
  {
    "name": "Plus Ashwagandha Vitamin",
    "brand": "HealthVibe",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1524,
    "quantity": "1000mg, 60 softgels",
    "ingredients": [
      "Ashwagandha",
      "Whey Protein",
      "EPA"
    ],
    "benefits": [
      "Joint support",
      "Detox"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "None"
    ],
    "warnings": [
      "Not for children under 12"
    ],
    "certifications": [
      "ISO"
    ],
    "availabilityLinks": [
      "https://example.com/product21"
    ],
    "inStock": true
  },
  {
    "name": "Whey EPA Protein",
    "brand": "ZenHerbs",
    "category": "Protein",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1112,
    "quantity": "60 tablets",
    "ingredients": [
      "EPA",
      "Whey Protein",
      "Ashwagandha",
      "BCAAs"
    ],
    "benefits": [
      "Better digestion",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product22"
    ],
    "inStock": true
  },
  {
    "name": "Nature EPA Herbal",
    "brand": "NutriCare",
    "category": "Herbal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1419,
    "quantity": "1000mg, 60 softgels",
    "ingredients": [
      "EPA",
      "Green Tea",
      "Magnesium",
      "Iron"
    ],
    "benefits": [
      "Muscle growth",
      "Detox",
      "Better digestion"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [
      "Consult doctor if pregnant"
    ],
    "certifications": [
      "Organic Certified",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product23"
    ],
    "inStock": true
  },
  {
    "name": "Nature Biotin Herbal",
    "brand": "PowerPlus",
    "category": "Herbal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1593,
    "quantity": "250g",
    "ingredients": [
      "Biotin",
      "Ashwagandha",
      "Green Tea",
      "EPA"
    ],
    "benefits": [
      "Energy",
      "Joint support",
      "Better digestion"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [
      "Not for children under 12"
    ],
    "certifications": [
      "ISO",
      "Ayush Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product24"
    ],
    "inStock": false
  },
  {
    "name": "Advanced Magnesium Supplement",
    "brand": "HerbalRoot",
    "category": "Supplement",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 716,
    "quantity": "60 tablets",
    "ingredients": [
      "Magnesium",
      "Moringa",
      "BCAAs",
      "Omega-3"
    ],
    "benefits": [
      "Muscle growth",
      "Weight loss"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Do not exceed daily dose"
    ],
    "certifications": [
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product25"
    ],
    "inStock": false
  },
  {
    "name": "Ancient Biotin Ayurvedic",
    "brand": "MuscleX",
    "category": "Ayurvedic",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 524,
    "quantity": "1kg",
    "ingredients": [
      "Biotin",
      "Magnesium",
      "Zinc",
      "Ashwagandha"
    ],
    "benefits": [
      "Joint support",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [
      "Not for children under 12"
    ],
    "certifications": [
      "Organic Certified",
      "Ayush Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product26"
    ],
    "inStock": true
  },
  {
    "name": "Advanced Green Tea Supplement",
    "brand": "VitaJoy",
    "category": "Supplement",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2337,
    "quantity": "250g",
    "ingredients": [
      "Green Tea",
      "Calcium",
      "DHA",
      "EPA"
    ],
    "benefits": [
      "Heart health",
      "Detox"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Not for children under 12"
    ],
    "certifications": [
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product27"
    ],
    "inStock": false
  },
  {
    "name": "Nature Zinc Herbal",
    "brand": "OrganicFit",
    "category": "Herbal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2350,
    "quantity": "1000mg, 60 softgels",
    "ingredients": [
      "Zinc",
      "Ginger",
      "Ashwagandha"
    ],
    "benefits": [
      "Antioxidant",
      "Bone health",
      "Weight loss"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "None"
    ],
    "warnings": [],
    "certifications": [
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product28"
    ],
    "inStock": false
  },
  {
    "name": "Vital Tulsi Vitamin",
    "brand": "NatureWell",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1576,
    "quantity": "1kg",
    "ingredients": [
      "Tulsi",
      "Omega-3",
      "Magnesium",
      "Biotin"
    ],
    "benefits": [
      "Antioxidant",
      "Stress relief",
      "Muscle growth"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "GMP",
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product29"
    ],
    "inStock": true
  },
  {
    "name": "Advanced Green Tea Supplement",
    "brand": "VitaJoy",
    "category": "Supplement",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 201,
    "quantity": "60 tablets",
    "ingredients": [
      "Green Tea",
      "Creatine"
    ],
    "benefits": [
      "Heart health",
      "Antioxidant",
      "Detox"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Do not exceed daily dose"
    ],
    "certifications": [
      "Organic Certified",
      "GMP"
    ],
    "availabilityLinks": [
      "https://example.com/product30"
    ],
    "inStock": true
  },
  {
    "name": "Earth Omega-3 Herbal",
    "brand": "FitLife",
    "category": "Herbal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1476,
    "quantity": "1000mg, 60 softgels",
    "ingredients": [
      "Omega-3",
      "Creatine"
    ],
    "benefits": [
      "Bone health",
      "Stress relief"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [],
    "certifications": [
      "Ayush Certified",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product31"
    ],
    "inStock": false
  },
  {
    "name": "Bulk Magnesium Protein",
    "brand": "HerbalRoot",
    "category": "Protein",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2407,
    "quantity": "90 capsules",
    "ingredients": [
      "Magnesium",
      "Calcium"
    ],
    "benefits": [
      "Detox",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "GMP",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product32"
    ],
    "inStock": true
  },
  {
    "name": "Bulk BCAAs Protein",
    "brand": "FitLife",
    "category": "Protein",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2017,
    "quantity": "60 tablets",
    "ingredients": [
      "BCAAs",
      "EPA"
    ],
    "benefits": [
      "Joint support",
      "Stress relief"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [
      "Do not exceed daily dose"
    ],
    "certifications": [
      "FSSAI",
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product33"
    ],
    "inStock": false
  },
  {
    "name": "Nature Magnesium Herbal",
    "brand": "MuscleX",
    "category": "Herbal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2151,
    "quantity": "250g",
    "ingredients": [
      "Magnesium",
      "Creatine"
    ],
    "benefits": [
      "Better digestion",
      "Joint support"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Do not exceed daily dose"
    ],
    "certifications": [
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product34"
    ],
    "inStock": false
  },
  {
    "name": "Lean Biotin Protein",
    "brand": "ZenHerbs",
    "category": "Protein",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1529,
    "quantity": "500ml",
    "ingredients": [
      "Biotin",
      "Zinc"
    ],
    "benefits": [
      "Immunity boost",
      "Weight loss",
      "Detox"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Avoid in hyperthyroidism"
    ],
    "certifications": [
      "Organic Certified",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product35"
    ],
    "inStock": false
  },
  {
    "name": "Ultra Green Tea Supplement",
    "brand": "PowerPlus",
    "category": "Supplement",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2410,
    "quantity": "1kg",
    "ingredients": [
      "Green Tea",
      "DHA",
      "Calcium"
    ],
    "benefits": [
      "Antioxidant",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Avoid in hyperthyroidism"
    ],
    "certifications": [
      "ISO",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product36"
    ],
    "inStock": true
  },
  {
    "name": "Lean BCAAs Protein",
    "brand": "HealthVibe",
    "category": "Protein",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1659,
    "quantity": "250g",
    "ingredients": [
      "BCAAs",
      "Whey Protein",
      "Creatine"
    ],
    "benefits": [
      "Immunity boost",
      "Weight loss"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [],
    "certifications": [
      "Ayush Certified",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product37"
    ],
    "inStock": false
  },
  {
    "name": "Advanced Moringa Supplement",
    "brand": "PowerPlus",
    "category": "Supplement",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 223,
    "quantity": "90 capsules",
    "ingredients": [
      "Moringa",
      "Vitamin C",
      "Biotin",
      "EPA"
    ],
    "benefits": [
      "Detox",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [
      "Consult doctor if pregnant"
    ],
    "certifications": [
      "Ayush Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product38"
    ],
    "inStock": false
  },
  {
    "name": "Organic Calcium Beverage",
    "brand": "PowerPlus",
    "category": "Beverage",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1402,
    "quantity": "250g",
    "ingredients": [
      "Calcium",
      "Creatine",
      "Iron",
      "BCAAs"
    ],
    "benefits": [
      "Heart health",
      "Immunity boost",
      "Weight loss"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Avoid in hyperthyroidism"
    ],
    "certifications": [
      "Organic Certified",
      "FSSAI"
    ],
    "availabilityLinks": [
      "https://example.com/product39"
    ],
    "inStock": false
  },
  {
    "name": "Daily Whey Protein Vitamin",
    "brand": "PowerPlus",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1823,
    "quantity": "1000mg, 60 softgels",
    "ingredients": [
      "Whey Protein",
      "Creatine",
      "Biotin"
    ],
    "benefits": [
      "Weight loss",
      "Stress relief"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [
      "Avoid in hyperthyroidism"
    ],
    "certifications": [
      "GMP"
    ],
    "availabilityLinks": [
      "https://example.com/product40"
    ],
    "inStock": false
  },
  {
    "name": "Ancient Omega-3 Ayurvedic",
    "brand": "HerbalRoot",
    "category": "Ayurvedic",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 812,
    "quantity": "60 tablets",
    "ingredients": [
      "Omega-3",
      "Ginger",
      "Magnesium",
      "BCAAs"
    ],
    "benefits": [
      "Heart health",
      "Muscle growth",
      "Joint support"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Consult doctor if pregnant"
    ],
    "certifications": [
      "GMP"
    ],
    "availabilityLinks": [
      "https://example.com/product41"
    ],
    "inStock": false
  },
  {
    "name": "Plus Vitamin C Vitamin",
    "brand": "FitLife",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2005,
    "quantity": "90 capsules",
    "ingredients": [
      "Vitamin C",
      "Ginger",
      "Whey Protein",
      "Moringa"
    ],
    "benefits": [
      "Detox",
      "Brain function"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Do not exceed daily dose"
    ],
    "certifications": [
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product42"
    ],
    "inStock": true
  },
  {
    "name": "Classic Magnesium Ayurvedic",
    "brand": "OrganicFit",
    "category": "Ayurvedic",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1133,
    "quantity": "90 capsules",
    "ingredients": [
      "Magnesium",
      "EPA",
      "Omega-3"
    ],
    "benefits": [
      "Joint support",
      "Weight loss",
      "Immunity boost"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [],
    "warnings": [
      "Avoid in hyperthyroidism"
    ],
    "certifications": [
      "FSSAI",
      "ISO"
    ],
    "availabilityLinks": [
      "https://example.com/product43"
    ],
    "inStock": false
  },
  {
    "name": "Herbal Zinc Beverage",
    "brand": "OrganicFit",
    "category": "Beverage",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1711,
    "quantity": "500ml",
    "ingredients": [
      "Zinc",
      "BCAAs",
      "Vitamin C"
    ],
    "benefits": [
      "Brain function",
      "Energy"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "GMP",
      "ISO"
    ],
    "availabilityLinks": [
      "https://example.com/product44"
    ],
    "inStock": true
  },
  {
    "name": "Pro Iron Supplement",
    "brand": "PowerPlus",
    "category": "Supplement",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 523,
    "quantity": "1000mg, 60 softgels",
    "ingredients": [
      "Iron",
      "Ginger",
      "Whey Protein",
      "BCAAs"
    ],
    "benefits": [
      "Brain function",
      "Weight loss"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "GMP"
    ],
    "availabilityLinks": [
      "https://example.com/product45"
    ],
    "inStock": true
  },
  {
    "name": "Daily Whey Protein Vitamin",
    "brand": "OrganicFit",
    "category": "Vitamin",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2094,
    "quantity": "60 tablets",
    "ingredients": [
      "Whey Protein",
      "Calcium",
      "Iron"
    ],
    "benefits": [
      "Joint support",
      "Heart health"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [],
    "certifications": [
      "FSSAI",
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product46"
    ],
    "inStock": false
  },
  {
    "name": "Green Green Tea Herbal",
    "brand": "HerbalRoot",
    "category": "Herbal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2307,
    "quantity": "250g",
    "ingredients": [
      "Green Tea",
      "Tulsi",
      "DHA"
    ],
    "benefits": [
      "Better digestion",
      "Stress relief"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Nausea"
    ],
    "warnings": [
      "Avoid in hyperthyroidism"
    ],
    "certifications": [
      "Organic Certified",
      "ISO"
    ],
    "availabilityLinks": [
      "https://example.com/product47"
    ],
    "inStock": true
  },
  {
    "name": "Bulk Moringa Protein",
    "brand": "VitaJoy",
    "category": "Protein",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 2037,
    "quantity": "250g",
    "ingredients": [
      "Moringa",
      "Omega-3",
      "Iron"
    ],
    "benefits": [
      "Antioxidant",
      "Brain function",
      "Immunity boost"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Bloating"
    ],
    "warnings": [
      "Avoid in hyperthyroidism"
    ],
    "certifications": [
      "Ayush Certified",
      "Organic Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product48"
    ],
    "inStock": false
  },
  {
    "name": "Pro Calcium Supplement",
    "brand": "NatureWell",
    "category": "Supplement",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1375,
    "quantity": "90 capsules",
    "ingredients": [
      "Calcium",
      "Tulsi",
      "Iron",
      "Green Tea"
    ],
    "benefits": [
      "Heart health",
      "Immunity boost"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [
      "Keep away from children"
    ],
    "certifications": [
      "GMP"
    ],
    "availabilityLinks": [
      "https://example.com/product49"
    ],
    "inStock": true
  },
  {
    "name": "Ancient Magnesium Ayurvedic",
    "brand": "PowerPlus",
    "category": "Ayurvedic",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5HmTRKCToCUBy_wSvphv6hdqSyFvXgbfoQ&s",
    "price": 1929,
    "quantity": "500ml",
    "ingredients": [
      "Magnesium",
      "Biotin",
      "Ashwagandha",
      "Moringa"
    ],
    "benefits": [
      "Brain function",
      "Stress relief"
    ],
    "usage": "Use as directed by healthcare professional.",
    "sideEffects": [
      "Headache"
    ],
    "warnings": [
      "Do not exceed daily dose"
    ],
    "certifications": [
      "Organic Certified",
      "Ayush Certified"
    ],
    "availabilityLinks": [
      "https://example.com/product50"
    ],
    "inStock": true
  }
];

const seedDB = async () => {
  // await Product.deleteMany({});
  await Product.insertMany(seedProducts);
  console.log('Database seeded!');
  mongoose.connection.close();
};

seedDB();
