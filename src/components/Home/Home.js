import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import './Home.css';
import KidsProfile from './KidsProfile/KidsProfile';
import MostPopular from './MostPopular/MostPopular';
import TvChannels from './TvChannels/TvChannels';
import WatchOffline from './WatchOffline/WatchOffline';
import WatchTv from './WatchTv/WatchTv';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <TvChannels></TvChannels>
            <WatchTv></WatchTv>
            <MostPopular></MostPopular>



            <WatchOffline></WatchOffline>
            <KidsProfile></KidsProfile>

            <Footer></Footer>

            {/* <div className='bg-black flex justify-between items-center py-2 px-10'>
                <h3 className='text-red-500 text-3xl'>Pioneerflix</h3>

                <form>
                    <div class="form-group">
        
                        <input type="text" class="search-field" placeholder="Type to Search" />
                        <select class="search-field">
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