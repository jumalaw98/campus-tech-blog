const { request } = require("express");
const express = require("express");
const Article = require("../models/article");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const articles = await Article.find({});
    res.render("blogs/index", { articles: articles });
  } catch {
    res.redirect("/");
  }
});
router.get("/new", (req, res) => {
  res.render("blogs/new");
});
router.post("/", async (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    await article.save();
    res.redirect("blogs");
  } catch {
    res.render("blogs/new", {
      article: article,
      errorMessage: "error creating blog",
    });
  }
});

module.exports = router;
