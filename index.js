const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
// middleware

app.use(cors());
app.use(express.json());
const users = [
  { id: 1, name: "Niloy Roy", email: "niloy@gmail.com" },
  { id: 2, name: "Saddat", email: "saddat@gmail.com" },
  { id: 3, name: "Hamidul", email: "hamidul@gmail.com" },
  { id: 4, name: "Salim", email: "salim@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management System Is Running");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api is hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`This is hitting on PORT : ${port}`);
});
