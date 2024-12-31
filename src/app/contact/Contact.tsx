import { ContactFrom } from "@/components";
import CommonBanner from "@/components/shared/CommonBanner";

function Contact() {
  return (
    <section>
      <CommonBanner pageName="Contact us" />
      <div className="max-w-7xl mx-auto lg:mt-[120px] mt-[80px] px-5">
        <h1 className="lg:text-[48px] text-3xl text-white font-bold lg:mb-[50px] mb-8">
          Write Us Something
        </h1>
        <ContactFrom />
      </div>
    </section>
  );
}

export default Contact;
