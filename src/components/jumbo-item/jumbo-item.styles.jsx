import styled from "styled-components";

export const JumdoItemContainer = styled.div`
  width: 100vw;
  display: flex;
  padding: 40px 60px;
  flex-direction: ${({ direction }) => direction};
  background-color: #000;
  margin: 8px 0;

  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

export const JumboBox = styled.div`
  width: 50%;
  color: white;
  ${({ padding }) => `padding-${padding}:40px;`}
`;
export const JumboTitle = styled.p`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  font-weight: bold;
`;
export const JumboBody = styled.p`
  font-size: 1.625rem;
  font-weight: 400;
`;
export const JumboImage = styled.img`
  background-image: url(${({ image }) => image});
  max-width: 100%;
  height: auto;
  width: 500px;
`;
