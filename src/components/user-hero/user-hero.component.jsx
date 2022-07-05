import React from "react";
import {
  HeaderBtn,
  HeaderDescription,
  HeaderImage,
  HeaderTitle,
  HeaderViewInfo,
  HeaderViewInfoLower,
  UserHeroContainer,
} from "./user-hero.styles";

function UserHero({ backdrop }) {
  const { original_title, overview, poster_path, id, backdrop_path } = backdrop;

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : ".......";
  };
  return (
    <UserHeroContainer backdrop_path={backdrop_path}>
      <HeaderViewInfo>
        <HeaderDescription>{truncate(`${overview}`, 150)}</HeaderDescription>
        <HeaderViewInfoLower>
          <HeaderBtn>Like</HeaderBtn>
          <HeaderBtn>Play</HeaderBtn>
        </HeaderViewInfoLower>
        <HeaderTitle>{original_title}</HeaderTitle>
      </HeaderViewInfo>
    </UserHeroContainer>
  );
}

export default UserHero;
