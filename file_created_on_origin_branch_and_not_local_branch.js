const express = require("express");
const app = express();

app.get("/readme-edits2", (req, res) => {
  res.send(
    "this file was created in branch readme-edit. file_created_on_origin_branch_and_not_local_branch.js"
  );
});

app.listen(4000, () => {
  console.log("server running");
});
