import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../button/button.component";
import { SignUserIn } from "../firebase.utils";
import FormInput from "../form-input/form-input.component";
import {
  FormBody,
  FormTitle,
  NavLink,
  SignInContainer,
  SignInForm,
} from "./sign-in.styles";

const SignIn = () => {
  const Navigate = useNavigate();
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

  const handleFormSubmit = async () => {
    await SignUserIn(email, password);
    Navigate("/user");
  };

  // useEffect(() => {
  //   console.log(age);
  // }, [age]);
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
        />{" "}
        <Button handleClick={handleFormSubmit} height="48px" width="314px">
          Sign in
        </Button>
      </SignInForm>

      <FormBody>
        New to Netflix? <NavLink to="/auth/signup">Sign up now.</NavLink>
      </FormBody>
    </SignInContainer>
  );
};

export default SignIn;
