import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";


function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);
  const login = () => {
    const data = {
      username: username,
      password: password,
    };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          fullname: response.data.fullname,
          status: true,
        });
        console.log(response.data);
        navigate("/");
      }
    });
  };
  return (
    <div class = "container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://woobro.design/thumbnails/34/ecommerce-buy-vector-illustration-5de18f29f32c3.png"
              class="img-fluid p-5" alt="Sample image"></img>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div class="form-outline mb-4">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Enter username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          
          <div class="form-outline mb-4">
            <input
              type="password"
              class="form-control form-control-lg"
              placeholder="Enter password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
            
          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label h5" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body h6">Forgot password?</a>
          </div>

          

          <div class="text-center text-lg-start">
            <button class="btn btn-primary btn-lg btn-block mt-4 p-3 px-5" onClick={login}> LOGIN </button>
            <p class="h5 mt-2 pt-1 mb-0">Don't have an account? 
              <a href="/register"class="link-danger text-decoration-none"> Register</a>
            </p>
          </div>
          
        </div>
      </div>
      
      
    </div>
  );
}

export default Login;
