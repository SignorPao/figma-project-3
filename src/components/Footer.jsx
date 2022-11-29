import React from "react";

// import component
import InstagramSlider from "./InstagramSlider";

// import data
import { instagramData, instaData, footerData } from "../data";

// get current year
const year = new Date().getFullYear();

const Footer = () => {
  // destructure instagram data
  const { images } = instagramData;

  // destructure insta link data
  const { text, link, href } = instaData;

  // destructure footer data
  const { menu, copy, me } = footerData;

  return (
    <div className="section mb-0 pb-0 pt-0 mt-10 relative">
      {/* instagram slider */}
      <div className="h-[280px] w-full">
        <InstagramSlider images={images} />
      </div>

      {/* instagram link */}
      <div className="bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-nowrap w-[80%] md:w-fit hover:scale-105 transition z-10">
        <div className="capitalize flex w-full h-full items-center justify-center gap-x-1">
          {text}
          <a href={href} className="font-bold cursor-pointer">
            {link}
          </a>
        </div>
      </div>

      {/* footer */}
      <footer className="bg-black text-brown-100 min-h-[280px] w-full flex items-center justify-center flex-col gap-y-4">
        {/* links */}
        <ul className="grid grid-cols-3 gap-4 lg:gap-8 lg:flex">
          {menu.map((item, index) => {
            // destructure item
            const { name, href } = item;

            return (
              <li key={index}>
                <a href={`#${href}`} className="hover:text-white transition">
                  {name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* copyrights */}
        <div className="text-[8px] lg:text-sm tracking-[1px] capitalize">
          {year} {copy}
        </div>

        {/* me */}
        <div className="w-full flex items-center justify-center">
          <p className="text-xs lg:text-sm">
            Created by{" "}
            <a
              href="https://github.com/SignorPao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              @signorPao
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
