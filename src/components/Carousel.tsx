"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { tasttimonialItem } from "@/constants";
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#CCFF00",
        padding: "20px",
        borderRadius: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#7D7D7D",
        padding: "20px",
        borderRadius: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}
function Carousel() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [handelImg, setHanddelImg] = useState(tasttimonialItem[0].id);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <div className="slider-container max-w-[800px] mx-auto mb-20 text-center">
      {/* <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4> */}
      <h2 className="text-heading font-bold mb-[50px]">What Our Clients Say</h2>
      <Slider
        asNavFor={nav2}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        ref={(slider) => (sliderRef1 = slider)}
      >
        {tasttimonialItem.map((e) => (
          <div
            onClick={() => setHanddelImg(e.id)}
            className="px-20 text-paragraph"
            key={e.id}
          >
            <h3>{e.title}</h3>
          </div>
        ))}
      </Slider>
      {/* second slider */}
      <Slider
        className="center mx-auto mt-14"
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        centerMode={true}
        arrows={false}
      >
        {tasttimonialItem.map((e) => (
          <div key={e.id} onClick={() => setHanddelImg(e.id)}>
            <div className="cursor-pointer  px-8">
              <div className={`flex justify-center`}>
                <Image
                  className={`${
                    handelImg === e.id
                      ? "border-2 border-[#CCFF00] rounded-full w-[100px]"
                      : "w-20"
                  }`}
                  src={e.img}
                  alt={e.name}
                />
              </div>
            </div>
            <div
              className={` flex-col gap-[10px] mt-6 justify-center text-white ${
                handelImg === e.id ? "flex" : "hidden"
              }`}
            >
              <h3>{e.name}</h3>
              <p>{e.jobTitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
