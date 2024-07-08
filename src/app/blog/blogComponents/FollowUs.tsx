import { sharedItems } from "@/constants";
import Link from "next/link";

function FollowUs() {
    return (
      <div className="flex flex-col  gap-5 flex-wrap">
        <h1 className="text-2xl font-bold">Follow Us</h1>
        <div className="flex gap-5 flex-wrap">
          {sharedItems.map((e) => (
            <Link
              href={e.to}
              className="text-lg font-semibold bg-white p-2 text-black rounded-md"
              key={e.id}
            >
              {e.icon}
            </Link>
          ))}
        </div>
      </div>
    );
}

export default FollowUs;