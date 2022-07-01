import styled from "styled-components";

export const Btn = styled.button`
  color: white;
  background-color: #e50914;
  line-height: normal;
  padding: 7px 17px;
  height: ${({ height }) => (height ? height : "40px")};

  border: none;
  border-radius: 6px;
  font-weight: 400;
  font-size: 0.97rem;
  float: right;
  width: ${({ width }) => (width ? width : "100px")};
`;
