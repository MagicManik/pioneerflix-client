import React from "react";
import AskAnswer from "./AskAnswer/AskAnswer";
import Banner from "./Banner";
import MostPopular from "./MostPopular/MostPopular";
import PioneerflixFree from "./PioneerflixFree/PioneerflixFree";
import PioneerflixKids from "./PioneerflixKids/PioneerflixKids";
import PioneerplixExclusive from "./PioneerplixExclusive/PioneerplixExclusive";
import TvChannels from "./TvChannels/TvChannels";
import ScrollToTop from "react-scroll-to-top";
import "./Home.css";

const Home = () => {

  const style = {
    background: "#e6020c",
    right: '90px',
    bottom: '30px',
    borderRadius: "50%"
  }

  return (
    <main className="z-10">
      <Banner></Banner>
      <TvChannels></TvChannels>
      <MostPopular></MostPopular>
      <PioneerplixExclusive></PioneerplixExclusive>
      <PioneerflixKids></PioneerflixKids>
      <PioneerflixFree></PioneerflixFree>
      <AskAnswer></AskAnswer>

      <ScrollToTop
        smooth
        top="100"
        width="40"
        height="20"
        style={style}
      />
    </main>
  );
};

export default Home;
