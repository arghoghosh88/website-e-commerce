'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <div className="border-b border-taupe bg-background">
      <div className="relative mx-auto flex h-8 max-w-7xl items-center justify-center px-10 md:h-9">
        <p className="truncate text-xs text-espresso md:text-[13px]">
          The new season Panjabi edit has arrived.{' '}
          <Link href="/collection/seasonal" className="font-medium underline decoration-gold underline-offset-4">
            Explore now
          </Link>
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
          className="absolute right-2 flex size-7 items-center justify-center rounded-full text-espresso/70 hover:text-espresso md:right-6"
        >
          <X className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
