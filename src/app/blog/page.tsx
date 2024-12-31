import { Metadata } from "next";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Blog || Ra Agency",
  description: "Ra Agency",
};

function page() {
  return (
    <>
      <Blog />
    </>
  );
}

export default page;
