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
    title: "PAGES",
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
    to: "/",
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
