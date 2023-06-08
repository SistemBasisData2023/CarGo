import React from "react";
import { motion } from "framer-motion";
import { TbUserCircle } from "react-icons/tb";

const User = () => {
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
          <div className="h-screen col-span-2 bg-gray-700 ">
            <TbUserCircle className="mx-auto mt-8 text-center text-[10rem]"/>
          </div>
          {/* Right Side Menu */}
          <div className="grid h-screen col-span-6"></div>
        </div>
      </motion.div>
    </>
  );
};

export default User;
