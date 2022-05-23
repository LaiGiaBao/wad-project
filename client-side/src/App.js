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
import TestNavBarComp from "./Components/TestNavBarComp";
import TestNavBarComp2 from "./Components/TestNavBarComp2";
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
        setIsLoading(false)
      });
  }, []);
  useEffect(() => {},[authState])
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
          {authState.status ? <TestNavBarComp2/> : <TestNavBarComp/>}    
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/addproduct" exact element={<AddNewProduct />}></Route>
            <Route path="/product/:id" exact element={<Product />}></Route>
            <Route path="/register" exact element={<Register />}></Route>
            <Route path="/login" exact element={<Login />}></Route>
            <Route path="/profile/:id" exact element={<Profile />}></Route>
            <Route path="/product/byCategory/:id" exact element={<SpecifiedCategory/>}></Route>
            <Route
              path="/cart-details/:id"
              exact
              element={<CartDetails />}
            ></Route>
            <Route path="/product-manage" exact element={<ProductManagement/>}></Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
