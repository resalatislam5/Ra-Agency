import { Metadata } from "next";
import BlogDetails from "./BlogDetails";

export const metadata: Metadata = {
  title: "Blog || Ra Agency",
  description: "Ra Agency",
};

function page() {
  return (
    <>
      <BlogDetails />
    </>
  );
}

export default page;
