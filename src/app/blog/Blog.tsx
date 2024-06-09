import CommonBanner from "@/components/shared/CommonBanner";
import Link from "next/link";
import img from "@/assets/kobu-agency-7okkFhxrxNw-unsplash 1.png";
import Image from "next/image";
import facebook from "@/assets/facebook (2).png";
import twiter from "@/assets/twitter (2).png";
import intagram from "@/assets/instagram (1).svg";
import linkedin from "@/assets/linkedin (1) 1.svg";
import { digitalBrillianceItem } from "@/constants";
function Blog() {
  return (
    <main>
      {/* this is banner section */}
      <CommonBanner pageName="Blog" />
      {/* main blog items */}
      <section className="max-w-7xl mx-auto grid grid-cols-3 mt-[120px] gap-9">
        {/* left blog items */}
        <div className="col-span-2 flex flex-col gap-10">
          {[...Array(10)].map((e, i) => (
            <Link
              className="bg-[#171D2D] rounded-md"
              href={`/blog/${i}`}
              key={i}
            >
              {/* image */}
              <div className="">
                <Image
                  className="w-full h-full"
                  src={img}
                  alt="img"
                  loading="lazy"
                />
              </div>
              {/* date */}
              <p className="text-[#CF0] px-5 py-2">September 14, 2023</p>

              <div className="flex flex-col gap-7 px-5 ">
                <h1 className="text-[32px] font-bold">
                  Our Futuristic Marketin Realtor Should Read
                </h1>
                <p className="text-lg text-white">
                  There are endless ways to create a some ways to have a
                  business. We spend more time at themeetings than ever with
                  knowledge melioration. It is a long...
                </p>
              </div>
              <hr className="mt-7" />
              <div className="flex justify-between px-5 my-7 text-white">
                <p>Read more</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="16"
                  viewBox="0 0 61 16"
                  fill="none"
                >
                  <path
                    d="M60.7071 8.70711C61.0976 8.31658 61.0976 7.68342 60.7071 7.29289L54.3432 0.928932C53.9526 0.538408 53.3195 0.538408 52.9289 0.928932C52.5384 1.31946 52.5384 1.95262 52.9289 2.34315L58.5858 8L52.9289 13.6569C52.5384 14.0474 52.5384 14.6805 52.9289 15.0711C53.3195 15.4616 53.9526 15.4616 54.3432 15.0711L60.7071 8.70711ZM0 9H60V7H0V9Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        {/* right blog items */}
        <div className="col-span-1 flex flex-col gap-[70px]">
          {/* search-bar  */}
          <div className="flex rounded-md">
            <input
              type="text"
              className="py-3 px-5 bg-white text-black outline-none w-full"
              placeholder="Type Here...."
            />
            <button className=" bg-[#ccff00] px-8 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.71 19.29L17.31 15.9C18.407 14.5025 19.0022 12.7767 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00347 12.5997 3.60897 14.0615C4.21447 15.5233 5.23985 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7767 19.0022 14.5025 18.407 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29ZM5 11C5 9.81332 5.3519 8.65328 6.01119 7.66658C6.67047 6.67989 7.60755 5.91085 8.7039 5.45673C9.80026 5.0026 11.0067 4.88378 12.1705 5.11529C13.3344 5.3468 14.4035 5.91825 15.2426 6.75736C16.0818 7.59648 16.6532 8.66558 16.8847 9.82946C17.1162 10.9933 16.9974 12.1997 16.5433 13.2961C16.0892 14.3925 15.3201 15.3295 14.3334 15.9888C13.3467 16.6481 12.1867 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          {/* Recent Posts */}
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Recent Posts</h1>
            <div className="flex flex-col gap-5">
              {digitalBrillianceItem.map((item) => (
                <Link
                  href={item.to}
                  key={item.id}
                  className="flex items-center"
                >
                  <div className="w-52">
                    <Image src={item.img} alt="img" />
                  </div>
                  <div className="bg-[#171D2D] rounded-[15px] flex flex-col gap-4 p-5 w-[220px] -ml-[10%] text-base">
                    <div className="flex gap-4">
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
                    <p className=" font-bold text-sm text-white">{item.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Categories */}
          <div className="flex flex-col gap-5 items-start">
            <h1 className="text-2xl font-bold">Categories</h1>
            {[...Array(5)].map((e, i) => (
              <button
                className="text-lg font-semibold bg-[#171D2D] py-2 px-7  text-left rounded-md"
                key={i}
              >
                Search Engine Optimization
              </button>
            ))}
          </div>
          {/* Tags */}
          <div className="flex flex-col gap-5 flex-wrap">
            <h1 className="text-2xl font-bold">Categories</h1>
            <div className="flex gap-5 flex-wrap">
              {[...Array(5)].map((e, i) => (
                <button
                  className="text-lg font-semibold bg-[#CCFF00] py-2 px-7  text-left text-black rounded-md"
                  key={i}
                >
                  Development
                </button>
              ))}
            </div>
          </div>
          {/* Follow Us */}
          <div className="flex flex-col  gap-5 flex-wrap">
            <h1 className="text-2xl font-bold">Follow Us</h1>
            <div className="flex gap-5 flex-wrap">
              {[...Array(5)].map((e, i) => (
                <Link
                  href={"/"}
                  className="text-lg font-semibold bg-white p-2 text-black rounded-md"
                  key={i}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 5.5H9V3.5C9 3.23478 9.10536 2.98043 9.29289 2.79289C9.48043 2.60536 9.73478 2.5 10 2.5H11V0H9C8.20435 0 7.44129 0.31607 6.87868 0.87868C6.31607 1.44129 6 2.20435 6 3V5.5H4V8H6V16H9V8H11L12 5.5Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
