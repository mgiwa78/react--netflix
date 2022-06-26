import { SearchBox } from "../search/search.component";
import {
  HeaderBody,
  HeaderSubTitle,
  HeaderText,
  HeaderTitle,
  HomeHeaderContainer,
} from "./home-header.styles";

const HomeHeader = () => {
  return (
    <HomeHeaderContainer>
      {/* <HeaderImage /> */}
      <HeaderBody>
        <HeaderTitle>Unlimited movies, TV shows, and more.</HeaderTitle>
        <HeaderSubTitle>Watch anywhere. Cancel anytime.</HeaderSubTitle>
        <HeaderText>
          Ready to watch? Enter your email to create or restart your membership.
        </HeaderText>
        <SearchBox />
      </HeaderBody>
    </HomeHeaderContainer>
  );
};

export default HomeHeader;
