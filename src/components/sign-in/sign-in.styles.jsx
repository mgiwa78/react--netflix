import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 72px;
  justify-content: flex-start;
  width: 460px;
  height: 490px;
  text-align: left;
  background-color: #000000df;
  border-radius: 5px;
`;
export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
export const FormTitle = styled.h2`
  color: white;
  font-size: 32px;
  margin-bottom: 30px;
`;
export const FormBody = styled.p`
  color: white;
  font-size: 15px;
  margin: 60px 0;
`;
export const NavLink = styled(Link)`
  color: white;
  &:focus {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`;
