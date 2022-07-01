import { Logo, NavigationContainer, NavLink } from "./navigation-bar.styles";
import { Btn } from "../button/button.styles";

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
