import {
  Carousel,
  CounterSection,
  CustomButton,
  CustomInput,
} from "@/components";
import Image from "next/image";
import banner from "@/assets/banner_img.png";
import aboutImg from "@/assets/creative-people-working-office 1.png";
import creativeImg from "@/assets/creative-people-working-office 2.png";
import arrowL from "@/assets/Arrow 1.png";
import start from "@/assets/star 1.svg";
import { ListItemType, TitleBarType } from "@/types";
import {
  ceoFounderInfo,
  contactInfo,
  digitalBrillianceItem,
  digitalMarkingItem,
  sponserItems,
} from "@/constants";
import Link from "next/link";

const ListItem = ({ title }: ListItemType) => {
  return (
    <div className="flex items-center gap-5 text-paragraph">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M10 17.75H9.985C9.768 17.746 9.563 17.647 9.423 17.48L4.423 11.48C4.157 11.162 4.2 10.689 4.519 10.424C4.837 10.159 5.309 10.201 5.576 10.52L10.021 15.854L18.442 6.49803C18.72 6.19003 19.194 6.16603 19.502 6.44203C19.81 6.71903 19.835 7.19303 19.558 7.50203L10.558 17.502C10.415 17.66 10.213 17.75 10 17.75Z"
          fill="#CCFF00"
        />
      </svg>
      {title}
    </div>
  );
};

const TitleBar = ({ children, title }: TitleBarType) => {
  return (
    <div className="mt-[120px]">
      <div className="w-[50%] mx-auto">
        <h1 className="text-heading font-bold text-center">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <main>
      {/* ------ banner section start ------ */}
      <div className="grid grid-cols-2 gap-5 items-center mt-5">
        {/* left side */}
        <div className="font-bold">
          <p className="text-paragraph ">
            Digital Analytics and Strategy Consulting
          </p>
          <h1 className="text-[60px] leading-[72px] pt-5 mb-14">
            Creative Digital Marketing Best Agency
          </h1>
          <CustomButton title="Contact Us →" to="/" style="w-fit" />
        </div>
        {/* right side */}
        <div className="">
          <Image src={banner} alt="banner img" />
        </div>
      </div>
      {/* ------ banner section end ------ */}
      {/* ------ sponer section start ------ */}
      <div className="bg-[#CCDEFF] flex justify-around items-center rounded-[20px] mt-[120px]">
        {sponserItems.map((item) => (
          <Image key={item.id} src={item.img} alt="" />
        ))}
      </div>
      {/* ------ sponer section end ------ */}
      {/* ------ about section start ------ */}
      <div className="grid grid-cols-2 gap-[106px] items-center mt-[120px]">
        {/* left side */}
        <div className="">
          <Image src={aboutImg} alt="banner img" />
        </div>
        {/* right side */}
        <div className="flex flex-col gap-5">
          <p className="text-paragraph font-bold ">About Us Company</p>
          <h1 className="text-heading font-bold ">
            Creative Digital Marketing Best Agency
          </h1>
          <p className="text-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            molestieconsequat erat iaculis. Duis quam lorem, bibendum at
            bibendum ut, asdolor urna. Proin rutrum lobortis vulputate
          </p>
          <div className="grid grid-cols-2 gap-5">
            <ListItem title="Digital Strategy" />
            <ListItem title="SEO Optimization" />
            <ListItem title="Marketing" />
            <ListItem title="First Working Proces" />
          </div>
          <CustomButton title="Contact Us →" to="/" style="w-fit mt-12" />
        </div>
      </div>
      {/* ------ about section end ------ */}
      {/* ------ digital section start ------ */}
      <TitleBar title="We Offer A Wide Range Of Digital Marketing">
        <div className="mt-[92px] grid grid-cols-3">
          {digitalMarkingItem.map((item) => (
            <div
              key={item.id}
              className={`${item.style} border-[#CCDEFF] hover:border-t-0 px-[42px] py-[33px] flex flex-col gap-5`}
            >
              <div className="">
                <Image src={item.img} alt={item.title} />
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-paragraph ">{item.text}</p>
              <CustomButton
                title="Read More"
                to="/"
                style="bg-transparent text-[#CCFF00] font-normal !px-0 !py-0"
                img={arrowL}
              />
            </div>
          ))}
        </div>
      </TitleBar>
      {/* ------ digital section end ------ */}
      {/* ------ count section start ------ */}
      <div className="mt-[120px] flex justify-between divide-x divide-[#575757]">
        <CounterSection
          title="Satisfied Clients"
          count={56}
          style="pr-[50px]"
          text="%"
        />
        <CounterSection
          title="We Project Completed"
          count={644}
          style="pl-[50px] pr-[50px]"
          text="+"
        />
        <CounterSection
          title="Award Recognitions"
          count={86}
          style="pl-[50px] pr-[50px]"
          text="+"
        />
        <CounterSection
          title="Our Experience"
          count={28}
          style="pl-[50px]"
          text="+"
        />
      </div>
      {/* ------ count section end ------ */}
      {/* ------ ceo and founder information section start ------ */}
      <TitleBar title="Meet With Our CEO And Founders">
        <div className="mt-[50px] grid grid-cols-4 gap-7 justify-between">
          {ceoFounderInfo.map((item) => (
            <div className="flex flex-col items-center group" key={item.id}>
              <div className="relative flex flex-col items-center">
                <Image
                  className="w-full h-full"
                  src={item.img}
                  alt={item.name}
                />
                {/* hover end start */}
                <div className="absolute -bottom-7 left-[40%] group-hover:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <circle
                      cx="30"
                      cy="30"
                      r="28.5"
                      fill="#171D2D"
                      stroke="white"
                      stroke-width="3"
                    />
                    <line
                      x1="17"
                      y1="29.5"
                      x2="42"
                      y2="29.5"
                      stroke="white"
                      stroke-width="3"
                    />
                    <line
                      x1="30.5"
                      y1="18"
                      x2="30.5"
                      y2="43"
                      stroke="#CCDEFF"
                      stroke-width="3"
                    />
                  </svg>
                </div>
                {/* hover buttom start end */}
                {/* hover link start start */}
                <div className="absolute group-hover:block group-hover:bottom-10 hidden">
                  <div className="flex items-center justify-center gap-5 bg-[#171D2D] rounded-[5px] py-3 px-2">
                    {item.links.map((e, i) => (
                      <Link key={i} href={e.to} className="">
                        <Image className="w-6 h-6" src={e.img} alt="" />
                      </Link>
                    ))}
                  </div>
                </div>
                {/* hover link start end */}
              </div>
              <div className="flex flex-col gap-[14px] text-center mt-[50px]">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-paragraph text-[#CF0]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </TitleBar>
      {/* ------ ceo and founder information section end ------ */}
      {/* ------ contact us section start ------ */}
      <section className="mt-[120px]">
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
              <CustomButton title="Send Message" style="w-fit" to="/" />
            </form>
          </div>
        </div>
      </section>
      {/* ------ contact us section end ------ */}
      {/* ------ testtimonial section start ------ */}
      <section className="mt-[120px]">
        <Carousel />
      </section>
      {/* ------ testtimonial section end ------ */}
      {/* ------ Digital Brilliance section start ------ */}
      <section className="mt-[120px]">
        <TitleBar title="Empowering Brands With Digital Brilliance">
          <div className="grid grid-cols-2 mt-[50px] gap-14">
            {/* left-section  */}
            <div className="flex flex-col items-center text-paragraph">
              <div className="">
                <Image src={creativeImg} alt="img" />
              </div>
              <div className="bg-[#171D2D] rounded-[15px] flex flex-col gap-4 px-10 py-9 w-[580px] -mt-[15%]">
                <div className="flex gap-4">
                  <div className="flex items-center gap-3">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 20H5C4.1 20 4 18.9 4 18V6C4 5.1 4.2125 5 5 5H6V6H5C4.8875 6 5 5.6625 5 6V18C5 18.3 4.7 19 5 19H18C18.3 19 19 18.3 19 18V6C19 5.6625 19.075 6 19 6H18V5H19C19.75 5 20 5.1 20 6V18C19.925 18.9 18.9 20 18 20Z"
                        fill="#CCFF00"
                      />
                      <path
                        d="M7 6.10377C6.7 6.10377 7 5.41038 7 5.11321V3.13208C6.7 3.13208 7 2.83491 7 3.13208C7.3 3.13208 8 2.83491 8 3.13208V5.11321C7.9625 5.41038 7.3 6.10377 7 6.10377ZM16 6.10377C15.7 6.10377 15 5.41038 15 5.11321V3.13208C15 2.83491 15.7 3.13208 16 3.13208C16.3 3.13208 17 2.83491 17 3.13208V5.11321C17 5.41038 16.3 6.10377 16 6.10377ZM9 4.12264H14V5.11321H9V4.12264ZM5 7.09434H19V8.08491H5V7.09434ZM17 9.07547H18V10.066H17V9.07547ZM14 9.07547H16V10.066H14V9.07547ZM12 9.07547H13V10.066H12V9.07547ZM10 9.07547H11V10.066H10V9.07547ZM8 9.07547H9V10.066H8V9.07547ZM17 11.0566H18V12.0472H17V11.0566ZM14 11.0566H16V12.0472H14V11.0566ZM12 11.0566H13V12.0472H12V11.0566ZM10 11.0566H11V12.0472H10V11.0566ZM8 11.0566H9V12.0472H8V11.0566ZM6 11.0566H7V12.0472H6V11.0566ZM17 14.0283H18V15.0189H17V14.0283ZM14 14.0283H16V15.0189H14V14.0283ZM12 14.0283H13V15.0189H12V14.0283ZM10 14.0283H11V15.0189H10V14.0283ZM8 14.0283H9V15.0189H8V14.0283ZM6 14.0283H7V15.0189H6V14.0283ZM14 16.0094H16V17H14V16.0094ZM12 16.0094H13V17H12V16.0094ZM10 16.0094H11V17H10V16.0094ZM8 16.0094H9V17H8V16.0094ZM6 16.0094H7V17H6V16.0094Z"
                        fill="#CCFF00"
                      />
                    </svg>
                    Business
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 20H5C4.1 20 4 18.9 4 18V6C4 5.1 4.2125 5 5 5H6V6H5C4.8875 6 5 5.6625 5 6V18C5 18.3 4.7 19 5 19H18C18.3 19 19 18.3 19 18V6C19 5.6625 19.075 6 19 6H18V5H19C19.75 5 20 5.1 20 6V18C19.925 18.9 18.9 20 18 20Z"
                        fill="#CCFF00"
                      />
                      <path
                        d="M7 6.10377C6.7 6.10377 7 5.41038 7 5.11321V3.13208C6.7 3.13208 7 2.83491 7 3.13208C7.3 3.13208 8 2.83491 8 3.13208V5.11321C7.9625 5.41038 7.3 6.10377 7 6.10377ZM16 6.10377C15.7 6.10377 15 5.41038 15 5.11321V3.13208C15 2.83491 15.7 3.13208 16 3.13208C16.3 3.13208 17 2.83491 17 3.13208V5.11321C17 5.41038 16.3 6.10377 16 6.10377ZM9 4.12264H14V5.11321H9V4.12264ZM5 7.09434H19V8.08491H5V7.09434ZM17 9.07547H18V10.066H17V9.07547ZM14 9.07547H16V10.066H14V9.07547ZM12 9.07547H13V10.066H12V9.07547ZM10 9.07547H11V10.066H10V9.07547ZM8 9.07547H9V10.066H8V9.07547ZM17 11.0566H18V12.0472H17V11.0566ZM14 11.0566H16V12.0472H14V11.0566ZM12 11.0566H13V12.0472H12V11.0566ZM10 11.0566H11V12.0472H10V11.0566ZM8 11.0566H9V12.0472H8V11.0566ZM6 11.0566H7V12.0472H6V11.0566ZM17 14.0283H18V15.0189H17V14.0283ZM14 14.0283H16V15.0189H14V14.0283ZM12 14.0283H13V15.0189H12V14.0283ZM10 14.0283H11V15.0189H10V14.0283ZM8 14.0283H9V15.0189H8V14.0283ZM6 14.0283H7V15.0189H6V14.0283ZM14 16.0094H16V17H14V16.0094ZM12 16.0094H13V17H12V16.0094ZM10 16.0094H11V17H10V16.0094ZM8 16.0094H9V17H8V16.0094ZM6 16.0094H7V17H6V16.0094Z"
                        fill="#CCFF00"
                      />
                    </svg>
                    02 Apr 2024
                  </div>
                </div>
                <p className=" font-bold w-96">
                  How to Prepare for your First Track his consumer-focused
                </p>
                <Link className="text-[#CCFF00]" href="">
                  Read More
                </Link>
              </div>
            </div>
            {/* right-section  */}
            <div className="flex flex-col gap-5">
              {digitalBrillianceItem.map(item => (
                <div key={item.id} className="flex items-center text-paragraph">
                  <div className="w-80">
                    <Image src={item.img} alt="img" />
                  </div>
                  <div className="bg-[#171D2D] rounded-[15px] flex flex-col gap-4 p-5 w-[348px] -ml-[10%]">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-3">
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M18 20H5C4.1 20 4 18.9 4 18V6C4 5.1 4.2125 5 5 5H6V6H5C4.8875 6 5 5.6625 5 6V18C5 18.3 4.7 19 5 19H18C18.3 19 19 18.3 19 18V6C19 5.6625 19.075 6 19 6H18V5H19C19.75 5 20 5.1 20 6V18C19.925 18.9 18.9 20 18 20Z"
                            fill="#CCFF00"
                          />
                          <path
                            d="M7 6.10377C6.7 6.10377 7 5.41038 7 5.11321V3.13208C6.7 3.13208 7 2.83491 7 3.13208C7.3 3.13208 8 2.83491 8 3.13208V5.11321C7.9625 5.41038 7.3 6.10377 7 6.10377ZM16 6.10377C15.7 6.10377 15 5.41038 15 5.11321V3.13208C15 2.83491 15.7 3.13208 16 3.13208C16.3 3.13208 17 2.83491 17 3.13208V5.11321C17 5.41038 16.3 6.10377 16 6.10377ZM9 4.12264H14V5.11321H9V4.12264ZM5 7.09434H19V8.08491H5V7.09434ZM17 9.07547H18V10.066H17V9.07547ZM14 9.07547H16V10.066H14V9.07547ZM12 9.07547H13V10.066H12V9.07547ZM10 9.07547H11V10.066H10V9.07547ZM8 9.07547H9V10.066H8V9.07547ZM17 11.0566H18V12.0472H17V11.0566ZM14 11.0566H16V12.0472H14V11.0566ZM12 11.0566H13V12.0472H12V11.0566ZM10 11.0566H11V12.0472H10V11.0566ZM8 11.0566H9V12.0472H8V11.0566ZM6 11.0566H7V12.0472H6V11.0566ZM17 14.0283H18V15.0189H17V14.0283ZM14 14.0283H16V15.0189H14V14.0283ZM12 14.0283H13V15.0189H12V14.0283ZM10 14.0283H11V15.0189H10V14.0283ZM8 14.0283H9V15.0189H8V14.0283ZM6 14.0283H7V15.0189H6V14.0283ZM14 16.0094H16V17H14V16.0094ZM12 16.0094H13V17H12V16.0094ZM10 16.0094H11V17H10V16.0094ZM8 16.0094H9V17H8V16.0094ZM6 16.0094H7V17H6V16.0094Z"
                            fill="#CCFF00"
                          />
                        </svg>
                        {item.business}
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M18 20H5C4.1 20 4 18.9 4 18V6C4 5.1 4.2125 5 5 5H6V6H5C4.8875 6 5 5.6625 5 6V18C5 18.3 4.7 19 5 19H18C18.3 19 19 18.3 19 18V6C19 5.6625 19.075 6 19 6H18V5H19C19.75 5 20 5.1 20 6V18C19.925 18.9 18.9 20 18 20Z"
                            fill="#CCFF00"
                          />
                          <path
                            d="M7 6.10377C6.7 6.10377 7 5.41038 7 5.11321V3.13208C6.7 3.13208 7 2.83491 7 3.13208C7.3 3.13208 8 2.83491 8 3.13208V5.11321C7.9625 5.41038 7.3 6.10377 7 6.10377ZM16 6.10377C15.7 6.10377 15 5.41038 15 5.11321V3.13208C15 2.83491 15.7 3.13208 16 3.13208C16.3 3.13208 17 2.83491 17 3.13208V5.11321C17 5.41038 16.3 6.10377 16 6.10377ZM9 4.12264H14V5.11321H9V4.12264ZM5 7.09434H19V8.08491H5V7.09434ZM17 9.07547H18V10.066H17V9.07547ZM14 9.07547H16V10.066H14V9.07547ZM12 9.07547H13V10.066H12V9.07547ZM10 9.07547H11V10.066H10V9.07547ZM8 9.07547H9V10.066H8V9.07547ZM17 11.0566H18V12.0472H17V11.0566ZM14 11.0566H16V12.0472H14V11.0566ZM12 11.0566H13V12.0472H12V11.0566ZM10 11.0566H11V12.0472H10V11.0566ZM8 11.0566H9V12.0472H8V11.0566ZM6 11.0566H7V12.0472H6V11.0566ZM17 14.0283H18V15.0189H17V14.0283ZM14 14.0283H16V15.0189H14V14.0283ZM12 14.0283H13V15.0189H12V14.0283ZM10 14.0283H11V15.0189H10V14.0283ZM8 14.0283H9V15.0189H8V14.0283ZM6 14.0283H7V15.0189H6V14.0283ZM14 16.0094H16V17H14V16.0094ZM12 16.0094H13V17H12V16.0094ZM10 16.0094H11V17H10V16.0094ZM8 16.0094H9V17H8V16.0094ZM6 16.0094H7V17H6V16.0094Z"
                            fill="#CCFF00"
                          />
                        </svg>
                        {item.date}
                      </div>
                    </div>
                    <p className=" font-bold">
                      {item.text}
                    </p>
                    <Link className="text-[#CCFF00]" href={item.to}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TitleBar>
      </section>
      {/* ------ Digital Brilliance section end ------ */}
    </main>
  );
}
