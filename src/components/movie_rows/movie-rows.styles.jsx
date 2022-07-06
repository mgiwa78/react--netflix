import styled from "styled-components";

export const MovieRowContainer = styled.div`
  width: 100%;

  text-align: left;
  overflow: hidden;
  margin: 10px 0px;
  padding: 0 30px;
`;
export const MovieRowLower = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: hidden;
  overflow-x: scroll;
  height: max-content;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MovieRowTitle = styled.h2`
  font-size: 37px;
  color: white;
  font-weight: 600;
  margin-bottom: 20px;
`;
