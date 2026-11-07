'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Heart, Menu, Search, ShoppingBag, Sparkles, User, X } from 'lucide-react'
import { navLinks } from '@/lib/home-data'

const popularSearches = ['Eid panjabi', 'Linen shirt', 'Old money knit', 'Blazer', 'Chinos']

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const iconBtn =
    'relative flex size-10 items-center justify-center rounded-full text-espresso transition-colors hover:bg-taupe/50'

  return (
    <header className="sticky top-0 z-40 border-b border-taupe bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between gap-4 px-4 md:h-[72px] md:px-8">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className={`${iconBtn} lg:hidden`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-espresso md:text-[28px]">
            Shuta
          </Link>
        </div>

        <div className="flex items-center gap-0.5 md:gap-1.5">
          <button
            type="button"
            className={iconBtn}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
            aria-controls="site-search"
            onClick={() => setSearchOpen((s) => !s)}
          >
            {searchOpen ? <X className="size-5" aria-hidden="true" /> : <Search className="size-5" aria-hidden="true" />}
          </button>
          <Link
            href="/try-on"
            className="mx-1 hidden items-center gap-1.5 rounded-full border border-gold px-3.5 py-1.5 text-[13px] font-medium text-espresso transition-colors hover:bg-gold hover:text-cream md:flex"
          >
            <Sparkles className="size-3.5" aria-hidden="true" />
            Try-On
          </Link>
          <Link href="/wishlist" className={`${iconBtn} hidden sm:flex`} aria-label="Wishlist, 2 items">
            <Heart className="size-5" aria-hidden="true" />
            <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-espresso text-[10px] font-semibold text-cream">
              2
            </span>
          </Link>
          <Link href="/cart" className={iconBtn} aria-label="Cart, 1 item">
            <ShoppingBag className="size-5" aria-hidden="true" />
            <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-maroon text-[10px] font-semibold text-cream">
              1
            </span>
          </Link>
          <Link href="/account" className={`${iconBtn} hidden sm:flex`} aria-label="Account">
            <User className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <nav aria-label="Primary" className="hidden border-t border-taupe/70 lg:block">
        <ul className="mx-auto flex h-11 max-w-7xl items-center justify-center gap-7 px-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[13px] font-medium tracking-wide text-espresso/85 underline-offset-[6px] transition-colors hover:text-espresso hover:underline hover:decoration-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {searchOpen && (
        <div id="site-search" className="border-t border-taupe bg-background">
          <form role="search" action="/search" className="mx-auto max-w-3xl px-4 py-5 md:px-8">
            <label htmlFor="search-input" className="sr-only">
              Search products
            </label>
            <div className="flex items-center gap-3 rounded-full border border-taupe bg-card px-4">
              <Search className="size-4 text-muted-foreground" aria-hidden="true" />
              <input
                ref={searchRef}
                id="search-input"
                name="q"
                type="search"
                placeholder="Search panjabi, shirts, blazers..."
                className="h-11 w-full bg-transparent text-sm text-espresso placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">Popular:</span>
              {popularSearches.map((s) => (
                <Link
                  key={s}
                  href={`/search?q=${encodeURIComponent(s)}`}
                  className="rounded-full border border-taupe px-3 py-1 text-xs text-espresso hover:border-gold"
                >
                  {s}
                </Link>
              ))}
            </div>
          </form>
        </div>
      )}

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-espresso/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-background shadow-xl">
            <div className="flex h-[60px] items-center justify-between border-b border-taupe px-4">
              <span className="font-serif text-2xl font-semibold text-espresso">Shuta</span>
              <button type="button" className={iconBtn} aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.href} className="border-b border-taupe/60">
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3.5 text-[15px] text-espresso"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/try-on"
                  className="flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-cream"
                >
                  <Sparkles className="size-4" aria-hidden="true" />
                  Virtual Try-On
                </Link>
                <div className="flex gap-3">
                  <Link href="/wishlist" className="flex flex-1 items-center justify-center gap-2 rounded-full border border-taupe py-3 text-sm text-espresso">
                    <Heart className="size-4" aria-hidden="true" /> Wishlist
                  </Link>
                  <Link href="/account" className="flex flex-1 items-center justify-center gap-2 rounded-full border border-taupe py-3 text-sm text-espresso">
                    <User className="size-4" aria-hidden="true" /> Account
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
