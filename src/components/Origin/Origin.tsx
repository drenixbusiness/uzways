import React from 'react'

const Origin = () => {
    return (
        <div className='px-75 py-5 mt-20'>
            <div className='flex items-end justify-between font-hankengrotesk text-xl'>
                <h1 className='text-8xl leading-[95px] font-bigshoulders font-bold'>BUILT ON THE <br /> ROAD, <br /> <span className='text-6xl text-orange font-bigshoulders italic'>not in an office.</span></h1>
                <p className='w-130 text-xl text-gray-400 leading-7'>UZWAYS wasn't drawn up in a boardroom. It started with a driver — running loads from Texas to Tennessee, watching the same problems repeat: tight schedules, low rates, dispatchers who didn't pick up. The company was the answer to those problems.</p>
            </div>

            <div className='flex items-start justify-between gap-30 mt-15'>
                <div>
                    <p className='mt-0 text-xl'>Before the company existed, its founder was a working driver — running freight across the United States, dealing with everything every driver knows: tight schedules, low-paying loads, long waits, and no real support behind the wheel.</p>
                    <p className='mt-5 text-xl'>From Texas lanes to Illinois freight, from Tennessee dispatch hubs to West Coast runs, one thing became clear. The industry works — but not always for the driver. The gaps were everywhere. No structure. No system. No respect.</p>

                    <div className='flex items-center justify-center gap-8 mt-10'>
                        <div className='w-1 h-25 bg-orange'></div>
                        <h1 className='font-bigshoulders italic font-bold text-[28px] text-white leading-8'>We will never build a system that works against the driver — because I was that driver.</h1>
                    </div>

                    <p className='mt-5 text-xl'>So in 2021, instead of complaining about the system, he built one. Dispatch designed to think like drivers. Safety structured to solve problems, not create pressure. Accounting clear and honest. Recruiting focused on long-term partners, not quick replacemen</p>
                    <p className='mt-5 text-xl'>Today UZWAYS runs 30 power units across the lower 48, hauling dry van freight for partners who need a carrier that actually shows up — and drivers who want a company that has their back.</p>
                </div>

                <div className='w-450 bg-primary h-130 p-10 border border-gray-800'>
                    <h1 className='font-bigshoulders font-bold text-3xl tracking-[1px]'>WHAT THE NAME MEANS</h1>

                    <div className='flex items-end justify-center gap-5 mt-10'>
                        <h1 className='text-orange font-bigshoulders font-bold text-5xl h-23'>UZ</h1>
                        <div className='flex flex-col'>
                            <h3 className='font-bold text-sm'>UNITY ZONE</h3>
                            <p className='text-gray-400 text-[14px]'>A place where drivers, routes, and partners connect with one shared standard.</p>
                        </div>
                    </div>

                    <hr className='mt-10 border-1 border-gray-700 w-full' />

                    <div className='flex items-end justify-center gap-5 mt-10'>
                        <h1 className='text-orange font-bigshoulders font-bold text-5xl h-23'>W</h1>
                        <div className='flex flex-col'>
                            <h3 className='font-bold text-sm'>WAYS</h3>
                            <p className='text-gray-400 text-[14px]'>Multiple opportunities. Multiple lanes. One system that works for all of them.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Origin