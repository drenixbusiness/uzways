import React from 'react'
import ContactDetails from './ContactDetails'
import ContactForm from '../Forms/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div className="px-75 mt-25 py-25 bg-primary">
      <div className='flex items-end justify-between'>
        <div>
          <h1 className='font-bigshoulders font-bold text-8xl leading-[95px]'>READY TO <br /> MOVE?</h1>
          <p className='font-hankengrotesk italic text-orange text-[50px] leading-[60px] mt-2'>So are we.</p>
        </div>
        <p className='w-125 text-lg text-gray-400 leading-8 mb-4'>
          Brokers and shippers — book freight. Drivers — talk to recruiting. We're in Mount Juliet, Tennessee, and the phone rings during real driver hours.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-[6fr_6fr] gap-16 items-start">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact