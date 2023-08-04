const routes = require("express").Router();

const path = require("path");

routes.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

routes.get("/add_Dish", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/add_Dish.html"));
});

routes.get("/find_ById", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/findById.html"));
});

module.exports = routes;
