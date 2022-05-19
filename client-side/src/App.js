import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/card-product.css";
import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthContext } from "./helpers/AuthContext";
import axios from "axios";
import NavBarComp from "./Components/NavBarComp";
import Home from "./pages/Home";
import AddNewProduct from "./pages/AddNewProduct";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CartDetails from "./pages/CartDetails";

function App() {
  const [cartId, setCartId] = useState(0);
  const [authState, setAuthState] = useState({
    username: "",
    fullname: "",
    id: 0,
    cartId: 0,
    status: false,
  });
  const [isLoading,setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState("");
  const [cartDetails, setCartDetails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            ...authState,
            username: response.data.username,
            id: response.data.id,
            fullname: response.data.fullname,
            status: true,
            cartId: response.data.cartId,
          });
        }
      });
  }, []);
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          authState,
          setAuthState,
          searchText,
          setSearchText,
          cartDetails,
          setCartDetails,
          cartId,
          setCartId,
          isLoading,
          setIsLoading
        }}
      >
        <Router>
          
          {isLoading ? <div>Loading...</div> : <NavBarComp />}
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/addproduct" exact element={<AddNewProduct />}></Route>
            <Route path="/product/:id" exact element={<Product />}></Route>
            <Route path="/register" exact element={<Register />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/profile/:id" exact element={<Profile />}></Route>
            <Route
              path="/cart-details/:id"
              exact
              element={<CartDetails />}
            ></Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
