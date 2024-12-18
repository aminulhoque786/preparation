import React from 'react'
import Container from './Container'
import ely from "../assets/element.png"
import lathi from "../assets/lathi.png"
import corona from "../assets/corona.png"
import social from "../assets/social.png"

const Service = () => {
  return (
    <Container>
      <div className='flex justify-center items-center'>
        <div className='text-center'>
          <img src={ely} alt="" className='mx-auto' />
          <h2 className='font-dm text-[40px] font-bold text-[#192239]'>Our Services</h2>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-full md:w-3/5 text-center px-5 sm:px-[150px]'>
          <p className='font-paprika text-[20px] text-[#6C7D93]'>We have been providing great flooring solutions service.</p>
        </div>
      </div>
      <div className='pt-20 flex flex-col sm:flex-row justify-between items-center'>
        <div className='w-full sm:w-1/4 p-5 flex bg-gray-200 flex-col items-center justify-center hover:bg-blue-200 transition-all duration-300 mb-5 sm:mb-0'>
          <img src={lathi} alt="" />
          <h2 className='text-center pt-5 font-dm text-[18px]'>MARKETING STRATEGY</h2>
          <p className='pt-5 font-paprika text-[#6C7D93] text-center'>Social Media has changed the way we interact & do business while creating</p>
        </div>

        <div className='w-full sm:w-1/4 p-5 bg-gray-200 flex flex-col items-center justify-center hover:bg-green-200 transition-all duration-300 mb-5 sm:mb-0'>
          <img src={corona} alt="" />
          <h2 className='pt-5 font-dm text-[18px]'>Social Marketing</h2>
          <p className='pt-5 font-paprika text-[#6C7D93] text-center'>Social Media has changed the way we interact & do business while creating</p>
        </div>

        <div className='w-full sm:w-1/4 p-5 flex bg-gray-200 flex-col items-center justify-center hover:bg-red-200 transition-all duration-300'>
          <img src={social} alt="" />
          <h2 className='pt-5 font-dm text-[18px]'>Content Marketing</h2>
          <p className='pt-5 font-paprika text-[#6C7D93] text-center'>Social Media has changed the way we interact & do business while creating</p>
        </div>
      </div>
    </Container>
  )
}

export default Service;
