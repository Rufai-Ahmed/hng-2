"use client"
import React, { useState } from "react";
import Progress from "../checkout/__components/Progress";
import { BsArrowLeft, BsPerson } from "react-icons/bs";
import { iInput, iPayment } from "@/public/interfaces";
import { FaAngleDown } from "react-icons/fa";
import { RiBankCard2Line } from "react-icons/ri";
import { BiCalendar, BiLock } from "react-icons/bi";
import Summary from "./__components/Summary";
import Link from "next/link";
import ReactDOMServer from "react-dom/server";
import Swal from "sweetalert2";

const page = () => {

    const [state, setState] = useState<boolean>(false)
    
    const handleClick: () => void= () =>
      {  Swal.fire({
          title: "Successful!",
          text: "Your order has been successfully received",
          icon: "success",
          confirmButtonText: ReactDOMServer.renderToString(
            <>
              <button>
                <Link href={"/"}>Back Home</Link>
              </button>
            </>
          ),
          confirmButtonColor: "#307C31",
          confirmButtonAriaLabel: "Thumbs up, great!",
        })
    
        setState(true)
    }

  return (
    <div className="container mx-auto px-4 pb-9 md:pt-9 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px] min-h-[1000px]">
      <Progress complete={state} />

      <div className="flex items-center gap-3 mb-9 md:mb-0">
        <BsArrowLeft size={24} className="md:hidden" />

        <h1 className="text-[24px] md:text-[32px] md:mt-14 lg:mb-9 font-bold">
          Payment Method
        </h1>
      </div>

      <div className="w-full bg-[#DADADA] p-2 my-3 lg:hidden rounded-md">
        <div className="flex justify-between items-center">
          <p>Order Summary (2 items)</p>
        </div>
      </div>

      <div className="space-y-4 lg:hidden border-b mb-5 pb-3">
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

      <div className="w-full grid grid-cols-11 gap-10 justify-center ">
        <div className="col-span-11 grid h-fit p-5 md:p-0 justify-center lg:justify-normal lg:col-span-7 ">
          <div className="flex pl-5 lg:pl-0 flex-wrap items-center gap-5">
            {[
              { name: "Credit Card", active: true },
              { name: "Bank Transfer" },
              { name: "Direct Bank" },
              { name: "Flutterwave" },
            ].map((el: iPayment, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <input
                  type="radio"
                  className="w-[18px] h-[18px]"
                  name="credit"
                  checked={el.active}
                />
                <p>{el.name}</p>
              </div>
            ))}
          </div>

          <div className="border w-[95%] md:w-full rounded-md p-5 mt-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="radio" className="w-[18px] h-[18px]" checked />
                <p>Credit Card</p>
              </div>

              <FaAngleDown size={24} />
            </div>

            <div className="space-y-5">
              {[
                { placeholder: "Card Name", icon: <BsPerson size={20} /> },
                {
                  placeholder: "Card Number",
                  icon: <RiBankCard2Line size={20} />,
                },
              ].map((el: iInput, i: number) => (
                <div
                  key={i}
                  className="w-full mt-4 rounded-md pl-3 bg-gray-100 border flex gap-2 items-center h-[40px]"
                >
                  {el.icon}

                  <input
                    type="text"
                    className="flex-1 bg-transparent h-full flex border-none outline-none"
                    placeholder={el.placeholder}
                  />
                </div>
              ))}

              <div className="grid grid-cols-2 items-center gap-4">
                {[
                  {
                    placeholder: "Expiry Date",
                    icon: <BiCalendar size={20} />,
                  },
                  {
                    placeholder: "CVV",
                    icon: <BiLock size={20} />,
                  },
                ].map((el: iInput, i: number) => (
                  <div
                    key={i}
                    className="w-full rounded-md pl-3 bg-gray-100 border flex gap-2 items-center h-[40px]"
                  >
                    {el.icon}

                    <input
                      type="text"
                      className="flex-1 bg-transparent h-full flex border-none outline-none"
                      placeholder={el.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" name="save" className="p-2" />
                <p>Save this card for later use</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:hidden col-span-11 flex items-center justify-center">
          <button onClick={handleClick} className="w-[90%] lg:hidden py-2 rounded-md text-white bg-[#307C31] flex justify-center items-center mt-3 ">
            Proceed to Pay $330
          </button>
        </div>

        <div className="hidden lg:grid lg:col-span-4">
          <Summary handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default page;
