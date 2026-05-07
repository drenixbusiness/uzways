import React from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from '../Forms/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div id="contact" className="px-6 sm:px-12 lg:px-75 mt-16 sm:mt-20 lg:mt-25 py-16 sm:py-20 lg:py-25 bg-primary">
      <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-0'>
        <div>
          <h1 className='font-bigshoulders font-bold text-5xl sm:text-7xl lg:text-8xl leading-tight lg:leading-[95px]'>
            READY TO <br /> MOVE?
          </h1>
          <p className='font-hankengrotesk italic text-orange text-4xl sm:text-5xl lg:text-[50px] leading-tight lg:leading-[60px] mt-2'>
            So are we.
          </p>
        </div>
        <p className='lg:w-125 text-base sm:text-lg text-gray-400 leading-7 lg:leading-8 lg:mb-4'>
          Brokers and shippers — book freight. Drivers — talk to recruiting. We're in Mount Juliet, Tennessee, and the phone rings during real driver hours.
        </p>
      </div>

      <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact