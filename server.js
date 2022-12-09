require("dotenv").config();

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index");
const blogsRouter = require("./routes/blogs");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/blogs", blogsRouter);

app.listen(5000);
