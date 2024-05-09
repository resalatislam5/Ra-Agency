import { CounterSection, CustomButton } from "@/components";
import Image from "next/image";
import banner from "@/assets/banner_img.png";
import aboutImg from "@/assets/creative-people-working-office 1.png";
import arrowL from "@/assets/Arrow 1.png";
import { ListItemType, TitleBarType, countTypes } from "@/types";
import { digitalMarkingItem, sponserItems } from "@/constants";

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
                style="bg-transparent text-[#CCFF00] font-normal px-0 py-0"
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
    </main>
  );
}
