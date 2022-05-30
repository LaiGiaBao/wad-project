const express = require("express");
const router = express.Router();
const { Users, Carts, sequelize } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { QueryTypes } = require("@sequelize/core");
router.post("/", async (req, res) => {
  const { username, password, fullname, email } = req.body;
  const checkUser = await Users.findOne({where: {username: username}})
  if (checkUser) {
    res.json({error: "User Existed"})
    return;
  }
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
      fullname: fullname,
      email: email,
    });
  })
    setTimeout(
      async () => {
      const user = await sequelize.query("SELECT * FROM `Users` WHERE Users.username = :username",{replacements:{username:username},type:QueryTypes.SELECT})
      Carts.create({
        UserId: user[0].id,
        totalPrice:0,
      })
      res.json(user)
    }
      ,500)
  
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // const user = await Users.findOne({ where: { username: username } });
  let userCart = await sequelize.query(
    "SELECT password,Carts.id AS cartId, Users.id AS userId, status, username, fullname FROM `Users`, `Carts` WHERE Users.id = Carts.UserId AND Users.username = :username ORDER BY Carts.id DESC LIMIT 1",
    { replacements: { username: username }, type: QueryTypes.SELECT }
  );
  if (!userCart) {
    res.json({ error: "User Doesn't Exist" });
    return;
  }
  bcrypt.compare(password, userCart[0].password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong Password" });
      return;
    }
    const accessToken = sign(
      {
        username: userCart[0].username,
        id: userCart[0].userId,
        fullname: userCart[0].fullname,
        cartId: userCart[0].cartId,
      },
      "importantsecret"
    );
    res.json({
      token: accessToken,
      username: userCart[0].username,
      id: userCart[0].userId,
      fullname: userCart[0].fullname,
      cartId: userCart[0].cartId,
      cartStatus: userCart[0].status,
    });
  });
});
router.get("/auth", validateToken, (req, res) => {
  
  res.json(req.user);
});
router.get("/basic-info/:id", async (req, res) => {
  const id = req.params.id;
  const basicInfo = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  res.json(basicInfo);
});
module.exports = router;
