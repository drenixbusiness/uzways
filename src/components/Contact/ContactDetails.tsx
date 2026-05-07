import React from 'react'

const list = [
  {
    title: 'OFFICE',
    info: ['(615) 578-1333'],
    text: 'Main switchboard',
  },
  {
    title: 'DIRECT',
    info: ['(423) 712-9350'],
    text: 'Office direct line',
  },
  {
    title: 'SAFETY',
    info: ['safety@uzwaysllc.info'],
    text: 'Compliance & incident reporting',
  },
  {
    title: 'ADDRESS',
    info: ['250 Clifton Ave', 'Mount Juliet, TN 37122'],
    text: 'Headquarters',
  },
  {
    title: 'GARAGING',
    info: ['8037 Eastgate Blvd', 'Mount Juliet, TN 37122'],
    text: 'Yard & equipment',
  },
  {
    title: 'AUTHORITY',
    info: ['USDOT 3788148 · MC 1358642'],
    text: 'DUNS 14-611-877',
  },
]

const ContactDetails = () => {
  return (
    <div className="border border-white/10 bg-primary-light px-5 sm:px-7 lg:px-10 py-7 sm:py-8 lg:py-10">
      <h1 className="font-bigshoulders font-bold text-3xl sm:text-4xl lg:text-5xl mb-7 sm:mb-8 lg:mb-10 tracking-wide">
        REACH UZWAYS
      </h1>

      {list.map((item) => (
        <div
          key={item.title}
          className="flex gap-4 sm:gap-6 py-4 sm:py-5 lg:py-6 border-t border-white/10"
        >
          <span className="w-16 sm:w-20 lg:w-24 shrink-0 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-500 pt-0.5">
            {item.title}
          </span>
          <div className="min-w-0">
            {item.info.map((line) => (
              <p key={line} className="text-foreground text-xs sm:text-sm leading-6 break-words">
                {line}
              </p>
            ))}
            <p className="font-jetbrainsmono text-[10px] sm:text-xs text-gray-600 mt-1">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactDetails