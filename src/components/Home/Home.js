import React from "react";

import AskAnswer from "./AskAnswer/AskAnswer";

import Banner from "./Banner";
import "./Home.css";
import MostPopular from "./MostPopular/MostPopular";
import PioneerflixFree from "./PioneerflixFree/PioneerflixFree";
import PioneerflixKids from "./PioneerflixKids/PioneerflixKids";
import PioneerplixExclusive from "./PioneerplixExclusive/PioneerplixExclusive";
import TvChannels from "./TvChannels/TvChannels";

const Home = () => {
  return (
    <main className="z-10">
      <Banner></Banner>
      <TvChannels></TvChannels>
      <MostPopular></MostPopular>
      <PioneerplixExclusive></PioneerplixExclusive>
      <PioneerflixKids></PioneerflixKids>
      <PioneerflixFree></PioneerflixFree>
      <AskAnswer></AskAnswer>
  
    </main>
  );
};

export default Home;
