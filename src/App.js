import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import DashboardMainPage from "./components/Dashboard/DashboardMainPage";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Header/Navbar/Navbar";
import NavbarResponsive from "./components/Shared/Header/Navbar/NavbarResponsive";
import LoginPage from "./components/UserAccount/LoginPage";
import SignUpPage from "./components/UserAccount/SignUpPage";
import Details from "./components/VideoDetail/Details";


function App() {
  const [theme, setTheme] = useState(true)
  return (
    <div data-theme={theme ? "dark" : "light"}>
      {/* <Navbar theme={theme} setTheme={setTheme}></Navbar> */}
      <NavbarResponsive theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/dashboard" element={<DashboardMainPage></DashboardMainPage>}></Route>
        <Route path='/ok' element={<Details />} />

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
