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
    <div className="container-fluid h-custom">
       <div class="row d-flex justify-content-center align-items-center h-100 py-5 my-5">
        <div class="col-md-3">
          <div className="col-md-12">
            <img class = "img-fluid" src={product.pictSource} alt="" />
            <div class = "">
              <DetailsThumb
                images={product.pictSource}
                tab={handleTab}
                myRef={myRef}
              />
            </div>
          </div>
          
        </div>
        <div class="col-md-7 ">
          <div className="box p-5 ">
            <div className="row">
              <h2 class="display-3 text-uppercase">{product.name}</h2>
              <span class="bg-light display-6 text-uppercase p-3 m-3 px-4">${product.price}</span>
            </div>
            <div class="px-1">
              <p class= "h4">{product.description}</p>
              <div className="colors">
                {colors.map((color) => (
                  <button style={{ background: color }} key={color}></button>
                ))}
              </div>

              <button class="btn btn-primary btn-lg btn-block p-3 px-5 cart font-weight-bold"> ADD TO CART </button>
            </div>
          
          </div>
        </div>

        <div class = "col-md-10 float-left">
          <div class="col-md-8 pt-5 mt-5">
            <h2 class= "text-center">COMMENT SECTION</h2>
            <div className="add-comment-container row py-2">
              <div class= "col-md-11">
                <input
                  class = "form-control form-control-lg"
                  type="text"
                  autoComplete="off"
                  value={newComment}
                  onChange={(event) => {
                    setNewComment(event.target.value);
                  }}
                />
              </div>
              
              <button class= "col-md-1 btn btn-primary btn-lg btn-block comment-bt" onClick={addComment}>Post</button>
            </div>
            <div className="comment-list col-md-11 pt-4 bg-light rounded">
              {comments.map((comment, key) => (
                <div class= "row">
                  <div class = "col-md-1">
                    <img 
                      class = "img-fluid mx-3 d-block  w-75" 
                      src= "https://i.ibb.co/tQzC2n3/kisspng-computer-icons-user-profile-clip-art-big-5ac52838aa8c72-2286905915228703286986.png">
                    </img>
                  </div>
                  <div className="comment col-md-11 h5" key={key}>
                    <label>{comment.username}</label>
                    <div className="comment-body h5">{comment.commentBody}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
  );
}
export default Product;
