import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { LoginValidation } from "./formik.validations";
import { useHistory } from "react-router-dom";
import { firebaseApp } from "../../configFirebase";

import SimpleCard from "../../Components/SimpleCard/simple-card.component";
const Login = () => {
  const history = useHistory();
  const [error, setError] = useState("");

  const handleLogin = values => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        history.push("/");
        setError("");
      })
      .catch(err => {
        setError("The credentials are invalid. Please try again");
      });
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginValidation}
      onSubmit={fields => {
        handleLogin(fields);
      }}
    >
      {({ errors, touched }) => (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <SimpleCard cardTitle="Login" width="30rem">
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={"form-control" + (errors.email && touched.email ? " is-invalid" : "")}
                />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={"form-control" + (errors.password && touched.password ? " is-invalid" : "")}
                />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>
              {error && (
                <div className={"col-12"}>
                  <p className="text-danger text-right">{error}</p>
                </div>
              )}
              <div className={"col-12 clearfix"}>
                <div className="form-group">
                  <div className={"float-right"}>
                    <>
                      <button type="submit" className="btn btn-primary mr-2">
                        Login In
                      </button>
                      <button type="reset" className="btn btn-secondary">
                        Reset
                      </button>
                    </>
                  </div>
                </div>
              </div>
            </Form>
          </SimpleCard>
        </div>
      )}
    </Formik>
  );
};
export default Login;
