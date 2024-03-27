import {
  Brand_1,
  Brand_10,
  Brand_11,
  Brand_12,
  Brand_13,
  Brand_2,
  Brand_3,
  Brand_4,
  Brand_5,
  Brand_6,
  Brand_7,
  Brand_8,
  Brand_9,
  Image_1,
  Image_2,
  Portfolio_1,
  Portfolio_10,
  Portfolio_11,
  Portfolio_12,
  Portfolio_2,
  Portfolio_3,
  Portfolio_4,
  Portfolio_5,
  Portfolio_6,
  Portfolio_7,
  Portfolio_8,
  Portfolio_9,
  Service_1,
  Service_2,
  Service_3,
  Service_4,
  Testimonial_1,
  Testimonial_2,
  Testimonial_3,
  Testimonial_4,
  Testimonial_5,
} from "../assets";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import {
  FaLinkedinIn,
  FaDribbble,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export const contacts = [
  {
    icon: FaPhone,
    title: "Phone",
    text: "(219) 555-0114",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    text: "robertfox@example.com",
  },
  {
    icon: FaLocationDot,
    title: "Address",
    text: "4517 Washington Ave. Manchester, Kentucky 39495",
  },
];

export const socialItems = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com",
  },
  {
    icon: FaDribbble,
    href: "https://www.dribbble.com",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com",
  },
];

export const services = [
  {
    icon: Service_1,
    title: "UI/UX Design",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
  {
    icon: Service_2,
    title: "Product Design",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
  {
    icon: Service_3,
    title: "Brand Identity",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
  {
    icon: Service_4,
    title: "Website Design",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
];

export const testimonials = [
  {
    imgUrl: Testimonial_1,
    name: "Steve Smith",
    position: "Founder",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    imgUrl: Testimonial_2,
    name: "Ben Stokes",
    position: "CEO",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    imgUrl: Testimonial_3,
    name: "Joe Root",
    position: "Head Of Department",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    imgUrl: Testimonial_4,
    name: "Ben Foakes",
    position: "Senior Associate",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    imgUrl: Testimonial_5,
    name: "James Anderson",
    position: "Junior Associate",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export const portfolioItems = [
  {
    category: "ui/ux design",
    imgUrl: Portfolio_1,
    title: "sketching",
  },
  {
    category: "ui/ux design",
    imgUrl: Portfolio_2,
    title: "analyzing",
  },
  {
    category: "ui/ux design",
    imgUrl: Portfolio_3,
    title: "art",
  },
  {
    category: "product design",
    imgUrl: Portfolio_4,
    title: "speaker",
  },
  {
    category: "product design",
    imgUrl: Portfolio_5,
    title: "soft drinks",
  },
  {
    category: "product design",
    imgUrl: Portfolio_6,
    title: "world map",
  },
  {
    category: "branding",
    imgUrl: Portfolio_7,
    title: "starbucks",
  },
  {
    category: "branding",
    imgUrl: Portfolio_8,
    title: "apple",
  },
  {
    category: "branding",
    imgUrl: Portfolio_9,
    title: "aqua",
  },
  {
    category: "web design",
    imgUrl: Portfolio_10,
    title: "seo",
  },
  {
    category: "web design",
    imgUrl: Portfolio_11,
    title: "data analysis",
  },
  {
    category: "web design",
    imgUrl: Portfolio_12,
    title: "responsive",
  },
];

export const brandItems = [
  {
    imgUrl: Brand_5,
    title: "Behance",
  },
  {
    imgUrl: Brand_6,
    title: "Slack",
  },
  {
    imgUrl: Brand_7,
    title: "Dribbble",
  },
  {
    imgUrl: Brand_8,
    title: "Twilio",
  },
  {
    imgUrl: Brand_9,
    title: "GitHub",
  },
  {
    imgUrl: Brand_10,
    title: "Chargebee",
  },
  {
    imgUrl: Brand_11,
    title: "Udemy",
  },
  {
    imgUrl: Brand_12,
    title: "Instagram",
  },
  {
    imgUrl: Brand_13,
    title: "MapBox",
  },
];

export const aboutDetails = [
  {
    imgUrl: Image_1,
    value: 25,
    content: "Satisfied Customers",
  },
  {
    imgUrl: Image_2,
    value: 8,
    content: "Year of experience",
  },
];

export const navItems = [
  {
    path: "/",
    link: "home",
  },
  {
    path: "/about",
    link: "about",
  },
  {
    path: "/service",
    link: "service",
  },
  {
    path: "/portfolio",
    link: "portfolio",
  },
];

export const experienceDetails = [
  {
    imgUrl: Brand_1,
    position: "Team leader",
    period: "2024-2022",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
  {
    imgUrl: Brand_2,
    position: "Lead Front End Developer",
    period: "2022-2020",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
  {
    imgUrl: Brand_3,
    position: "Front End Developer",
    period: "2017-2018",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
  {
    imgUrl: Brand_4,
    position: "HTML Developer",
    period: "2016-2017",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
  },
];

export const skills = [
  {
    title: "HTML",
    value: 90,
  },
  {
    title: "css",
    value: 80,
  },
  {
    title: "javascript",
    value: 60,
  },
  {
    title: "react js",
    value: 75,
  },
  {
    title: "git and gitHub",
    value: 70,
  },
];

export const faq = [
  {
    question: "Where Can I Find More Information?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    question: "What Kinds of Payment Do You Accept?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    question: "What Are Your Terms and Conditions?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];
