"use client";
import { cardData } from "@/public/data/data";
import { iCard } from "@/public/interfaces";
import Image from "next/image";
import React, { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { BsCart2, BsStarFill, BsX } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import { LiaAngleDownSolid } from "react-icons/lia";

const CardScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <main className="w-full">
      <div className="w-full h-[48px] bg-[#DADADA] rounded-md px-3 md:hidden flex items-center justify-between">
        <div className="flex font-bold items-center gap-3">
          <FiFilter size={24} />
          <p>Filter</p>
        </div>

        <div className="h-[40px] w-[1px] bg-black" />

        <div className="flex font-bold items-center gap-3">
          <BiSortAlt2 size={24} />
          <p>Best Selling</p>
        </div>
      </div>

      <div className="hidden md:flex gap-3 items-center">
        <h4 className="font-bold text-[20px]">Best Selling</h4>
        <LiaAngleDownSolid size={24} />
      </div>

      <div className="hidden xl:flex items-center w-full justify-between mt-3">
        <div className="flex items-center gap-3">
          <h4 className="text-[20px] mr-1">Filtered By:</h4>
          {["addidas", "nike", "$500", "puma"].map((el: string, i: number) => (
            <div
              key={i}
              className="capitalize bg-[#DADADA] flex items-center gap-2 font-semibold px-3 rounded-md py-2 text-[16px]"
            >
              <BsX size={23} />
              {el}
            </div>
          ))}
        </div>
        <div className="text-[#F50A0A] font-semibold text-[20px] cursor-pointer">
          Clear All
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-9">
        {currentItems.map((el: iCard, i: number) => (
          <div
            key={i}
            className="shadow-md hover:shadow-lg hover:-mt-4 duration-300 cursor-pointer group min-h-[500px] border p-[10px] pb-5 space-y-3"
          >
            <Image
              alt={el.name!}
              src={el.img!}
              width={100}
              unoptimized
              height={100}
              className="w-full h-[65%] object-cover object-center"
            />
            <div className="h-[35%] space-y-3">
              <h4 className="font-bold text-[24px] capitalize">{el.name}</h4>
              <div className="flex gap-4 items-center">
                {Array.from({ length: el.stars! }).map(
                  (el: unknown, index: number) => (
                    <BsStarFill
                      key={index}
                      color="#FDAA0B"
                      className="text-[#FDAA0B]"
                      size={22}
                    />
                  )
                )}
                <b className="font-semibold text-[16px]">({el.raters})</b>
              </div>
              <div className="flex items-center gap-5 my-3">
                <h4 className="text-[20px] font-bold">${el.price}</h4>
                <h4 className="text-[20px] line-through font-bold text-[#00000080]">
                  ${el.oldPrice}
                </h4>
              </div>
              <button className="w-full py-2 rounded-md text-white bg-[#307C31] flex justify-center items-center gap-4">
                <Link href={"/cart"}>
                  <BsCart2 size={24} />
                  Add to cart
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="mx-1 border border-black h-[40px] w-[40px] flex items-center justify-center"
          disabled={currentPage === 1}
        >
          <FaAngleLeft size={23} />
        </button>
        {Array.from({ length: totalPages }, (_, index: number) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 h-[40px] border border-black w-[40px] ${
              currentPage === index + 1 ? "bg-black text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="mx-1 border border-black h-[40px] w-[40px] flex items-center justify-center"
          disabled={currentPage === totalPages}
        >
          <FaAngleRight size={23} />
        </button>
      </div>
    </main>
  );
};

export default CardScreen;
