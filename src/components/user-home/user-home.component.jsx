import UserHero from "../user-hero/user-hero.component";
import { UserHomeContainer, UserHomeHeader } from "./user-home.styles";

const UserHome = () => {
  return (
    <UserHomeContainer>
      <UserHero />
    </UserHomeContainer>
  );
};

export default UserHome;
