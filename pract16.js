 const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
// Register user and hash password
app.post("/register", async (req, res) => {
 const password = req.body.password;
 try {
 const hashedPassword = await bcrypt.hash(password, 10);
 console.log("Original Password:", password);
 console.log("Hashed Password:", hashedPassword);
 res.send("Password hashed successfully");
 }
 catch (error) {
 res.send("Error hashing password");
 }
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});