import React from "react";
import Banner from "./Banner";
import "./Home.css";
import MostPopular from "./MostPopular/MostPopular";
import PioneerflixFree from "./PioneerflixFree/PioneerflixFree";
import PioneerflixKids from "./PioneerflixKids/PioneerflixKids";
import PioneerplixExclusive from "./PioneerplixExclusive/PioneerplixExclusive";
import TvChannels from "./TvChannels/TvChannels";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <TvChannels></TvChannels>
      <MostPopular></MostPopular>
      <PioneerplixExclusive></PioneerplixExclusive>
      <PioneerflixKids></PioneerflixKids>
      <PioneerflixFree></PioneerflixFree>

      {/* <div className='bg-black flex justify-between items-center py-2 px-10'>
                <h3 className='text-red-500 text-3xl'>Pioneerflix</h3>

                <form>
                    <div className="form-group">
        
                        <input type="text" className="search-field" placeholder="Type to Search" />
                        <select className="search-field">
                                <option>select</option>
                                <option>params 1</option>
                                <option>params 2</option>
                                <option>params 3</option>
                            </select>

                    </div>
                </form>
                <p>U</p>
            </div> */}

      {/* <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque nobis sequi eligendi, fugiat beatae velit sunt et vero exercitationem soluta sed iste esse, ducimus perspiciatis rerum iusto? Sed, iure.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque nobis sequi eligendi, fugiat beatae velit sunt et vero exercitationem soluta sed iste esse, ducimus perspiciatis rerum iusto? Sed, iure.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloremque nobis sequi eligendi, fugiat beatae velit sunt et vero exercitationem soluta sed iste esse, ducimus perspiciatis rerum iusto? Sed, iure.</p>
                </div> */}
    </main>
  );
};

export default Home;
