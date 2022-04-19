import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "../styles/product-detail.css";
import DetailsThumb from "../Components/DetailsThumb";
import Colors from "../Components/Colors";
function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [colors, setColors] = useState([]);
  let myRef = React.createRef();
  let handleTab = (index) => {
    this.setState({ index });
    const images = this.myRef.current.children;
    images.className = "active";
  };

  let componentDidMount = () => {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  };
  useEffect(() => {
    axios.get(`http://localhost:3001/products/byId/${id}`).then((response) => {
      setProduct(response.data);
      setColors(response.data.colors.split(","));
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
  // let Colors = ({ colors }) => {
  //   const listOfColors = colors.split(",");
  //   return (
  //     <div className="colors">
  //       {listOfColors.map((color) => (
  //         <button style={{ background: color }} key={color}></button>
  //       ))}
  //     </div>
  //   );
  // };
  return (
    // <div className="container">
    //   <h1>{product.name}</h1>
    //   <img src={product.pictSource} alt="" />
    //   <ReactMarkdown>{product.description}</ReactMarkdown>

    // <h3>Comments:</h3>
    // <div className="add-comment-container">
    //   <input
    //     type="text"
    //     autoComplete="off"
    //     value={newComment}
    //     onChange={(event) => {
    //       setNewComment(event.target.value);
    //     }}
    //   />
    //   <button onClick={addComment}>Add comment</button>
    // </div>
    // <div className="comment-list">
    //   {comments.map((comment, key) => (
    //     <div className="comment" key={key}>
    //       <label>Username: {comment.username}</label>
    //       <div className="comment-body">{comment.commentBody}</div>
    //     </div>
    //   ))}
    // </div>
    // </div>
    <div className="details">
      <div className="big-img">
        <img src={product.pictSource} alt="" />
      </div>

      <div className="box">
        <div className="row">
          <h2>{product.name}</h2>
          <span>${product.price}</span>
        </div>
        <div className="colors">
          {colors.map((color) => (
            <button style={{ background: color }} key={color}></button>
          ))}
        </div>

        <ReactMarkdown>{product.description}</ReactMarkdown>

        <DetailsThumb
          images={product.pictSource}
          tab={handleTab}
          myRef={myRef}
        />
        <button className="cart">Add to cart</button>
      </div>
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
