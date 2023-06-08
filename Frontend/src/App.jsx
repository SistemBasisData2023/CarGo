import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import NavBar from "./navBar/NavBar";
import Vehicles from "./vehicles/Vehicles";
import About from "./about/About";
import Description from "./description/Description";
import AnimatedRoutes from "./AnimatedRoutes";

const App = () => {
  return (
    <div className="bg-primary">
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <AnimatedRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
