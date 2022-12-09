const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("blogs/index");
});
router.get("/new", (req, res) => {
  res.render("blogs/new");
});

module.exports = router;
