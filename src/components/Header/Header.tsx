'use client'

import Link from 'next/link'
import React from 'react'
import Button from '../Button/ButtonDefault'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Header = () => {
    return (
        <div className='flex justify-between items-center py-5 px-75 bg-transparent border-b border-gray-700 top-0 left-0 right-0 z-50'>
            <div className='flex gap-5 text-gray-300'>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/fleet">Fleet</Link>
                <Link href="/drivers">Drivers</Link>
                <Link href="/contact">Contact</Link>
            </div>

            <div className='flex items-center gap-2 bg-orange border-none rounded-[3px] px-2'>
                <Button text="DRIVE WITH US"
                    className="text-white py-2 rounded-md"
                    disabled={false}
                    type="button"
                />

                <ArrowRightAltIcon className='text-white'/>
            </div>
        </div>
    )
}

export default Header