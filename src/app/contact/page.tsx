import { Metadata } from "next";
import Contact from "./Contact";

export const metadata: Metadata = {
  title: "Contact || Ra Agency",
  description: "Ra Agency",
};

function page() {
  return (
    <main>
      <Contact />
    </main>
  );
}

export default page;
