'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button/ButtonDefault'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'

const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/drivers', label: 'Drivers' },
    { href: '/contact', label: 'Contact' },
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='relative top-0 left-0 right-0 z-50 border-b border-gray-700 bg-transparent'>
            {/* Main header row */}
            <div className='flex justify-between items-center py-5 px-6 md:px-12 lg:px-20 xl:px-75'>
                {/* Desktop nav */}
                <nav className='hidden md:flex gap-5 text-gray-300'>
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className='hover:text-white transition-colors duration-200'
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button — always visible */}
                <div className='hidden md:flex items-center gap-2 bg-orange border-none rounded-[3px] px-2'>
                    <Button
                        text='DRIVE WITH US'
                        className='text-white py-2 rounded-md'
                        disabled={false}
                        type='button'
                    />
                    <ArrowRightAltIcon className='text-white' />
                </div>

                {/* Mobile: CTA + Hamburger */}
                <div className='flex md:hidden items-center gap-3 w-full justify-between'>
                    <div className='flex items-center gap-2 bg-orange border-none rounded-[3px] px-2'>
                        <Button
                            text='DRIVE WITH US'
                            className='text-white py-2 rounded-md text-sm'
                            disabled={false}
                            type='button'
                        />
                        <ArrowRightAltIcon className='text-white' />
                    </div>

                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className='text-gray-300 hover:text-white transition-colors duration-200 p-1'
                        aria-label='Toggle menu'
                    >
                        {menuOpen ? <ClearIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <nav className='md:hidden flex flex-col border-t border-gray-700 bg-black/90 backdrop-blur-sm'>
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className='text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 px-6 py-4 border-b border-gray-800 last:border-b-0'
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            )}
        </div>
    )
}

export default Header