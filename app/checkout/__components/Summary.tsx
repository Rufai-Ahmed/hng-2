import React from "react";
import Link from "next/link";

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

      <hr className="my-3" />
      <div className="flex items-center justify-between">
        <h2 className="text-[25px]">Total</h2>

        <b>$300</b>
      </div>
    </div>
  );
};

export default Summary;
