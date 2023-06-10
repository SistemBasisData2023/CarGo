import { Link } from "react-router-dom";
import ImageSwiper from "./components/ImageSwiper";
import { useEffect, useRef } from "react";
import 'react-slideshow-image/dist/styles.css';
import heroCar1 from "/car1-removebg-preview.jpg"
import heroCar2 from "/car2-removebg-preview.jpg"
import heroCar3 from "/car3-removebg-preview.jpg"
import heroCar4 from "/car4-removebg-preview.jpg"
import heroCar5 from "/car5-removebg-preview.jpg"
import power from "/power.svg"
import speed from "/speed.svg"
import steer from "/steer.svg"
import { motion, useInView, useAnimation } from "framer-motion";

const Home = () => {
  const refSwiper = useRef(null);

  const isInView = useInView( refSwiper, {once: true});

  const swiperControls = useAnimation();
  const descriptionControls = useAnimation();

  const heroImages = [
    {name : "heroCar1", src : heroCar1},
    {name : "heroCar2", src : heroCar2},
    {name : "heroCar3", src : heroCar3},
    {name : "heroCar4", src : heroCar4},
    {name : "heroCar5", src : heroCar5},
  ]

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
          <div id="hero-car-images" className="slide-container">
            <div className="w-64 carousel mx-16">
              {
                heroImages.map(image => {
                  return (
                    <div key={image.name} className="carousel-item w-fit">
                      <img src={image.src} className="w-fit"></img>
                    </div>
                  )
                })
              }
            </div>
          </div>
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
      <div className="h-screen">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Amet mauris commodo quis imperdiet massa tincidunt. Nisl nisi scelerisque eu ultrices vitae auctor. Arcu risus quis varius quam quisque id diam vel quam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Orci nulla pellentesque dignissim enim sit. Sit amet nulla facilisi morbi tempus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Diam vulputate ut pharetra sit amet.

Sed enim ut sem viverra aliquet eget. A scelerisque purus semper eget duis at tellus. Iaculis nunc sed augue lacus viverra vitae congue. Et ultrices neque ornare aenean euismod elementum nisi quis. Aliquet bibendum enim facilisis gravida neque. Purus non enim praesent elementum facilisis leo. Morbi tempus iaculis urna id. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Aliquet risus feugiat in ante metus dictum at tempor. Dignissim suspendisse in est ante in nibh mauris. Non pulvinar neque laoreet suspendisse interdum. Ut etiam sit amet nisl. Bibendum est ultricies integer quis auctor elit sed vulputate.

Sodales ut etiam sit amet. In arcu cursus euismod quis viverra nibh cras pulvinar. Nisi vitae suscipit tellus mauris. Egestas pretium aenean pharetra magna ac. Volutpat diam ut venenatis tellus in metus vulputate. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ac auctor augue mauris augue neque. Lacus luctus accumsan tortor posuere ac.

Aliquet bibendum enim facilisis gravida neque convallis. Nunc mi ipsum faucibus vitae aliquet nec. Augue mauris augue neque gravida in fermentum. Magna ac placerat vestibulum lectus. Egestas erat imperdiet sed euismod nisi porta. Ut etiam sit amet nisl purus in mollis. In aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Tortor posuere ac ut consequat semper viverra nam libero. Elementum sagittis vitae et leo duis. Eleifend donec pretium vulputate sapien nec sagittis. Malesuada pellentesque elit eget gravida cum. Ullamcorper sit amet risus nullam eget felis eget. Rhoncus mattis rhoncus urna neque. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Eu mi bibendum neque egestas congue quisque egestas diam in. Odio morbi quis commodo odio. Tristique nulla aliquet enim tortor at.

Sed cras ornare arcu dui vivamus arcu felis bibendum. Sed lectus vestibulum mattis ullamcorper. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Accumsan in nisl nisi scelerisque. Blandit cursus risus at ultrices. Feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque nec. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Id cursus metus aliquam eleifend mi in nulla. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Eget aliquet nibh praesent tristique magna sit amet. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nulla malesuada pellentesque elit eget gravida. Porta non pulvinar neque laoreet suspendisse interdum. At risus viverra adipiscing at in tellus integer.
  
      </div>
    </div>
  )
}

export default Home;