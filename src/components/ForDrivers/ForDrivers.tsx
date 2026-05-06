import React from 'react'
import OppDrivers from './OppDrivers'

const ForDrivers = () => {
    return (
        <div className='px-85 py-25 mt-25 bg-primary border-t-1 border-gray-800'>
            <div className='flex items-end justify-between'>
                <div>
                    <h1 className='font-bigshoulders font-bold text-8xl leading-[95px]'>PAY THAT <br />RESPECTS</h1>
                    <p className='font-hankengrotesk italic text-orange text-[60px] leading-[60px] mt-2'>the work <br /> behind the <br /> wheel.</p>
                </div>
                <p className='w-125 text-lg text-gray-400 leading-8 mb-4'>Two ways to run with UZWAYS. Pick the one that fits where you are right now — and know exactly what you'll earn before you take a load.</p>
            </div>

            <OppDrivers />
        </div>
    )
}

export default ForDrivers