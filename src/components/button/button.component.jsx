import { Btn } from "./button.styles";

const Button = ({ children }) => {
  return <Btn>{...children}</Btn>;
};

export default Button;
