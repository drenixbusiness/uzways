import React from 'react'
import OppDrivers from './OppDrivers'

const ForDrivers = () => {
    return (
        <div className='px-6 sm:px-12 lg:px-75 py-16 sm:py-20 lg:py-25 mt-16 sm:mt-20 lg:mt-25 bg-primary border-t border-gray-800'>
            <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-0'>
                <div>
                    <h1 className='font-bigshoulders font-bold text-5xl sm:text-7xl lg:text-8xl leading-tight lg:leading-[95px]'>
                        PAY THAT <br />RESPECTS
                    </h1>
                    <p className='font-hankengrotesk italic text-orange text-4xl sm:text-5xl lg:text-[60px] leading-tight lg:leading-[60px] mt-2'>
                        the work <br /> behind the <br /> wheel.
                    </p>
                </div>
                <p className='lg:w-125 text-base sm:text-lg text-gray-400 leading-7 lg:leading-8 lg:mb-4'>
                    Two ways to run with UZWAYS. Pick the one that fits where you are right now — and know exactly what you'll earn before you take a load.
                </p>
            </div>

            <OppDrivers />
        </div>
    )
}

export default ForDrivers