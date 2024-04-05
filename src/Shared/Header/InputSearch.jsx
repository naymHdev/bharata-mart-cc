import { GrFormLocation } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const InputSearch = () => {
  return (
    <>
      <section className="hidden md:flex items-center gap-2">
        <div className=" hidden md:flex items-center text-slate-900 bg-slate-50 rounded-md py-">
          <div>
            <button className=" flex items-center font-medium gap-[1px]">
              <GrFormLocation className=" text-xl" />
              All India <MdOutlineKeyboardArrowDown className=" text-2xl" />
            </button>
          </div>
          <div className="">
            <input
              className="rounded-md border-none focus:outline-none"
              type="search"
              name=""
              id=""
              placeholder="Enter product / service to search"
            />
          </div>
          <HiOutlineMicrophone className=" text-3xl mr-3" />
          <div className="bg-[#28A69A] rounded-md p-3">
            <IoSearch className=" text-2xl text-white" />
          </div>
        </div>
        <div>
          <button className=" text-xl font-bold bg-white text-[#2E3192] rounded-sm px-2 py-[8px]">
            Get Best Price
          </button>
        </div>
      </section>
    </>
  );
};

export default InputSearch;
