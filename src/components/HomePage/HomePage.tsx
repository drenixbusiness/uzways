import React from 'react'
import ButtonDefault from '../Button/ButtonDefault'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const HomePage = () => {
    return (
        <div className="px-75 py-5">
            <div className='mt-15'>
                <div className='flex items-center justify-between font-jetbrainsmono text-sm text-gray-500'>
                    <p>TENNESSEE . EST . 2021</p>
                    <p>USDOT 3788148 . MC 1358642</p>
                </div>
            </div>

            <div className='mt-15'>
                <h1 className='text-[180px] font-bold font-bigshoulders leading-45'>The Way <br /> <span className='text-orange'>The Road</span> <br /> Was Meant <span className='text-8xl italic text-orange'>to run.</span></h1>

                <div className='flex items-center justify-between gap-20 font-hankengrotesk mt-10'>
                    <p className='w-150 text-2xl'>UZWAYS LLC hauls <span className='text-orange'>dry van freight</span> across the United States — built by drivers who know the road, structured like a carrier you can rely on. Trusted by freight partners. Respected by owner-operators.</p>

                    <div className='flex items-center justify-between gap-30 font-jetbrainsmono'>
                        <div className='flex items-center justify-between gap-5 text-gray-500'>
                            <div className='w-[1px] h-35 bg-gray-500'></div>
                            <ul className='flex-row items-center justify-between gap-2 '>
                                <li>POWER UNITS</li>
                                <li className='mt-3'>AUTHORITY GRANTEND</li>
                                <li className='mt-3'>INSURANCE</li>
                                <li className='mt-3'>COVERAGE</li>
                            </ul>
                        </div>
                        <ul className='flex-row items-center justify-between gap-2  text-right'>
                            <li>30 trucks</li>
                            <li className='mt-3'>01 / 14 / 2022</li>
                            <li className='mt-3'>Trisura · A-Rated</li>
                            <li className='mt-3'>48 Continental States</li>
                        </ul>
                    </div>
                </div>

                <div className='max-w-160 flex items-center justify-start gap-10 mt-15'>
                    <div className='bg-orange text-black p-5 w-60 h-15 flex items-center justify-center gap-3'>
                        <ButtonDefault text='BOOK FREIGHT' />
                        <ArrowRightAltIcon  />
                    </div>
                    <div className='border-1 p-5 w-70 h-15 flex items-center justify-center gap-3'>
                        <ButtonDefault text='DRIVER OPPORTUNITIES' />
                        <ArrowRightAltIcon  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage