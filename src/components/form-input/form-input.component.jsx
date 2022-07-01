import React from "react";
import { FormInputField } from "./form-input.styles";

const FormInput = ({ handleChange, value, type, name, placeholder }) => {
  return (
    <FormInputField
      onChange={handleChange}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
    ></FormInputField>
  );
};

export default FormInput;
