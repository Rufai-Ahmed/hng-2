import { cardData } from "@/public/data/data";
import { iCard } from "@/public/interfaces";
import Image from "next/image";
import React, { FC } from "react";
import { PiMinusSquare, PiPlusSquare } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

const CartCard: FC<iCard> = ({ colour, name, img }) => {
  return (
    <div className="w-full py-8 border-b border-black flex justify-between items-center flex-wrap md:flex-nowrap space-y-3">
      <div className="items-center flex gap-6">
        <input
          checked
          type="checkbox"
          className="accent-black w-[24px] h-[24px] hidden md:block"
        />

        <div className=" flex items-center gap-3">
          <Image src={img!} width={100} height={100} alt="nike" />

          <div className="font-bold capitalize">
            <p>{name}</p>
            <p>Colour: {colour}</p>
            <p className="text-[#307C31]">In Stock</p>
            <p className="text-[#00000080]">Men Sneakers</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-black md:mr-[140px]">
        <PiMinusSquare size={25} />

        <div>1</div>

        <PiPlusSquare size={25} />
      </div>

      <div className="flex items-center gap-8">
        <h4>$200</h4>
        <RiDeleteBinLine size={24} color="#F50A0A" />
      </div>
    </div>
  );
};

export default CartCard;
