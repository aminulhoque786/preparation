import React from 'react';
import Container from './Container';
import "./banner.css";

const Banner = () => {
  return (
    <section className="">
      <div className="bg-hero bg-cover bg-center h-[600px] flex items-center justify-center">
        <Container>
          <div className="w-full px-4 md:w-3/5"> {/* Adjusted width and padding for small devices */}
            <h2 className="text-[32px] md:text-[41px] font-extrabold  md:px-20">
              We Are Digital <span className="text-[#FF7628]">Marketing</span> Agency
            </h2>
            <p className="text-[14px] md:text-[16px]  md:px-20 py-5 text-[#6C7D93]">
              Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing.
            </p>
          </div>

          <div className="">
            <div className="px-4 md:px-20">
              <button
                type="button"
                className="text-white bg-[#FF7628] hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#FF7628] dark:hover:bg-[#FF7628]"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
