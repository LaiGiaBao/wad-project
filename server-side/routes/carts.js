const express = require("express");
const router = express.Router();
const { Carts, CartDetails, sequelize } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { QueryTypes } = require("sequelize");
router.get("/byUserId/:id", async (req, res) => {
  const id = req.params.id;
  const listOfCarts = await Carts.findOne({
    where: { UserId: id },
    order: [['id','DESC']]
  });
  res.json(listOfCarts);
});
router.post("/", validateToken, async (req, res) => {
  const cart = req.body;
  cart.UserId = req.user.id;
  await Carts.create(cart);
  res.json(cart);
});
router.put("/totalPrice", validateToken, async (req, res) => {
  const { totalPrice, cartId } = req.body;
  await Carts.update(
    { totalPrice: totalPrice, status: true },
    { where: { id: cartId } }
  );
  res.json(totalPrice);
});
module.exports = router;
