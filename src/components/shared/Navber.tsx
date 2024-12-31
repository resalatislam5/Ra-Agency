"use client";
import { navItems } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "../utils/CustomButton";
import logo from "@/assets/logo.png";
import Image from "next/image";
function Navber() {
  const [navShow, SetNavShow] = useState(false);
  return (
    <>
      {/*------ mobile screen show this code start ------- */}
      <div
        className={`${
          navShow ? "w-full" : "w-0 hidden"
        } h-full  fixed z-10 top-0 left-0 bg-[#111] py-10   text-center`}
      >
        <a
          href="javascript:void(0)"
          className="absolute top-0 right-5 text-4xl ml-10 block text-[#818181] hover:text-[#f1f1f1]"
          onClick={() => SetNavShow(false)}
        >
          &times;
        </a>
        {navItems.map((e, i) => (
          <Link
            className="p-2 text-2xl text-[#818181] block hover:text-[#f1f1f1]"
            href={e.to}
            key={i}
            onClick={() => SetNavShow(false)}
          >
            {e.title}
          </Link>
        ))}
      </div>
      {/*------ mobile screen show this code end ------- */}
      <div className="max-w-7xl mx-auto relative">
        {/*------ desktop screen show this code start ------- */}
        <header className="lg:py-[55px] pt-10 px-5 absolute top-0 left-0 right-0">
          <div className="flex justify-between">
            <Link href={"/"}>
              <div className="flex items-center gap-3">
                <div className="w-[50px] h-[50px]">
                  <Image
                    className="w-full h-full"
                    src={logo}
                    loading="lazy"
                    alt="logo"
                  />
                </div>
                <h1 className="text-lg font-bold">Ra Agency</h1>
              </div>
            </Link>
            <div className="lg:flex hidden xl:gap-28 gap-20 items-center">
              <div className="flex text-paragraph font-bold xl:gap-10 gap-5">
                {navItems.map((e, i) => (
                  <Link className=" " href={e.to} key={i}>
                    {e.title}
                  </Link>
                ))}
              </div>
              <CustomButton title="LOGIN/SIGNUP" to="/" />
            </div>
            {/* responsive navbar icon */}
            <button
              className="lg:hidden flex w-10"
              onClick={() => SetNavShow(true)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#fff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </header>
        {/*------ desktop screen show this code end ------- */}
      </div>
    </>
  );
}

export default Navber;
