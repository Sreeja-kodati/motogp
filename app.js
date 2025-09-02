const express = require("express");
const path = require("path");

const app = express();

// Set view engine (EJS for dynamic pages)
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRouter = require("./app_server/routes/index");
app.use("/", indexRouter);

// IMPORTANT: export the app instead of starting it here
module.exports = app;