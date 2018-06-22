const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/student2", (req, res, next) => {
  res.send("LEWD");
});

module.exports = router;
