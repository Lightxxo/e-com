// loginController.js
const path = require('path');

// Display login page
exports.getLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
};

// Handle login form submission
exports.loginUser = (req, res) => {
  // MongoDB integration for user login
  res.send('MongoDB integration for user login will be implemented later');
};
