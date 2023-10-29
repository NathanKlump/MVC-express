import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; //validation for user input
import axios from "axios";

export default function CreateFeedback() {
  const initialValues = {
    FEEDBACK_FNAME: "",
    FEEDBACK_LNAME: "",
    FEEDBACK_USER_EMAIL: "",
  };

  const validationSchema = Yup.object().shape({
    FEEDBACK_FNAME: Yup.string().required(),
    FEEDBACK_LNAME: Yup.string().required(),
    FEEDBACK_USER_EMAIL: Yup.string(),
  });

  const onSubmit = (data) => {
    // Handle form submission here
    axios.post("http://localhost:3001/feedback", data).then(() => {
      console.log(data);
    });
  };
  return (
    <div className="CreateFeedbackPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>First Name: </label>
          <ErrorMessage name="FEEDBACK_FNAME" component="span" />
          <Field
            id="inputCreateFeedback"
            name="FEEDBACK_FNAME"
            placeholder="e.g. your firstName"
          />

          <label>Last Name: </label>
          <ErrorMessage name="FEEDBACK_LNAME" component="span" />
          <Field
            id="inputCreateFeedback"
            name="FEEDBACK_LNAME"
            placeholder="e.g. your lastName"
          />

          <label>Email: </label>
          <ErrorMessage name="FEEDBACK_USER_EMAIL" component="span" />
          <Field
            id="inputCreateFeedback"
            name="FEEDBACK_USER_EMAIL"
            placeholder="e.g. your email"
          />

          <button type="submit">Create a Feedback</button>
        </Form>
      </Formik>
    </div>
  );
}
