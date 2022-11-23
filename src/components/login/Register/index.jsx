import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Input, LoginForm } from "../style";
import { ResponseText } from "./style";

const Register = () => {
  const navigate = useNavigate();
  const [text, setText] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      userRole: "",
    },
    onSubmit: (value) =>
      fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          email: value?.email,
          firstname: value?.firstName,
          lastname: value?.lastName,
          password: value?.password,
        }),
      }).then((res) =>
        res?.status === 200 || res?.statusCode === 201
          ? (setText("Successfull..."),
            setTimeout(() => {
              navigate("/login");
            }, 1500))
          : setText(res?.status)
      ),
  });

  return (
    <Container>
      <LoginForm>
        <ResponseText text={text}>{text}</ResponseText>
        <p>Register</p>
        <Form>
          <LoginForm.InputForm>
            <Input
              onChange={formik.handleChange}
              valid={1}
              type="text"
              name="login"
              placeholder="Login"
              autoComplete="none"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={formik.handleChange}
              valid={1}
              type="text"
              name="firstName"
              placeholder="First name"
              autoComplete="none"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={formik.handleChange}
              valid={1}
              type="text"
              name="lastName"
              placeholder="Last name"
              autoComplete="none"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={formik.handleChange}
              valid={1}
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="none"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={formik.handleChange}
              valid={1}
              type="email"
              name="userRole"
              placeholder="User role"
              autoComplete="none"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={formik.handleChange}
              valid={1}
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="none"
            />
          </LoginForm.InputForm>
          <LoginForm.InputForm>
            <Input
              onChange={formik.handleChange}
              valid={1}
              type="password"
              name="prePassword"
              placeholder="Re-enter password"
              autoComplete="none"
            />
          </LoginForm.InputForm>
          <Button onClick={formik.handleSubmit} type="submit">
            Register
          </Button>
        </Form>
        <button className="btn-regis" onClick={() => navigate("/login")}>
          Sign in
        </button>
      </LoginForm>
    </Container>
  );
};

export default Register;
