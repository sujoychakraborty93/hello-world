const express = require("express");
const app = express();
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("this file was created in branch readme-edit");
});
// app.listen(4000, () => {
//   console.log("listenong on server 4000");
// });
module.exports = router;
