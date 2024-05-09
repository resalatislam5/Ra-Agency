"use client";
import { navItems } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "../utils/CustomButton";
import logo from "@/assets/logo.png"
import Image from "next/image";
function Navber() {
  const [navShow, SetNavShow] = useState(false);
  return (
    <>
      {/*------ mobile screen show this code start ------- */}
      <div
        className={`${
          navShow ? "w-full" : "w-0"
        } h-full absolute z-10 top-0 left-0 bg-[#111] overflow-x-hidden transition-transform pt-10 text-center`}
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
      {/*------ desktop screen show this code start ------- */}
      <header className="py-[55px]">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[50px] h-[50px]">
              <Image className="w-full h-full" src={logo} loading="lazy" alt="logo" />
            </div>
            <h1 className="text-lg font-bold">Ra Agency</h1>
          </div>
          <div className="flex gap-28 items-center">
            <div className="flex text-paragraph font-bold gap-10">
              {navItems.map((e, i) => (
                <Link
                  className=" "
                  href={e.to}
                  key={i}
                  onClick={() => SetNavShow(false)}
                >
                  {e.title}
                </Link>
              ))}
            </div>
            <CustomButton title="LOGIN/SIGNUP" to="/" />
          </div>
        </div>
      </header>
      {/*------ desktop screen show this code end ------- */}
    </>
  );
}

export default Navber;
