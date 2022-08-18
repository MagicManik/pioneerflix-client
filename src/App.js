import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import About from "./components/About/About";
import DashboardMainPage from "./components/Dashboard/DashboardMainPage";
import MakeAdmin from "./components/Dashboard/MakeAdmin";
import ManageVideos from "./components/Dashboard/ManageVideos";
import MyProfile from "./components/Dashboard/MyProfile";
import MyVideos from "./components/Dashboard/MyVideos";
import UploadVideo from "./components/Dashboard/UploadVideo";
import Home from "./components/Home/Home";
import TvChannel from "./components/Home/TvChannels/TvChannel";
import Library from "./components/watchList/WatchList";
import Footer from "./components/Shared/Footer/Footer";
import NavbarResponsive from "./components/Shared/Header/Navbar/NavbarResponsive";
import LoginPage from "./components/UserAccount/LoginPage";
import SignUpPage from "./components/UserAccount/SignUpPage";
import Details from "./components/VideoDetail/Details";
import Favorite from "./components/VideoDetail/Favorite";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import 'react-toastify/dist/ReactToastify.css';
import Comedy from "./components/Shared/Header/MegaMenu.js/Comedy";
import Bangla from "./components/Shared/Header/MegaMenu.js/Bangla";
import Drama from "./components/Shared/Header/MegaMenu.js/Drama";
import Latest from "./components/Shared/Header/MegaMenu.js/Latest";
import Series from "./components/Shared/Header/MegaMenu.js/Series";
import Thriller from "./components/Shared/Header/MegaMenu.js/Thriller";
import LiveGame from "./components/Shared/Header/MegaMenu.js/LiveGame";
import Popular from "./components/Shared/Header/MegaMenu.js/Popular";
import Clips from "./components/Shared/Header/MegaMenu.js/Clips";
import Episodes from "./components/Shared/Header/MegaMenu.js/Episodes";
import UpComing from "./components/Shared/Header/MegaMenu.js/UpComing";


function App() {
  const [theme, setTheme] = useState(true);

  let getTheme = localStorage.getItem("colorTheme");

  useEffect(() => {
    if (getTheme === "dark") {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [getTheme])



  return (
    <div data-theme={theme ? "dark" : "light"}>
      <NavbarResponsive theme={theme} setTheme={setTheme} />
      {/* <Test/> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>

        <Route
          path="/dashboard"
          element={<DashboardMainPage></DashboardMainPage>}
        >
          <Route path="" index element={<MyProfile></MyProfile>}></Route>
          <Route
            path="uploadVideo"
            element={<UploadVideo></UploadVideo>}
          ></Route>
          <Route path="myVideos" element={<MyVideos></MyVideos>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route
            path="manageVideos"
            element={<ManageVideos></ManageVideos>}
          ></Route>
        </Route>


        <Route path='/play/:id' element={<Details />} />
        <Route path='/channel/:id' element={<TvChannel />}></Route>
        <Route path="watchList" element={<Library />}></Route>
        <Route path="favorite" element={<Favorite />}></Route>
        <Route path="/play/:id" element={<Details />} />

        <Route path='/comedy' element={<Comedy/>}/>
        <Route path='/bangla' element={<Bangla/>}/>
        <Route path='/drama' element={<Drama/>}/>
        <Route path='/latest' element={<Latest/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/thriller' element={<Thriller/>}/>

        <Route path='/games' element={<LiveGame/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/clips' element={<Clips/>}/>
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='/upComing' element={<UpComing/>}/>
      </Routes>

      {/*...................add facebook messenger .................*/}
      <MessengerCustomerChat pageId="110278435120347" appId="592904995642640" />
      
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;