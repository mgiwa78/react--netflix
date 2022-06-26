import styled from "styled-components";

// export const HeaderImage = styled.div`

//   height: 100%;
//   z-index: -1;
//   position: relative;
// `;
export const HeaderBody = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 100%,
    rgb(0, 0, 0) 100%
  );
  background: rgba(0, 0, 0, 0.4);
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.8)),
    color-stop(60%, rgba(0, 0, 0, 0)),
    to(rgba(0, 0, 0, 0.8))
  );
  background-image: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background-image: -moz-
    oldlinear-gradient(
      bottom,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  background-image: -o-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );

  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;
export const HomeHeaderContainer = styled.div`
  width: 100vw;
  background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/8af3fce9-14f2-4fda-a923-1e8e4aa2e38b/NG-en-20220620-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const HeaderTitle = styled.h1`
  font-size: 3.925rem;
  text-align: center;
  width: 770px;
  margin-bottom: 15px;
`;
export const HeaderSubTitle = styled.span`
  font-size: 1.625rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 30px;
`;
export const HeaderText = styled.span`
  padding-bottom: 20px;
  font-size: 1.2rem;
`;
