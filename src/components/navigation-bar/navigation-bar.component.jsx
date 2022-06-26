import { ReactComponent as NetflixLogo } from "./Netflix-Logo.wine.svg";
import { Logo, NavigationContainer } from "./navigation-bar.styles";
import { Btn } from "../button/button.styles";

const NavigationBar = () => {
  return (
    <NavigationContainer>
      <Logo />
      <Btn>Sign in</Btn>
    </NavigationContainer>
  );
};

export default NavigationBar;
