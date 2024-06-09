import Link from "next/link";
import CustomButton from "./utils/CustomButton";
import CustomInput from "./utils/CustomInput";
import Image from "next/image";
import { contactInfo } from "@/constants";
import start from "@/assets/star 1.svg";

function ContactFrom() {
    return (
      <div className="grid grid-cols-5 gap-[60px] justify-between items-center">
        {/* left-side  */}
        <div className="col-span-2 border border-[#383737] flex flex-col pl-10 pr-20 py-10 divide-y divide-[#272525]">
          {contactInfo.map((item) => (
            <div key={item.id} className="flex gap-[30px] py-10">
              <div className="">
                <Image src={item.img} alt={item.title} />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-paragraph">{item.title}</p>
                <Link href={item.to} className="">
                  {item.text}
                </Link>
              </div>
            </div>
          ))}
          <div className="flex flex-col py-10 gap-3 text-[28px] leading-[42px] font-bold">
            <h3>Customer Ratings</h3>
            <div className="flex gap-3 mb-4">
              <Image src={start} alt="star" />
              <Image src={start} alt="star" />
              <Image src={start} alt="star" />
              <Image src={start} alt="star" />
              <Image src={start} alt="star" />
            </div>
            <h5>4.8/5.0</h5>
            <p className="text-paragraph font-normal">
              By 700+ logistics Customers
            </p>
          </div>
        </div>
        {/* right-side */}
        <div className="col-span-3">
          <div className="font-bold">
            <p className="text-[#CF0]">Need Any Help?</p>
            <h2 className="text-[48px] mt-5">Get in Touch With Us</h2>
          </div>
          <form className="grid grid-cols-2 gap-7 mt-[60px]">
            <CustomInput type="text" placeholder="First Name" />
            <CustomInput type="text" placeholder="Last Name" />
            <CustomInput type="number" placeholder="Phone" />
            <CustomInput type="email" placeholder="Email Address" />
            <CustomInput type="text" placeholder="Subject" />
            <CustomInput type="text" placeholder="Website" />
            <textarea
              className="bg-transparent border border-[#383737] col-span-2 px-4 py-5"
              placeholder="Message"
              name=""
              id=""
              // cols={5}
              rows={5}
            ></textarea>
            <CustomButton  title="Send Message" style="w-fit" to="/" />
          </form>
        </div>
      </div>
    );
}

export default ContactFrom;