import React from 'react'

const Origin = () => {
    return (
        <div className='px-6 sm:px-12 lg:px-75 py-5 mt-12 lg:mt-20'>

            {/* Header section */}
            <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between font-hankengrotesk gap-8 lg:gap-0'>
                <h1 className='text-5xl sm:text-7xl lg:text-8xl leading-tight lg:leading-[95px] font-bigshoulders font-bold'>
                    BUILT ON THE <br /> ROAD, <br />
                    <span className='text-4xl sm:text-5xl lg:text-6xl text-orange font-bigshoulders italic'>not in an office.</span>
                </h1>
                <p className='lg:w-130 text-lg sm:text-xl text-gray-400 leading-7'>
                    UZWAYS wasn't drawn up in a boardroom. It started with a driver — running loads from Texas to Tennessee, watching the same problems repeat: tight schedules, low rates, dispatchers who didn't pick up. The company was the answer to those problems.
                </p>
            </div>

            {/* Body section */}
            <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20 mt-10 lg:mt-15'>

                {/* Left: story text — fixed readable width */}
                <div className='w-full lg:max-w-[580px] xl:max-w-[640px]'>
                    <p className='text-lg sm:text-xl'>
                        Before the company existed, its founder was a working driver — running freight across the United States, dealing with everything every driver knows: tight schedules, low-paying loads, long waits, and no real support behind the wheel.
                    </p>
                    <p className='mt-5 text-lg sm:text-xl'>
                        From Texas lanes to Illinois freight, from Tennessee dispatch hubs to West Coast runs, one thing became clear. The industry works — but not always for the driver. The gaps were everywhere. No structure. No system. No respect.
                    </p>

                    <div className='flex items-center gap-6 sm:gap-8 mt-10'>
                        <div className='w-1 shrink-0 h-25 bg-orange'></div>
                        <h2 className='font-bigshoulders italic font-bold text-2xl sm:text-[28px] text-white leading-8'>
                            We will never build a system that works against the driver — because I was that driver.
                        </h2>
                    </div>

                    <p className='mt-5 text-lg sm:text-xl'>
                        So in 2021, instead of complaining about the system, he built one. Dispatch designed to think like drivers. Safety structured to solve problems, not create pressure. Accounting clear and honest. Recruiting focused on long-term partners, not quick replacement.
                    </p>
                    <p className='mt-5 text-lg sm:text-xl'>
                        Today UZWAYS runs 30 power units across the lower 48, hauling dry van freight for partners who need a carrier that actually shows up — and drivers who want a company that has their back.
                    </p>
                </div>

                {/* Right: name card — fixed width, never shrinks */}
                <div className='w-full lg:w-[420px] xl:w-[450px] shrink-0 bg-primary p-8 sm:p-10 border border-gray-800'>
                    <h2 className='font-bigshoulders font-bold text-2xl sm:text-3xl tracking-[1px]'>WHAT THE NAME MEANS</h2>

                    <div className='flex items-end gap-5 mt-8 sm:mt-10'>
                        <span className='text-orange font-bigshoulders font-bold text-4xl sm:text-5xl leading-none shrink-0'>UZ</span>
                        <div className='flex flex-col'>
                            <h3 className='font-bold text-sm'>UNITY ZONE</h3>
                            <p className='text-gray-400 text-[14px] mt-1'>A place where drivers, routes, and partners connect with one shared standard.</p>
                        </div>
                    </div>

                    <hr className='mt-8 sm:mt-10 border border-gray-700 w-full' />

                    <div className='flex items-end gap-5 mt-8 sm:mt-10'>
                        <span className='text-orange font-bigshoulders font-bold text-4xl sm:text-5xl leading-none shrink-0'>W</span>
                        <div className='flex flex-col'>
                            <h3 className='font-bold text-sm'>WAYS</h3>
                            <p className='text-gray-400 text-[14px] mt-1'>Multiple opportunities. Multiple lanes. One system that works for all of them.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Origin