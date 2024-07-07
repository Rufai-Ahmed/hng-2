"use client";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface iProgress {
  complete?: boolean;
}

const Progress: FC<iProgress> = ({ complete }) => {
  const path = usePathname();

  return (
    <center>
      <div className="w-[450px] hidden h-[1px] bg-black md:flex items-center justify-between relative">
        <div className="absolute -left-7 -bottom-9">
          <div className="bg-white w-fit">
            <IoIosCheckmarkCircle className="text-[#33C854]" size={24} />
          </div>

          <p>Address</p>
        </div>
        <div className="absolute left-[40%] -bottom-9 ">
          {path === "/payment" || "confirm" ? (
            <div className="bg-white w-fit">
              <IoIosCheckmarkCircle className="text-[#33C854]" size={24} />
            </div>
          ) : (
            <div className="bg-white w-[24px] h-[24px] flex items-center justify-center border rounded-full text-[14px]">
              2
            </div>
          )}

          <p>Payment</p>
        </div>
        <div className="absolute -right-[50px] -bottom-9 ">
          {path === "/confirm" || complete ? (
            <div className="bg-white w-fit">
              <IoIosCheckmarkCircle className="text-[#33C854]" size={24} />
            </div>
          ) : (
            <div className="bg-white w-[24px] h-[24px] flex items-center justify-center border rounded-full text-[14px]">
              3
            </div>
          )}

          <p>Confirmation</p>
        </div>
      </div>
    </center>
  );
};

export default Progress;
