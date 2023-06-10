import NavBar from "./navBar/NavBar";
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
