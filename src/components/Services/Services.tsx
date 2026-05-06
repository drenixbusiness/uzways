import React from 'react'
import ServicesCard from '../Card/ServicesCard'

const Services = () => {
    return (
        <div className='px-85 mt-40'>
            <div className='flex items-end justify-between'>
                <div>
                    <h1 className='font-bigshoulders font-bold text-8xl leading-[95px]'>DRY VAN <br />FREIGHT,</h1>
                    <p className='font-hankengrotesk italic text-orange text-[60px] leading-[60px] mt-2'>done with <br /> discipline.</p>
                </div>
                <p className='w-125 text-lg text-gray-400 leading-8 mb-4'>We focus on what we do best — dry van OTR — and we do it with the structure of a large carrier and the care of a company built by a driver.</p>
            </div>

            <ServicesCard />
        </div>
    )
}

export default Services