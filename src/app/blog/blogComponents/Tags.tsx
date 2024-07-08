import { tagItems } from "@/constants";

function Tags() {
    return (
      <div className="flex flex-col gap-5 flex-wrap">
        <h1 className="text-2xl font-bold">Tags</h1>
        <div className="flex gap-5 flex-wrap">
          {tagItems.map((e) => (
            <button
              className="text-lg font-semibold bg-[#CCFF00] py-2 px-7  text-left text-black rounded-md"
              key={e.id}
            >
              {e.title}
            </button>
          ))}
        </div>
      </div>
    );
}

export default Tags;