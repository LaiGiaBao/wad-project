import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
function CartDetails() {
  let { id } = useParams();
  const [cartDetails, setCartDetails] = useState([]);
  const { authState } = useContext(AuthContext);
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
          {cartDetails.map((details) => {
            totalPrice += details.Price;
            return (
              <tr key={details.id}>
                <td>{details.ProductId}</td>
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
    </div>
  );
}

export default CartDetails;
