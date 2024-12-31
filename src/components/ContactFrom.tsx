import Link from "next/link";
import CustomButton from "./utils/CustomButton";
import CustomInput from "./utils/CustomInput";
import Image from "next/image";
import { contactInfo } from "@/constants";
import start from "@/assets/star 1.svg";

function ContactFrom() {
  return (
    <div className="grid lg:grid-cols-5 gap-[60px] lg:justify-between justify-center items-center px-5">
      {/* left-side  */}
      <div className="lg:col-span-2 border border-[#383737] flex flex-col sm:pl-10 sm:pr-20 px-5 py-10 divide-y divide-[#272525] order-2 lg:order-1">
        {contactInfo.map((item) => (
          <div key={item.id} className="flex sm:gap-[30px] gap-5 py-10">
            <div className="">
              <Image
                className="w-full h-full"
                src={item.img}
                alt={item.title}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="sm:text-paragraph text-sm">{item.title}</p>
              <Link href={item.to} className="sm:text-paragraph text-sm">
                {item.text}
              </Link>
            </div>
          </div>
        ))}
        <div className="flex flex-col py-10 gap-3 sm:text-[28px] text-xl sm:leading-[42px] font-bold">
          <h3>Customer Ratings</h3>
          <div className="flex gap-3 mb-4">
            <Image src={start} alt="star" />
            <Image src={start} alt="star" />
            <Image src={start} alt="star" />
            <Image src={start} alt="star" />
            <Image src={start} alt="star" />
          </div>
          <h5>4.8/5.0</h5>
          <p className="sm:text-paragraph text-sm font-normal">
            By 700+ logistics Customers
          </p>
        </div>
      </div>
      {/* right-side */}
      <div className="lg:col-span-3 order-1 lg:order-2">
        <div className="font-bold">
          <p className="text-[#CF0]">Need Any Help?</p>
          <h2 className="lg:text-5xl text-3xl mt-5">Get in Touch With Us</h2>
        </div>
        <form className="grid sm:grid-cols-2 grid-cols-1 gap-7 lg:mt-[60px] mt-10">
          <CustomInput type="text" placeholder="First Name" />
          <CustomInput type="text" placeholder="Last Name" />
          <CustomInput type="number" placeholder="Phone" />
          <CustomInput type="email" placeholder="Email Address" />
          <CustomInput type="text" placeholder="Subject" />
          <CustomInput type="text" placeholder="Website" />
          <textarea
            className="bg-transparent border border-[#383737] sm:col-span-2 px-4 py-5"
            placeholder="Message"
            name=""
            id=""
            // cols={5}
            rows={5}
          ></textarea>
          <CustomButton title="Send Message" style="w-fit" to="/" />
        </form>
      </div>
    </div>
  );
}

export default ContactFrom;
