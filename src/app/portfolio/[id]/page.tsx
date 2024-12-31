import { Metadata } from "next";
import PortfolioDetails from "./PortfolioDetails";

export const metadata: Metadata = {
  title: "Portfolio || Ra Agency",
  description: "Ra Agency",
};
function page() {
  return (
    <main>
      <PortfolioDetails />
    </main>
  );
}

export default page;
