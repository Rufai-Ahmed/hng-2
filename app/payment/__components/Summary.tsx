
import React, { FC } from "react";
import Link from "next/link";
import { cardData } from "@/public/data/data";
import Card from "./Card";
import { iCard } from "@/public/interfaces";
interface iSummary {
  handleClick: () => void;
}

const Summary: FC<iSummary> = ({ handleClick }) => {
  const data: iCard[] = [cardData[0], cardData[1]];

  return (
    <div className="rounded-md font-bold border p-5">
      <h3 className="font-bold">Order Summary (2 items)</h3>
      <hr className="my-3" />

      <div className="space-y-3">
        {data.map((el: iCard, i: number) => (
          <Card key={i} {...el} />
        ))}
      </div>

      <hr className="my-3" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-light">Sub-Total</p>

          <div>
            <b>$300</b>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-light">Tax (10%)</p>

          <div className="text-[#307C31]">
            <b>$30</b>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-light">Delivery</p>

          <div className="text-[#307C31]">
            <b>Free</b>
          </div>
        </div>
        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <p className="font-bold text-[20px] ">Total Amount</p>

          <div className="text-[#307C31]">
            <b>$330</b>
          </div>
        </div>
      </div>

      <button
        className="w-full py-2 rounded-md text-white bg-[#307C31] flex justify-center items-center mt-3 gap-4"
        onClick={handleClick}
      >
        Proceed to Pay $330
      </button>
    </div>
  );
};

export default Summary;
