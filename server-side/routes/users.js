const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");
router.post("/", async (req, res) => {
  const { username, password, fullname, email } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
      fullname: fullname,
      email: email,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) {
    res.json({ error: "User Doesn't Exist" });
    return;
  }

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.json({ error: "Wrong Password" });
      return;
    }
    const accessToken = sign(
      { username: user.username, id: user.id, fullname: user.fullname },
      "importantsecret"
    );
    res.json({
      token: accessToken,
      username: username,
      id: user.id,
      fullname: user.fullname,
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
