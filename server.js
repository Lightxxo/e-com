const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const homeController = require('./controllers/homeController');
const brandController = require('./controllers/brandController');
const brandStoreController = require('./controllers/brandStoreController');
const brandCategoryController = require('./controllers/brandCategoryController');
const productPreviewController = require('./controllers/productPreviewController');
const loginController = require('./controllers/loginController');
const signupController = require('./controllers/signupController');
const helpController = require('./controllers/helpController');

app.use('/', homeController);
app.use('/brands', brandController);
app.use('/brand-store', brandStoreController);
app.use('/brand-category', brandCategoryController);
app.use('/product-preview', productPreviewController);
app.use('/login', loginController);
app.use('/signup', signupController);
app.use('/help', helpController);

// New route for fetching popular products data (replace with actual logic to fetch products from the database)
app.get('/api/popular-products', (req, res) => {
  const popularProducts = [
    { name: 'Product 1', description: 'Description for Product 1', price: 19.99 },
    { name: 'Product 2', description: 'Description for Product 2', price: 29.99 },
    { name: 'Product 3', description: 'Description for Product 3', price: 39.99 }
    // Add more products as needed
  ];
  res.json(popularProducts);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
