import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";
function Profile() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [listOfCarts, setListOfCarts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/auth/basic-info/${id}`)
      .then((response) => {
        setUser(response.data);
      });
    axios.get(`http://localhost:3001/carts/byUserId/${id}`).then((response) => {
      setListOfCarts(response.data);
    });
  }, []);
  return (
    <div className="profile-page-container">
      <div className="basic-info">Username: {user.username}</div>
      <div className="fullname">Fullname: {user.fullname}</div>
      <div className="email">Email:{user.email}</div>
      <div className="create-date">
        Create date:
        {dateFormat(user.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
      </div>
      <div className="cart-list-container">
        <h2>List of your carts</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date Created</th>
              <th>Total Price</th>
              <th>Details</th>
            </tr>
          </thead>
          {listOfCarts.map((cart) => (
            <tr>
              <td>{cart.id}</td>
              <td>
                {dateFormat(cart.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
              </td>
              <td>{cart.totalPrice}</td>
              <td>
                <button onClick={() => navigate(`/cart-details/${cart.id}`)}>
                  Click Here
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Profile;
