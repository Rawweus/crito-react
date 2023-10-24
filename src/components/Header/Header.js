import "./Header.css";
import React from "react";
import NavSection from "../NavSection/NavSection";
import ShowCaseSection from "../ShowCaseSection/ShowCaseSection";


const Header = () => {
  return (
    <header>


      <NavSection />
      <ShowCaseSection />
    </header>
  );
};

export default Header;
