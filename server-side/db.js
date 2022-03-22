const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const mysql = require("mysql");

const db = require("./models");

//Routers
const postRouter = require("./routes/posts");
const productRouter = require("./routes/products");
app.use("/posts", postRouter);
app.use("/products", productRouter);
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
