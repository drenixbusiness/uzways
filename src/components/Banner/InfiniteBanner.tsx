import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const list = [
    { text: "DRY VAN FREIGHT" },
    { text: "OTR OPERATIONS" },
    { text: "MOUNT JULIET, TN" },
    { text: "FMSCA COMPLIANT" },
    { text: "DRIVER-BUILT" },
    { text: "48-STATE COVERAGE" },
]

const InfiniteBanner = () => {
    return (
        <div className='border-t-2 border-b-2 border-gray-600 bg-darkorange overflow-hidden mt-15 py-3 sm:py-4 md:py-5'>
            <div className='flex items-center gap-8 sm:gap-12 md:gap-15 w-max animate-marquee whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-jetbrainsmono'>
                {[...list, ...list, ...list].map((item, index) => (
                    <div key={index} className='flex items-center gap-8 sm:gap-12 md:gap-15 shrink-0'>
                        <StarIcon className='text-orange !text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl' />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfiniteBanner