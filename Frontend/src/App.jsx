import { Routes, Route } from "react-router-dom"
import Home from "./home/home"
import NavBar from "./navBar/NavBar"
import Vehicles from "./vehicles/vehicles"
import About from "./about/About"

const App = () => {
  return (
    <div>
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/vehicles" element={<Vehicles />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App