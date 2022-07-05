import { useEffect } from "react";
import { Route, Routes } from "react-router";
import FaqSecction from "../Faq/faq-section.component";
import Footer from "../footer/footer.component";
import HomeHeader from "../home-header/home-header.component";
import JumboItem from "../jumbo-item/jumdo-item.component";
import JumboSection from "../jumbo-section/jumbo-section.component";
import Login from "../login/login.component";
import { HomeContainer } from "./home.style";

const Home = () => {

  return (
    <HomeContainer>
      <HomeHeader />
      <Routes>
        <Route element={<Login />} path={"/login"}></Route>
      </Routes>
      <JumboSection />
      <FaqSecction />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
