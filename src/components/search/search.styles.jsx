import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 780px;
  height: 80px;
  display: flex;
`;
export const Search = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  padding-left: 20px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  font-size: 20px;

  &::placeholder {
    font-size: 20px;
  }
`;
export const SubmitBtn = styled.button`
  width: 30%;
  border: none;

  height: 100%;
  background-color: #e50914;
  color: white;
  font-size: 30px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;
