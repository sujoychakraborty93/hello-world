const express = require("express");
const app = express();
const readme1 = require("./file_created_on_branch.js");
const readme2 = require("./file_created_on_origin_branch_and_not_local_branch.js");

let sum = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
};

app.get("/", async (req, res) => {
  let result = await sum(3, 5);
  res.send("hello world. this is from master " + result);
});
app.get("/master", (req, res) => {
  res.send("i am master branch");
});
app.use("/readme-edits1", readme1);
app.use("/readme-edits2", readme2);

app.listen(4000, () => {
  console.log("server running");
});

module.exports = app;
