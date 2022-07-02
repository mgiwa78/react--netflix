import styled from "styled-components";

export const UserHeroContainer = styled.div`
  width: 100%;
  border: 2px solid black;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: white;
`;
export const HeaderViewInfo = styled.div`
  width: 100%;
  border: 2px solid black;
  height: 50%;
  color: white;
  padding: 30px;
  display: flex;
  flex-direction: column-reverse;
`;
export const HeaderViewInfoLower = styled.div`
  width: max-content;
  display: flex;
  align-items: flex-start;
  height: max-content;
  color: white;
`;
export const HeaderDescription = styled.div`
  width: 450px;
  margin-top: 20px;
  text-align: left;
  color: #e6e6e6;
  font-size: 15px;

  height: max-content;
`;
export const HeaderBtn = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  background-color: rgba(51, 51, 51, 0.5);
  color: #e6e6e6;
  margin-right: 20px;
  font-weight: 700;
  font-size: 20px;
  &:hover {
    background-color: #e6e6e6;
    color: rgba(51, 51, 51, 0.5);
  }
`;
