'use client'

import { useActionState } from 'react'
import { submitContact } from '@/src/app/actions/contact'

const roles = [
  'Broker / Shipper booking freight',
  'Driver looking to join',
  'Other',
]

const labelClass = 'block text-[10px] tracking-[0.25em] uppercase text-gray-500 mb-3'
const inputClass =
  'w-full bg-transparent border-b border-white/15 py-3 text-foreground placeholder-gray-600 focus:outline-none focus:border-orange/40 transition-colors text-sm'

export default function ContactForm() {
  const [, action, pending] = useActionState(submitContact, null)

  return (
    <form action={action} className="flex flex-col gap-9">

      {/* I AM A ... */}
      <div>
        <p className={labelClass}>I am a ...</p>
        <div className="relative">
          <select
            name="role"
            defaultValue={roles[0]}
            className={`${inputClass} appearance-none cursor-pointer pr-6`}
          >
            {roles.map((r) => (
              <option key={r} value={r} className="bg-primary text-foreground">
                {r}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
            ›
          </span>
        </div>
      </div>

      {/* NAME + COMPANY */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="If applicable"
            className={inputClass}
          />
        </div>
      </div>

      {/* EMAIL + PHONE */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(615) 555-0100"
            className={inputClass}
          />
        </div>
      </div>

      {/* TELL US ABOUT IT */}
      <div>
        <label htmlFor="message" className={labelClass}>Tell us about it</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Lanes, freight type, equipment needs, or just a question."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* SEND MESSAGE */}
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-orange text-near-black font-bigshoulders font-bold text-lg uppercase tracking-[0.2em] py-7 flex items-center justify-center gap-3 disabled:opacity-60 transition-opacity"
      >
        {pending ? 'Sending...' : 'Send Message →'}
      </button>

    </form>
  )
}
