import Link from "next/link";
import blogImg from "@/assets/creative-people-bg.png";

function CommonBanner({ pageName }: { pageName: string }) {
  return (
    <div
      style={{ backgroundImage: `url(${blogImg.src})` }}
      className="bg-cover bg-no-repeat h-[720px] flex items-center justify-start w-full bg-blend-multiply bg-[#09153099]"
    >
      <div className="flex flex-col justify-center gap-8 w-[1280px] mx-auto">
        <h2 className="text-6xl font-bold">Blog</h2>
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
