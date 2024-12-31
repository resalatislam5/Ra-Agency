import CommonBanner from "@/components/shared/CommonBanner";
import Link from "next/link";
import img from "@/assets/learner-lesson 1.png";
import Image from "next/image";
function Portfolio() {
  return (
    <main>
      <CommonBanner pageName="Portfolio" />
      <section className="max-w-7xl mx-auto lg:my-[120px] mt-[80px] px-5">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5 ">
          {[...Array(9)].map((e, i) => (
            <Link
              className="lg:pb-[70px] sm:pb-[30px] pb-5"
              href={`/portfolio/${i}`}
              key={i}
            >
              {/* image */}
              <div className="">
                <Image src={img} alt="img" />
              </div>
              <div className="flex flex-col items-center gap-4 mt-[30px]">
                <h3 className="text-white lg:text-[32px] text-2xl font-bold">
                  Texas Protfolio
                </h3>
                <p className="lg:text-2xl text-lg">Web Application</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
