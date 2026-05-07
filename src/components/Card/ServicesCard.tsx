import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

const CardList = [
    {
        icon: LocalShippingIcon,
        title: 'DRY VAN OTR',
        desc: '53-foot dry vans running long-haul lanes nationwide. Reliable transit, accurate ETAs, paperwork that arrives clean every time.',
        miniButton1: "53' TRAILERS",
        miniButton2: 'OTR',
        miniButton3: 'SOLO & TEAM',
    },
    {
        icon: LocationCityIcon,
        title: '48-State Coverage',
        desc: 'From West Coast to East Coast, Texas to the Great Lakes. Drivers and dispatch experienced in every major freight corridor in the lower 48.',
        miniButton1: "Lower 48",
        miniButton2: 'All Lanes',
        miniButton3: 'Cross-Country',
    },
    {
        icon: GppGoodIcon,
        title: 'Safety & Compliance',
        desc: 'Zero-tolerance on drugs and alcohol. ELD-tracked HOS. Pre-trip and post-trip inspections enforced. Clean DOT inspections rewarded, not just expected.',
        miniButton1: "FMCSA Compliant",
        miniButton2: 'Drug & Alcohol',
        miniButton3: 'ELD Logged',
    },
    {
        icon: CreditCardIcon,
        title: 'Brokers & Shippers',
        desc: 'A-rated cargo and liability insurance. Trailer interchange covered. Honest communication from booking to POD — no surprises on either side.',
        miniButton1: "$100K Cargo",
        miniButton2: '$1M Liability',
        miniButton3: 'Trisura',
    },
    {
        icon: AccessTimeIcon,
        title: '24 / 7 Dispatch',
        desc: 'Dispatchers who think like drivers because most of them were drivers. Fast answers. No going dark on a Sunday with a load on the deck.',
        miniButton1: "Live Dispatch",
        miniButton2: 'After Hours',
        miniButton3: 'Real Answers',
    },
    {
        icon: AddModeratorIcon,
        title: 'Owner Operators',
        desc: 'Lease your truck to UZWAYS authority. Percent-of-gross compensation, full fuel surcharge passthrough, weekly settlements, clean inspection bonuses.',
        miniButton1: "% of Gross",
        miniButton2: 'Weekly Pay',
        miniButton3: 'Trailer Rental',
    },
]

const ServicesCard = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-15'>
            {CardList.map((item, index) => (
                <div key={index} className='flex flex-col justify-center gap-3 hover:bg-primary p-6 sm:p-8 lg:p-10 border border-gray-800'>
                    <item.icon sx={{ fontSize: 48, color: 'var(--color-orange)' }} />
                    <h1 className='font-bigshoulders font-bold text-2xl lg:text-3xl tracking-[1px]'>{item.title}</h1>
                    <p className='text-gray-400 text-[13px] sm:text-[14px] mt-3 sm:mt-5'>{item.desc}</p>
                    <div className='flex items-center justify-start sm:justify-center gap-1 mt-3 sm:mt-5 flex-wrap'>
                        {[item.miniButton1, item.miniButton2, item.miniButton3].map((label, i) => (
                            <div
                                key={i}
                                className='bg-darkorange border border-gray-600 h-9 sm:h-10 px-3 flex items-center justify-center'
                            >
                                <p className='text-white text-[11px] sm:text-[12px] font-bold whitespace-nowrap'>{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesCard