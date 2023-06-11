import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Vehicles = () => {
  const [state, setState] = useState(0);
  const [cars, setCars] = useState([]);
  const [carType, setCarType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSomething = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchData = async () => {
    let api;
    if (carType === "All" && searchTerm === "") {
      api = `http://localhost:3000/getAllMobil`;
    } else if (carType === "All" && searchTerm !== "") { 
      api = `http://localhost:3000/findMobilByName?name=${searchTerm}`;
    }else {
      api = `http://localhost:3000/findMobilByType?type=${carType}`;
    }
    try {
      const response = await axios.get(api);
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [carType]);

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    const formattedPrice = formatter.format(parseFloat(price).toFixed(0));
    return "IDR " + formattedPrice + " million";
  };

  return (
    <>
      <motion.div
        className="flex flex-col pt-[6rem] bg-primary items-center min-h-screen"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{
          x: window.innerWidth,
          transition: { duration: import.meta.env.VITE_ANIMATION_DURATION },
        }}
      >
        <NavButtons state={state} setState={setState} setCarType={setCarType} />
        {carType === "All" ? <SearchBar handleChange={handleChange} searchTerm={searchTerm} handleSomething={handleSomething}/> : <></>}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {cars.length === 0 ? (
            <h1 className="col-span-6 text-center text-white">No Cars Found</h1>
          ) : (
            cars.map((car) => (
              <VehicleCard
                id={`${car.id_mobil}`}
                name={`${car.name}`}
                year={`${car.year}`}
                price={`${formatPrice(car.price)}`}
                mpg={`${car.mpg}`}
                image_url={`${car.image_url}`}
              />
            ))
          )}
        </div>
      </motion.div>
    </>
  );
};

const NavButtons = ({ state, setState, setCarType }) => {
  return (
    <>
      <div className="flex items-center pb-8">
        <button
          onClick={() => {
            setState(0);
            setCarType("All");
          }}
          className={`${
            state == 0
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          All
        </button>
        <button
          onClick={() => {
            setState(1);
            setCarType("SUV");
          }}
          className={`${
            state == 1
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          SUVs
        </button>
        <button
          onClick={() => {
            setState(2);
            setCarType("Minivan");
          }}
          className={`${
            state == 2
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          Minivan
        </button>
        <button
          onClick={() => {
            setState(3);
            setCarType("Sedan");
          }}
          className={`${
            state == 3
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          Sedan
        </button>
        <button
          onClick={() => {
            setState(4);
            setCarType("Supercar");
          }}
          className={`${
            state == 4
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          Supercar
        </button>
        <button
          onClick={() => {
            setState(5);
            setCarType("EV");
          }}
          className={`${
            state == 5
              ? "border-animations text-white border-white"
              : "border-animations text-gray-500 border-gray-500"
          }`}
        >
          EVs
        </button>
      </div>
    </>
  );
};

const SearchBar = ({handleSomething, searchTerm, handleChange}) => {
  return (
    <>
      <form onSubmit={handleSomething}>
        <div className="flex h-12 w-[50rem] mb-4 text-gray-200">
          <AiOutlineSearch className="text-2xl my-auto mr-2 min-w-[5%]" />
          <input
            placeholder="Search Car Name"
            value={searchTerm}
            onChange={handleChange}
            className="text-black bg-gray-100 rounded-2xl p-4 select-none outline-none min-w-[80%] focus:placeholder-transparent"
          />
          <button
            type="submit"
            className="min-w-[12%] mx-2 bg-buttonblue text-gray-100 rounded-2xl hover:brightness-75 transition-all duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

const VehicleCard = (props) => {
  return (
    <>
      <Link to={`/description/${props.id}`}>
        <div className="card w-80 shadow-xl m-2 my-4 text-sm cursor-pointer rounded-md bg-[#F1F7F9] overflow-hidden transition-all duration-300 hover:underline">
          <div className="relative">
            <div className="transition-opacity duration-300 image-container">
              <img
                src={`${props.image_url}`}
                alt={"CarGo© " + props.name}
                className="object-cover w-full h-40"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 overlay hover:opacity-100 hover:bg-black hover:bg-opacity-50">
              <TiShoppingCart className="text-[#F1F7F9] text-4xl" />
            </div>
          </div>
          <div className="gap-0 p-0 mx-4 my-2 card-body">
            <h2 className="card-title text-[16px] ">
              {props.year + " " + props.name}
            </h2>
            <p>
              {"Starting from "}
              <span className="font-bold">{props.price}</span>
            </p>
            <p>
              <span className="font-bold">{props.mpg}</span>
              {" Est. "}
              <span className="font-semibold">{"MPG*"}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Vehicles;
