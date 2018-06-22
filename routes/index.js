const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/student2", (req, res, next) => {
  res.send("LEWD");
});


router.get('/student1', (req, res, next) => {
  res.send("I'm the first student");
});

module.exports = router;
