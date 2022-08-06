import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import DashboardMainPage from "./components/Dashboard/DashboardMainPage";
import MakeAdmin from "./components/Dashboard/MakeAdmin";
import ManageVideos from "./components/Dashboard/ManageVideos";
import MyProfile from "./components/Dashboard/MyProfile";
import MyVideos from "./components/Dashboard/MyVideos";
import UploadVideo from "./components/Dashboard/UploadVideo";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import NavbarResponsive from "./components/Shared/Header/Navbar/NavbarResponsive";
import LoginPage from "./components/UserAccount/LoginPage";
import SignUpPage from "./components/UserAccount/SignUpPage";
import Details from "./components/VideoDetail/Details";


function App() {
  const [theme, setTheme] = useState(true)

  let getTheme=localStorage.getItem('colorTheme')

  useEffect(()=>{
    if(getTheme ==='dark'){
      setTheme(true)
    }
    else{
      setTheme(false)
    }
  },[getTheme])
  return (
    <div data-theme={theme ? "dark" : "light"}>
      <NavbarResponsive theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/dashboard" element={<DashboardMainPage></DashboardMainPage>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="uploadVideo" element={<UploadVideo></UploadVideo>}></Route>
          <Route path="myVideos" element={<MyVideos></MyVideos>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="manageVideos" element={<ManageVideos></ManageVideos>}></Route>
        </Route>
        <Route path='/play/:id' element={<Details />} />

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
