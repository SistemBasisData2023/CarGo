import { Link } from "react-router-dom";
import ImageSlider from "./components/ImageSlider";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-slate-200 to-slate-500 h-screen">
      <div className="flex flex-row w-screen">
        <div>
          <ImageSlider />
        </div>
        <div className="flex flex-col px-8 m-auto">
          <div className="text-right text-8xl">
            <span className="text-cyan-300">
              {"CarGo".slice(0, 3)}
            </span>
            <span className="text-neutral-800">
              {"CarGo".slice(3)}
            </span>
          </div>
          <div className="text-right text-5xl py-2 text-neutral-800 italic">
            Buying Cars Made
            <span className="pl-3 text-cyan-300">
              Simple
            </span>
          </div>
          <div className="text-2xl py-8 text-right">
            CarGo is a car buying platform that makes it simple for you to buy cars. We have a myriad of cars and other vehicles to choose from. All of our cars are in good condition and are all available at affordable prices 
          </div>
          <div className="text-right">
            <Link to='/vehicles' className="bg-indigo-600 text-black w-fit px-2 py-2 rounded-md border-2 border-neutral-800">
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;