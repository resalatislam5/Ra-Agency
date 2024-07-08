import CommonBanner from "@/components/shared/CommonBanner";
import Link from "next/link";
import img from "@/assets/kobu-agency-7okkFhxrxNw-unsplash 1.png";
import Image from "next/image";
import facebook from "@/assets/facebook (2).png";
import twiter from "@/assets/twitter (2).png";
import intagram from "@/assets/instagram (1).svg";
import linkedin from "@/assets/linkedin (1) 1.svg";
import { digitalBrillianceItem } from "@/constants";
import Tags from "@/app/blog/blogComponents/Tags";
import Cateories from "@/app/blog/blogComponents/Cateories";
import RecentPost from "@/app/blog/blogComponents/RecentPost";
import FollowUs from "@/app/blog/blogComponents/FollowUs";
import SearchBar from "./blogComponents/SearchBar";
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
          <SearchBar />
          {/* Recent Posts */}
          <RecentPost />
          {/* Categories */}
          <Cateories />
          {/* Tags */}
          <Tags />
          {/* Follow Us */}
          <FollowUs />
        </div>
      </section>
    </main>
  );
}

export default Blog;
