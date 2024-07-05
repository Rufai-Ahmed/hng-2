import { brand } from "@/public/data/data";
import React from "react";

const Sider = () => {
  return (
    <aside className="w-[271px] hidden lg:block min-h-[600px] sticky top-[90px] max-h-[950px] bg-gray-200 rounded-md p-7">
      <h3>
        <b className="font-bold border-b border-white pb-1 text-[24px]">
          Mens Sneakers
        </b>
      </h3>

      <h3 className="font-bold py-6 text-[20px] ">
        <b>Brand</b>
      </h3>

      <ul className=" space-y-5">
        {brand.map((el: string, i: number) => (
          <li key={i} className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-[18px] h-[18px] border border-gray-100 rounded-[1px]"
              checked={false}
              name={el}
              id={el}
            />
            <label className="capitalize text-[16px]">{el}</label>
          </li>
        ))}
      </ul>

      <h3 className="font-bold mt-6 pb-1 border-b border-white text-[20px] ">
        <b>Filter By Price</b>
      </h3>
      <h4 className="font-bold py-6 text-[16px] ">
        <b>Price</b>
      </h4>

      <div className=" w-[100%] h-[1px] bg-white">
        <div className="w-[180px] bg-red-600 h-[1px] relative flex items-center">
          <div className="w-4 h-4 rounded-full absolute right-0 bg-red-600" />

          <b className="absolute text-[18px] left-0 top-7 font-bold">$0</b>
          <b className="absolute text-[18px] right-0 top-7 font-bold">$500</b>
        </div>
      </div>

      <h3 className="font-bold mt-16 pb-1 border-b border-white text-[20px] ">
        <b>Size</b>
      </h3>

      <div className="grid grid-cols-3 gap-5 mt-5">
        {[41, 42, 43, 44, 45, 46].map((el: number, i: number) => (
          <div
            className="border-black border flex items-center justify-center h-auto py-2 bg-white font-bold cursor-pointer duration-300 hover:bg-gray-200"
            key={i}
          >
            {el}
          </div>
        ))}
      </div>

      <h3 className="font-bold mt-16 pb-1 border-b border-white text-[20px] ">
        <b>Colour</b>
      </h3>

      <div className="flex items-center justify-between mt-5">
        {["#F50A0A", "#307C31", "#6C9EFF", "white", "black"].map(
          (el: string, i: number) => (
            <div
              color={el}
              key={i}
              style={{ backgroundColor: `${el}` }}
              className={`bg-[${el}] w-[40px] h-[40px] rounded-full`}
            />
          )
        )}
      </div>
    </aside>
  );
};

export default Sider;
