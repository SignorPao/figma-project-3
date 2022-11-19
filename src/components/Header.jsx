import React from "react";

// import component
import Nav from "./Nav";

// import data
import {heroData} from '../data'

const Header = () => {
  return (
    <header id="home" className="h-screen bg-header bg-cover bg-bottom">
      <div className="wrapper h-full overflow-hidden">
        {/* navigation */}
        <Nav />
        
        {/* hero */}
        <div className="flex flex-col lg:flex-row items-center justify-center h-full">
          {/* text */}
          <div className="bg-cyan-200/50 flex-1 h-full w-full flex items-center justify-center lg:justify-start">text</div>

          {/* image */}
          <div className="bg-pink-200/50 flex-1 h-full w-full flex items-center justify-center lg:justify-end">image</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
