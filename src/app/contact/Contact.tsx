import { ContactFrom } from "@/components";
import CommonBanner from "@/components/shared/CommonBanner";

function Contact() {
    return (
      <section>
        <CommonBanner pageName="Contact us" />
        <div className="max-w-7xl mx-auto mt-[120px]">
          <h1 className="text-[48px] text-white font-bold mb-[50px]">Write Us Something</h1>
          <ContactFrom />
        </div>
      </section>
    );
}

export default Contact;