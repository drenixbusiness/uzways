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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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

      {/* SEND MESSAGE */}
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