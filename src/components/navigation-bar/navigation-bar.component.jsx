import { Logo, NavigationContainer, NavLink } from "./navigation-bar.styles";
import { Btn } from "../button/button.styles";
import { useNavigate } from "react-router";

const NavigationBar = () => {
  const Navigate = useNavigate();
  return (
    <NavigationContainer>
      <Logo onClick={() => Navigate("/")} />
      <Btn>
        <NavLink to="/auth">Sign in</NavLink>
      </Btn>
    </NavigationContainer>
  );
};

export default NavigationBar;
