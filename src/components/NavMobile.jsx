import React from "react";

// import data
import { navData } from "../data";

const NavMobile = ({ click }) => {
  // destructure nav data
  const { loginBtn, menu } = navData;
  
  return (
    <div className="w-full h-full bg-brown-300/90">
      <ul className="h-full flex flex-col justify-center items-center gap-y-8">
        {menu.map((item, index) => {
          // destructure menu data
          const { name, href } = item;

          return (
            <li key={index}>
              <a href={`#${href}`} onClick={click}>{name}</a>
            </li>
          );
        })}
        <button className="btn btn-secondary">{loginBtn}</button>
      </ul>
    </div>
  );
};

export default NavMobile;
