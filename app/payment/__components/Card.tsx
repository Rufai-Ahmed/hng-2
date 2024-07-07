import { cardData } from "@/public/data/data";
import { iCard } from "@/public/interfaces";
import Image from "next/image";
import React, { FC } from "react";

const Card: FC<iCard> = ({ name, img }) => {
  return (
    <div className="w-full p-3 border rounded-md flex justify-between items-center flex-wrap md:flex-nowrap space-y-3">
      <div className="items-center flex gap-6">
        <div className=" flex items-center gap-3">
          <Image src={img!} width={100} height={100} alt={name!} />

          <div className="font-bold capitalize flex flex-col justify-between items-start w-full h-full">
            <div>
              <p>{name}</p>
              <p className="text-[15px] font-light">
                Estimated delivery by{" "}
                <span className="text-[#307C31]">15th of July</span>
              </p>
            </div>

            <div className="flex w-full h-[40px] " />

            <div>
              <b>$100</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
