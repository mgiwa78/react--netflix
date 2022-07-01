import { ReactComponent as NetflixLogo } from "./Netflix-Logo.wine.svg";
import { Logo, NavigationContainer, NavLink } from "./navigation-bar.styles";
import { Btn } from "../button/button.styles";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <NavigationContainer>
      <Logo />
      <Btn>
        <NavLink to="/auth">Sign in</NavLink>
      </Btn>
    </NavigationContainer>
  );
};

export default NavigationBar;
