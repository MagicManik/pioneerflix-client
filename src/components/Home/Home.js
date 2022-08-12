import React from "react";
import ScrollToTop from "react-scroll-to-top";
import AskAnswer from "./AskAnswer/AskAnswer";

import Banner from "./Banner";
import "./Home.css";
import MostPopular from "./MostPopular/MostPopular";
import PioneerflixFree from "./PioneerflixFree/PioneerflixFree";
import PioneerflixKids from "./PioneerflixKids/PioneerflixKids";
import PioneerplixExclusive from "./PioneerplixExclusive/PioneerplixExclusive";
import TvChannels from "./TvChannels/TvChannels";

const Home = () => {

  const style = {
    background: "#e6020c",
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
