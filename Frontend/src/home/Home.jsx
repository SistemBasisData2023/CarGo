import { Link, useNavigate } from "react-router-dom";
import HeroCarousel from "./components/HeroCarousel";
import ImageSwiper from "./components/ImageSwiper";
import CardsScroller from "./components/CardsScroller";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
import power from "/power.svg"
import speed from "/speed.svg"
import steer from "/steer.svg"
import { motion, useInView, useAnimation } from "framer-motion";


const Home = () => {
  const refSwiper = useRef(null);

  const navigate = useNavigate();

  const isInView = useInView( refSwiper, {once: true});

  const swiperControls = useAnimation();
  const descriptionControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      swiperControls.start("visible");
    }
  }, [isInView, swiperControls]);

  useEffect(() => {
    if(isInView) {
      descriptionControls.start("visible");
    }
  }, [isInView, descriptionControls]);

  const start = () => {
    refSwiper.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className="bg-primary w-full h-full">
      <div id="hero-section" className="flex items-center justify-center overflow-x-hidden h-screen mt-8">
        <div className="w-fit">
          <div id="hero-title" className="text-center text-7xl font-bold">
            <span className="text-buttonblue">
              {"CarGo".slice(0, 3)}
            </span>
            <span className="text-textblue">
              {"CarGo".slice(3)}
            </span>
          </div>
          <div id="hero-subtitle" className="text-right text-4xl py-2 text-textblue italic">
            Buying Cars Made
            <span className="pl-3 text-buttonblue">
              Simple
            </span>
          </div>
          <HeroCarousel />
          <div id="hero-stats" className="grid grid-cols-2 gap-2">
            <img src={speed} className="w-[30px] mx-auto mt-4"></img>
            <img src={power} className="w-[30px] mx-auto mt-4"></img>
            <div className="mx-auto font-bold text-lg">200 km/h</div>
            <div className="mx-auto font-bold text-lg">80%</div>
            <div className="mx-auto text-sm font-bold text-slate-500">SPEED</div>
            <div className="mx-auto text-sm font-bold text-slate-500">ELECTRIC</div>
          </div>
          <div id="hero-steer-button" className="items-center justify-center">
            <img src={steer} className="w-[50px] mx-auto my-4 hover:bg-slate-500 hover:rounded-full" onClick={start}></img>
          </div>
        </div>
      </div>
      <div className="second-section h-screen grid grid-cols-2 gap-4 mt-16 items-center justify-center" ref={refSwiper}>
        <div>
          <motion.div variants={{
            hidden: { opacity:0, y: -100 },
            visible: { opacity:1, y: 0 },
          }}
            initial="hidden"
            animate={swiperControls}
            transition={{ duration: 0.5, delay : 0.25 }}
          >
            <ImageSwiper />
          </motion.div>
        </div>
        <div className="flex flex-col px-8 m-auto">
          <motion.div variants={{
            hidden: { opacity:0, y: 100 },
            visible: { opacity:1, y: 0 },
          }}
            initial="hidden"
            animate={descriptionControls}
            transition={{ duration: 0.5, delay : 0.25 }}
          >
            <div className="text-right text-8xl">
              <span className="text-buttonblue">
                {"CarGo".slice(0, 3)}
              </span>
              <span className="text-textblue">
                {"CarGo".slice(3)}
              </span>
            </div>
            <div className="text-right text-5xl py-2 text-textblue italic">
              Buying Cars Made
              <span className="pl-3 text-buttonblue">
                Simple
              </span>
            </div>
            <div className="text-2xl py-8 text-right text-textblue">
              CarGo is a car buying platform that makes it simple for you to buy cars. We have a myriad of cars and other vehicles to choose from. All of our cars are in good condition and are all available at affordable prices 
            </div>
            <div className="text-right">
              <Link to="/about">
                <button className="btn hover:bg-secondary hover:text-textblue bg-buttonblue text-secondary w-fit">
                    Know More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div id="third-section">
        <h1 className="text-4xl text-center my-8 text-textblue font-bold tracking-wide mx-auto w-fit shadow-xl">
          AVAILABLE CARS
        </h1>
        <div className="my-8 items-center justify-center">
          <CardsScroller />
        </div>
        <div className="items-center justify-center text-center">
          <button className="btn hover:bg-secondary hover:text-textblue bg-buttonblue text-secondary mb-16" onClick={() => {navigate('/vehicles');}}>View All Vehicles</button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;