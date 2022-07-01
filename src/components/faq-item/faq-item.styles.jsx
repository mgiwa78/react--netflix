import styled, { css } from "styled-components";
import { ReactComponent as PlusSvg } from "./assets/plus.svg";

export const FaqItemConstiner = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 815px;
  margin-bottom: 10px;
  text-align: left;
`;

const changeToggle = (prevState) => {
  console.log(prevState);
  return prevState === true
    ? css`
        display: block;
        @keyframes anima {
          0% {
            height: 0px;
            padding: 0px 50px;
            margin: 0px;
          }

          70% {
            height: max-content;
          }

          100% {
            height: max-content;
            padding: 30px 50px;
          }
        }
      `
    : css`
        animation-fill-mode: backwards;
        display: none;

        @keyframes anima {
          0% {
            height: max-content;
            padding: 30px 50px;
          }
          70% {
            height: 50px;
            padding: 30px 50px;
          }

          100% {
            height: 0px;
            padding: 0px 50px;
            margin: 0px;
            display: none;
          }
        }
      `;
};

export const PlusIcon = styled(PlusSvg)`
  height: auto;
  width: 35px;
  box-sizing: border-box;
  fill: white;
  position: absolute;

  right: 0;
  margin-right: 50px;
`;
export const FaqQuestion = styled.div`
  width: 100%;
  padding-left: 50px;
  align-items: center;
  display: flex;
  background-color: #222;

  justify-content: space-between;
  position: relative;
  height: 75px;
`;
export const FaqTitle = styled.div`
  width: max-content;
  font-size: 26px;
`;
export const FaqAnswer = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  font-size: 26px;
  margin-top: 3px;
  animation: anima 0.25s;
  transition: all;
  display: inline-block;

  padding: 30px 50px;
  background-color: #222;
  ${({ showToggle }) => {
    return changeToggle(showToggle);
  }}
`;
