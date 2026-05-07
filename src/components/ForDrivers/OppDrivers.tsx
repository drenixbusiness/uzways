"use client"
import React, { useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const OppDrivers = () => {
    const [active, setActive] = useState<'company' | 'owner' | null>(null)

    return (
        <div className='mt-16 sm:mt-20 lg:mt-25'>
            {/* Tab selector */}
            <div className='grid grid-cols-2 border-t border-b border-gray-800'>
                <div
                    onClick={() => setActive(active === 'company' ? null : 'company')}
                    className={`flex flex-col justify-center px-4 sm:px-6 lg:px-10 py-4 sm:py-5 cursor-pointer transition-all duration-300 hover:bg-primary-light ${active === 'company' ? 'bg-primary-light' : ''}`}
                >
                    <div className='flex items-center justify-between'>
                        <h1 className={`text-[13px] sm:text-[18px] lg:text-[25px] font-bigshoulders font-bold tracking-wide transition-colors duration-300 ${active === 'company' ? 'text-orange' : ''}`}>
                            COMPANY<br className='sm:hidden' /> DRIVER
                        </h1>
                        <span className={`font-jetbrainsmono text-[10px] sm:text-sm transition-colors duration-300 ${active === 'company' ? 'text-orange' : 'text-gray-600'}`}>→ 01</span>
                    </div>
                    <p className={`text-[9px] sm:text-[11px] lg:text-[13px] mt-1 tracking-widest transition-colors duration-300 ${active === 'company' ? 'text-orange' : 'text-gray-500'}`}>
                        CPM PAY
                    </p>
                </div>

                <div
                    onClick={() => setActive(active === 'owner' ? null : 'owner')}
                    className={`flex flex-col justify-center px-4 sm:px-6 lg:px-10 py-4 sm:py-5 border-l border-gray-800 cursor-pointer transition-all duration-300 hover:bg-primary-light ${active === 'owner' ? 'bg-primary-light' : ''}`}
                >
                    <div className='flex items-center justify-between'>
                        <h1 className={`text-[13px] sm:text-[18px] lg:text-[25px] font-bigshoulders font-bold tracking-wide transition-colors duration-300 ${active === 'owner' ? 'text-orange' : ''}`}>
                            OWNER<br className='sm:hidden' /> OPERATOR
                        </h1>
                        <span className={`font-jetbrainsmono text-[10px] sm:text-sm transition-colors duration-300 ${active === 'owner' ? 'text-orange' : 'text-gray-600'}`}>→ 02</span>
                    </div>
                    <p className={`text-[9px] sm:text-[11px] lg:text-[13px] mt-1 tracking-widest transition-colors duration-300 ${active === 'owner' ? 'text-orange' : 'text-gray-500'}`}>
                        % OF GROSS
                    </p>
                </div>
            </div>

            {/* Expanded content */}
            <div className={`transition-all duration-500 overflow-hidden mt-6 sm:mt-8 lg:mt-10 ${active ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}>

                {active === 'company' && (
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-0 py-4 sm:py-6 lg:py-8'>
                        {/* Left: CPM card */}
                        <div className='border border-gray-800 bg-primary-light p-6 sm:p-8 lg:p-10 flex flex-col gap-4'>
                            <p className='font-jetbrainsmono text-[13px] sm:text-[15px] text-orange tracking-widest'>BASE COMPENSATION</p>
                            <div className='flex items-end gap-2 sm:gap-3'>
                                <h2 className='font-bigshoulders font-bold text-[72px] sm:text-[100px] lg:text-[130px] leading-none text-foreground'>$0.65</h2>
                                <span className='font-bigshoulders font-bold text-[26px] sm:text-[32px] lg:text-[38px] text-orange mb-2 sm:mb-3'>/ MILE</span>
                            </div>
                            <p className='text-gray-400 text-[13px] sm:text-[14px] leading-6 mt-2'>
                                Cents-per-mile pay on every dispatched mile. Calculated through our routing software, settled weekly with no surprise deductions.
                            </p>
                            <ul className='mt-3 sm:mt-4 flex flex-col gap-3'>
                                {[
                                    'Weekly settlements — statements every Wednesday, pay every Thursday',
                                    'Detention pay for excessive loading or unloading delays',
                                    "Layover pay when you're held waiting for freight",
                                    'Performance and safety bonus programs',
                                    'Company-provided truck, trailer, fuel, and tolls',
                                ].map((item, i) => (
                                    <li key={i} className='flex items-start gap-3 text-[13px] sm:text-[14px] text-gray-300'>
                                        <span className='text-orange mt-1 shrink-0'>—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: two sub-cards */}
                        <div className='flex flex-col gap-4 sm:gap-6'>
                            <div className='border border-gray-800 bg-primary-light py-6 sm:py-8'>
                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 gap-1'>
                                    <h3 className='font-bigshoulders font-bold text-[18px] sm:text-[20px] lg:text-[22px]'>CLEAN INSPECTION BONUSES</h3>
                                    <span className='font-jetbrainsmono text-[10px] text-orange tracking-widest'>NO-VIOLATION REWARD</span>
                                </div>
                                {[
                                    { lvl: 'LVL I', label: 'Full inspection — no violations', amount: '$500' },
                                    { lvl: 'LVL II', label: 'Walk-around inspection — no violations', amount: '$300' },
                                    { lvl: 'LVL III', label: 'Driver documentation inspection — clean', amount: '$200' },
                                ].map((row, i) => (
                                    <div key={i} className='flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-t border-gray-800 bg-primary'>
                                        <div className='flex items-center gap-2 sm:gap-4 min-w-0'>
                                            <span className='font-jetbrainsmono text-[10px] text-gray-500 border border-gray-700 px-2 py-1 shrink-0'>{row.lvl}</span>
                                            <span className='text-[12px] sm:text-[14px] text-gray-300 truncate'>{row.label}</span>
                                        </div>
                                        <span className='font-bigshoulders font-bold text-[22px] sm:text-[26px] text-orange shrink-0 ml-2'>{row.amount}</span>
                                    </div>
                                ))}
                            </div>

                            <div className='border border-gray-800 bg-primary-light py-6 sm:py-8'>
                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 gap-1'>
                                    <h3 className='font-bigshoulders font-bold text-[18px] sm:text-[20px] lg:text-[22px]'>WHAT YOU BRING</h3>
                                    <span className='font-jetbrainsmono text-[10px] text-orange tracking-widest'>DRIVER REQUIREMENTS</span>
                                </div>
                                {[
                                    { tag: 'CDL', label: 'Valid Class A Commercial Driver License' },
                                    { tag: 'DOT', label: 'Meet all FMCSA qualification standards' },
                                    { tag: 'US', label: 'Legally authorized to work in the United States' },
                                ].map((row, i) => (
                                    <div key={i} className='flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-t border-gray-800 bg-primary'>
                                        <div className='flex items-center gap-2 sm:gap-4 min-w-0'>
                                            <span className='font-jetbrainsmono text-[10px] text-gray-500 border border-gray-700 px-2 py-1 shrink-0'>{row.tag}</span>
                                            <span className='text-[12px] sm:text-[14px] text-gray-300 truncate'>{row.label}</span>
                                        </div>
                                        <span className='font-jetbrainsmono text-[11px] sm:text-[12px] text-gray-400 shrink-0 ml-2'>REQ</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {active === 'owner' && (
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 px-0 py-4 sm:py-6 lg:py-8'>
                        {/* Left: % of gross card */}
                        <div className='border border-gray-800 bg-primary-light p-6 sm:p-8 lg:p-10 flex flex-col gap-4'>
                            <p className='font-jetbrainsmono text-[13px] sm:text-[15px] text-orange tracking-widest'>OWNER OPERATOR LEASE</p>
                            <h2 className='font-bigshoulders font-bold text-[60px] sm:text-[76px] lg:text-[90px] leading-none text-foreground'>% OF<br />GROSS</h2>
                            <p className='text-gray-400 text-[13px] sm:text-[14px] leading-6 mt-2'>
                                Lease your truck to UZWAYS authority and earn a percentage of gross revenue on every load you haul, plus full passthrough of any applicable fuel surcharge.
                            </p>
                            <ul className='mt-3 sm:mt-4 flex flex-col gap-3'>
                                {[
                                    'Percent-of-gross compensation on customer revenue',
                                    'Full fuel surcharge passthrough where applicable',
                                    "Right to refuse any load — you're an independent contractor",
                                    'Trailer rental available with maintenance covered',
                                    'Settlement within 15 days of completed trip and paperwork',
                                ].map((item, i) => (
                                    <li key={i} className='flex items-start gap-3 text-[13px] sm:text-[14px] text-gray-300'>
                                        <span className='text-orange mt-1 shrink-0'>—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: two sub-cards */}
                        <div className='flex flex-col gap-4 sm:gap-6'>
                            <div className='border border-gray-800 bg-primary-light py-6 sm:py-8'>
                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 gap-1'>
                                    <h3 className='font-bigshoulders font-bold text-[18px] sm:text-[20px] lg:text-[22px]'>WEEKLY SERVICE FEES</h3>
                                    <span className='font-jetbrainsmono text-[10px] text-orange tracking-widest'>TRANSPARENT CHARGES</span>
                                </div>
                                {[
                                    { tag: 'ELD', label: 'Electronic Logging & IFTA tax service', amount: '$100', unit: '/wk' },
                                    { tag: 'INS', label: 'Auto liability · cargo · trailer interchange', amount: '$400', unit: '/wk' },
                                    { tag: 'CGO', label: 'Cargo insurance ($100K coverage)', amount: 'at cost', unit: '' },
                                ].map((row, i) => (
                                    <div key={i} className='flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-t border-gray-800 bg-primary'>
                                        <div className='flex items-center gap-2 sm:gap-4 min-w-0'>
                                            <span className='font-jetbrainsmono text-[10px] text-gray-500 border border-gray-700 px-2 py-1 shrink-0'>{row.tag}</span>
                                            <span className='text-[12px] sm:text-[14px] text-gray-300 truncate'>{row.label}</span>
                                        </div>
                                        <span className='font-bigshoulders font-bold text-[18px] sm:text-[22px] text-orange shrink-0 ml-2'>
                                            {row.amount}<span className='text-[12px] sm:text-[14px]'>{row.unit}</span>
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className='border border-gray-800 bg-primary-light py-6 sm:py-8'>
                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 gap-1'>
                                    <h3 className='font-bigshoulders font-bold text-[18px] sm:text-[20px] lg:text-[22px]'>CLEAN INSPECTION BONUSES</h3>
                                    <span className='font-jetbrainsmono text-[10px] text-orange tracking-widest'>SAME AS COMPANY</span>
                                </div>
                                {[
                                    { lvl: 'LVL I', label: 'Full inspection — no violations', amount: '$500' },
                                    { lvl: 'LVL II', label: 'Walk-around — no violations', amount: '$300' },
                                    { lvl: 'LVL III', label: 'Documentation — clean', amount: '$200' },
                                ].map((row, i) => (
                                    <div key={i} className='flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-t border-gray-800 bg-primary'>
                                        <div className='flex items-center gap-2 sm:gap-4 min-w-0'>
                                            <span className='font-jetbrainsmono text-[10px] text-gray-500 border border-gray-700 px-2 py-1 shrink-0'>{row.lvl}</span>
                                            <span className='text-[12px] sm:text-[14px] text-gray-300 truncate'>{row.label}</span>
                                        </div>
                                        <span className='font-bigshoulders font-bold text-[22px] sm:text-[26px] text-orange shrink-0 ml-2'>{row.amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OppDrivers