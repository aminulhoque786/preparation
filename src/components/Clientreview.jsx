import React from 'react';
import Container from './Container';
import ely from "../assets/element.png";
import clients from "../assets/clients.png";
import trio from "../assets/der.png";
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Clientreview = () => {
  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
         
          <div className="w-full sm:w-1/3 text-center sm:text-left px-4">
            <img src={ely} alt="Element" className="mx-auto sm:mx-0" />
            <h3 className="font-dm font-extrabold text-[#192239] text-[24px] sm:text-[30px] mt-4">
              Client Review
            </h3>
            <p className="font-paprika text-[#6C7D93] pt-4 text-sm sm:text-base">
              People use digital devices instead of visiting physical shops. Digital marketing campaigns are becoming more prevalent and efficient.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-6">

              <div className="w-12 h-12 flex justify-center items-center border border-gray-400 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 active:bg-orange-600 cursor-pointer">
                <FaArrowCircleLeft className="text-gray-400 hover:text-white transition duration-300" size={20} />
              </div>

             
              <div className="w-12 h-12 flex justify-center items-center border border-gray-400 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 active:bg-orange-600 cursor-pointer">
                <FaArrowAltCircleRight className="text-gray-400 hover:text-white transition duration-300" size={20} />
              </div>
            </div>
          </div>

          
          <div className="w-full sm:w-1/3 px-4">
            <img src={trio} alt="Trio" className="mx-auto" />
          </div>

          
          <div className="w-full sm:w-1/3 px-4">
            <img src={clients} alt="Clients" className="mx-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Clientreview;
