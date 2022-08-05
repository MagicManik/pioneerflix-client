import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import NavbarResponsive from "./components/Shared/Header/Navbar/NavbarResponsive";
import LoginPage from "./components/UserAccount/LoginPage";
import Details from "./components/VideoDetail/Details";


function App() {
  const [theme, setTheme] = useState()
  return (
    <div data-theme={theme ? "dark" : "light"}>
      <NavbarResponsive theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path='/play/:id' element={<Details />} />

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
