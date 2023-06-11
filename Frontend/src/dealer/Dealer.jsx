import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarDay, FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import { MdOutlinePayment, MdCancelPresentation } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';

const formatRupiah = (number) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const formattedPrice = formatter.format(number * 1000000);
  return formattedPrice;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
};

const About = () => {
  const [cookies, setCookies] = useCookies();

  const [mobilName, setMobilName] = useState("");
  const [mobilPrice, setMobilPrice] = useState("");
  const [mobilYear, setMobilYear] = useState("");
  const [mobilMpg, setMobilMpg] = useState("");
  const [mobilTransmission, setMobilTransmission] = useState("");
  const [mobilType, setMobilType] = useState("");
  const [mobilDescription, setMobilDescription] = useState("");
  const [mobilImage, setMobilImage] = useState("");

  const [dealerUsername, setDealerUsername] = useState("");
  const [dealerEmail, setDealerEmail] = useState("");

  const [user, setUser] = useState("");

  const [orderList, setOrderList] = useState([]);

  const getAllOrderJoinMobil = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/getAllOrderJoinMobil");

      await setOrderList(resp.data);

    } catch (err) {
      console.err(err);
    }
  }

  const authorize = async () => {
    try {
      const resp = await axios.get('http://localhost:3000/findUserById/' + cookies.id_user);

      if(resp.data.message !== "User not found"){
        await setUser(resp.data.user);
      }else{
        await setUser(false);
      }
    }catch (err) {
      console.err(err);
    }
  }

  useMemo(() => {
    getAllOrderJoinMobil();
    authorize();
  }, [])

  const handleSubmitDealer = async (e) => {
    e.preventDefault();

    const dealer = {
      username: dealerUsername,
      email: dealerEmail,
      is_dealer: true,
    };

    try {
      const resp = await axios.put("http://localhost:3000/updateDealerStatus", dealer).catch();

      if(resp.data.message.message === "Dealer status updated successfully"){
        toast.success(resp.data.message.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      }else{
        toast.error(resp.data.message.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    } catch (err) {
      toast.error(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }
  }

  const handleSubmitMobil = async (e) => {
    e.preventDefault();

    const mobil = {
      name: mobilName,
      price: mobilPrice,
      year: mobilYear,
      mpg: mobilMpg,
      transmission: mobilTransmission,
      type: mobilType,
      description: mobilDescription,
      image_url: mobilImage,
    };

    try {
      const resp = await axios.post("http://localhost:3000/addOneMobil", mobil).catch();

      if(resp.data.message.message === "Mobil added successfully"){
        toast.success(resp.data.message.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      }else{
        toast.error(resp.data.message.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    } catch (err) {
      toast.error(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }

  }

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
          <div className="h-[91.5vh] col-span-2 bg-primary fixed">
            <div className="black-pattern h-40 w-40 rounded-full mx-auto my-8"></div>
            <div className="w-80 mx-auto">
              <h1 className="my-2 text-white text-center font-semibold text-2xl"> 
                {user.name}
              </h1>
              <h2 className="my-1 text-white text-center text-sm">
                {user.email}
              </h2>
              <h2 className="my-1 text-white text-center text-sm">
                {user.username}
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
                  <form method="dialog" className="modal-box" onSubmit={handleSubmitDealer}>
                    <h3 className="font-bold text-lg ">Add Dealer</h3>
                    <input type="text" placeholder="Username" onChange={event => setDealerUsername(event.target.value)} value={dealerUsername} className="input input-bordered w-full max-w-xs mt-20" />
                    <input type="text" placeholder="Email" onChange={event => setDealerEmail(event.target.value)} value={dealerEmail} className="input input-bordered w-full max-w-xs mt-5 mb-5" />
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                      <button className="btn" type="reset" onClick={() => {window.my_modal_1.close()}}>Close</button>
                      <button className="btn" type="submit">Enter</button>
                    </div>
                  </form>
                  <ToastContainer />
                </dialog>
                <button className="flex justify-center bg-buttonblue rounded-md text-white w-40 h-10 mx-4" onClick={()=>window.my_modal_2.showModal()}>
                  <p className="my-auto">Add Cars</p>
                </button>
                <dialog id="my_modal_2" className="modal">
                  <form method="dialog" className="modal-box" onSubmit={handleSubmitMobil}>
                    <h3 className="font-bold text-lg">Add Cars</h3>
                    <input type="text" placeholder="Name" onChange={event => setMobilName(event.target.value)} value={mobilName} className="input input-bordered w-full max-w-xs mt-20" />
                    <input type="text" placeholder="Year" onChange={event => setMobilYear(event.target.value)} value={mobilYear} className="input input-bordered w-full max-w-xs mt-5" />
                    <input type="text" placeholder="Price" onChange={event => setMobilPrice(event.target.value)} value={mobilPrice} className="input input-bordered w-full max-w-xs mt-5" />
                    <input type="text" placeholder="mpg" onChange={event => setMobilMpg(event.target.value)} value={mobilMpg} className="input input-bordered w-full max-w-xs mt-5" />
                    <input type="text" placeholder="Transmission" onChange={event => setMobilTransmission(event.target.value)} value={mobilTransmission} className="input input-bordered w-full max-w-xs mt-5" />
                    <input type="text" placeholder="Type" onChange={event => setMobilType(event.target.value)} value={mobilType} className="input input-bordered w-full max-w-xs mt-5" />
                    <textarea placeholder="Description" onChange={event => setMobilDescription(event.target.value)} value={mobilDescription} className="textarea textarea-bordered w-full max-w-xs mt-5"></textarea>
                    <input type="text" placeholder="Image Url" onChange={event => setMobilImage(event.target.value)} value={mobilImage} className="input input-bordered w-full max-w-xs mt-5 mb-5" />
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                      <button className="btn" type="reset" onClick={() => {window.my_modal_2.close()}}>Close</button>
                      <button className="btn" type="submit">Enter</button>
                    </div>
                  </form>
                  <ToastContainer />
                </dialog>
              </div>
            </div>
          </div>
          {/* Right Side Menu */}
          <div className="grid h-[100%] col-span-2 bg-[#232528]"></div>
          <div className="grid min-h-[91.5vh] col-span-6 bg-[#232528]">
            <div className="h-[100%] mx-8">
              <h1 className="text-white text-xl font-semibold mt-8">
                INCOMING ORDER
              </h1>
              {
                orderList.map(order => (
                  <OrderCard key={order.id_order} order={ order }/>
                ))
              }
            </div>
            <ToastContainer />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;

const OrderCard = ({ order }) => {

  const handleDeny = async () => {
    try {
      const resp = axios.delete('http://localhost:3000/deleteOneOrder/' + order.id_order)

      window.location.reload();

    } catch (err) {
      console.err(err);
    }
  }

  const handleAccept = async () => {
    try {
      const payment = {
        id_order: order.id_order,
        amount_paid: order.amount_paid,
        status: "ACCEPTED",
      }

      const resp = axios.put('http://localhost:3000/updatePayment', payment);

      window.location.reload();

    } catch (err) {
      console.err(err);
    }
  }

  return (
    <div className="flex flex-col h-[14rem] bg-[#696a6c] my-4 rounded-xl">
      <div className="flex h-[10rem] bg-[#8a8c90] m-2 rounded-xl">
        <img
          src={`${order.image_url}`}
          alt={"CarGo© " + order.name}
          className="object-cover max-w-[13rem] h-32 rounded-md m-4"
        />
        <div className="min-w-[15rem]">
          <h1 className="text-white mt-6 font-bold text-xl">{order.name}</h1>
          <h1 className="text-white text-sm">{order.year}</h1>
          <h1 className="text-white text-sm">{order.transmission}</h1>
          <h1 className="text-white text-sm">{order.mpg} MPG/MPGe</h1>
          <h1 className="text-white text-sm">{order.type}</h1>
        </div>
        <div className="w-full my-6 mr-8  flex justify-end text-white gap-6">
          <div>
            <h1 className="text-white font-bold text-xl md:text-sm">Order Date</h1>
            <h1 className="text-sm">{formatDate(order.order_date)}</h1>
            <h1 className="text-white font-bold text-xl md:text-sm mt-4">Shipping Date</h1>
            <h1 className="text-sm">{formatDate(order.shipping_date)}</h1>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl md:text-sm">Zip Code</h1>
            <h1 className="text-sm">{order.zip_code}</h1>
            <h1 className="text-white font-bold text-xl md:text-sm mt-4">Quantity</h1>
            <h1 className="text-sm">{order.quantity}</h1>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl md:text-sm">Amount Paid</h1>
            <h1 className="text-sm">IDR {formatRupiah(order.amount_paid)}</h1>
            <h1 className="text-white font-bold text-xl md:text-sm mt-4">Amount Left</h1>
            <h1 className="text-sm">
              IDR {formatRupiah(order.total_payment - order.amount_paid)}
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex">
          <h1 className="text-white font-normal text-xl mx-4 mt-1 md:text-sm">
            Total Amount{" "}
            <span className="font-bold">
              IDR {formatRupiah(order.total_payment)}
            </span>
          </h1>
          <h1 className="text-white font-normal text-xl mx-4 mt-1 md:text-sm">
            Status <span className="font-bold">{order.status}</span>
          </h1>
        </div>
        <div className="flex justify-end">
          <button className="flex justify-center bg-red-400 rounded-md text-black w-36 h-10 mr-4 hover:brightness-90 transition-all duration-300">
            <MdCancelPresentation className="my-auto mr-2" />
            <p className="my-auto" onClick={handleDeny}>Deny Order</p>
          </button>
          <button className="flex justify-center bg-buttonblue rounded-md text-white w-36 h-10 mr-4 hover:brightness-90 transition-all duration-300">
            <MdOutlinePayment className="my-auto mr-2" />
            <p className="my-auto" onClick={handleAccept}>Accept Order</p>
          </button>
        </div>
      </div>
    </div>
  );
};
