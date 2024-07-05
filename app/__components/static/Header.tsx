"use client";
import { navData } from "@/public/data/data";
import { iNav } from "@/public/interfaces";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  const pathname: string = usePathname();

  const isActive: (link: string) => boolean = (link: string): boolean =>
    link === pathname;

  const [position, setPosition] = useState<boolean>(false);

  useEffect(() => {
    const observeScroll = () =>
      window.scrollY > 100 ? setPosition(true) : setPosition(false);

    window.addEventListener("scroll", observeScroll);

    return () => {
      window.removeEventListener("scroll", observeScroll);
    };
  }, []);

  return (
    <header
      className={`w-full flex items-center justify-center h-[90px] border-b bg-white ${
        position ? "fixed top-0 z-50" : ""
      }`}
    >
      <div className="container mx-auto px-4  md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BiMenu size={23} className="lg:hidden" />
          <Image
            src={"/assets/logo.png"}
            alt={"logo"}
            className="w-[150px]"
            height={100}
            width={100}
          />
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {navData.map((el: iNav, i: number) => (
            <Link
              href={el.link!}
              key={i}
              className={`capitalize hover:text-[#307C31] duration-300 cursor-pointer ${
                isActive(el?.link!) ? "text-[#307C31]" : ""
              }`}
            >
              {el.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="w-[250px] h-[40px] bg-gray-200 rounded-[40px] px- hidden lg:flex items-center text-#[000000B2]">
            <FaSearch size={18} className="ml-4" />
            <input
              type="search"
              name="search"
              className="outline-none pl-3 bg-transparent placeholder:text-[#000000B2]"
              placeholder="Search here..."
            />
          </div>

          <FaSearch size={18} className="ml-4 lg:hidden" />

          <div className="flex items-center gap-5">
            <div className="relative">
              <BsCart2 size={25} />

              <div className="w-5 h-5 rounded-full absolute -top-2 -right-2 flex items-center justify-center bg-red-500 text-white text-[10px]">
                2
              </div>
            </div>

            <IoPersonCircleOutline size={25} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
