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
        <div className='border-t-2 border-b-2 border-gray-600 bg-darkorange overflow-hidden mt-15 py-5'>
            <div className='flex items-center gap-15 w-max animate-marquee whitespace-nowrap text-5xl font-jetbrainsmono'>
                {[...list, ...list].map((item, index) => (
                    <div key={index} className='flex items-center gap-15 shrink-0'>
                        <StarIcon className='text-orange' />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfiniteBanner