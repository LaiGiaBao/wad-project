const express = require("express");
const router = express.Router();
const { CartDetails } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
router.get("/byCartId/:id", async (req, res) => {
  const cartId = req.params.id;
  const listOfCarts = await CartDetails.findAll({
    where: {
      CartId: cartId,
    },
  });
  res.json(listOfCarts);
});
router.post("/", async (req, res) => {
  const cart = req.body;
  await CartDetails.create(cart);
  res.json(cart);
});
module.exports = router;
