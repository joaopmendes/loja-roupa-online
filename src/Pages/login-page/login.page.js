import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { LoginValidation } from "./formik.validations";
import { useHistory } from "react-router-dom";
import { firebaseApp, firebaseAuthProviders } from "../../firebase.config";
import withFirebaseAuth from "react-with-firebase-auth";
import SimpleCard from "../../Components/SimpleCard/simple-card.component";

import LoadingSpinnerComponent from "../../Components/LoadingSpinner/loading-sponner.component";
const Login = ({ signInWithGoogle }) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = values => {
    setLoading(true);
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        history.push("/");
        setError("");
        setLoading(false);
      })
      .catch(err => {
        setError("The credentials are invalid. Please try again");
        setLoading(false);
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
                    {loading ? (
                      <LoadingSpinnerComponent />
                    ) : (
                      <>
                        <button type="button" onClick={signInWithGoogle} className="btn btn-white">
                          <svg width="25" height="25" class="jp jq r">
                            <g fill="none" fill-rule="evenodd">
                              <path
                                d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z"
                                fill="#4285F4"
                              ></path>
                              <path
                                d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z"
                                fill="#34A853"
                              ></path>
                              <path
                                d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z"
                                fill="#FBBC05"
                              ></path>
                              <path
                                d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z"
                                fill="#EA4335"
                              ></path>
                            </g>
                          </svg>
                          <span className="ml-3">Login with Google</span>
                        </button>
                        <button type="submit" className="btn btn-primary mr-2">
                          Login In
                        </button>
                      </>
                    )}
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
export default withFirebaseAuth({
  providers: firebaseAuthProviders,
  firebaseAppAuth: firebaseApp.auth()
})(Login);
