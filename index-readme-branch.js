const express = require("express");
const app = express();
const readme1 = require("./file_created_on_branch.js");
const readme2 = require("./file_created_on_origin_branch_and_not_local_branch.js");

app.get("/", (req, res) => {
  res.send("hello world. this is from master of branch");
});
app.get("/master", (req, res) => {
  res.send("i am master branch inside read-me branch");
});
app.use("/readme-edits1", readme1);
app.use("/readme-edits2", readme2);

app.listen(4000, () => {
  console.log("server running");
});
