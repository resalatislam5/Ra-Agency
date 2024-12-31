"use client";
import { countTypes } from "@/types";
import CountUp from "react-countup";
// import { useEffect, useState } from "react";

function CounterSection({ count, title, style, text }: countTypes) {
  // const [counter, setCounter] = useState(0);

  // const counterFunction = (valueDisplay: number) => {
  //   let interval = 8000;
  //   let startValue = 0;
  //   let endValue = Number(valueDisplay);
  //   let duration = Math.floor(interval / endValue);
  //   let counter = setInterval(() => {
  //     startValue += 1;
  //     setCounter(startValue);

  //     if (startValue === endValue) {
  //       clearInterval(counter);
  //     }
  //   }, duration);
  // };
  // useEffect(() => {
  //   counterFunction(count);
  //   window.addEventListener("scroll", () => counterFunction(count));
  // }, []);

  return (
    <div className={`${style}`}>
      <h2 className="sm:text-[80px] text-5xl sm:leading-[100px] leading-[80px] text-[#CF0] font-bold sm:w-[250px] w-full">
        <CountUp end={count} enableScrollSpy={true} />
        {/* {count}  */}
        {text}
      </h2>
      <p className="text-paragraph">{title}</p>
    </div>
  );
}

export default CounterSection;
