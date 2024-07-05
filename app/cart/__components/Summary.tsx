import React from "react";

const Summary = () => {
  return (
    <div className="rounded-md font-bold border p-5">
      <h3>Order Summary (2 items)</h3>
      <hr className="my-3" />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-light">Sub-Total</p>

          <div>
            <b>$300</b>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-light">Delivery</p>

          <div className="text-[#307C31]">
            <b>Free</b>
          </div>
        </div>
      </div>

      <button className="w-full py-2 rounded-md text-white bg-[#307C31] flex justify-center items-center mt-3 gap-4">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Summary;
