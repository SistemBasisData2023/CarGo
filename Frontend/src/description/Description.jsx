import { cars } from "../vehicles/Vehicles.jsx";

const Description = () => {
  return (
    <>
      <div className="bg-primary items-center h-screen">
        <div className="grid grid-cols-6">
          <div className="col-span-4 bg-gradient-to-r from-transparent to-white h-screen">
            <div className="relative h-full">
              <img
                className="h-full w-auto object-cover"
                src={`${cars[0].image_url}`}
                alt={`${cars[0].name}`}
              />
              <div className="absolute bottom-0 px-16 pb-8 text-white">
                <h2 className="text-[30px] font-bold pb-1 drop-shadow-lg tracking-wide">
                  {cars[0].year + " " + cars[0].name}
                </h2>
                <p className="drop-shadow-lg">
                  {"Starting from "}
                  <span className="font-bold">
                    {"IDR " + cars[0].price + " million"}
                  </span>
                </p>
                <p className="pt-4 drop-shadow-lg">
                  <span className="font-bold">{cars[0].mpg}</span>
                  {" Est. KPL"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-gray-200"></div>
        </div>
      </div>
    </>
  );
};

export default Description;
