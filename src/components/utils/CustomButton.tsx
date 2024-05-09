import { coustomButtonTypes } from "@/types";
import Link from "next/link";

function CustomButton({ title, to }: coustomButtonTypes) {
  return (
    <Link
      className="bg-[#CF0] py-4 px-8 rounded-[10px] text-paragraph font-bold text-[#171D2D]"
      href={to}
    >
      {title}
    </Link>
  );
}

export default CustomButton;
