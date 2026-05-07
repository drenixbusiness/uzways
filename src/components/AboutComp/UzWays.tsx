import React from 'react'

const items = [
  {
    number: '01',
    title: 'Structure of a Large Carrier',
    description: 'Real dispatch system, real safety department, real accounting. Built like the big carriers — without the bureaucracy that gets in the way of the load.',
  },
  {
    number: '02',
    title: 'Control of Every Dollar',
    description: 'Honest, transparent settlements. Documented deductions only. You know what you earned, and where it went, before the wheels stop turning.',
  },
  {
    number: '03',
    title: 'Growth That Compounds',
    description: 'We hire drivers we plan to keep. Long-term partners build the kind of company that can take on bigger freight, better lanes, harder loads.',
  },
  {
    number: '04',
    title: 'Respect for the Work',
    description: 'The driver is not a number. The dispatcher is not a switchboard. Every job here was designed by someone who has done the job behind it.',
  },
  {
    number: '05',
    title: 'Safety as the Floor, Not the Ceiling',
    description: 'Zero-tolerance on drugs and alcohol. ELD-tracked HOS. Pre-trip and post-trip inspections enforced, clean inspections rewarded with real money.',
  },
  {
    number: '06',
    title: 'Built on the Road',
    description: 'Founded in 2021 by a working driver. Every policy, rate sheet, and rule on the books exists because something broke for him — and we fixed it for everyone after.',
  },
]

const UzWays = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-20 xl:px-75 mt-10 sm:mt-12 lg:mt-15">
      {/* Hero heading */}
      <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-0'>
        <div>
          <h1 className='font-bigshoulders font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight lg:leading-[95px]'>
            THE ROAD <br /> TAUGHT US
          </h1>
          <p className='font-hankengrotesk italic text-orange text-[32px] sm:text-[40px] lg:text-[50px] leading-tight lg:leading-[60px] mt-2'>
            what matters.
          </p>
        </div>
        <p className='lg:w-125 text-base sm:text-lg text-gray-400 leading-7 sm:leading-8 lg:mb-4'>
          These aren't slogans. They're the operating rules of a company built by someone who lived every problem the system creates.
        </p>
      </div>

      {/* Grid */}
      <div className='mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 border-t border-white/10'>
        {items.map((item, i) => (
          <div
            key={item.number}
            className={[
              'flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-7 sm:py-8 lg:py-10',
              'border-b border-white/10',
              i % 2 === 0 ? 'sm:border-r sm:border-white/10' : '',
            ].join(' ')}
          >
            <span className='font-bigshoulders font-bold text-4xl sm:text-5xl lg:text-6xl text-orange leading-none shrink-0 w-12 sm:w-14 lg:w-16'>
              {item.number}
            </span>
            <div>
              <h3 className='font-bigshoulders font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-3'>
                {item.title}
              </h3>
              <p className='text-gray-400 text-sm leading-6 sm:leading-7'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UzWays