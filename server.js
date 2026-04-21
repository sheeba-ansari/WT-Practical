const express = require("express");
const app = express();
const PORT = 3000;
// Route that returns JSON data
app.get("/", function(req, res) {
 res.json({
 message: "Hello from Express Server",
 status: "Server is running"
 });
});
// Start the server
app.listen(PORT, function() {
 console.log("Server running on http://localhost:3000");
});