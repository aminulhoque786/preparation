import React from 'react';
import Container from './Container';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <section className="pt-10 sm:pt-20 bg-gray-100">
      <Container>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8">
          {/* Logo and description */}
          <div className="w-full sm:w-[35%] mb-8 sm:mb-0 text-center sm:text-left">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto sm:mx-0 w-[120px] sm:w-[150px]"
            />
            <p className="text-[#6C7D93] font-paprika pt-5 sm:pt-8 text-sm sm:text-base mx-auto sm:mx-0 max-w-[400px]">
              Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.
            </p>
          </div>

          {/* Features Section */}
          <div className="w-full sm:w-[20%] mb-8 sm:mb-0 text-center sm:text-left">
            <h2 className="font-bold text-[18px] text-[#413F45]">Features</h2>
            <ul className="pt-5 space-y-2 text-[#6C7D93] text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Benefit</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="w-full sm:w-[20%] mb-8 sm:mb-0 text-center sm:text-left">
            <h2 className="font-bold text-[18px] text-[#413F45]">Products</h2>
            <ul className="pt-5 space-y-2 text-[#6C7D93] text-sm">
              <li>Task Management</li>
              <li>Company Growth</li>
              <li>Time Tracking</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-[20%] text-center sm:text-left">
            <h2 className="font-bold text-[18px] text-[#413F45]">Support</h2>
            <ul className="pt-5 space-y-2 text-[#6C7D93] text-sm">
              <li>Customer Service</li>
              <li>Accessibility</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pt-10 sm:pt-5 gap-5 sm:gap-0">
          <div className="w-full text-center sm:text-left">
            <h4 className="text-[#6C7D93] text-xs sm:text-sm">
              @2024 Innovate. All rights reserved.
            </h4>
          </div>
          <div className="w-full text-center sm:text-right">
            <h4 className="text-[#6C7D93] text-xs sm:text-sm">Privacy Policy</h4>
          </div>
          <div className="w-full text-center sm:text-right">
            <h4 className="text-[#6C7D93] text-xs sm:text-sm">Terms & Conditions</h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
