import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
