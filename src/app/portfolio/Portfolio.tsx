import CommonBanner from "@/components/shared/CommonBanner";
import Link from "next/link";
import img from "@/assets/learner-lesson 1.png"
import Image from "next/image";
function Portfolio() {
  return (
    <main>
      <CommonBanner pageName="Portfolio" />
      <section className="max-w-7xl mx-auto my-[120px]">
        <div className="grid grid-cols-3 gap-[30px]">
          {[...Array(9)].map((e, i) => (
            <Link className="pb-[70px]" href={`/portfolio/${i}`} key={i}>
              {/* image */}
              <div className="">
                <Image src={img} alt="img" />
              </div>
              <div className="flex flex-col items-center gap-4 mt-[30px]">
                <h3 className="text-white text-[32px] font-bold">
                  Texas Protfolio
                </h3>
                <p className="text-2xl">Web Application</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
