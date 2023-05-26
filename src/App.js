import { useEffect, useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import DashboardMainPage from "./components/Dashboard/DashboardMainPage";
import MakeAdmin from "./components/Dashboard/MakeAdmin";
import ManageVideos from "./components/Dashboard/ManageVideos";
import MyProfile from "./components/Dashboard/MyProfile";
import MyVideos from "./components/Dashboard/MyVideos";
import UploadVideo from "./components/Dashboard/UploadVideo";
import TvChannel from "./components/TvChannels/TvChannel";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import LoginPage from "./components/UserAccount/LoginPage";
import SignUpPage from "./components/UserAccount/SignUpPage";
import Details from "./components/VideoDetail/Details";
import SearchResults from "./components/Shared/SearchResults/SearchResults";
import PaymentPage from "./pages/Payments/PaymentPage";
import Payments from "./pages/Payments/Payments";
import TvShows from "./components/TvShows/TvShows";
import Drama from "./pages/Drama/Drama";
import UploadedVideo from "./components/Shared/Header/Uploaded/UploadedVideo";
import Loading from "./components/Shared/Loading/Loading";
import RequireAuth from "./components/UserAccount/RequireAuth";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import MyList from "./components/UsersData/MyList/MyList";
import LikedVideos from "./components/UsersData/LikedVideos/LikedVideos";
import WatchList from "./components/UsersData/WatchList/WatchList";
import Bangla from "./pages/movies/Bangla/Bangla";
import Chinese from "./pages/movies/Chinese/Chinese";
import English from "./pages/movies/English/English";
import Hindi from "./pages/movies/Hindi/Hindi";
import Japanese from "./pages/movies/Japanese/Japanese";
import Turkish from "./pages/movies/Turkish/Turkish";
// facebook chat
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
// Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme] = useState(true);
  let getTheme = localStorage.getItem("theme");

  useEffect(() => {
    if (getTheme === "dark") {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [getTheme]);

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div data-theme={theme ? "dark" : "light"}>
      <Header theme={theme} setTheme={setTheme} />
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/likedvideos" element={<LikedVideos />}></Route>
          <Route path="mylist" element={<MyList />}></Route>
          <Route path="watch/hisory" element={<WatchList />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path='/channel/:id' element={<TvChannel />}></Route>
          <Route path='/play/:id' element={<RequireAuth><Details /></RequireAuth>} />
          <Route path="/result/:id" element={<SearchResults />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/pay" element={<Payments />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
          <Route path="/tv" element={<TvShows />}></Route>
          <Route path="/drama" element={<Drama />}></Route>
          <Route path="/games" element={<Drama />}></Route>
          <Route path="/popular" element={<Bangla />}></Route>
          <Route path="/latest" element={<Drama />}></Route>
          <Route path="/clips" element={<Bangla />}></Route>
          <Route path="/episodes" element={<VideoDetail />}></Route>
          <Route path="/upComing" element={<Bangla />}></Route>
          <Route path="/bangla" element={<Bangla />}></Route>
          <Route path="/english" element={<English />}></Route>
          <Route path="/hindi" element={<Hindi />}></Route>
          <Route path="/japanese" element={<Japanese />}></Route>
          <Route path="/chinese" element={<Chinese />}></Route>
          <Route path="/turkish" element={<Turkish />}></Route>
          <Route path='/uploadedVideo/:uId' element={<UploadedVideo />} />
          <Route path="/comedy" element={<VideoDetail />}></Route>
          <Route path="/comedy" element={<VideoDetail />}></Route>
          <Route path="/thriller" element={<VideoDetail />}></Route>
          <Route path="/comedy" element={<VideoDetail />}></Route>
          <Route path="/bangla" element={<Bangla />}></Route>
          <Route path="/dashboard" element={<DashboardMainPage />}>
            <Route path="" index element={<MyProfile />}></Route>
            <Route path="uploadVideo" element={<UploadVideo />}></Route>
            <Route path="myVideos" element={<MyVideos />}></Route>
            <Route path="makeAdmin" element={<MakeAdmin />}></Route>
            <Route path="manageVideos" element={<ManageVideos />}></Route>
          </Route>
        </Routes>
      </Suspense>
      {/* ...................add facebook messenger ................ */}
      <MessengerCustomerChat pageId="105173368974353" appId="3382482022037618" />
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;