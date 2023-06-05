import { Routes, Route } from "react-router-dom"
import Home from "./home/home"
import NavBar from "./navBar/NavBar"
import Vehicles from "./vehicles/vehicles"
import About from "./about/About"
import Login from "./authorization/Login"
import Regsiter from "./authorization/Register"

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
            <Route path="/signIn" element={<Login />}/>
            <Route path="/signUp" element={<Regsiter />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App