import React from "react";
import ScrollToTop from "react-scroll-to-top";
import AskAnswer from "../../components/AskAnswer/AskAnswer";
import Banner from "../../components/Banner/Banner";
import TvChannels from "../../components/TvChannels/TvChannels";
import Popular from "../../components/Videos/Popular/Popular";
import Exclusive from "../../components/Videos/Exclusive/Exclusive";
import Kids from "../../components/Videos/Kids/Kids";
import WebSeries from "../../components/Videos/WebSeries/WebSeries";
import Free from "../../components/Videos/Free/Free";
import "./Home.css";

const Home = () => {

  const style = {
    background: "#e6020c",
    right: '35px',
    bottom: '90px',
    borderRadius: "50%"
  }

  return (
    <main className="z-10 mx-auto">
      <Banner />
      <TvChannels />
      <Popular />
      <Exclusive />
      <Kids />
      <WebSeries />
      <Free />
      <AskAnswer />
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
