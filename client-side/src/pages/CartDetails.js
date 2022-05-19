import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
function CartDetails() {
  let { id } = useParams();
  const [cartDetails, setCartDetails] = useState([]);
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/cart-details/byCartId/${id}`)
      .then((response) => {
        console.log(response.data);
        setCartDetails(response.data);
      });
  }, []);

  console.log(cartDetails);
  let totalPrice = 0;
  const updateDetailCart = (totalPrice) => {
    axios.put(
      `http://localhost:3001/carts/totalPrice`,
      {
        totalPrice: totalPrice,
        cartId: id,
      },
      {
        headers: { accessToken: localStorage.getItem("accessToken") },
      }
    ).then((response) => {
      setAuthState({...authState, cartStatus: true})
      alert("BUY SUCCESSFUL");
    })
  };
  return (
    <div>
      <h2>Products in Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartDetails.map((details, index) => {
            totalPrice += details.Price;
            return (
              <tr key={index}>
                <td>{details.name}</td>
                <td>{details.Quantity}</td>
                <td>
                  <CurrencyFormat
                    value={details.Price}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"đ"}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Price:</td>
            <td></td>
            <td>
              <CurrencyFormat
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"đ"}
              />
            </td>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => updateDetailCart(totalPrice)}>Confirm</button>
    </div>
  );
}

export default CartDetails;
