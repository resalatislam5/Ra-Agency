import { digitalBrillianceItem } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function RecentPost() {
    return (
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Recent Posts</h1>
        <div className="flex flex-col gap-5">
          {digitalBrillianceItem.map((item) => (
            <Link href={item.to} key={item.id} className="flex items-center">
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
    );
}

export default RecentPost;