var express = require("express");
var router = express.Router();

router.use("/", (req, res, next) => {
  console.log("foo inside");
  res.json("foo");
});
module.exports = router;