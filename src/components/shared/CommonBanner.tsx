import Link from "next/link";
import blogImg from "@/assets/creative-people-bg.png";

function CommonBanner({ pageName }: { pageName: string }) {
  return (
    <div
      style={{ backgroundImage: `url(${blogImg.src})` }}
      className="bg-cover bg-no-repeat sm:h-[720px] h-96 flex items-center justify-start w-full bg-blend-multiply bg-[#09153099]"
    >
      <div className="flex flex-col justify-center gap-8 w-[1280px] mx-auto px-5">
        <h2 className="sm:text-6xl text-4xl font-bold">{pageName}</h2>
        <div className="text-lg font-bold flex gap-4 items-center">
          <Link href="/">Home</Link>
          <p className="w-[79px] h-[1px] bg-white"></p>
          <p>{pageName}</p>
        </div>
      </div>
    </div>
  );
}

export default CommonBanner;
