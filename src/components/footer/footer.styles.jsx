import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 30px 0;
  width: 54%;
  margin: auto;
  flex-direction: column;
`;
export const FooterRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 30px;
`;
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const FooterLink = styled.a`
  color: #757575;
  font-size: 13px;
  margin-bottom: 16px;
`;
export const FooterBigLink = styled(FooterLink)`
  font-size: 16px !important;
  margin-top: 20px;
`;
