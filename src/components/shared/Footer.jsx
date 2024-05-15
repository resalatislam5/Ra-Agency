import facebook from "@/assets/facebook (2).png";
import twiter from "@/assets/twitter (2).png";
import intagram from "@/assets/instagram (1).svg";
import linkedin from "@/assets/linkedin (1) 1.svg";
import arrowL from "@/assets/Arrow 1.png";
import Image from "next/image";
import Link from "next/link";
import { footerItems } from "@/constants";
function Footer() {
  return (
    <footer className="mt-[120px] border-[#383737] border-t">
      <div className="pt-[68px] max-w-7xl mx-auto">
        {/*  */}
        <div className="flex gap-[102px] items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-[48px] font-bold">
              Tell Us About Your Project.
            </h1>
            <p className="text-paragraph">
              LET&rsquo;S COLLABORATE AND MAKE GREAT STUFF.
            </p>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <p className="text-paragraph">FOLLOW US</p>
              <div className="">
                <Image src={arrowL} alt="" />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Link target="_blank" href="/">
                <Image src={facebook} loading="lazy" alt="img" />
              </Link>
              <Link target="_blank" href="/">
                <Image src={twiter} loading="lazy" alt="img" />
              </Link>
              <Link target="_blank" href="/">
                <Image src={linkedin} loading="lazy" alt="img" />
              </Link>
              <Link target="_blank" href="/">
                <Image src={intagram} loading="lazy" alt="img" />
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-4 mt-10">
          {footerItems.map((item) => (
            <div key={item.id}>
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col mt-5 gap-[14px]">
                {item?.links?.map((e) => (
                  <Link
                    className="text-paragraph"
                    key={e.id}
                    target="_blank"
                    href={e.to}
                  >
                    {e.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-[#383737] border-t mt-[50px]">
        <div className="max-w-7xl mx-auto text-paragraph flex justify-between mt-5 mb-10">
          <p className="">All Rights Reserved.</p>
          <p className="">Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
