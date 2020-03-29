const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world. this is from master");
});
app.get("/master", (req, res) => {
  res.send("i am master branch");
});

app.listen(4000, () => {
  console.log("server running");
});
