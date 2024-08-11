"use client"

import React from "react";
import "./FormSection.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .required("Required")
    .min(8, "Phone is too short - should be 8 chars minimum."),
  message: Yup.string().required("Required"),
});

const FormSection = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form-div">
            <div className="form-first-row">
            <Field className="name-field" type="text" name="name" placeholder="Full Name" />
            {/* <ErrorMessage className="error-text" name="name" component="div" /> */}

            <Field className="email-field" type="email" name="email" placeholder="Email"/>
            {/* <ErrorMessage className="error-text" name="email" component="div" /> */}

            <Field className="phone-field" type="number" name="phoneNumber" placeholder="Phone Number"/>
            <ErrorMessage className="error-text" name="phoneNumber" component="div" />

            <Field className="message-field" type="text" name="message" rows={5} placeholder="Message"/>
            <ErrorMessage className="error-text" name="message" component="div" />
            </div>        

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              SUBMIT
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSection;
