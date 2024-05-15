import { inputTypes } from "@/types";

function CustomInput({ type, placeholder, styles }: inputTypes) {
  return (
    <input
      className={`${styles} border border-[#383737] px-5 py-4 bg-transparent text-paragraph`}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default CustomInput;
