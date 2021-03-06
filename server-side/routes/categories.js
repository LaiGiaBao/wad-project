const express = require("express");
const router = express.Router();
const { Categories } = require("../models");
router.get("/", async (req, res) => {
  const listOfCategories = await Categories.findAll();
  res.json(listOfCategories);
});
router.post("/", async (req, res) => {
  const category = req.body;
  await Categories.create(category);
  res.json(category);
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const category = await Categories.findByPk(id);
  res.json(category);
});
module.exports = router;
