// import icons
import { BsCart3 } from "react-icons/bs";
import { IoStar, IoMenu } from "react-icons/io5";

// import images
import HeroImg from "../src/assets/header/heroImg.png";
import HeroBG from "../src/assets/header/headerBG.png";

import NewCollection1 from "../src/assets/new collection/newCollection1.png";
import NewCollection2 from "../src/assets/new collection/newCollection2.png";
import NewCollection3 from "../src/assets/new collection/newCollection3.png";

import AboutImg from "../src/assets/about/about.png";

import BestBG from "../src/assets/bestseller/bestsellerBG.png";

export const navData = {
  logo: "Fashion",
  icon: {
    icon: <BsCart3 />,
    href: "#!",
  },
  loginBtn: "Login",
  menu: [
    { name: "Home", href: "home" },
    { name: "New", href: "new" },
    { name: "About", href: "about" },
    { name: "Best Sellers", href: "best" },
    { name: "Product", href: "product" },
    { name: "Testimonial", href: "testimonial" },
  ],
};

export const heroData = {
  title: "find the best fashion style for you",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tristique praesent risus a ullamcorper. Donec sit turpis elit enim.",
  btn: "Shop now",
  img: HeroImg,
  bg: HeroBG,
};

export const newCollectionData = {
  title: "New collection",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Dui tincidunt eu consectetur non.",
  cards: [
    {
      id: "new1",
      img: NewCollection1,
      text: "Sweater",
    },
    {
      id: "new2",
      img: NewCollection2,
      text: "Dress",
    },
    {
      id: "new3",
      img: NewCollection3,
      text: "Jacket",
    },
  ],
};

export const aboutData = {
  img: AboutImg,
  title: "Best fashion since 2022",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tincidunt in id tortor amet. Ac nibh quis ut ornare id. Scelerisque enim donec posuere dolor tristique viverra. Condimentum leo integer velit ipsum tortor.",
  stats: [
    {
      id: "stat1",
      startNum: "1982",
      endNum: "2022",
      // unit: "",
      delay: "4",
      text: "FASHION Founded",
    },
    {
      id: "stat2",
      startNum: "4792",
      endNum: "5000",
      // unit: "",
      suf: "+",
      delay: "3",
      text: "Product sold",
    },
    {
      id: "stat3",
      startNum: "2741",
      endNum: "3000",
      // unit: "",
      suf: "+",
      delay: "2",
      text: "Best reviews",
    },
  ],
};

export const bestsellerData = {
  title: "Best seller products",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tristique amet varius mattis feugiat integer quis natoque.",
  btn: "See more",
  bg: BestBG,
  cards: [
    {
      id: "best1",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "best2",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "best3",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "best4",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "best5",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
  ],
};

export const productData = {
  title: "Our product",
  menu: [
    {
      name: "Hot",
      href: "#!",
    },
    {
      name: "On sale",
      href: "#!",
    },
    {
      name: "Trending now",
      href: "#!",
    },
    {
      name: "New arrival",
      href: "#!",
    },
  ],
  cards: [
    {
      id: "product1",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "product2",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "product3",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "product4",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "product5",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "product6",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "product7",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
    {
      id: "product8",
      img: "",
      icon: <IoStar />,
      name: "",
      priceOld: "",
      priceNew: "",
    },
  ],
};

export const discountData = {
  title: "Deal of the day",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tristique egestas aliquet nam at quisque ac vestibulum commodo.",
  date: [
    {
      id: "date1",
      startNum: "00",
      endNum: "15",
      delay: "4",
      desc: "Days",
    },
    {
      id: "date2",
      startNum: "00",
      endNum: "06",
      delay: "3",
      desc: "Hours",
    },
    {
      id: "date3",
      startNum: "35",
      endNum: "58",
      delay: "2",
      desc: "Min",
    },
  ],
  btn: "Shop now",
  img: "",
};

export const testimonialData = {
  title: "What people say about us",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Dui tincidunt eu consectetur non.",
  cards: [
    {
      id: "testimonial1",
      title:
        "Comfortable and met all my expectations! I ordered a medium and it fit perfectly",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Sed accumsan eget purus nam aliquam consequat. Porttitor in volutpat interdum sed semper scelerisque. Nibh tincidunt sed ut eget euismod ipsum. Bibendum elit sit sit ultrices dui pulvinar.",
      avatar: "",
      name: "",
      position: "",
    },
    {
      id: "testimonial2",
      title:
        "Comfortable and met all my expectations! I ordered a medium and it fit perfectly",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Sed accumsan eget purus nam aliquam consequat. Porttitor in volutpat interdum sed semper scelerisque. Nibh tincidunt sed ut eget euismod ipsum. Bibendum elit sit sit ultrices dui pulvinar.",
      avatar: "",
      name: "",
      position: "",
    },
    {
      id: "testimonial3",
      title:
        "Comfortable and met all my expectations! I ordered a medium and it fit perfectly",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Sed accumsan eget purus nam aliquam consequat. Porttitor in volutpat interdum sed semper scelerisque. Nibh tincidunt sed ut eget euismod ipsum. Bibendum elit sit sit ultrices dui pulvinar.",
      avatar: "",
      name: "",
      position: "",
    },
    {
      id: "testimonial4",
      title:
        "Comfortable and met all my expectations! I ordered a medium and it fit perfectly",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Sed accumsan eget purus nam aliquam consequat. Porttitor in volutpat interdum sed semper scelerisque. Nibh tincidunt sed ut eget euismod ipsum. Bibendum elit sit sit ultrices dui pulvinar.",
      avatar: "",
      name: "",
      position: "",
    },
    {
      id: "testimonial5",
      title:
        "Comfortable and met all my expectations! I ordered a medium and it fit perfectly",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Sed accumsan eget purus nam aliquam consequat. Porttitor in volutpat interdum sed semper scelerisque. Nibh tincidunt sed ut eget euismod ipsum. Bibendum elit sit sit ultrices dui pulvinar.",
      avatar: "",
      name: "",
      position: "",
    },
  ],
};

export const instagramData = {
  images: [
    {
      id: "img1",
      img: "",
    },
    {
      id: "img2",
      img: "",
    },
    {
      id: "img3",
      img: "",
    },
    {
      id: "img4",
      img: "",
    },
    {
      id: "img5",
      img: "",
    },
    {
      id: "img6",
      img: "",
    },
    {
      id: "img7",
      img: "",
    },
    {
      id: "img8",
      img: "",
    },
    {
      id: "img9",
      img: "",
    },
    {
      id: "img10",
      img: "",
    },
  ],
};

export const instaData = {
  text: "Follow our instagram:",
  link: "@FASHION_SHOP",
  href: "https://www.instagram.com/",
};

export const footerData = {
  menu: [
    { name: "Home", href: "home" },
    { name: "New", href: "new" },
    { name: "About", href: "about" },
    { name: "Best Sellers", href: "best" },
    { name: "Product", href: "product" },
    { name: "Testimonial", href: "testimonial" },
  ],
  copy: "2022 FASHION. ALL RIGHTS RESERVED",
  me: [
    { text: "Created by " },
    { name: "@signorPao" },
    { href: "https://github.com/SignorPao" },
  ],
};
