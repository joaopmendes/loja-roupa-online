import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { RegisterValidations } from "./formik.validations";
import { useHistory } from "react-router-dom";
import { firebaseApp } from "../../configFirebase";
import SimpleCard from "../../Components/SimpleCard/simple-card.component";
import LoadingSpinnerComponent from "../../Components/LoadingSpinner/loading-sponner.component";
import { FirebaseAuthUtils } from "../../utils/auth.utils";

const Register = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = values => {
    setLoading(true);
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(({ user }) => {
        history.push("/");
        setError("");
        setLoading(false);
        FirebaseAuthUtils.updateUserData(user, {
          displayName: values.name
        });
      })
      .catch(err => {
        setError("The form is invalid"); // TODO: better output error messages
        setLoading(false);
      });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={RegisterValidations}
      onSubmit={fields => {
        handleRegister(fields);
      }}
    >
      {({ errors, touched }) => (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <SimpleCard cardTitle="Register" width="30rem">
            <Form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="name"
                  type="text"
                  className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                />
                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
              </div>
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
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={"form-control" + (errors.confirmPassword && touched.confirmPassword ? " is-invalid" : "")}
                />
                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
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
                        <button type="submit" className="btn btn-primary mr-2">
                          Register
                        </button>
                        <button type="reset" className="btn btn-secondary">
                          Reset
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
export default Register;
