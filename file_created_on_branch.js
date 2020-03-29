const express = require("express");
const app = express();
app.get("/readme-edits", (req, res) => {
  res.send("this file was created in branch readme-edit");
});
app.listen(4000, () => {
  console.log("listenong on server 4000");
});
