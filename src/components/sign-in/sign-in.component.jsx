import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
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
  const { age,} = useContext(UserContext);
  const defaultField = {
    email: "",
    password: "",
  };
  const [formFields, setFormField] = useState(defaultField);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formFields, [name]: value });
  };
  useEffect(() => {
    console.log(age);
  }, [age]);
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
