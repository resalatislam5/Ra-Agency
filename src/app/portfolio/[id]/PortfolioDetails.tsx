import CommonBanner from "@/components/shared/CommonBanner";
import Image from "next/image";
import img from "@/assets/creative-people-bg.png";
import creativeOffice from "@/assets/creative-people-working-office 2.png"
function PortfolioDetails() {
  return (
    <>
      <CommonBanner pageName="Portfolio" />
      <section className="max-w-7xl mx-auto mt-[120px]">
        {/* image */}
        <div className="">
          <Image className="rounded-md" src={img} alt="img" />
        </div>
        {/* deatils */}
        <div className="flex justify-around gap-5 bg-[#192132] mt-[60px] rounded-md py-[32px]">
          {[...Array(4)].map((e, i) => (
            <div className="text-white" key={i}>
              <h2 className="text-[32px] font-bold">Name</h2>
              <p className="text-[22px]">Joss</p>
            </div>
          ))}
        </div>
        <h1 className="text-heading font-bold mt-[120px]">
          Website Development
        </h1>
        <div className="grid grid-cols-3 mt-[30px]">
          <div className="col-span-2 flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit nunc
              eleifend duis sociosqu augue imperdiet, metus varius at
              dignissimmalesuada. Nisi pharetra felis ullamcorper diam rutrum
              justo lectus ligula aptent, dapibus egestas habitasse habitant
              velit platea egetpenatibus facilisi fusce, dictumst torquent
              sagittis porttitor nunc orci posuere praesent. Penatibus tincidunt
              erat odio augue sed platea,dapibus mauris hendrerit felis morbi
              duis, ornare lacinia sodales convallis sollicitudin. Sociosqu
              pulvinar tempus vel laoreet interdumporttitor commodo, vivamus
              congue sagittis aenean turpis nullam diam, bibendum habitant nam
              non varius orci.
            </p>
            <p>
              Accumsan dui id justo fusce vehicula inceptos dignissim potenti
              elementum iaculis, nibh suspendisse ultricies nisl aptent sodales
              vitaeeros vulputate. Gravida sollicitudin bibendum nascetur
              facilisis platea feugiat parturient mauris, erat habitant metus
              conubia lobortis
            </p>
            <p>
              Turpis odio nascetur vel suscipit proin vestibulum bibendum
              tempor. Curabitur aliquam sociis risus parturient faucibus ornare
              magnisnascetur mauris, bibendum convallis vestibulum purus
              tincidunt eleifend litora. Leo magnis egestas conubia fringilla
              justo platea pharetracubilia phasellus hac tristique proin, eget
              nascetur fermentum lacus mi arcu habitant facilisis odio eleifend
              vitae. Dignissim nostrahendrerit suscipit platea condimentum
              suspendisse montes porttitor, commodo potenti laoreet dictumst
              rutrum senectus luctus nulla.
            </p>
            <p>
              Turpis odio nascetur vel suscipit proin vestibulum bibendum
              tempor. Curabitur aliquam sociis risus parturient faucibus ornare
              magnisnascetur mauris, bibendum convallis vestibulum purus
              tincidunt eleifend litora. Leo magnis egestas conubia fringilla
              justo platea pharetracubilia phasellus hac tristique proin, eget
              nascetur fermentum lacus mi arcu habitant facilisis odio eleifend
              vitae. Dignissim nostrahendrerit suscipit platea condimentum
              suspendisse montes porttitor, commodo potenti laoreet dictumst
              rutrum senectus luctus nulla.
            </p>
            <p>
              Turpis odio nascetur vel suscipit proin vestibulum bibendum
              tempor. Curabitur aliquam sociis risus parturient faucibus ornare
              magnisnascetur mauris, bibendum convallis vestibulum purus
              tincidunt eleifend litora. Leo magnis egestas conubia fringilla
              justo platea pharetracubilia phasellus hac tristique proin, eget
              nascetur fermentum lacus mi arcu habitant facilisis odio eleifend
              vitae. Dignissim nostrahendrerit suscipit platea condimentum
              suspendisse montes porttitor, commodo potenti laoreet dictumst
              rutrum senectus luctus nulla.
            </p>
            <p>
              Turpis odio nascetur vel suscipit proin vestibulum bibendum
              tempor. Curabitur aliquam sociis risus parturient faucibus ornare
              magnisnascetur mauris, bibendum convallis vestibulum purus
              tincidunt eleifend litora. Leo magnis egestas conubia fringilla
              justo platea pharetracubilia phasellus hac tristique proin, eget
              nascetur fermentum lacus mi arcu habitant facilisis odio eleifend
              vitae. Dignissim nostrahendrerit suscipit platea condimentum
              suspendisse montes porttitor, commodo potenti laoreet dictumst
              rutrum senectus luctus nulla.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <Image src={creativeOffice} alt="" />
            <Image src={creativeOffice} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioDetails;
