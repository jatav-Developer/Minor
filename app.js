const express = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();
const path = require('path');
require('dotenv').config();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/healthProducts')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.use(session({
  secret: process.env.SECRET, // change to env variable in real app
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/healthProducts" }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

const authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use(adminRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

const cartRoutes = require("./routes/cartRoutes");
app.use(cartRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

