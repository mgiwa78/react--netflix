import React from "react";
import {
  HeaderBtn,
  HeaderDescription,
  HeaderViewInfo,
  HeaderViewInfoLower,
  UserHeroContainer,
} from "./user-hero.styles";

function UserHero() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <UserHeroContainer>
      <HeaderViewInfo>
        <HeaderDescription>
          {truncate(
            "Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939",
            150
          )}
        </HeaderDescription>

        <HeaderViewInfoLower>
          <HeaderBtn>Like</HeaderBtn>
          <HeaderBtn>Play</HeaderBtn>
        </HeaderViewInfoLower>
      </HeaderViewInfo>
    </UserHeroContainer>
  );
}

export default UserHero;
