import CommonBanner from "@/components/shared/CommonBanner";
import Cateories from "@/app/blog/blogComponents/Cateories";
import FollowUs from "@/app/blog/blogComponents/FollowUs";
import RecentPost from "@/app/blog/blogComponents/RecentPost";
import Tags from "@/app/blog/blogComponents/Tags";
import Image from "next/image";
import SearchBar from "../blogComponents/SearchBar";
import img from "@/assets/kobu-agency-7okkFhxrxNw-unsplash 1.png";
import creativeOffice from "@/assets/creative-people-working-office 2.png";
import { CustomButton } from "@/components";
import Link from "next/link";
const shortid = require("shortid");
import commentImg from "@/assets/elegant-businessman-office 1.png";
import { sharedItems } from "@/constants";
const commentItems = [
  {
    id: shortid.generate(),
    img: commentImg,
    name: "Edward",
    text: "Thank you for this wonderful and informative post! I was present at this event and I admired theevent organization as well as interior and exterior of the building. I think this property can be awonderful option for those who want to live in a quiet neighbourhood while enjoying the wonderfulscenery of the surrounding area. I am also looking forward to read your future posts on otherlocal properties.",
    time: "3 days ago",
    like: 40,
    reply: [
      {
        id: shortid.generate(),
        img: commentImg,
        name: "Edward",
        text: "Thank you for this wonderful and informative post! I was present at this event and I admired theevent organization as well as interior and exterior of the building. I think this property can be awonderful option for those who want to live in a quiet neighbourhood while enjoying the wonderfulscenery of the surrounding area. I am also looking forward to read your future posts on otherlocal properties.",
        time: "3 days ago",
        like: 40,
        reply: [],
      },
    ],
  },
  {
    id: shortid.generate(),
    img: commentImg,
    name: "Edward",
    text: "Thank you for this wonderful and informative post! I was present at this event and I admired theevent organization as well as interior and exterior of the building. I think this property can be awonderful option for those who want to live in a quiet neighbourhood while enjoying the wonderfulscenery of the surrounding area. I am also looking forward to read your future posts on otherlocal properties.",
    time: "3 days ago",
    like: 40,
    reply: [],
  },
];
function BlogDetails() {
  return (
    <div>
      {/* ------- Banner start ------- */}
      <CommonBanner pageName="Blog" />
      {/* ------- Banner end --------*/}
      {/* ------- main section start  --------*/}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-3 grid-cols-1 lg:mt-[120px] mt-[80px] gap-9 px-5">
        {/* -------left blog items start----- */}
        <div className="lg:col-span-2 text-paragraph text-[#9F9F9F]">
          {/* image */}
          <div className="">
            <Image
              className="w-full h-full"
              src={img}
              alt="img"
              loading="lazy"
            />
          </div>
          <div className="my-[30px]">
            <p className="text-[#CF0] py-2">September 14, 2023</p>
            <h1 className="text-[32px] leading-10 font-bold text-[#CCDEFF]">
              Our Futuristic Marketin Realtor Should Read
            </h1>
          </div>
          <p className="">
            There are endless ways to create a some ways to have a business. We
            spend more time at themeetings than ever with knowledge
            melioration.It is a long established fact that a reader will be
            distracted by the readable content of a page whenlooking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distributionof letters, as opposed to using Content here,
            content here &apos, making it look like readable English.
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-1 my-[50px] gap-7">
            <div className="col-span-1">
              <Image src={creativeOffice} alt=".." />
            </div>
            <div className="flex flex-col gap-5 col-span-2">
              <p>
                Aliquam condimentum, massa vel mollis volutpat, erat sem
                pharetra quam, ac mattis arcu elit nonmassa. Nam mollis nunc
                velit, vel varius arcu fringilla tristique. Cras elit nunc,
                sagittis eu bibendumeu,ultrices placerat sem. Praesent vitae
                metus auctor.Aliquam condimentum, massa vel mollis volutpat,
                erat sem pharetra quam, ac mattis arcu elit nonmassa. Nam mollis
                nunc velit, vel varius arcu fringilla tristique. Cras elit nunc,
                sagittis eu bibendumeu, ultrices placerat sem. Praesent vitae
                metus auctor.
              </p>
              <p>
                Aliquam condimentum, massa vel mollis volutpat, erat sem
                pharetra quam, ac mattis arcu elit non massa. Nam mollis nunc
                velit, vel varius arcu fringilla tristique. Cras elit nunc,
                sagittis eu biben dumeu, ultrices placerat sem. Praesent vitae
                metus auctor
              </p>
            </div>
          </div>
          <div className="mt-16 text-[22px] leading-6">
            <h2 className="text-[#CCDEFF] font-semibold">
              Diam luctus nostra varius and semper semper rutrum ad risus felis
              eros Cursus libero viverra tempus netus diam vestibulum quis
              porta.
            </h2>
            <p className="text-white mt-5"> - Resalat Islam</p>
          </div>
          <p className="my-[30px]">
            Aliquam condimentum, massa vel mollis volutpat, erat sem pharetra
            quam, ac mattis arcu elit nonmassa. Nam mollis nunc velit, vel
            varius arcu fringilla tristique. Cras elit nunc, sagittis eu
            bibendumeu, ultrices placerat sem. Praesent vitae metus
            auctor.Aliquam condimentum, massa vel mollis volutpat, erat sem
            pharetra quam, ac mattis arcu elit nonmassa. Nam mollis nunc velit,
            vel varius arcu fringilla tristique. Cras elit nunc, sagittis eu
            bibendum eu, ultrices placerat sem. Praesent vitae metus auctor.
          </p>
          {/* ----tags and seare section start---- */}
          <div className="flex flex-wrap gap-5 justify-between text-2xl text-[#CCDEFF] font-bold my-[30px]">
            <div className="flex gap-5 items-center">
              <p className="">Tags:</p>
              <CustomButton title="Marketing" to="#" />
            </div>
            <div className="flex gap-5 items-center">
              <p className="">Share:</p>
              <div className="flex gap-2 flex-wrap">
                {sharedItems.map((e) => (
                  <Link
                    href={e.to}
                    className="text-lg font-semibold bg-white p-2 text-black rounded-md"
                    key={e.id}
                  >
                    {e.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* ----tags and seare section end---- */}
          <hr />
          <p className="text-[22px] font-semibold text-[#CCDEFF] text-center mt-[60px]">
            3 COMMENTS
          </p>
          {/*--------- comments section start --------- */}
          <div className="flex flex-col gap-5 mt-10 ">
            {commentItems.map((e) => (
              <div
                key={e.id}
                className="flex gap-5 border-b last:border-b-0 border-white py-10 w-full"
              >
                <div className="sm:w-[110px] sm:h-[110px] w-[10%] h-10">
                  <Image className="min-w-full" src={e.img} alt="" />
                </div>
                <div className="sm:w-full w-[80%]">
                  <div className="flex justify-between">
                    <p className="text-white text-[22px] font-semibold">
                      {e.name}
                    </p>
                    <p className="text-white text-lg ">{e.time}</p>
                  </div>
                  <p className="mt-5">{e.text}</p>
                  <div className="flex gap-20 mt-[30px]">
                    {/* like-start */}
                    <button className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M4.99623 29.0029C4.46651 28.998 3.95988 28.7854 3.5853 28.4108C3.21071 28.0362 2.99809 27.5296 2.99316 26.9999V13.0011C2.99316 11.9088 3.90777 10.998 4.99623 10.998H8.00084C8.7416 10.998 9.39165 11.4251 9.73935 12.0373C10.4121 11.6216 11.0735 11.3797 11.5005 11.134C12.5059 10.552 13.0199 8.91933 13.258 7.21483C13.3751 6.36447 13.4394 5.54434 13.5452 4.86027C13.5981 4.52013 13.6472 4.21778 13.7871 3.88519C13.8763 3.63294 14.0394 3.41336 14.2551 3.25498C14.4707 3.0966 14.7291 3.00672 14.9965 2.99704C16.4818 2.99704 17.6987 3.57906 18.4735 4.471C19.2521 5.35915 19.6149 6.47407 19.8114 7.57765C20.1289 9.38419 20.0079 10.9148 19.9475 12.0071H25.9945C27.6423 12.0071 29.0028 13.3601 29.0028 15.0041C29.0028 15.5862 28.8366 16.0246 28.6249 16.7048C28.4133 17.3889 28.1298 18.2128 27.8123 19.0934C27.185 20.8546 26.4366 22.8501 25.9453 24.3203C25.7605 24.9528 25.4522 25.5424 25.0383 26.055C24.7852 26.3483 24.4728 26.5846 24.1216 26.7481C23.7704 26.9116 23.3885 26.9987 23.0012 27.0037H10.9979C10.6571 27.0005 10.3194 26.9379 10.0001 26.8185V27.0074C10.0001 28.0959 9.09308 29.0067 8.00084 29.0067L4.99623 29.0029ZM4.99623 26.9999H8.00084V13.0011H4.99623V26.9999ZM10.9979 25.0006H23.0012C23.2658 25.0006 23.3489 24.9477 23.5227 24.7436C23.7595 24.4216 23.9385 24.061 24.0519 23.6778C24.5621 22.1472 25.3104 20.1554 25.9302 18.4169C26.2401 17.5476 26.5198 16.7426 26.7125 16.1115C26.9091 15.4841 27.0036 14.9172 27.0036 15.0003C27.0062 14.868 26.9819 14.7364 26.9322 14.6137C26.8825 14.491 26.8084 14.3796 26.7144 14.2863C26.6204 14.193 26.5085 14.1198 26.3854 14.071C26.2623 14.0223 26.1306 13.999 25.9982 14.0026H18.9119C18.7797 14.0031 18.6488 13.9774 18.5266 13.9271C18.4044 13.8767 18.2934 13.8027 18.1999 13.7093C18.1065 13.6158 18.0324 13.5048 17.9821 13.3826C17.9318 13.2604 17.9061 13.1294 17.9066 12.9973C17.9066 11.8181 18.1636 9.70922 17.8499 7.91779C17.6912 7.02586 17.3964 6.27376 16.9693 5.78622C16.6 5.3707 16.0923 5.10344 15.5407 5.03413C15.4387 5.60481 15.3706 6.57989 15.2421 7.49072C14.9814 9.35395 14.49 11.7123 12.4983 12.865C11.7538 13.2921 11.0357 13.5453 10.6086 13.8401C10.1778 14.1349 10.0039 14.2936 10.0039 15.0003V23.9953C10.0039 24.5697 10.4272 25.0006 10.9979 25.0006Z"
                          fill="#706D6D"
                        />
                      </svg>
                      <p className="text-white text-[22px] font-bold">32</p>
                    </button>
                    {/* like-end */}
                    {/* reply-start */}
                    <button className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M27.5198 5.44H4.47984C4.12784 5.44 3.83984 5.728 3.83984 6.08V21.44C3.83984 21.792 4.12784 22.08 4.47984 22.08H9.59984V25.92C9.59984 26.496 10.2718 26.784 10.6878 26.368L15.0398 22.08H27.5198C27.8718 22.08 28.1598 21.792 28.1598 21.44V6.08C28.1598 5.728 27.8718 5.44 27.5198 5.44ZM26.8798 20.8H14.7838C14.6238 20.8 14.4638 20.864 14.3358 20.992L10.8798 24.384V21.44C10.8798 21.088 10.5918 20.8 10.2398 20.8H5.11984V6.72H26.8798V20.8Z"
                          fill="#706D6D"
                        />
                      </svg>
                      <p className="text-white text-[22px] font-bold">Reply</p>
                    </button>
                    {/* reply-end */}
                  </div>
                  {/* ------reply section start --------- */}
                  {e?.reply.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-5 border-b last:border-b-0 border-white pt-[60px] ml-5"
                    >
                      <div className="sm:w-[110px] sm:h-[110px] w-[10%] h-10">
                        <Image src={item.img} alt="" />
                      </div>
                      <div className="sm:w-full w-[80%]">
                        <div className="flex justify-between">
                          <p className="text-white text-[22px] font-semibold">
                            {item.name}
                          </p>
                          <p className="text-white text-lg ">{item.time}</p>
                        </div>
                        <p className="mt-5">{item.text}</p>
                        <div className="flex gap-20 mt-[30px]">
                          {/* like-start */}
                          <button className="flex items-center gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <path
                                d="M4.99623 29.0029C4.46651 28.998 3.95988 28.7854 3.5853 28.4108C3.21071 28.0362 2.99809 27.5296 2.99316 26.9999V13.0011C2.99316 11.9088 3.90777 10.998 4.99623 10.998H8.00084C8.7416 10.998 9.39165 11.4251 9.73935 12.0373C10.4121 11.6216 11.0735 11.3797 11.5005 11.134C12.5059 10.552 13.0199 8.91933 13.258 7.21483C13.3751 6.36447 13.4394 5.54434 13.5452 4.86027C13.5981 4.52013 13.6472 4.21778 13.7871 3.88519C13.8763 3.63294 14.0394 3.41336 14.2551 3.25498C14.4707 3.0966 14.7291 3.00672 14.9965 2.99704C16.4818 2.99704 17.6987 3.57906 18.4735 4.471C19.2521 5.35915 19.6149 6.47407 19.8114 7.57765C20.1289 9.38419 20.0079 10.9148 19.9475 12.0071H25.9945C27.6423 12.0071 29.0028 13.3601 29.0028 15.0041C29.0028 15.5862 28.8366 16.0246 28.6249 16.7048C28.4133 17.3889 28.1298 18.2128 27.8123 19.0934C27.185 20.8546 26.4366 22.8501 25.9453 24.3203C25.7605 24.9528 25.4522 25.5424 25.0383 26.055C24.7852 26.3483 24.4728 26.5846 24.1216 26.7481C23.7704 26.9116 23.3885 26.9987 23.0012 27.0037H10.9979C10.6571 27.0005 10.3194 26.9379 10.0001 26.8185V27.0074C10.0001 28.0959 9.09308 29.0067 8.00084 29.0067L4.99623 29.0029ZM4.99623 26.9999H8.00084V13.0011H4.99623V26.9999ZM10.9979 25.0006H23.0012C23.2658 25.0006 23.3489 24.9477 23.5227 24.7436C23.7595 24.4216 23.9385 24.061 24.0519 23.6778C24.5621 22.1472 25.3104 20.1554 25.9302 18.4169C26.2401 17.5476 26.5198 16.7426 26.7125 16.1115C26.9091 15.4841 27.0036 14.9172 27.0036 15.0003C27.0062 14.868 26.9819 14.7364 26.9322 14.6137C26.8825 14.491 26.8084 14.3796 26.7144 14.2863C26.6204 14.193 26.5085 14.1198 26.3854 14.071C26.2623 14.0223 26.1306 13.999 25.9982 14.0026H18.9119C18.7797 14.0031 18.6488 13.9774 18.5266 13.9271C18.4044 13.8767 18.2934 13.8027 18.1999 13.7093C18.1065 13.6158 18.0324 13.5048 17.9821 13.3826C17.9318 13.2604 17.9061 13.1294 17.9066 12.9973C17.9066 11.8181 18.1636 9.70922 17.8499 7.91779C17.6912 7.02586 17.3964 6.27376 16.9693 5.78622C16.6 5.3707 16.0923 5.10344 15.5407 5.03413C15.4387 5.60481 15.3706 6.57989 15.2421 7.49072C14.9814 9.35395 14.49 11.7123 12.4983 12.865C11.7538 13.2921 11.0357 13.5453 10.6086 13.8401C10.1778 14.1349 10.0039 14.2936 10.0039 15.0003V23.9953C10.0039 24.5697 10.4272 25.0006 10.9979 25.0006Z"
                                fill="#706D6D"
                              />
                            </svg>
                            <p className="text-white text-[22px] font-bold">
                              32
                            </p>
                          </button>
                          {/* like-end */}
                          {/* reply-start */}
                          <button className="flex items-center gap-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                            >
                              <path
                                d="M27.5198 5.44H4.47984C4.12784 5.44 3.83984 5.728 3.83984 6.08V21.44C3.83984 21.792 4.12784 22.08 4.47984 22.08H9.59984V25.92C9.59984 26.496 10.2718 26.784 10.6878 26.368L15.0398 22.08H27.5198C27.8718 22.08 28.1598 21.792 28.1598 21.44V6.08C28.1598 5.728 27.8718 5.44 27.5198 5.44ZM26.8798 20.8H14.7838C14.6238 20.8 14.4638 20.864 14.3358 20.992L10.8798 24.384V21.44C10.8798 21.088 10.5918 20.8 10.2398 20.8H5.11984V6.72H26.8798V20.8Z"
                                fill="#706D6D"
                              />
                            </svg>
                            <p className="text-white text-[22px] font-bold">
                              Reply
                            </p>
                          </button>
                          {/* reply-end */}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* ------reply section end --------- */}
                </div>
              </div>
            ))}
          </div>
          {/*--------- comments section end --------- */}
          {/* comment box start */}
          <div className="flex gap-5">
            <div className="w-[110px] h-[110px]">
              <Image src={commentImg} alt="" />
            </div>
            <div className="w-full">
              <p className="text-white text-[22px] font-semibold">Miranda</p>
              <textarea
                className="mt-5 p-[30px] w-full bg-transparent border border-[#8D8D8D] rounded-[5px]"
                name=""
                id=""
                rows={5}
                placeholder="Your comment"
              ></textarea>
              <CustomButton title="SUBMIT" style="w-fit mt-[27px]" to="#" />
            </div>
          </div>
          {/* comment box end */}
        </div>
        {/* -------- left blog items end-------- */}
        {/* -------- right blog items start-------- */}
        <div className="col-span-1 lg:flex hidden flex-col gap-[70px]">
          {/* search-bar  */}
          <SearchBar />
          {/* Recent Posts */}
          <RecentPost />
          {/* Categories */}
          <Cateories />
          {/* Tags */}
          <Tags />
          {/* Follow Us */}
          <FollowUs />
        </div>
      </section>
      {/* ------- Main section end --------*/}
    </div>
  );
}

export default BlogDetails;
