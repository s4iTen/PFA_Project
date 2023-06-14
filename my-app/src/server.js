const express = require('express');
const app = express();

// Serve the static files
app.use(express.static('public'));

// Endpoint to retrieve shoe data
app.get('/api/shoes', (req, res) => {
  // Read the shoe data from the JSON file
  const shoeData = require('./shoe_data.json');
  res.json(shoeData);
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
