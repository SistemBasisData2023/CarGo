import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import React, { useState } from "react";

export const cars = [
  {
    name: "CarGo© Corolla",
    year: 2023,
    price: "379",
    mpg: "32",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/corollahybrid/COH_MY23_0005_V001.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© Prius",
    year: 2021,
    price: "504",
    mpg: "48",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/priusprime/PRP_MY23_0016_V001.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© Crown",
    year: 2022,
    price: "2.2K",
    mpg: "42",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/toyotacrown/CRW_MY23_0004_V003.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© GR Corolla",
    year: 2022,
    price: "1.1K",
    mpg: "21",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/grcorolla/GRC_MY23_0129_V001.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© Camry",
    year: 2020,
    price: "1.5K",
    mpg: "28",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/camry/CAH_MY22_0003_V001.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© Mirai",
    year: 2022,
    price: "789",
    mpg: "76",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/mirai/MIR_MY21_0048_V003_u36AblgnPAA_i23l.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© GR86",
    year: 2022,
    price: "1.8K",
    mpg: "20",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/gr86/G86_global.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© Supra",
    year: 2022,
    price: "2K",
    mpg: "25",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/grsupra/supra_23.png?fm=webp&q=90&w=768",
  },
];

const cars1 = [
  {
    name: "CarGo© Corolla",
    year: 2023,
    price: "379",
    mpg: "32",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/corollahybrid/COH_MY23_0005_V001.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© Prius",
    year: 2021,
    price: "504",
    mpg: "48",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/priusprime/PRP_MY23_0016_V001.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© Crown",
    year: 2022,
    price: "2.2K",
    mpg: "42",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/toyotacrown/CRW_MY23_0004_V003.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© GR Corolla",
    year: 2022,
    price: "1.1K",
    mpg: "21",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/grcorolla/GRC_MY23_0129_V001.png?fm=webp&q=90&w=768",
  },
  {
    name: "CarGo© Camry",
    year: 2020,
    price: "1.5K",
    mpg: "28",
    image_url:
      "https://www.toyota.com/imgix/content/dam/toyota/lifestyle/relative/2023/camry/CAH_MY22_0003_V001.png?fm=webp&q=90&w=768",
  }
];

const Vehicles = () => {
  return (
    <>
      <>
        <div className="flex flex-col pt-[6rem] bg-primary items-center h-screen">
          <NavButtons />
          <Link to="/description">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {cars.length === 0 ? (
                <h1>No Vehicles Found</h1>
              ) : (
                cars.map((cars) => (
                  <VehicleCard
                    name={`${cars.name}`}
                    year={`${cars.year}`}
                    price={`${cars.price}`}
                    mpg={`${cars.mpg}`}
                    image_url={`${cars.image_url}`}
                  />
                ))
              )}
            </div>
          </Link>
        </div>
      </>
    </>
  );
};

const NavButtons = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <div className="flex items-center pb-8">
        <a
          href="#"
          onClick={() => {
            setState(1);
          }}
          className={`${
            state == 1
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          SUVs
        </a>
        <a
          href="#"
          onClick={() => {
            setState(2);
          }}
          className={`${
            state == 2
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          Minivan
        </a>
        <a
          href="#"
          onClick={() => {
            setState(3);
          }}
          className={`${
            state == 3
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          Sedan
        </a>
        <a
          href="#"
          onClick={() => {
            setState(4);
          }}
          className={`${
            state == 4
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          Supercar
        </a>
        <a
          href="#"
          onClick={() => {
            setState(5);
          }}
          className={`${
            state == 5
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          EVs
        </a>
      </div>
    </>
  );
};

const VehicleCard = (props) => {
  return (
    <>
      <div className="card w-60 shadow-xl m-2 my-4 text-sm cursor-pointer rounded-md bg-[#F1F7F9] overflow-hidden transition-all duration-300 hover:underline">
        <div className="relative">
          <div className="image-container transition-opacity duration-300">
            <img
              src={`${props.image_url}`}
              alt="CarGo©"
              className="w-full h-full"
            />
          </div>
          <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 hover:opacity-100 hover:bg-black hover:bg-opacity-50">
            <TiShoppingCart className="text-[#F1F7F9] text-4xl" />
          </div>
        </div>
        <div className="card-body p-0 gap-0 mx-4 my-2">
          <h2 className="card-title text-[16px] ">
            {props.year + " " + props.name}
          </h2>
          <p>
            {"Starting from "}
            <span className="font-bold">
              {"IDR " + props.price + " million"}
            </span>
          </p>
          <p>
            <span className="font-bold">{props.mpg}</span>
            {" Est. KPL"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
