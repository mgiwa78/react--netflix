import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  FormBody,
  FormTitle,
  NavLink,
  SignInContainer,
  SignInForm,
} from "./sign-in.styles";

const SignIn = () => {
  const defaultField = {
    email: "Bean",
    password: "Bean",
  };
  const [formFields, setFormField] = useState(defaultField);
  const { email, password } = formFields;
  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <FormTitle> Sign in</FormTitle>
      <SignInForm>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          placeholder="Enter email"
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          placeholder="Enter Password"
        />
      </SignInForm>
      <Button height="48px" width="314px">
        Sign in
      </Button>
      <FormBody>
        New to Netflix? <NavLink to="/auth/signup">Sign up now.</NavLink>
      </FormBody>
    </SignInContainer>
  );
};

export default SignIn;
