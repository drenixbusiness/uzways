'use client'

import React from 'react'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HomeIcon from '@mui/icons-material/Home'

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
    return (
        <nav aria-label="Breadcrumb" className="flex mb-6 overflow-x-auto no-scrollbar cursor-pointer">
            <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-medium whitespace-nowrap">
                <li>
                    <Link
                        href="/"
                        className="flex items-center text-gray-400 hover:text-orange transition-colors duration-200"
                    >
                        <HomeIcon sx={{ fontSize: 18 }} className="mr-1" />
                        <span className="hidden sm:inline">Home</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        <ChevronRightIcon sx={{ fontSize: 16 }} className="text-gray-600 mx-0.5 sm:mx-1" />
                        {index === items.length - 1 ? (
                            <span className="text-orange font-semibold" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-gray-400 hover:text-orange transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumbs
