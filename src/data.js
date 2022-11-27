// import icons
import { IoCartOutline, IoStar, IoMenu, IoClose } from "react-icons/io5";

// import images
import Gradient from "../src/assets/gradient.png";
import Vector from "../src/assets/vector.svg";
import Rectangle from "../src/assets/rectangle.png";
import Rectangle2 from "../src/assets/rectangle2.png";

import NewCollection1 from "../src/assets/new collection/newCollection10.webp";
import NewCollection2 from "../src/assets/new collection/newCollection20.webp";
import NewCollection3 from "../src/assets/new collection/newCollection30.webp";

import Best1 from "../src/assets/bestseller/bestseller1.webp";
import Best2 from "../src/assets/bestseller/bestseller2.webp";
import Best3 from "../src/assets/bestseller/bestseller3.webp";
import Best4 from "../src/assets/bestseller/bestseller4.webp";
import Best5 from "../src/assets/bestseller/bestseller5.webp";

import Product1 from "../src/assets/product/product1.webp";
import Product2 from "../src/assets/product/product2.webp";
import Product3 from "../src/assets/product/product3.webp";
import Product4 from "../src/assets/product/product4.webp";
import Product5 from "../src/assets/product/product5.webp";
import Product6 from "../src/assets/product/product6.webp";
import Product7 from "../src/assets/product/product7.webp";
import Product8 from "../src/assets/product/product8.webp";

import Discount from "../src/assets/discount/discount.webp";

export const navData = {
  logo: "Fashion",
  cartIcon: {
    icon: <IoCartOutline />,
    href: "#!",
  },
  loginBtn: "Login",
  menu: [
    { name: "Home", href: "home" },
    { name: "New", href: "new" },
    { name: "About", href: "about" },
    { name: "Best Seller", href: "best" },
    { name: "Product", href: "product" },
    { name: "Testimonial", href: "testimonial" },
  ],
  burgerBtn: {
    icon: <IoMenu />,
  },
  closeBtn: {
    icon: <IoClose />,
  },
};

export const heroData = {
  title: "find the best fashion style for you",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tristique praesent risus a ullamcorper. Donec sit turpis elit enim.",
  btn: "Shop now",
  gradient: Gradient,
  vector: Vector,
};

export const newCollectionData = {
  title: "New collection",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Dui tincidunt eu consectetur non.",
  cards: [
    {
      img: NewCollection1,
      text: "Sweater",
      delay: "300",
    },
    {
      img: NewCollection2,
      text: "Dress",
      delay: "600",
    },
    {
      img: NewCollection3,
      text: "Jacket",
      delay: "900",
    },
  ],
  vector: Vector,
  rectangle: Rectangle,
};

export const aboutData = {
  title: "Best fashion since 2022",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tincidunt in id tortor amet. Ac nibh quis ut ornare id. Scelerisque enim donec posuere dolor tristique viverra. Condimentum leo integer velit ipsum tortor.",
  vector: Vector,
  rectangle2: Rectangle2,
  stats: [
    {
      id: "stat1",
      startNum: "1982",
      endNum: "2022",
      suf: "",
      duration: "4",
      logo: "Fashion",
      text: " Founded",
    },
    {
      id: "stat2",
      startNum: "4792",
      endNum: "5000",
      suf: "+",
      duration: "3",
      text: "Product sold",
    },
    {
      id: "stat3",
      startNum: "2741",
      endNum: "3000",
      suf: "+",
      duration: "2",
      text: "Best reviews",
    },
  ],
};

export const bestsellerData = {
  title: "Best seller products",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Tristique amet varius mattis feugiat integer quis natoque.",
  btn: "See more",
  cards: [
    {
      id: "best1",
      img: Best1,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      id: "best2",
      img: Best2,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      id: "best3",
      img: Best3,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      id: "best4",
      img: Best4,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      id: "best5",
      img: Best5,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
  ],
};

export const productData = {
  title: "Our product",
  vector: Vector,
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
      img: Product1,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      img: Product2,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      img: Product3,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      img: Product4,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      img: Product5,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      img: Product6,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      img: Product7,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
    },
    {
      img: Product8,
      icon: <IoStar />,
      name: "Women's clothing",
      priceOld: "$250",
      priceNew: "$150",
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
  img: Discount,
  gradient: Gradient,
  vector: Vector,
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
