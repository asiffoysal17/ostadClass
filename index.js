const express = require("express");
const cookiePerser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(cookiePerser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page!!!......");
});

app.get("/about", (req, res) => {
  res.send("About Page!!!......");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page!!!......");
});

app.get("/user", (req, res) => {
  res.json({ name: "Ostad", Age: 25, Profession: "Teacher" });
});

app.get("/users", (req, res) => {
  res.json([
    { name: "Ostad", Age: 25, Profession: "Teacher" },
    { name: "John", Age: 30, Profession: "Developer" },
    { name: "Jane", Age: 28, Profession: "Designer" },
    { name: "Doe", Age: 22, Profession: "Student" },
  ]);
});

app.get("/not-found", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.get("/google", (req, res) => {
  res.redirect("https://google.com");
});

app.get("/custom-header", (req, res) => {
  res.set("X-Custom-Header", "ExpressDemo");
  res.send("Header-Set");
});

app.get("/set-cookie", (req, res) => {
  res.cookie("token", "1233458asiffoysaltanvir", { httpOnly: true });
  res, send("Cookie set");
});

app.get("/clear-cookie", (req, res) => {
  res.clearCookie("token");
  res, send("Cookie Cleared");
});

// Query
app.get("/search", (req, res) => {
  const { name, age, city, country } = req.query;
  res.json({ name, age, city, country });
});

// Params
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send(`User Id ${id}`);
});

// BODY
app.post("/submit", (req, res) => {
  console.log(req.body);
  const { name, age, city, country, email } = req.body;
  res.send(`Received Data ${name}, ${age},
    ${city}, ${country}, ${email}`);
});

app.listen(port, () => {
  console.log(`Sever running at http://localhost:${port}`);
});
