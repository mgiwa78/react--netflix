import { Logo, NavigationContainer, NavLink } from "./navigation-bar.styles";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/user.context";
import { useContext, useEffect } from "react";
import { AuthHandler, SignUserOut } from "../firebase.utils";
import Button from "../button/button.component";

const NavigationBar = () => {
  const { user, UpdateUser } = useContext(UserContext);
  const Navigate = useNavigate();

  useEffect(() => {
    AuthHandler(UpdateUser);
  }, []);

  const SignOuthandler = () => {
    console.log("hi");
    UpdateUser(null);
    Navigate("/");

    SignUserOut();
  };
  return (
    <NavigationContainer>
      <Logo onClick={() => Navigate("/")} />
      {user ? (
        <Button to="/" handleClick={SignOuthandler}>
          Sign out
        </Button>
      ) : (
        <NavLink to="/auth">Sign in</NavLink>
      )}
    </NavigationContainer>
  );
};

export default NavigationBar;
