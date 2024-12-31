import { Metadata } from "next";
import Portfolio from "./Portfolio";

export const metadata: Metadata = {
  title: "Portfolio || Ra Agency",
  description: "Ra Agency",
};

function page() {
  return (
    <>
      <Portfolio />
    </>
  );
}

export default page;
