import React, { useEffect, useRef, useState } from "react";

// import component
import NavMobile from "./NavMobile";

// import data
import { navData } from "../data";

// import style
import "../style.css";

const Nav = () => {
  // destructure nav data
  const { logo, cartIcon, loginBtn, menu, burgerBtn, closeBtn } = navData;

  // nav state
  const [navState, isNavState] = useState(false);

  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

  // mobile nav ref
  const btnRef = useRef();

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1 ? isNavState(true) : isNavState(false);
    });
  });

  // click outside to close mobile menu
  useEffect(() => {
    let handler = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setNavMobile(false);
        // console.log(btnRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav
      className={`${
        navState ? "bg-header py-2 shadow-xl" : "py-6"
      } fixed top-0 left-0 w-full z-50 duration-300`}
    >
      <div className="wrapper flex justify-between items-center">
        {/* logo */}
        <div data-aos="fade-down" data-aos-delay="600">
          <div className="hover:scale-110 transition">
            <a
              href="#"
              className="font-logo text-3xl text-black lg:text-4xl 2xl:text-5xl"
            >
              {logo}
            </a>
          </div>
        </div>

        {/* nav: mobile - hidden | desktop - show */}
        <ul
          className="hidden lg:flex gap-x-1"
          data-aos="fade-down"
          data-aos-delay="800"
        >
          {menu.map((item, index) => {
            // destructure menu data
            const { name, href } = item;

            return (
              <li key={index}>
                <a
                  href={`#${href}`}
                  className="font-semibold link 2xl:text-2xl"
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* cart icon & login btn: mobile - hidden | desktop -show */}
        <div
          className="hidden lg:flex items-center gap-x-6"
          data-aos="fade-down"
          data-aos-delay="1000"
        >
          <div className="relative hover:scale-110 transition">
            <a href={cartIcon.href} className="text-2xl">
              {cartIcon.icon}
            </a>

            {/* counter */}
            <div className="absolute top-[-3px] right-[-3px] bg-red w-[12px] h-[12px] rounded-xl flex items-center justify-center">
              <span className="text-white text-[8px]">1</span>
            </div>
          </div>

          <button className="btn btn-secondary">{loginBtn}</button>
        </div>

        {/* burger icon: mobile - show | desktop - hidden */}
        <button
          className="lg:hidden"
          onClick={() => setNavMobile((prev) => !prev)}
          data-aos="fade-down"
          data-aos-delay="800"
        >
          {navMobile ? (
            <div className="text-2xl">{closeBtn.icon}</div>
          ) : (
            <div className="text-2xl">{burgerBtn.icon}</div>
          )}
        </button>

        {/* nav mobile: mobile - toggle(show/hidden) | desktop - hidden */}
        <div
          className={`${
            navMobile ? "right-0" : "-right-full"
          } fixed top-0 bottom-0 w-[60vw] transition-all -z-10 lg:hidden`}
          ref={btnRef}
        >
          <NavMobile click={() => setNavMobile(!navMobile)} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
