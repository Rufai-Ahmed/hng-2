import React from "react";
import { BiSolidHome } from "react-icons/bi";
import CartCard from "./__components/CartCard";
import { cardData } from "@/public/data/data";
import { iCard } from "@/public/interfaces";
import { BsArrowLeft } from "react-icons/bs";
import Summary from "./__components/Summary";

const page = () => {
  const data: iCard[] = [cardData[0], cardData[1]];

  return (
    <div className="container mx-auto px-4 pb-9 md:pt-9 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px]">
      <div className="hidden md:flex items-center gap-2 text-[18px]">
        <BiSolidHome size={20} />
        &gt;&gt;
        <small className="text-[#307C31]">Cart</small>
      </div>

      <div className="">
        <div className="w-full lg:w-[70%]">
          <div className="flex items-center justify-between md:mt-10 font-bold">
            <h2 className="text-[32px]">Cart</h2>

            <h4 className="text-[20px] text-[#F50A0A]">Clear Cart</h4>
          </div>

          <div className="w-full bg-[#DADADA] p-2 mt-3 md:hidden rounded-md">
            <div className="flex justify-between items-center">
              <p>Sub-Total (2 items)</p>
              <h4 className="font-bold text-[20px]">$300</h4>
            </div>
            <div>Delivery (Free)</div>
          </div>
        </div>

        <div className="w-full flex gap-5 items-start flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-[70%]">
            <div className="w-full hidden md:flex justify-between mt-10 h-[45px] px-3 border-b bg-[#DADADA] items-center border-black">
              {["Product", "Quantity", "Price"].map((el: string, i: number) => (
                <h5 key={i} className="font-bold">
                  <b>{el}</b>
                </h5>
              ))}
            </div>

            {data.map((el: iCard, i: number) => (
              <CartCard key={i} {...el} />
            ))}
          </div>

          <div className="w-full mt-10 hidden md:block lg:w-[30%]">
            <Summary />
          </div>
        </div>
      </div>

      <div className="flex mt-7 cursor-pointer items-center gap-3 font-bold text-[#307C31]">
        <BsArrowLeft size={20} />
        <small>Continue Shopping</small>
      </div>

      <button className="w-full py-2 rounded-md text-white bg-[#307C31] flex justify-center items-center mt-6 gap-4 md:hidden">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default page;
