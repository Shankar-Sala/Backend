const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "8mbG#98RsTyP",
});

// A simple SELECT query
// let q = "SHOW TABLES";

//?Insterting New Data
// let q = "INSERT INTO user (id, username, email,password) VALUES ?";
// let users = [
//   ["113b", "113_newuser", "rabc@gmail.com", "rabc"],
//   ["124c", "143_newuser", "afc@gmail.com", "abfc"],
// ];
// try {
//   connection.query(q, [users], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();
// !==========================================================

// let createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };

// console.log(createRandomUser());

// !=============================================================

// let getRandomUser = () => {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.username(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   }

//   console.log(getRandomUser());
// !=============================================================
// ?Insert In Bulk using faker

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

//?Insterting New Data
// let q = "INSERT INTO user (id, username, email,password) VALUES ?";

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser()); // 100 fake user data
// }

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// !=================================================

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

//show route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      //   console.log(result);
      //   res.send(result);
      res.render("show.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

// edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

// update db route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUserName } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("wrong password");
      } else {
        let q2 = `UPDATE user SET username = '${newUserName}' WHERE id='${id}`;
        connection.query(q2, (err, result) => {
          if(err) throw err;
          res.redirect("/user")
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

app.listen("8080", () => {
  console.log("Server is listening to port 8080");
});
