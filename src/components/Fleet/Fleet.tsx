import React from 'react'
import Image from 'next/image'

const list = [
    { title: "TRAILER LENGTH", desc: "53'" },
    { title: "CAB TYPE", desc: "Sleeper / OTR" },
    { title: "POWER UNITS", desc: "30" },
    { title: "OEPRATING STATES", desc: "All 48" },
    { title: "GARAGING", desc: "Mt. Juliet, TN" },
    { title: "CARGO COVERAGE", desc: "$100,000" },
    { title: "AUTO LIABILITY    ", desc: "$1,000,000" }
]

const Fleet = () => {
    return (
        <div className='px-85 py-5 mt-25'>
            <div className='flex items-end justify-between'>
                <div>
                    <h1 className='font-bigshoulders font-bold text-8xl leading-[95px]'>THIRTY <br /> TRUCKS.</h1>
                    <p className='font-hankengrotesk italic text-orange text-[50px] leading-[60px] mt-2'>One standard.</p>
                </div>
                <p className='w-125 text-lg text-gray-400 leading-8 mb-4'>Every unit on UZWAYS authority is maintained, inspected, and dispatched to the same standard. No second-tier equipment. No corner-cutting. The driver and the load are protected the same way every time.</p>
            </div>

            <div className='grid grid-cols-[55%_45%] mt-25 items-center gap-12'>
                <Image src="/images/uzwaysfleet.png" alt="img" width={900} height={1080} className='object-cover w-full h-auto' />

                <div>
                    <h1 className='text-6xl font-bigshoulders'>DRY VAN OTR <span className='text-3xl font-hankengrotesk italic text-orange'>- configured for the long haul</span></h1>
                    <p className='mt-5 text-gray-300'>Fifty-three foot dry van trailers, sleeper cab tractors, dispatched on freight that fits the equipment. We don't take loads we can't deliver clean. We don't run trucks that aren't road-ready.</p>
                    <div className='flex flex-col gap-2 mt-10'>
                        {list.map((item, index) => (
                            <div key={index} className='border-t border-gray-500 text-sm text-gray-500 flex items-center justify-between py-3'>
                                <h1 className='mt-2'>{item.title}</h1>
                                <p className='mt-2'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fleet