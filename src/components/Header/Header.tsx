'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Button from '../Button/ButtonDefault'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'
import Image from 'next/image'

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#fleet', label: 'Fleet' },
    { href: '#drivers', label: 'Drivers' },
    { href: '#contact', label: 'Contact' },
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled
                ? 'border-gray-700 bg-near-black/95 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
                : 'border-transparent bg-transparent backdrop-blur-none'
                }`}
        >
            {/* Main header row */}
            <div className='flex justify-between items-center py-4 sm:py-0 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-75'>
                <Link href="/">
                    <Image
                        width={180}
                        height={180}
                        className='w-[140px] h-auto object-contain select-none'
                        src="/images/logo-uzways.png"
                        alt="UZWAYS LLC - Logo"
                        priority
                    />
                </Link>

                {/* Desktop nav */}
                <nav className='hidden md:flex gap-5 lg:gap-7 text-md text-gray-300'>
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className='hover:text-white transition-colors duration-200 tracking-wide'
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* CTA — desktop only */}
                <div className='hidden md:flex items-center gap-2 bg-orange rounded-[3px] px-2'>
                    <Button
                        text='DRIVE WITH US'
                        className='text-white py-2 rounded-md'
                        disabled={false}
                        type='button'
                    />
                    <ArrowRightAltIcon className='text-white' />
                </div>

                {/* Mobile: hamburger only */}
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className='flex md:hidden text-gray-300 hover:text-white transition-colors duration-200 p-1'
                    aria-label='Toggle menu'
                >
                    {menuOpen ? <ClearIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <nav className='flex flex-col border-t border-gray-800 bg-near-black/98 backdrop-blur-md'>
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className='text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 px-5 py-4 border-b border-gray-800/60 text-sm tracking-wide'
                        >
                            {label}
                        </Link>
                    ))}

                    {/* CTA — full width at bottom of menu */}
                    <div className='p-4'>
                        <div
                            className='flex items-center justify-center gap-2 bg-orange rounded-[3px] w-full px-4 py-3 cursor-pointer'
                            onClick={() => setMenuOpen(false)}
                        >
                            <Button
                                text='DRIVE WITH US'
                                className='text-white text-sm font-bold rounded-md'
                                disabled={false}
                                type='button'
                            />
                            <ArrowRightAltIcon className='text-white' />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header