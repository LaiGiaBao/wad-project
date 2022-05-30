import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/card-product.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

import SpecifiedCategory from "./pages/SpecifiedCategory";
import ProductManagement from "./pages/ProductManagement";
function App() {
  const [authState, setAuthState] = useState({
    username: "",
    fullname: "",
    id: 0,
    cartId: 0,
    cartStatus: false,
    status: false,
  });
  const [admin, setAdmin] = useState("bindat1311");
  const [isLoading,setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState("");
  const [cartDetails, setCartDetails] = useState([]);
  useEffect(() => {
    setIsLoading(true)
     axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        console.log("jwt",response.data)
        if (response.data.error != null) {
          setAuthState({ ...authState, status: false });
        } 
        else {
          setAuthState({
            ...authState,
            username: response.data.username,
            id: response.data.id,
            fullname: response.data.fullname,
            status: true,
            cartId: response.data.cartId,
          });      
        }
        console.log("authState2",authState);
        setIsLoading(false)
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
          isLoading,
          setIsLoading,
          admin, 
          setAdmin
        }}
      >
        <Router>
          {isLoading && <div>Loading...</div>}
          <NavBarComp/>
          <Routes>
            <Route path="/" exact element={<Home />}>
              
            </Route>
            <Route path="addproduct" exact element={<AddNewProduct />}></Route>
            <Route path="product">
              <Route path="byCategory/:id" exact element={<SpecifiedCategory/>}></Route>
              <Route path=":id" exact element={<Product />}></Route>
            </Route>
            <Route path="/register" exact element={<Register />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/profile/:id" exact element={<Profile />}></Route>
            <Route
              path="cart-details"
            >
              <Route
              path=":id"
              exact
              element={<CartDetails />}
            ></Route>
            </Route>
            <Route path="/product-manage" exact element={<ProductManagement/>}></Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
