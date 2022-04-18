const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const mysql = require("mysql");

const db = require("./models");

//Routers
const postRouter = require("./routes/posts");
app.use("/posts", postRouter);
const productRouter = require("./routes/products");
app.use("/products", productRouter);
const commentsRouter = require("./routes/comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/users");
app.use("/auth", usersRouter);
const categoriesRouter = require("./routes/categories");
app.use("/categories", categoriesRouter);
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
