import { BiCheckboxChecked } from "react-icons/bi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { inputData } from "@/public/data/data";
import { iInput } from "@/public/interfaces";
import Link from "next/link";
import Summary from "./__components/Summary";
import { BsArrowLeft } from "react-icons/bs";
import Progress from "./__components/Progress";

const page = () => {
  return (
    <div className="container mx-auto px-4 pb-9 md:pt-9 md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1300px] min-h-[1000px]">
      <Progress />

      <div className="flex items-center gap-3 mb-9 md:mb-0">
        <BsArrowLeft size={24} className="md:hidden" />

        <h1 className="text-[24px] md:text-[32px] md:mt-14 md:mb-9 font-bold">
          Shipping Address
        </h1>
      </div>

      <div className="w-full grid grid-cols-11 gap-7">
        <div className="col-span-11 lg:col-span-8 md:p-7 md:border rounded-md">
          <h2 className="font-bold mb-5 text-[20px] md:text-[24px]">
            Add a New Address{" "}
          </h2>

          <form>
            <div className="grid gap-5 grid-cols-2">
              {inputData.map((el: iInput, i: number) => (
                <input
                  key={i}
                  type="text"
                  name={el.name!}
                  className="w-full border outline-none 
                col-span-2 md:col-span-1
                placeholder:capitalize placeholder:text-[#00000080] rounded-md h-[50px] pl-3 bg-gray-100"
                  placeholder={el.placeholder}
                />
              ))}
              <textarea
                name="address"
                placeholder="Address"
                className="col-span-2 pl-3 bg-gray-100 rounded-md border outline-none placeholder:pt-3 h-[118px]"
              />

              <div className="flex items-center col-span-2 gap-3">
                <input
                  type="checkbox"
                  name="default"
                  className="w-[24px] h-[24px] rounded-[5px]"
                />
                <p className="font-bold text-[16px]">
                  Make this my default address
                </p>
              </div>
            </div>
            <button className="w-[156px] py-2 rounded-md text-white bg-[#307C31] flex justify-center items-center mt-3 gap-4">
              <Link href={"/payment"}>Use this address</Link>
            </button>
          </form>
        </div>

        <div className="col-span-3 hidden lg:block">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default page;
