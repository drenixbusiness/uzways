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
    <div className="border border-white/10 bg-primary-light px-10 py-10">
      <h1 className="font-bigshoulders font-bold text-5xl mb-10 tracking-wide">
        REACH UZWAYS
      </h1>

      {list.map((item) => (
        <div
          key={item.title}
          className="flex gap-6 py-6 border-t border-white/10"
        >
          <span className="w-24 shrink-0 text-[10px] tracking-[0.25em] uppercase text-gray-500 pt-0.5">
            {item.title}
          </span>
          <div>
            {item.info.map((line) => (
              <p key={line} className="text-foreground text-sm leading-6">
                {line}
              </p>
            ))}
            <p className="font-jetbrainsmono text-xs text-gray-600 mt-1">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContactDetails
