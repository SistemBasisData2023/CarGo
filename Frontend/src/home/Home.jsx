import { Link } from "react-router-dom";
import ImageSwiper from "./components/ImageSwiper";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-primary h-screen overflow-x-hidden pt-8">
        <div className="flex flex-row w-screen">
          <div>
            <ImageSwiper />
          </div>
          <div className="flex flex-col px-8 m-auto">
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
              <Link to='/vehicles' className="bg-buttonblue text-textblue w-fit px-2 py-2 rounded-md border-2 border-neutral-800">
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Amet mauris commodo quis imperdiet massa tincidunt. Nisl nisi scelerisque eu ultrices vitae auctor. Arcu risus quis varius quam quisque id diam vel quam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Orci nulla pellentesque dignissim enim sit. Sit amet nulla facilisi morbi tempus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Diam vulputate ut pharetra sit amet.

Sed enim ut sem viverra aliquet eget. A scelerisque purus semper eget duis at tellus. Iaculis nunc sed augue lacus viverra vitae congue. Et ultrices neque ornare aenean euismod elementum nisi quis. Aliquet bibendum enim facilisis gravida neque. Purus non enim praesent elementum facilisis leo. Morbi tempus iaculis urna id. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Aliquet risus feugiat in ante metus dictum at tempor. Dignissim suspendisse in est ante in nibh mauris. Non pulvinar neque laoreet suspendisse interdum. Ut etiam sit amet nisl. Bibendum est ultricies integer quis auctor elit sed vulputate.

Sodales ut etiam sit amet. In arcu cursus euismod quis viverra nibh cras pulvinar. Nisi vitae suscipit tellus mauris. Egestas pretium aenean pharetra magna ac. Volutpat diam ut venenatis tellus in metus vulputate. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ac auctor augue mauris augue neque. Lacus luctus accumsan tortor posuere ac.

Aliquet bibendum enim facilisis gravida neque convallis. Nunc mi ipsum faucibus vitae aliquet nec. Augue mauris augue neque gravida in fermentum. Magna ac placerat vestibulum lectus. Egestas erat imperdiet sed euismod nisi porta. Ut etiam sit amet nisl purus in mollis. In aliquam sem fringilla ut morbi. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Tortor posuere ac ut consequat semper viverra nam libero. Elementum sagittis vitae et leo duis. Eleifend donec pretium vulputate sapien nec sagittis. Malesuada pellentesque elit eget gravida cum. Ullamcorper sit amet risus nullam eget felis eget. Rhoncus mattis rhoncus urna neque. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Eu mi bibendum neque egestas congue quisque egestas diam in. Odio morbi quis commodo odio. Tristique nulla aliquet enim tortor at.

Sed cras ornare arcu dui vivamus arcu felis bibendum. Sed lectus vestibulum mattis ullamcorper. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Accumsan in nisl nisi scelerisque. Blandit cursus risus at ultrices. Feugiat nisl pretium fusce id. Semper auctor neque vitae tempus quam pellentesque nec. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Id cursus metus aliquam eleifend mi in nulla. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Eget aliquet nibh praesent tristique magna sit amet. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nulla malesuada pellentesque elit eget gravida. Porta non pulvinar neque laoreet suspendisse interdum. At risus viverra adipiscing at in tellus integer.
    
      </div>
    </>
  )
}

export default Home;