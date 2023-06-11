import React from "react";
import { motion } from "framer-motion";
import { FaCalendarDay, FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import { MdOutlinePayment, MdCancelPresentation } from "react-icons/md";

const example = {
    name: "kena",
    email: "kresnarmdn@gmail.com",
    phone_no: "08123696969",
    full_name: "Kena Ramdani",
};

const order = {
  quantity: "1",
  total_price: "660.000.000",
};

const car = {
  name: "CarGo© R1T",
  year: 2022,
  price: "660.0000",
  mpg: "25",
  transmission: "Automatic",
  type: "EV",
  description:
    "CarGo© R1T is an all-electric pickup truck that combines ruggedness, advanced technology, and sustainable performance. It aims to provide an electric alternative in the pickup truck segment, offering versatility, capability, and zero-emission driving.",
  image_url:
    "https://media.rivian.com/rivian-main/image/upload/f_auto,q_auto/v1/rivian-com/r1t/Hero_-_Desktop_mpjmqe",
};

const About = () => {
  return (
    <>
      <motion.div
        className="pt-[64px] bg-primary h-screen w-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{
          x: window.innerWidth,
          transition: { duration: import.meta.env.VITE_ANIMATION_DURATION },
        }}
      >
        <div className="grid grid-cols-8">
          {/* Left Side Menu */}
          <div className="h-[91.5vh] col-span-2 bg-primary ">
            <div className="black-pattern h-40 w-40 rounded-full mx-auto my-8"></div>
            <div className="w-80 mx-auto">
              <h1 className="my-2 text-white text-center font-semibold text-2xl">
                {example.full_name}
              </h1>
              <h2 className="my-1 text-white text-center text-sm">
                {example.email}
              </h2>
              <h2 className="my-1 text-white text-center text-sm">
                {example.name}
              </h2>
              <div className="flex text-white mt-4 justify-center">
                {/* <div className="flex justify-start">
                  <FaMapMarkerAlt className="text-white text-2xl ml-8" />
                </div> */}
              </div>
              <div className="flex justify-center mt-16">
                <button className="flex justify-center bg-buttonblue rounded-md text-white w-40 h-10 mx-4" onClick={()=>window.my_modal_1.showModal()}>
                  <p className="my-auto">Add Dealer</p>
                </button>
                <dialog id="my_modal_1" className="modal">
                  <form method="dialog" className="modal-box">
                   <h3 className="font-bold text-lg ">Add Dealer</h3>
                   <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs mt-20" />
                   <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs mt-5 mb-5" />
                   <p className="py-4">Press ESC key or click the button below to close</p>
                   <div className="modal-action">
                     <button className="btn">Close</button>
                     <button className="btn">Enter</button>
                   </div>
                  </form>
                </dialog>
                <button className="flex justify-center bg-buttonblue rounded-md text-white w-40 h-10 mx-4" onClick={()=>window.my_modal_2.showModal()}>
                  <p className="my-auto">Add Cars</p>
                </button>
                <dialog id="my_modal_2" className="modal">
                  <form method="dialog" className="modal-box">
                   <h3 className="font-bold text-lg">Add Cars</h3>
                   <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mt-20" />
                   <input type="text" placeholder="Year" className="input input-bordered w-full max-w-xs mt-5" />
                   <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs mt-5" />
                   <input type="text" placeholder="mpg" className="input input-bordered w-full max-w-xs mt-5" />
                   <input type="text" placeholder="Transmission" className="input input-bordered w-full max-w-xs mt-5" />
                   <input type="text" placeholder="Type" className="input input-bordered w-full max-w-xs mt-5" />
                   <textarea placeholder="Description" className="textarea textarea-bordered w-full max-w-xs mt-5"></textarea>
                   <input type="text" placeholder="Image Url" className="input input-bordered w-full max-w-xs mt-5 mb-5" />
                   <p className="py-4">Press ESC key or click the button below to close</p>
                   <div className="modal-action">
                     <button className="btn">Close</button>
                     <button className="btn">Enter</button>
                   </div>
                  </form>
                </dialog>
              </div>
            </div>
          </div>
          {/* Right Side Menu */}
          <div className="grid h-[100%] col-span-6 bg-[#232528]">
            <div className="h-[100%] mx-8">
              <h1 className="text-white text-xl font-semibold mt-8">
                INCOMING ORDER
              </h1>

              <OrderCard />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;

const OrderCard = () => {
  return (
    <div className="flex flex-col h-[14rem] bg-[#696a6c] my-4 rounded-xl">
      <div className="flex h-[10rem] bg-[#8a8c90] m-2 rounded-xl">
        <img
          src={`${car.image_url}`}
          alt={"CarGo© " + car.name}
          className="object-cover w-42 h-32 rounded-md m-4"
        />
        <div>
          <h1 className="text-white mt-6 font-bold text-xl">{car.name}</h1>
          <h1 className="text-white text-sm">{car.year}</h1>
          <h1 className="text-white text-sm">{car.transmission}</h1>
          <h1 className="text-white text-sm">{car.mpg} MPG/MPGe</h1>
          <h1 className="text-white text-sm">{car.type}</h1>
        </div>
        <div className="w-[30rem] my-auto ml-52 h-[6.8rem]">
          <h1 className="text-white line-clamp-4 text-justify">
            {car.description}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex">
          <h1 className="text-white font-normal text-xl mx-4 mt-1">
            Total Amount{" "}
            <span className="font-bold">IDR {order.total_price}</span>
          </h1>
        </div>
        <div className="flex justify-end">
          <button className="flex justify-center bg-red-400 rounded-md text-black w-36 h-10 mr-4 hover:brightness-90 transition-all duration-300">
            <MdCancelPresentation className="my-auto mr-2" />
            <p className="my-auto">Deny Order</p>
          </button>
          <button className="flex justify-center bg-buttonblue rounded-md text-white w-36 h-10 mr-4 hover:brightness-90 transition-all duration-300">
            <MdOutlinePayment className="my-auto mr-2" />
            <p className="my-auto">Accept Order</p>
          </button>
        </div>
      </div>
    </div>
  );
};
