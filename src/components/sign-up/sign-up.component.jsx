import React, { useState } from "react";
import { useParams } from "react-router";
import Button from "../button/button.component";
import {
  createUserDocFromAuth,
  SignUpWithEmailAndPassword,
} from "../firebase.utils";
import FormInput from "../form-input/form-input.component";
import {
  FormBody,
  FormTitle,
  SignUpContainer,
  SignUpForm,
} from "./sign-up.styles";

const SignUp = () => {
  const para = useParams();

  const defaultField = {
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  };
  const [formFields, setFormField] = useState(defaultField);
  const { email, password, confirmPassword, fullName } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async () => {
    const userAuth = await SignUpWithEmailAndPassword(email, password);
    createUserDocFromAuth(userAuth, fullName);
  };

  return (
    <SignUpContainer>
      <FormTitle> Sign Up</FormTitle>
      <SignUpForm onSubmit={handleFormSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          placeholder="Enter email"
        />
        <FormInput
          handleChange={handleChange}
          name="fullName"
          type="text"
          value={fullName}
          placeholder="Enter Full-name"
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          placeholder="Enter password"
        />
        <FormInput
          handleChange={handleChange}
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          placeholder="Confirm email"
        />
        <Button handleClick={handleFormSubmit} height="48px" width="314px">
          Sign Up
        </Button>
      </SignUpForm>

      {para[`*`] !== "signup" ? (
        <FormBody>New to Netflix? Sign up now.</FormBody>
      ) : (
        ""
      )}
    </SignUpContainer>
  );
};

export default SignUp;
