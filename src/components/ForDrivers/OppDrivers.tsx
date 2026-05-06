"use client"
import React, { useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const OppDrivers = () => {
    const [active, setActive] = useState<'company' | 'owner' | null>(null)

    return (
        <div className='mt-25'>
            <div className='grid grid-cols-2 border-t border-b border-gray-800'>
                <div
                    onClick={() => setActive(active === 'company' ? null : 'company')}
                    className={`flex items-center justify-between px-10 py-5 cursor-pointer transition-all duration-300 hover:bg-primary-light ${active === 'company' ? 'bg-primary-light' : ''}`}
                >
                    <div>
                        <h1 className={`text-[25px] font-bigshoulders font-bold transition-colors duration-300 ${active === 'company' ? 'text-orange' : ''}`}>COMPANY DRIVER</h1>
                        <p className={`text-[14px] transition-colors duration-300 ${active === 'company' ? 'text-orange' : 'text-gray-500'}`}>DRIVE OUR TRUCK <span>.</span> CPM PAY</p>
                    </div>
                    <span className={`text-sm font-jetbrainsmono transition-colors duration-300 ${active === 'company' ? 'text-orange' : 'text-gray-600'}`}>→ 01</span>
                </div>
                <div
                    onClick={() => setActive(active === 'owner' ? null : 'owner')}
                    className={`flex items-center justify-between px-10 py-5 border-l border-gray-800 cursor-pointer transition-all duration-300 hover:bg-primary-light ${active === 'owner' ? 'bg-primary-light' : ''}`}
                >
                    <div>
                        <h1 className={`text-[25px] font-bigshoulders font-bold transition-colors duration-300 ${active === 'owner' ? 'text-orange' : ''}`}>OWNER OPERATOR</h1>
                        <p className={`text-[14px] transition-colors duration-300 ${active === 'owner' ? 'text-orange' : 'text-gray-500'}`}>YOUR TRUCK <span>.</span> % OF GROSS</p>
                    </div>
                    <span className={`text-sm font-jetbrainsmono transition-colors duration-300 ${active === 'owner' ? 'text-orange' : 'text-gray-600'}`}>→ 02</span>
                </div>
            </div>

            <div className={`transition-all duration-500 overflow-hidden mt-10 ${active ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>

                {active === 'company' && (
                    <div className='grid grid-cols-2 gap-6 px-0 py-8'>
                        <div className='border border-gray-800 bg-primary-light p-10 flex flex-col gap-4'>
                            <p className='font-jetbrainsmono text-[15px] text-orange tracking-widest'>BASE COMPENSATION</p>
                            <div className='flex items-end gap-3'>
                                <h2 className='font-bigshoulders font-bold text-[130px] leading-none text-foreground'>$0.65</h2>
                                <span className='font-bigshoulders font-bold text-[38px] text-orange mb-3'>/ MILE</span>
                            </div>
                            <p className='text-gray-400 text-[14px] leading-6 mt-2'>
                                Cents-per-mile pay on every dispatched mile. Calculated through our routing software, settled weekly with no surprise deductions.
                            </p>
                            <ul className='mt-4 flex flex-col gap-3'>
                                {[
                                    'Weekly settlements — statements every Wednesday, pay every Thursday',
                                    'Detention pay for excessive loading or unloading delays',
                                    "Layover pay when you're held waiting for freight",
                                    'Performance and safety bonus programs',
                                    'Company-provided truck, trailer, fuel, and tolls',
                                ].map((item, i) => (
                                    <li key={i} className='flex items-start gap-3 text-[14px] text-gray-300'>
                                        <span className='text-orange mt-1'>—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <div className='border border-gray-800 bg-primary-light py-8'>
                                <div className='flex items-center justify-between px-8 mb-6'>
                                    <h3 className='font-bigshoulders font-bold text-[22px]'>CLEAN INSPECTION BONUSES</h3>
                                    <span className='font-jetbrainsmono text-[10px] text-orange tracking-widest'>NO-VIOLATION REWARD</span>
                                </div>
                                {[
                                    { lvl: 'LVL I', label: 'Full inspection — no violations', amount: '$500' },
                                    { lvl: 'LVL II', label: 'Walk-around inspection — no violations', amount: '$300' },
                                    { lvl: 'LVL III', label: 'Driver documentation inspection — clean', amount: '$200' },
                                ].map((row, i) => (
                                    <div key={i} className='flex items-center justify-between px-8 py-4 border-t border-gray-800 bg-primary'>
                                        <div className='flex items-center gap-4'>
                                            <span className='font-jetbrainsmono text-[10px] text-gray-500 border border-gray-700 px-2 py-1'>{row.lvl}</span>
                                            <span className='text-[14px] text-gray-300'>{row.label}</span>
                                        </div>
                                        <span className='font-bigshoulders font-bold text-[26px] text-orange'>{row.amount}</span>
                                    </div>
                                ))}
                            </div>

                            <div className='border border-gray-800 bg-primary-light py-8'>
                                <div className='flex items-center justify-between px-8 mb-6'>
                                    <h3 className='font-bigshoulders font-bold text-[22px]'>WHAT YOU BRING</h3>
                                    <span className='font-jetbrainsmono text-[10px] text-orange tracking-widest'>DRIVER REQUIREMENTS</span>
                                </div>
                                {[
                                    { tag: 'CDL', label: 'Valid Class A Commercial Driver License' },
                                    { tag: 'DOT', label: 'Meet all FMCSA qualification standards' },
                                    { tag: 'US', label: 'Legally authorized to work in the United States' },
                                ].map((row, i) => (
                                    <div key={i} className='flex items-center justify-between px-8 py-4 border-t border-gray-800 bg-primary'>
                                        <div className='flex items-center gap-4'>
                                            <span className='font-jetbrainsmono text-[10px] text-gray-500 border border-gray-700 px-2 py-1'>{row.tag}</span>
                                            <span className='text-[14px] text-gray-300'>{row.label}</span>
                                        </div>
                                        <span className='font-jetbrainsmono text-[12px] text-gray-400'>REQ</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {active === 'owner' && (
                    <div className='grid grid-cols-2 gap-6 px-0 py-8'>
                        <div className='border border-gray-800 bg-primary-light p-10 flex flex-col gap-4'>
                            <p className='font-jetbrainsmono text-[15px] text-orange tracking-widest'>OWNER OPERATOR LEASE</p>
                            <h2 className='font-bigshoulders font-bold text-[90px] leading-none text-foreground'>% OF<br />GROSS</h2>
                            <p className='text-gray-400 text-[14px] leading-6 mt-2'>
                                Lease your truck to UZWAYS authority and earn a percentage of gross revenue on every load you haul, plus full passthrough of any applicable fuel surcharge.
                            </p>
                            <ul className='mt-4 flex flex-col gap-3'>
                                {[
                                    'Percent-of-gross compensation on customer revenue',
                                    'Full fuel surcharge passthrough where applicable',
                                    "Right to refuse any load — you're an independent contractor",
                                    'Trailer rental available with maintenance covered',
                                    'Settlement within 15 days of completed trip and paperwork',
                                ].map((item, i) => (
                                    <li key={i} className='flex items-start gap-3 text-[14px] text-gray-300'>
                                        <span className='text-orange mt-1'>—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <div className='border border-gray-800 bg-primary-light py-8'>
                                <div className='flex items-center justify-between px-8 mb-6'>
                                    <h3 className='font-bigshoulders font-bold text-[22px]'>WEEKLY SERVICE FEES</h3>
                                    <span className='font-jetbrainsmono text-[10px] text-orange tracking-widest'>TRANSPARENT CHARGES</span>
                                </div>
                                {[
                                    { tag: 'ELD', label: 'Electronic Logging & IFTA tax service', amount: '$100', unit: '/wk' },
                                    { tag: 'INS', label: 'Auto liability · cargo · trailer interchange', amount: '$400', unit: '/wk' },
                                    { tag: 'CGO', label: 'Cargo insurance ($100K coverage)', amount: 'at cost', unit: '' },
                                ].map((row, i) => (
                                    <div key={i} className='flex items-center justify-between px-8 py-4 border-t border-gray-800 bg-primary'>
                                        <div className='flex items-center gap-4'>
                                            <span className='font-jetbrainsmono text-[10px] text-gray-500 border border-gray-700 px-2 py-1'>{row.tag}</span>
                                            <span className='text-[14px] text-gray-300'>{row.label}</span>
                                        </div>
                                        <span className='font-bigshoulders font-bold text-[22px] text-orange'>
                                            {row.amount}<span className='text-[14px]'>{row.unit}</span>
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className='border border-gray-800 bg-primary-light py-8'>
                                <div className='flex items-center justify-between px-8 mb-6'>
                                    <h3 className='font-bigshoulders font-bold text-[22px]'>CLEAN INSPECTION BONUSES</h3>
                                    <span className='font-jetbrainsmono text-[10px] text-orange tracking-widest'>SAME AS COMPANY</span>
                                </div>
                                {[
                                    { lvl: 'LVL I', label: 'Full inspection — no violations', amount: '$500' },
                                    { lvl: 'LVL II', label: 'Walk-around — no violations', amount: '$300' },
                                    { lvl: 'LVL III', label: 'Documentation — clean', amount: '$200' },
                                ].map((row, i) => (
                                    <div key={i} className='flex items-center justify-between px-8 py-4 border-t border-gray-800 bg-primary'>
                                        <div className='flex items-center gap-4'>
                                            <span className='font-jetbrainsmono text-[10px] text-gray-500 border border-gray-700 px-2 py-1'>{row.lvl}</span>
                                            <span className='text-[14px] text-gray-300'>{row.label}</span>
                                        </div>
                                        <span className='font-bigshoulders font-bold text-[26px] text-orange'>{row.amount}</span>
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