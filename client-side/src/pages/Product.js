import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:3001/products/byId/${id}`).then((response) => {
      setProduct(response.data);
    });
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);
  const addComment = () => {
    axios
      .post(
        "http://localhost:3001/comments",
        {
          commentBody: newComment,
          ProductId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          const commentToAdd = {
            commentBody: newComment,
            username: response.data.fullname,
          };
          setComments([...comments, commentToAdd]);
          setNewComment("");
        }
      });
  };
  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.pictSource} alt="" />
      <ReactMarkdown>{product.description}</ReactMarkdown>
      <h3>Comments:</h3>
      <div className="add-comment-container">
        <input
          type="text"
          autoComplete="off"
          value={newComment}
          onChange={(event) => {
            setNewComment(event.target.value);
          }}
        />
        <button onClick={addComment}>Add comment</button>
      </div>
      <div className="comment-list">
        {comments.map((comment, key) => (
          <div className="comment" key={key}>
            <label>Username: {comment.username}</label>
            <div className="comment-body">{comment.commentBody}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
