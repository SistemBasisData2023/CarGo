import React from "react";

const Order = () => {
  return (
    <>
      <button
        className="font-bold bg-buttonblue w-[28rem] text-center h-14 rounded-sm text-white mb-4 hover:brightness-75 transition-all duration-300"
        onClick={() => window.my_modal_1.showModal()}
      >
        Order Now
      </button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Order;
