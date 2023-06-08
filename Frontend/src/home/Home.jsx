import { Link } from "react-router-dom";
import ImageSwiper from "./components/ImageSwiper";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center h-screen pt-8 overflow-x-hidden bg-primary"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: import.meta.env.VITE_ANIMATION_DURATION } }}
      >
        <div className="flex flex-row w-screen">
          <div>
            <ImageSwiper />
          </div>
          <div className="flex flex-col px-8 m-auto">
            <div className="text-right text-8xl">
              <span className="text-buttonblue">{"CarGo".slice(0, 3)}</span>
              <span className="text-textblue">{"CarGo".slice(3)}</span>
            </div>
            <div className="py-2 text-5xl italic text-right text-textblue">
              Buying Cars Made
              <span className="pl-3 text-buttonblue">Simple</span>
            </div>
            <div className="py-8 text-2xl text-right text-textblue">
              CarGo is a car buying platform that makes it simple for you to buy
              cars. We have a myriad of cars and other vehicles to choose from.
              All of our cars are in good condition and are all available at
              affordable prices
            </div>
            <div className="text-right">
              <Link
                to="/vehicles"
                className="px-2 py-2 border-2 rounded-md bg-buttonblue text-textblue w-fit border-neutral-800"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
