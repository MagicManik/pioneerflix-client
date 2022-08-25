import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
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
import SearchResults from "./components/Shared/SearchResults/SearchResults";
import PaymentPage from "./components/Payments/PaymentPage";
import Payments from "./components/Payments/Payments";
import TvShows from "./components/TvShows/TvShows";
import Movies from "./components/Movies/Movies";
import UploadedVideo from "./components/Shared/Header/Uploaded/UploadedVideo";
import { Suspense } from "react";
import Loading from "./components/Shared/Loading/Loading";
import RequireAuth from "./components/UserAccount/RequireAuth";



function App() {
  const [theme, setTheme] = useState(true);

  let getTheme = localStorage.getItem("colorTheme");

  useEffect(() => {
    if (getTheme === "dark") {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [getTheme]);

  return (
    <div data-theme={theme ? "dark" : "light"}>
      <NavbarResponsive theme={theme} setTheme={setTheme} />
     <Suspense fallback={<Loading></Loading>}>
     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/channel/:id' element={<TvChannel />}></Route>
        <Route path="watchList" element={<Library />}></Route>
        <Route path="favorite" element={<Favorite />}></Route>
        <Route path='/play/:id'
          element={
            <RequireAuth>
              <Details />
            </RequireAuth>
          }
        />
        <Route path="/result/:id" element={<SearchResults></SearchResults>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/solvePay" element={<Payments />} />
        <Route path="/paymentPage" element={<PaymentPage />} />
        <Route path="/tv" element={<TvShows></TvShows>}></Route>
        <Route path="/movies" element={<Movies></Movies>}></Route>

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

      <Route path='/uploadedVideo/:uId' element={<UploadedVideo/>}/>
      </Routes>
     </Suspense>

      {/*...................add facebook messenger .................*/}
      <MessengerCustomerChat pageId="105173368974353" appId="3382482022037618" />
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;