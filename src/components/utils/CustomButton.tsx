import { coustomButtonTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";

function CustomButton({ title, to, style, img }: coustomButtonTypes) {
  return (
    <Link
      className={`${style} bg-[#CF0] py-4 px-8 rounded-[10px] text-paragraph font-bold text-[#171D2D] flex items-center gap-2`}
      href={to}
    >
      {title}
      <Image src={img} alt="" />
    </Link>
  );
}

export default CustomButton;
