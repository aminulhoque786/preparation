import React from "react";
import Container from "./Container";
import ely from "../assets/element.png";
import tekka from "../assets/tur.png";

const Showcase = () => {
  return (
    <Container>
      <div className="flex justify-center items-center pt-10 sm:pt-5">
        <div className="text-center">
          <img 
            src={ely}
            alt="element"
            className="mx-auto w-full sm:w-3/4 w-32"
          />
          <h2 className="font-dm text-[40px] sm:text-[24px] font-extrabold text-[#192239]">
            Work Showcase
          </h2>
        </div>
      </div>
      <div className="flex gap-6 sm:gap-3 pt-5 flex-wrap justify-center">
        <div className="font-bold text-[20px] sm:text-[16px] hover:text-orange-500 relative group">
          All
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </div>
        <div className="font-bold text-[20px] sm:text-[16px] hover:text-orange-500 relative group">
          Digital Mkt
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </div>
        <div className="font-bold text-[20px] sm:text-[16px] hover:text-orange-500 relative group">
          Branding
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </div>
        <div className="font-bold text-[20px] sm:text-[16px] hover:text-orange-500 relative group">
          Content Mkt
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </div>
        <div className="font-bold text-[20px] sm:text-[16px] hover:text-orange-500 relative group">
          Social Media Mkt
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
        </div>
      </div>
      <div className="pt-5">
        <img
          src={tekka}
          alt="tur"
          className="w-full sm:w-3/4 mx-auto"
        />
      </div>
    </Container>
  );
};

export default Showcase;
