import React from 'react'
import Container from './Container'
import tekka from "../assets/tekka.png"
import elem from "../assets/element.png"
import partner from "../assets/partner.png"

const Who = () => {
  return (
    <Container>
      <div className='flex flex-col-reverse lg:flex-row pt-16'>
        {/* Left Section */}
        <div className='w-full lg:w-2/3 mb-8 lg:mb-0'>
          <img className='w-full max-w-[400px] mx-auto lg:mx-0' src={tekka} alt="Tekka" />
        </div>

        {/* Right Section */}
        <div className='w-full lg:w-3/4'>
          <div className='text-center lg:text-left'>
            <img className='mx-auto lg:mx-0' src={elem} alt="Element" />
            <h2 className='text-[30px] lg:text-[40px] text-[#192239] font-extrabold mt-5'>
              Who We Are
            </h2>
            <p className='font-paprika pt-5 w-11/12 lg:w-3/4 mx-auto lg:mx-0 text-[#6C7D93]'>
              We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, 
            </p>
            <img className='pt-5 mx-auto lg:mx-0' src={partner} alt="Partner" />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Who
