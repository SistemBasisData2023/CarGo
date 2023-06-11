import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaCalendarDay, FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import { MdOutlinePayment, MdCancelPresentation } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const User = () => {
  const stored_id = localStorage.getItem("id_user");
  const [user, setUser] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const updateUser = (userData) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: userData.name,
      email: userData.email,
      phone_no: userData.phone_no,
      full_name: userData.full_name,
      birth_date: userData.birth_date,
      address: userData.address,
    }));
  };
  const [orders, setOrders] = useState([]);
  const getUserOrder = async () => {
    const apiUrl = `http://localhost:3000/findOrderJoinMobil/${stored_id}`;
    try {
      const response = await axios.get(apiUrl);
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfo = async () => {
    const apiUrl = `http://localhost:3000/findUserById/${stored_id}`;
    try {
      const response = await axios.get(apiUrl);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getUserOrder();
  }, []);

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
          {user && user.length > 0 ? (
            <div className="h-[91.5vh] col-span-2 bg-primary fixed w-[23rem]">
              <div className="black-pattern h-40 w-40 rounded-full mx-auto my-8"></div>
              <div className="w-80 mx-auto">
                <h1 className="my-2 text-white text-center font-semibold text-2xl">
                  {user[0].name}
                </h1>
                <h2 className="my-1 text-white text-center text-sm">
                  {user[0].email}
                </h2>
                <h2 className="my-1 text-white text-center text-sm font-bold">
                  {user[0].phone_no}
                </h2>
                <h2 className="my-1 text-white text-center text-sm">
                  {user[0].username}
                </h2>
                <div className="flex text-white mt-4">
                  <FaCalendarDay className="text-white text-2xl mx-auto mr-2" />
                  <h2 className="font-bold text-center mx-auto ml-1 text-xl">
                    {user[0].birth_date === null
                      ? "Birthday"
                      : formatDate(user[0].birth_date)}
                  </h2>
                </div>
                <div className="flex text-white mt-4 justify-center">
                  <div className="h-15">
                    <h2 className="flex font-bold text-center text-xl">
                      <span>
                        <FaMapMarkerAlt className="text-white text-2xl pr-2" />
                      </span>
                      {user[0].address === null ? "Address" : user[0].address}
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center mt-16">
                  <EditProfile
                    user_id={user[0].id_user}
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}

          {/* Right Side Menu */}
          <div className="grid h-[100%] col-span-2 bg-[#232528]"></div>
          <div className="grid min-h-[91.5vh] col-span-6 bg-[#232528]">
            <div className="h-[100%] mx-8">
              <h1 className="text-white text-xl font-semibold mt-8">
                ORDER HISTORY
              </h1>
              {orders.length === 0 ? (
                <h1 className="col-span-6 text-center text-white">
                  No Orders Found
                </h1>
              ) : (
                orders.map((order) => (
                  <OrderCard key={order.id_order} order={order} />
                ))
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default User;

const OrderCard = ({ order }) => {
  return (
    <div className="flex flex-col h-[14rem] bg-[#696a6c] mt-4 mb-8 rounded-xl">
      <div className="flex h-[10rem] bg-[#8a8c90] m-2 rounded-xl">
        <img
          src={`${order.image_url}`}
          alt={"CarGo© " + order.name}
          className="object-cover max-w-[13rem] h-32 rounded-md m-4"
        />
        <div className="w-full">
          <h1 className="text-white mt-6 font-bold text-xl">{order.name}</h1>
          <h1 className="text-white text-sm">{order.year}</h1>
          <h1 className="text-white text-sm">{order.transmission}</h1>
          <h1 className="text-white text-sm">{order.mpg} MPG/MPGe</h1>
          <h1 className="text-white text-sm">{order.type}</h1>
        </div>
        <div className="w-full my-6 mr-8  flex justify-end text-white gap-6">
          <div>
            <h1 className="text-white font-bold text-xl">Order Date</h1>
            <h1 className="text-sm">{formatDate(order.order_date)}</h1>
            <h1 className="text-white font-bold text-xl mt-4">Shipping Date</h1>
            <h1 className="text-sm">{formatDate(order.shipping_date)}</h1>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl">Zip Code</h1>
            <h1 className="text-sm">{order.zip_code}</h1>
            <h1 className="text-white font-bold text-xl mt-4">Quantity</h1>
            <h1 className="text-sm">{order.quantity}</h1>
          </div>
          <div>
            <h1 className="text-white font-bold text-xl">Amount Paid</h1>
            <h1 className="text-sm">IDR {formatRupiah(order.amount_paid)}</h1>
            <h1 className="text-white font-bold text-xl mt-4">Amount Left</h1>
            <h1 className="text-sm">
              IDR {formatRupiah(order.total_payment - order.amount_paid)}
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="flex col-span-3">
          <h1 className="text-white font-normal text-xl mx-4 mt-1">
            Total Amount{" "}
            <span className="font-bold">
              IDR {formatRupiah(order.total_payment)}
            </span>
          </h1>
          <h1 className="text-white font-normal text-xl mx-4 mt-1">
            Status <span className="font-bold">{order.status}</span>
          </h1>
        </div>
        <div className="flex justify-end col-span-2">
          {order.status === "PAID" ? (
            <div className="mr-4 bg-buttonblue rounded-md w-56 h-10 text-textblue cursor-default text-center">
              <h1 className="pt-2 font-bold">Payment Finished</h1>
            </div>
          ) : (
            <div className="flex">
              <CancelOrder
                modalId={`cancel_modal_${order.id_order}`}
                order_id={order.id_order}
              />
              <PayNow
                modalId={`payment_modal_${order.id_order}`}
                order_id={order.id_order}
                order_total={order.total_payment}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EditProfile = ({ user_id, startDate, setStartDate }) => {
  const [editProfile, setEditProfile] = useState({
    id: user_id,
    full_name: "",
    phone_no: "",
    birth_date: startDate,
    address: "",
  });

  const updateProfile = async () => {
    const apiUrl = "http://localhost:3000/updateUserProfile";
    try {
      console.log(editProfile);
      const response = await axios.put(apiUrl, editProfile);
      console.log(response.data);
      window.edit_profile_modal.close();
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast("Error when updating profile!");
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();

    const requiredInputs = document.querySelectorAll(
      "input[required], textarea[required]"
    );

    const invalidInputs = [...requiredInputs].filter(
      (input) => !input.validity.valid
    );

    if (invalidInputs.length > 0) {
      toast("Please fill out all required fields!");
      return;
    }
    updateProfile();
  };
  return (
    <>
      <button
        onClick={() => window.edit_profile_modal.showModal()}
        className="flex justify-center bg-buttonblue rounded-md text-white w-40 h-10 hover:brightness-75 transition-all duration-300"
      >
        <FaEdit className="text-white my-auto mr-2" />
        <p className="my-auto">Edit Profile</p>
      </button>
      <dialog id="edit_profile_modal" className="modal">
        <form noValidate method="dialog" className="modal-box">
          <h2 className="text-lg font-bold">Edit Profile</h2>
          <p className="py-4">Complete your profile.</p>
          <div className="form-control w-full">
            <FormInput
              width=""
              title="Full Name"
              type="text"
              placeholder="Full Name"
              onChange={(event) =>
                setEditProfile({
                  ...editProfile,
                  full_name: event.target.value,
                })
              }
            />
            <FormInput
              width=""
              title="Phone Number"
              type="text"
              placeholder="Phone Number"
              maxLength="13"
              onChange={(event) =>
                setEditProfile({ ...editProfile, phone_no: event.target.value })
              }
            />
            <label className={"label"}>
              <span className="label-text font-bold">Birth Date</span>
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setEditProfile({ ...editProfile, birth_date: date });
              }}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              className="cursor-pointer w-full border-2 border-gray-300 rounded-md p-2"
            />
            <label className={"label"}>
              <span className="label-text font-bold">Address</span>
            </label>
            <textarea
              placeholder="Address"
              className="textarea textarea-bordered w-full"
              onChange={(event) =>
                setEditProfile({ ...editProfile, address: event.target.value })
              }
              required
            ></textarea>
          </div>
          <div className="modal-action">
            <button
              className="btn w-20"
              onClick={() => {
                window.edit_profile_modal.close();
              }}
            >
              Close
            </button>
            <button
              className="btn bg-buttonblue text-white w-20"
              onClick={handleEdit}
              type="submit"
            >
              Edit
            </button>
          </div>
          <ToastContainer />
        </form>
      </dialog>
    </>
  );
};

const FormInput = (props) => {
  return (
    <>
      <label className={"label " + props.width}>
        <span className="label-text font-bold">{props.title}</span>
        <span className="label-text-alt">{props.require}</span>
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={"input input-bordered w-full select-none " + props.width}
        max={props.max}
        pattern={props.pattern}
        maxLength={props.maxLength}
        onChange={props.onChange}
        required
      />
    </>
  );
};

const CancelOrder = ({ modalId, order_id }) => {
  const showModal = () => {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.showModal();
    }
  };
  const closeModal = (modalId) => {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.close();
    }
  };
  const deleteOrder = async () => {
    const apiUrl = `http://localhost:3000/deleteOneOrder/${order_id}`;
    try {
      const response = await axios.delete(apiUrl);
      close();
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast("Error when deleting order!");
    }
  };
  return (
    <>
      <button
        onClick={() => showModal()}
        className="flex justify-center bg-gray-200 rounded-md text-black w-36 h-10 mr-4 hover:brightness-75 transition-all duration-300"
      >
        <MdCancelPresentation className="my-auto mr-2" />
        <p className="my-auto">Cancel Order</p>
      </button>
      <dialog id={modalId} className="modal">
        <form method="dialog" className="modal-box max-w-[20rem]">
          <h2 className="text-lg font-bold">Cancel Order</h2>
          <p className="py-4">Are you sure?</p>
          <div className="modal-action mx-auto justify-center">
            <button className="btn w-20 ">No</button>
            <button
              onClick={deleteOrder}
              className="btn w-20 bg-buttonblue text-white"
            >
              Yes
            </button>
          </div>
          <ToastContainer />
        </form>
      </dialog>
    </>
  );
};

const PayNow = ({ modalId, order_id, order_total }) => {
  const [payment, setPayment] = useState({
    id_order: order_id,
    amount_paid: order_total,
    status: "PAID",
  });
  const showModal = () => {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.showModal();
    }
  };
  const closeModal = (modalId) => {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      modalElement.close();
    }
  };
  const makePayment = async () => {
    const apiUrl = `http://localhost:3000/updatePayment`;
    try {
      const response = await axios.put(apiUrl, payment);
      close();
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast("Error when updating payment!");
    }
  };
  return (
    <>
      <button
        onClick={() => showModal()}
        className="flex justify-center bg-buttonblue rounded-md text-white w-36 h-10 mr-4 hover:brightness-75 transition-all duration-300"
      >
        <MdOutlinePayment className="my-auto mr-2" />
        <p className="my-auto">Pay Now</p>
      </button>
      <dialog id={modalId} className="modal">
        <form method="dialog" className="modal-box max-w-[20rem]">
          <h2 className="text-lg font-bold">Complete Payment</h2>
          <p className="py-4">Are you sure?</p>
          <div className="modal-action mx-auto justify-center">
            <button className="btn w-20 ">No</button>
            <button
              onClick={makePayment}
              className="btn w-20 bg-buttonblue text-white"
            >
              Yes
            </button>
          </div>
          <ToastContainer />
        </form>
      </dialog>
    </>
  );
};
