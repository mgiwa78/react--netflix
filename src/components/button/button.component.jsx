import { Btn } from "./button.styles";

const Button = ({ handleClick, height, width, children }) => {
  return (
    <Btn
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      height={height}
      width={width}
    >
      {children}
    </Btn>
  );
};

export default Button;
