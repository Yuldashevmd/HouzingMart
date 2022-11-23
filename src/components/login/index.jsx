import { useFormik } from "formik";
import React, { memo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  CheckForget,
  Container,
  Form,
  Input,
  LoginForm,
  ResponseText,
} from "./style";

const Login = () => {
  const navigate = useNavigate();
  const [text, setText] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: value?.email,
          password: value?.password,
        }),
      })
        .then((res) => res.json())
        .then((res) =>
          res
            ? (setText("Successfull..."),
              setTimeout(() => {
                localStorage.setItem("token", res?.authenticationToken);
                navigate("/home");
              }, 1500))
            : null
        );
    },
    validationSchema: Yup.object({
      email: Yup.string().email("must be valid email").required(),
      password: Yup.string()
        .min(4, "minimum 4 characters")
        .max(12, "maximum 12 characters")
        .required(),
    }),
  });

  return (
    <>
      <Container>
        <LoginForm>
          <ResponseText text={text}>{text}</ResponseText>
          <p>Sign in</p>
          <Form>
            <LoginForm.InputForm>
              <label htmlFor="login">Login</label>
              <Input
                valid={1}
                type="text"
                name="email"
                onChange={formik.handleChange}
                placeholder="Email or Login"
                autoComplete="none"
              />
              <p className="error">{formik.errors.email}</p>
            </LoginForm.InputForm>
            <LoginForm.InputForm>
              <Input
                valid={1}
                type="password"
                name="password"
                onChange={formik.handleChange}
                placeholder="Password"
                autoComplete="none"
              />
              <p className="error">{formik.errors.password}</p>
            </LoginForm.InputForm>
            <CheckForget>
              <CheckForget.Check>
                <input type="checkbox" name="RememberMe" />
                <span>Remember me</span>
              </CheckForget.Check>
              <button>Forgot</button>
            </CheckForget>
            <Button type="submit" onClick={formik.handleSubmit}>
              Login
            </Button>
          </Form>
          <button
            className="btn-regis"
            onClick={() => navigate("/login/register")}
          >
            Register
          </button>
        </LoginForm>
      </Container>
    </>
  );
};

export default memo(Login);
