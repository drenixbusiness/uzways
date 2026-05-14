import React from 'react'
import Link from 'next/link'

const companyLinks = [
  { label: 'Our story', href: '#about' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

const driverLinks = [
  { label: 'Company Driver', href: '#drivers' },
  { label: 'Owner Operator', href: '#drivers' },
  { label: 'Apply', href: '#contact' },
  { label: 'Safety', href: '#contact' },
]
const reachUs = [
  '(615) 578-1333',
  'safety@uzwaysllc.info',
  '250 Clifton Ave',
  'Mount Juliet, TN',
]

const Footer = () => {
  return (
    <footer className="bg-near-black px-4 sm:px-10 lg:px-20 xl:px-75 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-14 lg:pb-16 border-b border-white/10">

        {/* Logo + tagline — full width on mobile */}
        <div className="col-span-2 lg:col-span-1">
          <p className="font-bigshoulders font-bold text-5xl sm:text-6xl leading-none">
            <span className="text-foreground">UZ</span>
            <span className="text-orange">WAYS</span>
          </p>
          <p className="mt-5 sm:mt-6 text-gray-500 text-sm leading-7 max-w-xs">
            Unity Zone, multiple ways. A Tennessee motor carrier hauling dry van freight across the United States — built on the road, not in an office.
          </p>
          <p className="mt-5 sm:mt-6 text-gray-500 text-sm leading-7 max-w-xs">
            This site uses cookies to improve your experience. See our <Link href="/privacy-policy" className="text-orange hover:text-foreground transition-colors">
              Privacy Policy
            </Link> for details.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-orange text-[10px] tracking-[0.25em] uppercase font-semibold mb-5 sm:mb-7">
            Company
          </h3>
          <ul className="flex flex-col gap-3 sm:gap-4">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-400 text-sm hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Drivers */}
        <div>
          <h3 className="text-orange text-[10px] tracking-[0.25em] uppercase font-semibold mb-5 sm:mb-7">
            Drivers
          </h3>
          <ul className="flex flex-col gap-3 sm:gap-4">
            {driverLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-gray-400 text-sm hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="text-orange text-[10px] tracking-[0.25em] uppercase font-semibold mb-5 sm:mb-7">
            Reach Us
          </h3>
          <ul className="flex flex-col gap-3 sm:gap-4">
            {reachUs.map((item) => (
              <li key={item} className="text-gray-400 text-sm break-words">
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <p className="font-jetbrainsmono text-[10px] sm:text-xs text-gray-600 tracking-wider uppercase">
          © 2026 UZWAYS LLC · All Rights Reserved
        </p>
        <p className="font-jetbrainsmono text-[10px] sm:text-xs text-gray-600 tracking-wider">
          USDOT{' '}
          <span className="text-orange">3788148</span>
          {'  '}MC{' '}
          <span className="text-orange">1358642</span>
          {'  '}DUNS{' '}
          <span className="text-orange">14-611-877</span>
        </p>
      </div>

    </footer>
  )
}

export default Footer