const express = require("express");
const app = express();
// console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello, i am root");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmStr = `<h1>Welcome to the page of @${username} and id:${id}</h1>`;
  res.send(htmStr);
});

app.get("/search", (req, res) => {
  // console.log(req.query);
  let { q } = req.query;
 if(!q){
  res.send("No search query");
 }else{

 }
  res.send(`<h1>This are the results for: : ${q}</h1>`);
});

// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path");
// });
// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path");
// });
// app.get("/mango", (req, res) => {
//   res.send("you contacted mango path");
// });

// app.post("/", (req, res) => {
//   res.send("you send a post request to root path ");
// });

// error
// app.get("*", (req, res) => {
//   res.send("this path does not exist");
// });
//! s-1 : Option 1: Use a regex catch-all
// app.get(/.*/, (req, res) => {
//   res.send("this path does not exist");
// });

//! s-2: Option 3: Use Express middleware for 404s (recommended)
// fallback route (for anything else)
// app.use((req, res) => {
//   res.status(404).send("this path does not exist");
// });

// app.use((req, res) => {
//   // console.log(req);
//   console.log("request received");
//   let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>";
//   res.send(code);
// });

//! notes
//? app.use() 👉 https://www.geeksforgeeks.org/web-tech/express-js-app-use-function/

//? res.send() 👉 https://expressjs.com/en/5x/api.html#res.send
