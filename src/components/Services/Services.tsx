import React from 'react'
import ServicesCard from '../Card/ServicesCard'

const Services = () => {
    return (
        <div id="services" className='px-6 sm:px-12 lg:px-75 mt-20 lg:mt-40'>
            <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-0'>
                <div>
                    <h1 className='font-bigshoulders font-bold text-5xl sm:text-7xl lg:text-8xl leading-tight lg:leading-[95px]'>
                        DRY VAN <br />FREIGHT,
                    </h1>
                    <p className='font-hankengrotesk italic text-orange text-4xl sm:text-5xl lg:text-[60px] leading-tight lg:leading-[60px] mt-2'>
                        done with <br /> discipline.
                    </p>
                </div>
                <p className='lg:w-125 text-base sm:text-lg text-gray-400 leading-7 lg:leading-8 lg:mb-4'>
                    We focus on what we do best — dry van OTR — and we do it with the structure of a large carrier and the care of a company built by a driver.
                </p>
            </div>

            <ServicesCard />
        </div>
    )
}

export default Services