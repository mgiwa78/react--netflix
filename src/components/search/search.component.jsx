import { Search, SearchContainer, SubmitBtn } from "./search.styles";

export const SearchBox = () => {
  return (
    <SearchContainer>
      <Search placeholder="Email address"></Search>
      <SubmitBtn>Get Started</SubmitBtn>
    </SearchContainer>
  );
};
