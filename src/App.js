import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Header/Navbar/Navbar";
import VideoDetail from "./components/VideoDetail/VideoDetail";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/details' element={<VideoDetail/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
