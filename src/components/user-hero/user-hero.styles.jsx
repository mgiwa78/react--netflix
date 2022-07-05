import styled from "styled-components";

export const UserHeroContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: white;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.62) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${({ backdrop_path }) => `${backdrop_path}`});
`;
export const HeaderViewInfo = styled.div`
  margin-left: 25px;
  width: 100%;
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
  font-size: 20px;

  height: max-content;
`;
export const HeaderTitle = styled.div`
  font-size: 65px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 20px;
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
