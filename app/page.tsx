import React from "react";
import Header from "./__components/static/Header";
import { BiHome, BiSolidHome } from "react-icons/bi";
import Sider from "./__components/Sider";
import CardScreen from "./__components/CardScreen";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-9 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px]">
      <div className="hidden md:flex mb-9 items-center gap-2 text-[18px]">
        <BiSolidHome size={20} />
        &gt;&gt;
        <small className="text-[#307C31]">Product Listing</small>
      </div>

      <div className="flex items-start w-full gap-7">
        <Sider />
        <CardScreen />
      </div>
    </div>
  );
};

export default page;
