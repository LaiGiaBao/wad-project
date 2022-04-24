const express = require("express");
const router = express.Router();
const { Carts } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
router.get("/byUserId/:id", async (req, res) => {
  const id = req.params.id;
  const listOfCarts = await Carts.findAll({
    where: { UserId: id },
  });
  res.json(listOfCarts);
});
router.post("/", validateToken, async (req, res) => {
  const cart = req.body;
  cart.UserId = req.user.id;
  await Carts.create(cart);
  res.json(cart);
});
module.exports = router;
