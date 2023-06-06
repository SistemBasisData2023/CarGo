import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import NavBar from "./navBar/NavBar";
import Vehicles from "./vehicles/Vehicles";
import About from "./about/About";
import Description from "./description/Description";

const App = () => {
  return (
    <div>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/about" element={<About />} />
            <Route path="/description" element={<Description />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
