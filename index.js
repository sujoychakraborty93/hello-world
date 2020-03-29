const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world. \nThis is the mesage added in branch2");
});
app.get("/branch2", (req, res) => {
  res.send("this is from branch2. added in branch2");
});
app.listen(4000, () => {
  console.log("server running");
});
