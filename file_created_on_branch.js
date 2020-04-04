const express = require("express");
const app = express();
const router = express.Router();

router.get("/:id?", (req, res) => {
  console.log("inide");
  if (req.params.id) {
    res.send(
      `this file was created in branch readme-edit ith param ${req.params.id}`
    );
  } else {
    res.send("this file was created in branch readme-edit");
  }
});
// app.listen(4000, () => {
//   console.log("listenong on server 4000");
// });

module.exports = router;
