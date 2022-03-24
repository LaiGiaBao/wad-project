import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "../styles/add-product.css";
function AddNewProduct() {
  const initialValues = {
    name: "",
    category: "",
    price: "",
    sizes: "",
    colors: "",
    pictSource: "",
    description: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    category: Yup.string().required(),
    price: Yup.number().required().positive().integer(),
    sizes: Yup.string(),
    pictSource: Yup.string().url(),
    description: Yup.string(),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/products", data).then((response) => {
      console.log("Product has been uploaded");
    });
  };
  return (
    <div className="create-product-page">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validation={validationSchema}
      >
        <Form>
          <label>Name:</label>
          <ErrorMessage name="name" component="span" />
          <Field id="inputCreatePost" name="name"></Field>
          <label>Category:</label>
          <ErrorMessage name="Category" component="span" />
          <Field id="inputCreatePost" name="category"></Field>
          <label>Price:</label>
          <ErrorMessage name="price" component="span" />
          <Field id="inputCreatePost" name="price"></Field>
          <label>Sizes:</label>
          <ErrorMessage name="sizes" component="span" />
          <Field id="inputCreatePost" name="sizes"></Field>
          <label>Colors:</label>
          <ErrorMessage name="colors" component="span" />
          <Field id="inputCreatePost" name="colors"></Field>
          <label>PictSource:</label>
          <ErrorMessage name="pictSource" component="span" />
          <Field id="inputCreatePost" name="pictSource"></Field>
          <label>Description:</label>
          <ErrorMessage name="pictSource" component="span" />
          <Field id="inputCreatePost" name="description" as="textarea"></Field>
          <button type="submit">Create Product</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddNewProduct;
