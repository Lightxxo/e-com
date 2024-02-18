// helpController.js
const path = require('path');

// Display help page
exports.getHelpPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/help.html'));
};
