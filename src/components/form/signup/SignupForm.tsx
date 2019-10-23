import React from "react";
import { Formik, Field } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { TextField, Button } from "@material-ui/core";


const SignupForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
            <div>
            <TextField
                name="email"
                type="text"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
            )}
            </div>
            <br/>
            <div>
            <TextField
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
            )}
            </div>
            <br/>
            <div>
            <Button type="submit" disabled={isSubmitting}>
                    Submit
            </Button>
            </div>
            <br/>
            <pre>
                {JSON.stringify(values, null, 2)}
            </pre>
        </form>
      );
    }}
  </Formik>
);

export default SignupForm;
