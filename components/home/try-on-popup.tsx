'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

const SEEN_KEY = 'tryon-welcome-seen'

export function TryOnPopup() {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return
    const t = window.setTimeout(() => {
      ref.current?.showModal()
      sessionStorage.setItem(SEEN_KEY, '1')
    }, 2500)
    return () => window.clearTimeout(t)
  }, [])

  const close = () => ref.current?.close()

  return (
    <dialog
      ref={ref}
      aria-labelledby="tryon-popup-title"
      onClick={(e) => e.target === ref.current && close()}
      className="m-auto w-[92vw] max-w-[720px] overflow-hidden rounded-xl bg-card p-0 text-espresso shadow-2xl backdrop:bg-espresso/45"
    >
      <div className="grid md:grid-cols-[1fr_1.1fr]">
        <div className="relative hidden aspect-[4/5] md:block">
          <Image src="/images/try-on.png" alt="" fill sizes="340px" className="object-cover" />
        </div>
        <div className="relative flex flex-col gap-4 p-7 md:p-9">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full hover:bg-taupe/50"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">New</p>
          <h2 id="tryon-popup-title" className="font-serif text-3xl font-semibold leading-tight">
            See it on you before you order.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Upload a photo and preview eligible pieces with AI Virtual Try-On. Previews are approximate and for visual reference only.
          </p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/try-on"
              onClick={close}
              className="rounded-full bg-gold px-6 py-3 text-center text-sm font-medium text-cream transition-colors hover:bg-[#a6895a]"
            >
              Try It Now
            </Link>
            <button
              type="button"
              onClick={close}
              className="rounded-full border border-taupe px-6 py-3 text-sm font-medium text-espresso hover:border-espresso"
            >
              Maybe later
            </button>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Your photo is used only during your active session.
          </p>
        </div>
      </div>
    </dialog>
  )
}
