import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
    fullname: "",
    email: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(6).max(20).required(),
    password: Yup.string().min(9).required(),
    fullname: Yup.string().required(),
    email: Yup.string().email(),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
      navigate("/");
    });
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="username">Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field id="username" name="username"></Field>
          <label htmlFor="password">Password:</label>
          <ErrorMessage name="password" component="span" />
          <Field type="password" id="password" name="password"></Field>
          <label htmlFor="fullname">Full Name:</label>
          <ErrorMessage name="fullname" component="span" />
          <Field id="fullname" name="fullname"></Field>
          <label htmlFor="email">Email:</label>
          <ErrorMessage name="email:" component="span" />
          <Field id="email" name="email" type="email"></Field>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
