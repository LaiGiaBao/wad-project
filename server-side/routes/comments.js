const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
// router.get("/:postId", async (req, res) => {
//   const postId = req.params.postId;
//   const comments = await Comments.findAll({
//     where: {
//       PostId: postId,
//     },
//   });
//   res.json(comments);
// });
router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  const comments = await Comments.findAll({
    where: {
      ProductId: productId,
    },
  });
  res.json(comments);
});
router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  // const username = req.user.username;
  // comment.username = username;
  const fullname = req.user.fullname;
  comment.username = fullname;
  await Comments.create(comment);
  res.json(comment);
});
router.delete("/:commentId", validateToken, async (req, res) => {
  const commentId =req.params.commentId;

  await Comments.destroy({
    where: {
      id: commentId,
    }
  })
  res.json("deleted")
})
router.put("/:commentId",validateToken, async (req,res) => {
  const commentId = req.params.commentId;
  const editedComment = req.body.comment;
  await Comments.update({commentBody: editedComment},{where: {id:commentId}})
  res.json(editedComment);
})
module.exports = router;
