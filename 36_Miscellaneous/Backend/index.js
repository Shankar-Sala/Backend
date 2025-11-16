// Server side code 👇
const express = require("express");
const app = express();
const port = 8080;

// ✅ Middleware (must come before routes)
app.use(express.json()); // for JSON request bodies

// app.use(express.urlencoded({ extended: true })); // for form data

// GET route (query parameters)
app.get("/register", (req, res) => {
  const { user, password } = req.query;
  res.send(`Standard GET response. Welcome ${user}`);
});

// POST route (JSON body)
app.post("/register", (req, res) => {
  console.log("BODY RECEIVED:", req.body); // Debug log
  const { user, password } = req.body;
  res.send(`Standard POST response. welcome ${user}`);
});

// app.post("/register", (req, res) => {
//   console.log("HEADERS:", req.headers);
//   console.log("BODY RAW:", req.body);
//   res.send("Check your terminal for logs");
// });

// Start server
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

//! app.post()
//? It is an Express.js method used to handle HTTP POST requests to a specific route. It is a fundamental part of building web applications with Express, allowing the server to receive and process data submitted by clients, typically through forms or API requests.

//! req.body in express
//? In Express.js, req.body refers to the property of the request object that contains the data submitted in the body of an incoming HTTP request. This data is typically sent by the client using methods like POST, PUT, or PATCH, where the client is sending data to the server (e.g., form submissions, JSON payloads).
