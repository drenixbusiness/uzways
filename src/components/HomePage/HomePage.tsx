import React from 'react'
import ButtonDefault from '../Button/ButtonDefault'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const HomePage = () => {
    return (
        <div className="px-6 sm:px-12 lg:px-75 py-5">
            <div className='mt-10 sm:mt-15'>
                <div className='flex items-center justify-between font-jetbrainsmono text-xs sm:text-sm text-gray-500'>
                    <p>TENNESSEE . EST . 2021</p>
                    <p>USDOT 3788148 . MC 1358642</p>
                </div>
            </div>

            <div className='mt-10 sm:mt-15'>
                {/* H1 always first */}
                <h1 className='text-[72px] sm:text-[120px] lg:text-[180px] font-bold font-bigshoulders leading-none sm:leading-tight lg:leading-45'>
                    The Way <br />
                    <span className='text-orange'>The Road</span> <br />
                    Was Meant{' '}
                    <span className='text-4xl sm:text-6xl lg:text-8xl italic text-orange'>to run.</span>
                </h1>

                {/* On mobile: p first, then divider, then list. On desktop: flex row */}
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-20 font-hankengrotesk mt-8 lg:mt-10'>

                    {/* Paragraph — always first in flow */}
                    <p className='text-lg sm:text-xl lg:text-2xl lg:w-150'>
                        UZWAYS LLC hauls <span className='text-orange'>dry van freight</span> across the United States — built by drivers who know the road, structured like a carrier you can rely on. Trusted by freight partners. Respected by owner-operators.
                    </p>

                    {/* Divider — visible only on mobile/tablet between p and list */}
                    <div className='block lg:hidden w-full h-[1px] bg-gray-200 my-8' />

                    {/* Stats list */}
                    <div className='flex items-start justify-start gap-8 sm:gap-12 font-jetbrainsmono text-sm sm:text-base'>
                        <div className='flex items-start gap-4 sm:gap-5 text-gray-500'>
                            <div className='w-[1px] h-35 bg-gray-500 mt-1 shrink-0'></div>
                            <ul>
                                <li>POWER UNITS</li>
                                <li className='mt-3'>AUTHORITY GRANTED</li>
                                <li className='mt-3'>INSURANCE</li>
                                <li className='mt-3'>COVERAGE</li>
                            </ul>
                        </div>
                        <ul className='text-right'>
                            <li>30 trucks</li>
                            <li className='mt-3'>01 / 14 / 2022</li>
                            <li className='mt-3'>Trisura · A-Rated</li>
                            <li className='mt-3'>48 Continental States</li>
                        </ul>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-10 mt-10 sm:mt-15'>
                    <div className='bg-orange text-black px-5 h-14 sm:h-15 flex items-center justify-center gap-3'>
                        <ButtonDefault text='BOOK FREIGHT' />
                        <ArrowRightAltIcon />
                    </div>
                    <div className='border border-current px-5 h-14 sm:h-15 flex items-center justify-center gap-3'>
                        <ButtonDefault text='DRIVER OPPORTUNITIES' />
                        <ArrowRightAltIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage