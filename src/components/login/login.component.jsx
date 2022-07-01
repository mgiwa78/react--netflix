import { Route, Routes } from "react-router";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import { LoginContainer } from "./login.styles";

const Auth = () => {
  return (
    <LoginContainer>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </LoginContainer>
  );
};

export default Auth;
