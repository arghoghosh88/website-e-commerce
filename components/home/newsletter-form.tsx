'use client'

import { useId, useState, type FormEvent } from 'react'
import { cn } from '@/lib/utils'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const BD_PHONE = /^(?:\+?880|0)1[3-9]\d{8}$/

export function NewsletterForm({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const id = useId()
  const [value, setValue] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'done'>('idle')
  const dark = variant === 'dark'

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const v = value.trim().replace(/[\s-]/g, '')
    if (!EMAIL.test(value.trim()) && !BD_PHONE.test(v)) {
      setStatus('error')
      return
    }
    setStatus('done')
    setValue('')
  }

  if (status === 'done') {
    return (
      <p role="status" className={cn('text-sm', dark ? 'text-cream/85' : 'text-sage')}>
        Thank you for subscribing. Look out for our next update.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <label htmlFor={id} className="sr-only">
        Email or Bangladeshi phone number
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={id}
          type="text"
          inputMode="email"
          autoComplete="email"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? `${id}-err` : undefined}
          placeholder="Email or 01XXXXXXXXX"
          className={cn(
            'h-12 flex-1 rounded-full border px-5 text-sm focus:outline-none focus-visible:border-gold',
            dark
              ? 'border-cream/20 bg-transparent text-cream placeholder:text-cream/50'
              : 'border-taupe bg-background text-espresso placeholder:text-muted-foreground',
          )}
        />
        <button
          type="submit"
          className={cn(
            'h-12 rounded-full px-6 text-sm font-medium transition-colors',
            dark ? 'bg-gold text-cream hover:bg-[#a6895a]' : 'bg-charcoal text-cream hover:bg-espresso',
          )}
        >
          Subscribe
        </button>
      </div>
      {status === 'error' && (
        <p id={`${id}-err`} className={cn('mt-2 text-xs', dark ? 'text-[#e3a5a5]' : 'text-maroon')}>
          Enter a valid email or Bangladeshi mobile number.
        </p>
      )}
    </form>
  )
}

export function Newsletter() {
  return (
    <section aria-labelledby="newsletter-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="flex flex-col items-center rounded-xl border border-taupe bg-card px-6 py-12 text-center md:py-16">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sage">Stay in touch</p>
        <h2 id="newsletter-title" className="font-serif text-3xl font-semibold text-espresso text-balance md:text-4xl">
          New arrivals, first.
        </h2>
        <p className="mb-7 mt-2 max-w-md text-sm text-muted-foreground md:text-base">
          Hear about new collections and seasonal edits. Unsubscribe anytime.
        </p>
        <div className="w-full max-w-md">
          <NewsletterForm />
        </div>
      </div>
    </section>
  )
}
