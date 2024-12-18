import React from 'react';
import ely from "../assets/element.png";
import Container from './Container';
import tre from "../assets/tre.png";

const Creative = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col pt-10 justify-center items-center'>
          <div className='text-center'>
            <img src={ely} alt="" className='mx-auto' />
            <h2 className='font-dm text-[30px] md:text-[40px] font-extrabold text-[#192239]'>
              Our creative process
            </h2>
            <div className='flex justify-center items-center'>
              <div className='w-full md:w-3/4 pt-5 text-center px-5 md:px-[150px]'>
                <p className='font-paprika text-[16px] md:text-[20px] text-[#6C7D93]'>
                  We provide digital experience services to startups and small businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step-1 Section */}
        <div className='flex flex-col md:flex-row justify-between pt-5 items-center'>
          <div className='w-full md:w-1/3 p-5 rounded-2xl bg-red-200 h-auto md:h-52 hover:bg-orange-300 transition-all duration-300'>
            <p className='font-bold font-dm'>Step-1</p>
            <h3 className='font-dm text-[18px] md:text-[20px] pt-3'>Global SEO Research</h3>
            <p className='text-[#6C7D93] font-paprika pt-5'>
              Practical tools and features make it easier to build and manage your site.
            </p>
          </div>
          <div className='w-full md:w-2/4 pt-5 md:pt-0'>
            <img className='w-full md:w-[500px]' src={tre} alt="" />
          </div>
        </div>

        {/* Step-2 Section */}
        <div className='flex flex-col-reverse md:flex-row justify-between pt-5 items-center'>
          <div className='w-full md:w-2/4 pt-5 md:pt-0'>
            <img className='w-full md:w-[500px]' src={tre} alt="" />
          </div>
          <div className='w-full md:w-1/3 p-5 rounded-2xl bg-red-200 h-auto md:h-52 hover:bg-orange-300 transition-all duration-300'>
            <p className='font-bold font-dm'>Step-2</p>
            <h3 className='font-dm text-[18px] md:text-[20px] pt-3'>Social media integration</h3>
            <p className='text-[#6C7D93] font-paprika pt-5'>
              Practical tools and features make it easier to build and manage your site.
            </p>
          </div>
        </div>

        {/* Step-3 Section */}
        <div className='flex flex-col md:flex-row justify-between pt-5 items-center'>
          <div className='w-full md:w-1/3 p-5 rounded-2xl bg-red-200 h-auto md:h-52 hover:bg-orange-300 transition-all duration-300'>
            <p className='font-bold font-dm'>Step-3</p>
            <h3 className='font-dm text-[18px] md:text-[20px] pt-3'>Launching the Application</h3>
            <p className='text-[#6C7D93] font-paprika pt-5'>
              Practical tools and features make it easier to build and manage your site.
            </p>
          </div>
          <div className='w-full md:w-2/4 pt-5 md:pt-0'>
            <img className='w-full md:w-[500px]' src={tre} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Creative;
