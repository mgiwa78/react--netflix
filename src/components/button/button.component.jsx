import { Btn } from "./button.styles";

const Button = ({ height, width, children }) => {
  return (
    <Btn height={height} width={width}>
      {children}
    </Btn>
  );
};

export default Button;
