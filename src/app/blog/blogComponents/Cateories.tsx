import { categoriesItems } from "@/constants";

function Cateories() {
  return (
    <div className="flex flex-col gap-5 items-start">
      <h1 className="text-2xl font-bold">Categories</h1>
      {categoriesItems.map((e) => (
        <button
          className="text-lg font-semibold bg-[#171D2D] py-2 px-7  text-left rounded-md"
          key={e.id}
        >
          {e.title}
        </button>
      ))}
    </div>
  );
}

export default Cateories;
