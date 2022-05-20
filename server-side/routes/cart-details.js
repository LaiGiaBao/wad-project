const express = require("express");
const router = express.Router();
const { CartDetails, sequelize } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { QueryTypes } = require("sequelize");
router.get("/byCartId/:id", async (req, res) => {
  const cartId = req.params.id;
  // const listOfCarts = await CartDetails.findAll({
  //   where: {
  //     CartId: cartId,
  //   },
  // });
  const listOfCartProducts = await sequelize.query(
    "SELECT * FROM `CartDetails`, `Products` WHERE CartDetails.ProductId = Products.Id AND CartDetails.CartId= :cartId",
    { replacements: { cartId: cartId }, type: QueryTypes.SELECT }
  );
  res.json(listOfCartProducts);
});
router.post("/", async (req, res) => {
  const cart = req.body;
  await CartDetails.create(cart);
  res.json(cart);
});
router.delete("/:productId", async (req, res) => {
  const productId = req.params.productId
  await CartDetails.destroy({
    where: {
      id: productId
    }
  })
})
module.exports = router;
