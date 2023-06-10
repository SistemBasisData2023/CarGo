import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TiTags } from "react-icons/ti";
import { TbReceiptTax } from "react-icons/tb";
import { motion } from "framer-motion";
import Order from "../order/Order";

const Description = () => {
  const { id } = useParams();
  const [cars, setCars] = useState([]);

  const fetchData = async () => {
    let api = `http://localhost:3000/findMobilById/${id}`;
    try {
      const response = await axios.get(api);
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    const formattedPrice = formatter.format(parseFloat(price).toFixed(0));
    return "IDR " + formattedPrice + " million";
  };

  const formatRupiah = (number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    const formattedPrice = formatter.format(number * 1000000);
    return formattedPrice;
  };

  return (
    <>
      <motion.div
        className="items-center h-screen bg-primary"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{
          x: window.innerWidth,
          transition: { duration: import.meta.env.VITE_ANIMATION_DURATION },
        }}
      >
        {cars.length === 0 ? (
          <h1>No Cars Found</h1>
        ) : (
          cars.map((car) => (
            <MainScreen
              id={`${car.id_mobil}`}
              name={`${car.name}`}
              year={`${car.year}`}
              price={car.price}
              priceFormatted={`${formatPrice(car.price)}`}
              priceRupiah={formatRupiah(car.price)}
              mpg={`${car.mpg}`}
              transmission={`${car.transmission}`}
              type={`${car.type}`}
              description={`${car.description}`}
              image_url={`${car.image_url}`}
            />
          ))
        )}
      </motion.div>
    </>
  );
};

const MainScreen = (props) => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="h-screen col-span-4 bg-gradient-to-r from-transparent to-white">
          <div className="relative h-full">
            <img
              className="object-cover w-auto h-full"
              src={props.image_url}
              alt={props.name}
            />
            <div className="absolute bottom-0 px-16 pb-8 text-white">
              <h2 className="text-[30px] font-bold pb-1 drop-shadow-lg tracking-wide">
                {props.year + " " + props.name}
              </h2>
              <p className="drop-shadow-lg">
                {"Starting from "}
                <span className="font-bold">{props.priceFormatted}</span>
              </p>
              <p className="pt-4 drop-shadow-lg">
                <span className="font-bold">{props.mpg}</span>
                {" Est. "}
                <span className="font-semibold">{"MPG*"}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 bg-secondary pt-[64px]">
          <div className="bg-gray-300 border-b-2 rounded-none collapse collapse-plus border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">Name</div>
            <div className="collapse-content">
              <p>{props.name}</p>
            </div>
          </div>
          <div className="bg-gray-300 border-b-2 rounded-none collapse collapse-plus border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">Model Year</div>
            <div className="collapse-content">
              <p>{props.year}</p>
            </div>
          </div>
          <div className="bg-gray-300 border-b-2 rounded-none collapse collapse-plus border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">
              Transmission
            </div>
            <div className="collapse-content">
              <p>{props.transmission}</p>
            </div>
          </div>
          <div className="bg-gray-300 border-b-2 rounded-none collapse collapse-plus border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">Type</div>
            <div className="collapse-content">
              <p>{props.type}</p>
            </div>
          </div>
          <div className="bg-gray-300 border-b-2 rounded-none collapse collapse-plus border-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="text-xl font-medium collapse-title">
              Miles Per Gallon
            </div>
            <div className="collapse-content">
              <p>
                {props.type === "EV"
                  ? `${props.mpg} miles of range per 33.7 kWh`
                  : `${props.mpg} miles per gallon or approx. ${Number(
                      (235.215 / parseInt(props.mpg)).toFixed(2)
                    )} liters per 100 kilometers`}
              </p>
            </div>
          </div>
          <div className="w-fill h-52 bg-primary">
            <p className="px-6 pt-8 text-justify text-white font-poppins">
              {props.description}
            </p>
          </div>
          <div className="mx-auto my-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TiTags className="mb-2 mr-2 text-2xl text-white" />
                <p className="mb-2 text-2xl font-semibold tracking-tighter text-white font-poppins">
                  IDR {props.priceRupiah}
                </p>
              </div>
              <div className="flex gap-1">
                <TbReceiptTax className="text-white text-end my-auto" />
                <p className="text-white">including tax</p>
              </div>
            </div>
            <Order car={props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
