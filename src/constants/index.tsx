// All constant file here
// sponserItems
import aibaba from "@/assets/Alibaba_Group-Logo.wine 1.png";
import pinterest from "@/assets/Pinterest-Logo.wine.png";
import dropbox from "@/assets/Dropbox_(service)-Logo.wine.png";
import amazon from "@/assets/Amazon_(company)-Logo.wine.png";
import spacex from "@/assets/SpaceX-Logo.wine.png";
// sponserItems end
// digitalMarkingItem
import search from "@/assets/search-engine 1.png";
import payPer from "@/assets/pay-per-click 1.png";
import website from "@/assets/web-development 1.png";
import content from "@/assets/content 1.png";
import email from "@/assets/email-marketing 1.png";
import social from "@/assets/social-media-marketing 1.png";
// digitalMarkingItem end
// ecoFounderInfo
import jerome from "@/assets/jerome.png";
import david from "@/assets/david.png";
import matthaw from "@/assets/mahew.png";
import patrick from "@/assets/patrick.png";
import facebook from "@/assets/facebook (2).png";
import twiter from "@/assets/twitter (2).png";
import intagram from "@/assets/instagram (1).svg";
import linkedin from "@/assets/linkedin (1) 1.svg";
// ecoFounderInfo end
//contactInfo
import phone from "@/assets/phone (1) 1.svg";
import message from "@/assets/message (1) 1.svg";
import location from "@/assets/online-location 1 (1).svg";
//contactInfo end
//short id
const shortid = require("shortid");
// testtimonial
import imgE from "@/assets/elegant-businessman-office 1.png";
// testtimonial
// Digital Brilliance
import groupBiness1 from "@/assets/group-business.png";
// Digital Brilliance end

export const navItems = [
  {
    _id: shortid.generate(),
    title: "HOME",
    to: "/",
  },
  {
    _id: shortid.generate(),
    title: "BLOG",
    to: "/blog",
  },
  {
    _id: shortid.generate(),
    title: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    _id: shortid.generate(),
    title: "SHOP",
    to: "/",
  },
  {
    _id: shortid.generate(),
    title: "CONTACT",
    to: "/contact",
  },
];

export const sponserItems = [
  {
    id: shortid.generate(),
    img: aibaba,
  },
  {
    id: shortid.generate(),
    img: pinterest,
  },
  {
    id: shortid.generate(),
    img: dropbox,
  },
  {
    id: shortid.generate(),
    img: amazon,
  },
  {
    id: shortid.generate(),
    img: spacex,
  },
];

export const digitalMarkingItem = [
  {
    id: shortid.generate(),
    img: search,
    title: "Search Engine Optimization",
    text: "Share Processes And Data Secure Lona To Know Basis Our Team Assured Your Site Is Always Safe And",
    to: "/",
    style: "border border-b-0",
  },
  {
    id: shortid.generate(),
    img: payPer,
    title: "Pay-Per-Click Advertising",
    text: "Share Processes And Data Secure Lona To Know Basis Our Team Assured Your Site Is Always Safe And",
    to: "/",
    style: "border border-b-0",
  },
  {
    id: shortid.generate(),
    img: website,
    title: "Website Development",
    text: "Share Processes And Data Secure Lona To Know Basis Our Team Assured Your Site Is Always Safe And",
    to: "/",
    style: "border border-b-0",
  },
  {
    id: shortid.generate(),
    img: content,
    title: "Content Marketing",
    text: "Share Processes And Data Secure Lona To Know Basis Our Team Assured Your Site Is Always Safe And",
    to: "/",
    style: "border",
  },
  {
    id: shortid.generate(),
    img: email,
    title: "Email Marketing",
    text: "Share Processes And Data Secure Lona To Know Basis Our Team Assured Your Site Is Always Safe And",
    to: "/",
    style: "border",
  },
  {
    id: shortid.generate(),
    img: social,
    title: "Social Media Marketing",
    text: "Share Processes And Data Secure Lona To Know Basis Our Team Assured Your Site Is Always Safe And",
    to: "/",
    style: "border",
  },
];

export const ceoFounderInfo = [
  {
    id: shortid.generate(),
    img: jerome,
    name: "Jerome C. Ramirez",
    title: "CEO & Founder",
    links: [
      {
        img: facebook,
        to: "/",
      },
      {
        img: twiter,
        to: "/",
      },
      {
        img: linkedin,
        to: "/",
      },
      {
        img: intagram,
        to: "/",
      },
    ],
  },
  {
    id: shortid.generate(),
    img: david,
    name: "David George N. Butler",
    title: "Senior Manager",
    links: [
      {
        img: facebook,
        to: "/",
      },
      {
        img: twiter,
        to: "/",
      },
      {
        img: linkedin,
        to: "/",
      },
      {
        img: intagram,
        to: "/",
      },
    ],
  },
  {
    id: shortid.generate(),
    img: matthaw,
    name: "Matthew M. Armstead",
    title: "Web Designer",
    links: [
      {
        img: facebook,
        to: "/",
      },
      {
        img: twiter,
        to: "/",
      },
      {
        img: linkedin,
        to: "/",
      },
      {
        img: intagram,
        to: "/",
      },
    ],
  },
  {
    id: shortid.generate(),
    img: patrick,
    name: "Patrick M. Piazza",
    title: "Junior manager",
    links: [
      {
        img: facebook,
        to: "/",
      },
      {
        img: twiter,
        to: "/",
      },
      {
        img: linkedin,
        to: "/",
      },
      {
        img: intagram,
        to: "/",
      },
    ],
  },
];

export const contactInfo = [
  {
    id: shortid.generate(),
    img: phone,
    title: "Any Questions? Call us",
    text: "+1 (246) 333 0079",
    to: "tel:+1 (246) 333 0079",
  },
  {
    id: shortid.generate(),
    img: message,
    title: "Any Questions? Email us",
    text: "Resalatislam5@gmail.com",
    to: "mailto:resalatislam5@gmail.com",
  },
  {
    id: shortid.generate(),
    img: location,
    title: "51 Somestreet Cambridge",
    text: "CB4 3AA, United Kingdom",
    to: "#",
  },
];

export const tasttimonialItem = [
  {
    id: shortid.generate(),
    title:
      "\"I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad idecided to work with you. It's really great how easy your websites are to update and manage. Inever have any problem at all.1000\"",
    img: imgE,
    name: "Sridhar Ramaswamy1",
    jobTitle: "CEO & Founder",
  },
  {
    id: shortid.generate(),
    title:
      "\"I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad idecided to work with you. It's really great how easy your websites are to update and manage. Inever have any problem at all.2000\"",
    img: imgE,
    name: "Sridhar Ramaswamy2",
    jobTitle: "CEO & Founder",
  },
  {
    id: shortid.generate(),
    title:
      "\"I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad idecided to work with you. It's really great how easy your websites are to update and manage. Inever have any problem at all.3\"",
    img: imgE,
    name: "Sridhar Ramaswamy3",
    jobTitle: "CEO & Founder",
  },
  {
    id: shortid.generate(),
    title:
      "\"I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad idecided to work with you. It's really great how easy your websites are to update and manage. Inever have any problem at all.3\"",
    img: imgE,
    name: "Sridhar Ramaswamy3",
    jobTitle: "CEO & Founder",
  },
  {
    id: shortid.generate(),
    title:
      "\"I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad idecided to work with you. It's really great how easy your websites are to update and manage. Inever have any problem at all.3\"",
    img: imgE,
    name: "Sridhar Ramaswamy3",
    jobTitle: "CEO & Founder",
  },
  {
    id: shortid.generate(),
    title:
      "\"I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad idecided to work with you. It's really great how easy your websites are to update and manage. Inever have any problem at all.3\"",
    img: imgE,
    name: "Sridhar Ramaswamy3",
    jobTitle: "CEO & Founder",
  },
];

export const digitalBrillianceItem = [
  {
    id: shortid.generate(),
    img: groupBiness1,
    business: "Business",
    date: "02 Apr 2024",
    text: "Stay Ahead in the Digital Side Pocket",
    linkTitle: "Read More",
    to: "/",
  },
  {
    id: shortid.generate(),
    img: groupBiness1,
    business: "Business",
    date: "02 Apr 2024",
    text: "Our Futuristic Marketing Realtor Should Read",
    linkTitle: "Read More",
    to: "/",
  },
  {
    id: shortid.generate(),
    img: groupBiness1,
    business: "Business",
    date: "02 Apr 2024",
    text: "Grow your appraisal skills and real estate career?",
    linkTitle: "Read More",
    to: "/",
  },
];

export const footerItems = [
  {
    id: shortid.generate(),
    title: "Start a conversation",
    links: [
      {
        id: shortid.generate(),
        text: "resalatislam5@gmail.com",
        to: "mailto:",
      },
    ],
  },
  {
    id: shortid.generate(),
    title: "New business:",
    links: [
      {
        id: shortid.generate(),
        text: "+8801750605440",
        to: "tel:",
      },
    ],
  },
  {
    id: shortid.generate(),
    title: "Useful Links",
    links: [
      {
        id: shortid.generate(),
        text: "Careers",
        to: "/",
      },
      {
        id: shortid.generate(),
        text: "Our Team",
        to: "/",
      },
      {
        id: shortid.generate(),
        text: "Latest Projects",
        to: "/",
      },
      {
        id: shortid.generate(),
        text: "Awarded portfolio",
        to: "/",
      },
      {
        id: shortid.generate(),
        text: "FAQ",
        to: "/",
      },
    ],
  },
  {
    id: shortid.generate(),
    title: "Address",
    links: [
      {
        id: shortid.generate(),
        text: "Las Vegas, NV, USA",
        to: "https://www.google.com/maps/@23.773184,90.4003584,13z",
      },
      {
        id: shortid.generate(),
        text: "201 Spear Street,",
        to: "https://www.google.com/maps/@23.773184,90.4003584,13z",
      },
      {
        id: shortid.generate(),
        text: "San Francisco, CA, USA",
        to: "https://www.google.com/maps/@23.773184,90.4003584,13z",
      },
    ],
  },
];

// blog details share items

export const sharedItems = [
  {
    id: shortid.generate(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 5.5H9V3.5C9 3.23478 9.10536 2.98043 9.29289 2.79289C9.48043 2.60536 9.73478 2.5 10 2.5H11V0H9C8.20435 0 7.44129 0.31607 6.87868 0.87868C6.31607 1.44129 6 2.20435 6 3V5.5H4V8H6V16H9V8H11L12 5.5Z"
          fill="black"
        />
      </svg>
    ),
    to: "/",
  },
  {
    id: shortid.generate(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clip-path="url(#clip0_52_223)">
          <path
            d="M17 3.53911C16.3981 3.80161 15.7616 3.97607 15.11 4.05711C15.7967 3.64974 16.3101 3.00468 16.553 2.24411C15.91 2.62545 15.2065 2.89399 14.473 3.03811C14.0232 2.55789 13.4395 2.22403 12.7975 2.07991C12.1555 1.93578 11.485 1.98806 10.8732 2.22994C10.2613 2.47182 9.73632 2.89212 9.36642 3.43625C8.99653 3.98037 8.79883 4.62316 8.799 5.28111C8.799 5.54111 8.821 5.79111 8.875 6.02911C7.57008 5.96513 6.29336 5.62646 5.1283 5.03523C3.96325 4.444 2.93609 3.61353 2.114 2.59811C1.69282 3.31997 1.56261 4.17522 1.74988 4.98971C1.93716 5.80421 2.42783 6.5167 3.122 6.98211C2.60276 6.96819 2.09447 6.82963 1.64 6.57811V6.61411C1.64087 7.37154 1.90267 8.10555 2.38132 8.69257C2.85997 9.27959 3.52625 9.68379 4.268 9.83711C3.98739 9.91107 3.69819 9.94738 3.408 9.94511C3.19959 9.94882 2.99139 9.93004 2.787 9.88911C2.99894 10.5401 3.40749 11.1095 3.95639 11.5187C4.5053 11.9279 5.16756 12.1569 5.852 12.1741C4.69094 13.0822 3.25897 13.5747 1.785 13.5731C1.516 13.5731 1.258 13.5611 1 13.5281C2.49988 14.4947 4.24768 15.0059 6.032 15.0001C12.068 15.0001 15.368 10.0001 15.368 5.66611C15.368 5.52111 15.363 5.38111 15.356 5.24211C16.003 4.7791 16.5601 4.20199 17 3.53911Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_52_223">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    to: "/",
  },
  {
    id: shortid.generate(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clip-path="url(#clip0_52_219)">
          <path
            d="M0 1.85858C0 1.31985 0.180185 0.875409 0.540541 0.525252C0.900896 0.175078 1.36937 0 1.94595 0C2.51223 0 2.97039 0.17238 3.32046 0.517171C3.68082 0.872726 3.861 1.33601 3.861 1.90707C3.861 2.42424 3.68598 2.8552 3.33591 3.19999C2.97555 3.55555 2.50193 3.73333 1.91506 3.73333H1.89961C1.33333 3.73333 0.875166 3.55555 0.525097 3.19999C0.175027 2.84444 0 2.3973 0 1.85858ZM0.200772 16V5.20403H3.62934V16H0.200772ZM5.52896 16H8.95753V9.9717C8.95753 9.59459 8.99872 9.30368 9.08108 9.09897C9.22522 8.73264 9.44402 8.42287 9.73745 8.16968C10.0309 7.91648 10.399 7.78989 10.8417 7.78989C11.9949 7.78989 12.5714 8.60335 12.5714 10.2303V16H16V9.81008C16 8.21547 15.6396 7.00605 14.9189 6.18181C14.1982 5.35757 13.2458 4.94545 12.0618 4.94545C10.7336 4.94545 9.69884 5.54343 8.95753 6.73938V6.77171H8.94208L8.95753 6.73938V5.20403H5.52896C5.54954 5.54881 5.55985 6.62085 5.55985 8.42019C5.55985 10.2195 5.54954 12.7461 5.52896 16Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_52_219">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    to: "/",
  },
  {
    id: shortid.generate(),
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clip-path="url(#clip0_52_227)">
          <path
            d="M5.33376 8C5.33376 6.5273 6.5273 5.33312 8 5.33312C9.4727 5.33312 10.6669 6.5273 10.6669 8C10.6669 9.4727 9.4727 10.6669 8 10.6669C6.5273 10.6669 5.33376 9.4727 5.33376 8ZM3.89208 8C3.89208 10.2688 5.73118 12.1079 8 12.1079C10.2688 12.1079 12.1079 10.2688 12.1079 8C12.1079 5.73118 10.2688 3.89208 8 3.89208C5.73118 3.89208 3.89208 5.73118 3.89208 8ZM11.3105 3.72924C11.3105 4.25913 11.7402 4.6895 12.2708 4.6895C12.8006 4.6895 13.231 4.25913 13.231 3.72924C13.231 3.19935 12.8013 2.76963 12.2708 2.76963C11.7402 2.76963 11.3105 3.19935 11.3105 3.72924ZM4.76769 14.5118C3.98772 14.4763 3.56381 14.3464 3.28207 14.2365C2.90856 14.0911 2.64233 13.9179 2.36187 13.6381C2.08207 13.3583 1.90824 13.0921 1.76349 12.7186C1.65363 12.4368 1.52375 12.0129 1.48821 11.233C1.44943 10.3897 1.44168 10.1363 1.44168 8C1.44168 5.86365 1.45008 5.61099 1.48821 4.76704C1.52375 3.98708 1.65428 3.56381 1.76349 3.28142C1.90889 2.90792 2.08207 2.64168 2.36187 2.36123C2.64168 2.08142 2.90792 1.90759 3.28207 1.76284C3.56381 1.65299 3.98772 1.5231 4.76769 1.48756C5.61099 1.44879 5.8643 1.44103 8 1.44103C10.1363 1.44103 10.389 1.44943 11.233 1.48756C12.0129 1.5231 12.4362 1.65363 12.7186 1.76284C13.0921 1.90759 13.3583 2.08142 13.6388 2.36123C13.9186 2.64103 14.0918 2.90792 14.2372 3.28142C14.347 3.56317 14.4769 3.98708 14.5124 4.76704C14.5512 5.61099 14.559 5.86365 14.559 8C14.559 10.1357 14.5512 10.389 14.5124 11.233C14.4769 12.0129 14.3464 12.4368 14.2372 12.7186C14.0918 13.0921 13.9186 13.3583 13.6388 13.6381C13.359 13.9179 13.0921 14.0911 12.7186 14.2365C12.4368 14.3464 12.0129 14.4763 11.233 14.5118C10.3897 14.5506 10.1363 14.5583 8 14.5583C5.8643 14.5583 5.61099 14.5506 4.76769 14.5118ZM4.70178 0.0484653C3.85008 0.0872375 3.2685 0.222294 2.75994 0.420032C2.23393 0.624233 1.78805 0.898223 1.34281 1.34281C0.898223 1.7874 0.624233 2.23328 0.420032 2.75994C0.222294 3.2685 0.0872375 3.85008 0.0484653 4.70178C0.00904685 5.55477 0 5.82746 0 8C0 10.1725 0.00904685 10.4452 0.0484653 11.2982C0.0872375 12.1499 0.222294 12.7315 0.420032 13.2401C0.624233 13.7661 0.897577 14.2126 1.34281 14.6572C1.7874 15.1018 2.23328 15.3751 2.75994 15.58C3.26914 15.7777 3.85008 15.9128 4.70178 15.9515C5.55541 15.9903 5.82746 16 8 16C10.1732 16 10.4452 15.991 11.2982 15.9515C12.1499 15.9128 12.7315 15.7777 13.2401 15.58C13.7661 15.3751 14.212 15.1018 14.6572 14.6572C15.1018 14.2126 15.3751 13.7661 15.58 13.2401C15.7777 12.7315 15.9134 12.1499 15.9515 11.2982C15.9903 10.4446 15.9994 10.1725 15.9994 8C15.9994 5.82746 15.9903 5.55477 15.9515 4.70178C15.9128 3.85008 15.7777 3.2685 15.58 2.75994C15.3751 2.23393 15.1018 1.78805 14.6572 1.34281C14.2126 0.898223 13.7661 0.624233 13.2407 0.420032C12.7315 0.222294 12.1499 0.0865913 11.2989 0.0484653C10.4459 0.00969305 10.1732 0 8.00065 0C5.82746 0 5.55541 0.00904685 4.70178 0.0484653Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_52_227">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    to: "/",
  },
];

// tags items

export const tagItems = [
  {
    id: shortid.generate(),
    title: "Development",
  },
  {
    id: shortid.generate(),
    title: "Marketing",
  },
  {
    id: shortid.generate(),
    title: "Email",
  },
];
// categories items

export const categoriesItems = [
  {
    id: shortid.generate(),
    title: "Search Engine Optimization",
  },
  {
    id: shortid.generate(),
    title: "Pay-Per-Click Advertising",
  },
  {
    id: shortid.generate(),
    title: "Website Development",
  },
  {
    id: shortid.generate(),
    title: "Content Marketing",
  },
  {
    id: shortid.generate(),
    title: "Email Marketing",
  },
  {
    id: shortid.generate(),
    title: "Social Media Marketing",
  },
];
