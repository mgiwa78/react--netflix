import Footer from "../footer/footer.component";
import HomeHeader from "../home-header/home-header.component";
import JumboItem from "../jumbo-item/jumdo-item.component";
import JumboSection from "../jumbo-section/jumbo-section.component";
import { HomeContainer } from "./home.style";

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader />
      <JumboSection />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
