const express = require("express");
const app = express();
app.use(express.json());
// Sample data
let students = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" }
];
// GET → Read all students
app.get("/students", function(req, res) {
res.json(students);
});
// POST → Add new student
app.post("/students", function(req, res) {
if (!req.body.id || !req.body.name) {
return res.json({ message: "Please send id and name" });
}
const newStudent = {
id: req.body.id,
name: req.body.name
};
students.push(newStudent);
res.json(newStudent);
});
// PUT → Update student
app.put("/students/:id", function(req, res) {
const id = parseInt(req.params.id);
const student = students.find(s => s.id === id);
if (!student) {
return res.json({ message: "Student not found" });
}
student.name = req.body.name;
res.json({ message: "Student updated" });
});
// DELETE → Remove student
app.delete("/students/:id", function(req, res) {
const id = parseInt(req.params.id);
students = students.filter(s => s.id !== id);
res.json({ message: "Student deleted" });
});
// Start server
app.listen(3000, function() {
console.log("Server running on port 3000");
});