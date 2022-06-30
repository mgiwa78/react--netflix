import styled from "styled-components";
import { ReactComponent as NetflixLogo } from "./Netflix-Logo.wine.svg";

export const Logo = styled(NetflixLogo)`
  height: auto;
  width: 210px;
  margin: -20px 0;
  box-sizing: border-box;
`;
export const NavigationContainer = styled.div`
  width: 100%;
  padding: 0 40px;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;
