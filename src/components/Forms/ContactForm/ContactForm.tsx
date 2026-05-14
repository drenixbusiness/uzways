'use client'

import { useActionState, useState } from 'react'
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
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [aboutThem, setAboutThem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [showCheckboxError, setShowCheckboxError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      setShowCheckboxError(true);
      return;
    }
    setShowCheckboxError(false);

    const formData = { name, company, email, phone, aboutThem };

    try {
      const res = await fetch('/api/sendToTelegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setResponseMessage('Your message was sent successfully!');
      } else {
        setResponseMessage('Failed to send message.');
      }
    } catch (error) {
      setResponseMessage('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-9">

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
      </div>

      {/* EMAIL + PHONE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>

      {/* TELL US ABOUT IT */}
      <div>
        <label htmlFor="aboutThem" className={labelClass}>Tell us about it</label>
        <textarea
          id="aboutThem"
          name="aboutThem"
          rows={5}
          placeholder="Lanes, freight type, equipment needs, or just a question."
          className={`${inputClass} resize-none`}
          value={aboutThem}
          onChange={(e) => setAboutThem(e.target.value)}
          required
        />
      </div>

      {/* AGREEMENT CHECKBOX */}
      <div>
        <label className={`flex items-start gap-3 text-left cursor-pointer ${showCheckboxError ? "text-red-500" : ""}`}>
          <div className="relative flex items-center mt-0.5 flex-shrink-0">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                if (e.target.checked) setShowCheckboxError(false);
              }}
              className={`appearance-none w-5 h-5 rounded border-2 bg-transparent cursor-pointer transition-all duration-200
                    ${agreed ? "bg-blue-600 border-blue-600" : "border-white/30"}
                    ${showCheckboxError ? "border-red-500 ring-4 ring-red-500/10" : ""}
                `}
            />
            {agreed && (
              <svg
                className="absolute left-[5px] top-[5px] w-[11px] h-[11px] text-white pointer-events-none"
                viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <path d="M1 5L4 8L9 1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span className="text-[13px] text-gray-400 leading-snug select-none">
            By checking this box you agree to our{" "}
            <a href="/privacy-policy" className="text-blue-400 underline hover:text-blue-300 transition-colors">
              Privacy Policy
            </a>{" "}
            and consent to receive communications from UzWays LLC.
          </span>
        </label>
        {showCheckboxError && (
          <p className="text-[12px] text-red-500 font-semibold text-left mt-2 ml-8">
            You must agree before submitting.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange text-near-black font-bigshoulders font-bold text-lg uppercase tracking-[0.2em] py-7 flex items-center justify-center gap-3 disabled:opacity-60 transition-opacity"
      >
        {isSubmitting ? 'Sending...' : 'Send Message →'}
      </button>

      {responseMessage && (
        <p className="text-center mt-4">
          {responseMessage}
        </p>
      )}
    </form>
  )
}