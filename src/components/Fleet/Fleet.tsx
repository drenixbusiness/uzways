import React from 'react'
import Image from 'next/image'

const list = [
    { title: "TRAILER LENGTH", desc: "53'" },
    { title: "CAB TYPE", desc: "Sleeper / OTR" },
    { title: "POWER UNITS", desc: "30" },
    { title: "OPERATING STATES", desc: "All 48" },
    { title: "GARAGING", desc: "Mt. Juliet, TN" },
    { title: "CARGO COVERAGE", desc: "$100,000" },
    { title: "AUTO LIABILITY", desc: "$1,000,000" }
]

const Fleet = () => {
    return (
        <div className='px-6 sm:px-12 lg:px-75 py-5 mt-16 sm:mt-20 lg:mt-25'>

            {/* Header */}
            <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-0'>
                <div>
                    <h1 className='font-bigshoulders font-bold text-5xl sm:text-7xl lg:text-8xl leading-tight lg:leading-[95px]'>
                        THIRTY <br /> TRUCKS.
                    </h1>
                    <p className='font-hankengrotesk italic text-orange text-4xl sm:text-5xl lg:text-[50px] leading-tight lg:leading-[60px] mt-2'>
                        One standard.
                    </p>
                </div>
                <p className='lg:w-125 text-base sm:text-lg text-gray-400 leading-7 lg:leading-8 lg:mb-4'>
                    Every unit on UZWAYS authority is maintained, inspected, and dispatched to the same standard. No second-tier equipment. No corner-cutting. The driver and the load are protected the same way every time.
                </p>
            </div>

            {/* Image + specs grid */}
            <div className='flex flex-col lg:grid lg:grid-cols-[55%_45%] mt-16 lg:mt-25 items-center gap-10 lg:gap-12'>

                <Image
                    src="/images/uzwaysfleet.png"
                    alt="UZWAYS fleet"
                    width={900}
                    height={1080}
                    className='object-cover w-full h-auto'
                />

                <div className='w-full'>
                    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bigshoulders'>
                        DRY VAN OTR{' '}
                        <span className='text-xl sm:text-2xl lg:text-3xl font-hankengrotesk italic text-orange'>
                            - configured for the long haul
                        </span>
                    </h2>
                    <p className='mt-5 text-base sm:text-lg text-gray-300'>
                        Fifty-three foot dry van trailers, sleeper cab tractors, dispatched on freight that fits the equipment. We don't take loads we can't deliver clean. We don't run trucks that aren't road-ready.
                    </p>
                    <div className='flex flex-col gap-2 mt-8 lg:mt-10'>
                        {list.map((item, index) => (
                            <div key={index} className='border-t border-gray-500 text-sm text-gray-500 flex items-center justify-between py-3'>
                                <span className='mt-2'>{item.title}</span>
                                <span className='mt-2'>{item.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Fleet