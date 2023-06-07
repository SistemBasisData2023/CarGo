import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Description = () => {
  const { id } = useParams();
  const [cars, setCars] = useState([]);

  const fetchData = async () => {
    let api = `http://localhost:3000/findMobilById/${id}`;
    try {
      const response = await axios.get(api);
      setCars(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(0);
  };

  return (
    <>
      <div className="bg-primary items-center h-screen">
        {cars.length === 0 ? (
          <h1>No Cars Found</h1>
        ) : (
          cars.map((car) => (
            <MainScreen
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
    </>
  );
};

const MainScreen = (props) => {
  return (
    <>
      <div className="grid grid-cols-6">
        <div className="col-span-4 bg-gradient-to-r from-transparent to-white h-screen">
          <div className="relative h-full">
            <img
              className="h-full w-auto object-cover"
              src={props.image_url}
              alt={props.name}
            />
            <div className="absolute bottom-0 px-16 pb-8 text-white">
              <h2 className="text-[30px] font-bold pb-1 drop-shadow-lg tracking-wide">
                {props.year + " " + props.name}
              </h2>
              <p className="drop-shadow-lg">
                {"Starting from "}
                <span className="font-bold">
                  {"IDR " + props.price + " million"}
                </span>
              </p>
              <p className="pt-4 drop-shadow-lg">
                <span className="font-bold">{props.mpg}</span>
                {" Est. KPL"}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-gray-200"></div>
      </div>
    </>
  );
};

export default Description;
