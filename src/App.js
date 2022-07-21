import { Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Home/Banner";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-center bg-primary text-red-500">
        Pioneerflix
      </h1>
      <Banner></Banner>
      <Routes></Routes>
    </div>
  );
}

export default App;
