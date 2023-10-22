// Import required modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();
const port = 3000; // You can change this port to any other port you prefer

// Serve static files (like index.html) from the 'public' directory
app.use(express.static('public'));

// Define a route for the homepage
app.get('/', (req, res) => {
    // Send the 'index.html' file when someone accesses the root URL
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
