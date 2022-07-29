import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Header/Navbar/Navbar";
import LoginPage from "./components/UserAccount/LoginPage";
import Details from "./components/VideoDetail/Details";


function App() {
  const [theme,setTheme]=useState(true)
  return (
    <div data-theme={theme ?"dark" : "light"}>
      <Navbar theme={theme} setTheme={setTheme}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path='/ok' element={<Details />} />

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
