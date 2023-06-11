import React, { useState, useEffect } from "react";
import { BiWallet } from "react-icons/bi";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const formatRupiah = (number) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  const formattedPrice = formatter.format(number * 1_000_000);
  return "IDR " + formattedPrice;
};

const Order = ({ car }) => {
  const navigate = useNavigate();
  const currentUserId = localStorage.getItem("id_user");
  const [price, setPrice] = useState(car.price);
  const [quantity, setQuantity] = useState(1);
  const [zipCode, setZipCode] = useState("");
  const [amountPaid, setAmountPaid] = useState(0);
  const [status, setStatus] = useState("PENDING");
  const [paymentPlan, setPaymentPlan] = useState("");
  const [newOrder, setNewOrder] = useState({
    id_user: currentUserId,
    id_mobil: car.id,
    order_date: "",
    shipping_date: "",
    zip_code: "",
    quantity: quantity,
    total_payment: price,
    amount_paid: 0,
  });

  const updateOrder = useEffect(() => {
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      order_date: new Date(),
      shipping_date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
      zip_code: zipCode,
      quantity: quantity,
      total_payment: price,
      amount_paid: amountPaid,
      status: status,
    }));
  }, [price, status]);

  const postOrder = async () => {
    const apiUrl = 'http://localhost:3000/addOneOrder';
    try {
      console.log(newOrder);
      const response = await axios.post(apiUrl, newOrder);
      console.log(response.data);
      navigate("/orders");
    } catch (error) {
      console.log(error);
      toast("Error when adding order!")
    }
  };

  const handleOrder = (event) => {
    event.preventDefault();
    
    const requiredInputs = document.querySelectorAll('input[required]');
    const requiredSelects = document.querySelectorAll('select[required]');
    
    const invalidInputs = [...requiredInputs].filter((input) => !input.validity.valid);
    const invalidSelects = [...requiredSelects].filter((select) => !select.validity.valid);
  
    if (invalidInputs.length > 0 || invalidSelects.length > 0 || paymentPlan === "") {
      toast("Please fill out all required fields!")
      return;
    }
    postOrder()
  };

  const handleZipCodeChange = (e) => {
    const { value } = e.target;
    setZipCode(value);
  };

  const handlePaymentPlanChange = (e) => {
    const { value } = e.target;
    setPaymentPlan(value);
    if (value === "Full Payment") {
      setAmountPaid(price);
      setStatus("PAID");
    } else if (value === "Half Payment") {
      setAmountPaid(price / 2);
      setStatus("WAITING PAYMENT");
    } else if (value === "Booking Only") {
      setAmountPaid(0);
      setStatus("PENDING");
    }
  };

  const handleClick = (amount) => () => {
    setQuantity((prev) => {
      if (prev + amount > 0 && prev + amount <= 5) {
        return prev + amount;
      } else {
        return prev;
      }
    });
  };

  const handleTotal = useEffect(() => {
    setPrice(car.price * quantity);
  }, [quantity]);

  return (
    <>
      <button
        className="font-bold bg-buttonblue w-[28rem] text-center h-14 rounded-sm text-white mb-4 hover:brightness-75 transition-all duration-300"
        onClick={() => {
          if (newOrder.id_user === null) {
            window.my_modal_2.showModal();
          } else {
            window.my_modal_1.showModal();
          }
        }}
      >
        Order Now
      </button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box max-w-[40rem]">
          <div className="flex gap-2">
            <BiWallet className="text-2xl" />
            <h2 className="text-lg font-bold">Enter Order Details</h2>
          </div>
          <p className="py-4">
            Purchasing {car.year} {car.name}. Please fill out this form before
            proceeding.
          </p>
          <div className="form-control w-full">
            <FormInput
              width=""
              title="Owner Name"
              require="Required*"
              type="text"
              placeholder="Full Name"
            />
            <FormInput
              width=""
              title="Card Number"
              require="Required*"
              type="number"
              placeholder="XXXX - XXXX - XXXX - XXXX"
            />
            <FormInput
              width=""
              title="Expiry Date"
              require="Required*"
              type="number"
              placeholder="MM/YY"
            />
            <div className="grid grid-cols-2">
              <div>
                <FormInput
                  width="max-w-[15rem]"
                  title="Zip Code"
                  require="Required*"
                  type="text"
                  placeholder="XXXXXX"
                  max="9"
                  onChange={handleZipCodeChange}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-bold">Payment</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={handlePaymentPlanChange}
                  required
                >
                  <option disabled selected>
                    Select payment plan
                  </option>
                  <option>Booking Only</option>
                  <option>Half Payment</option>
                  <option>Full Payment</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-4">
              <div>
                <label className="label">
                  <span className="label-text font-bold text-lg">Quantity</span>
                </label>
                <div className="flex">
                  <AiOutlineMinus
                    onClick={handleClick(-1)}
                    className="mt-2 mr-2 cursor-pointer text-gray-800 text-[14px]"
                  />
                  <div className="border border-black border-opacity-20 w-6 rounded-md h-8">
                    <p className="text-gray-800 text-center mt-1 select-none">
                      {quantity}
                    </p>
                  </div>
                  <AiOutlinePlus
                    onClick={handleClick(1)}
                    className="mt-2 ml-2 cursor-pointer text-gray-800 text-[14px]"
                  />
                </div>
              </div>
              <div>
                <div className="flex">
                  <AiOutlineCreditCard className="my-auto text-xl" />
                  <label className="label">
                    <span className="label-text font-bold text-lg">
                      Total Payment
                    </span>
                  </label>
                </div>
                <h1 className="text-2xl font-thin select-none">
                  {formatRupiah(price)}
                </h1>
              </div>
            </div>
          </div>
          <div className="relative modal-action mt-8">
            <div className="absolute left-0 top-[35%] flex gap-4 select-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                alt="Visa"
                className="h-5"
              ></img>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
                alt="MasterCard"
                className="h-5"
              ></img>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                alt="PayPal"
                className="h-5"
              ></img>
            </div>
            <button
              className="btn"
              onClick={() => {
                window.my_modal_1.close();
                window.location.reload();
              }}
            >
              Close
            </button>
            <button
              className="btn bg-buttonblue text-white"
              onClick={handleOrder}
              type="submit"
            >
              Order
            </button>
            <ToastContainer />
          </div>
        </form>
      </dialog>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <p className="py-4">Please log in to proceed with your car order.</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Order;

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
        maxLength={props.max}
        onChange={props.onChange}
        required
      />
    </>
  );
};
