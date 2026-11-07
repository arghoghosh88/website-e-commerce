'use client'

import { useState, type KeyboardEvent } from 'react'
import { cn } from '@/lib/utils'
import type { Product } from '@/lib/home-data'
import { ProductCard } from './product-card'

type TabKey = 'trending' | 'bestSellers' | 'topRated'

const tabs: { key: TabKey; label: string }[] = [
  { key: 'trending', label: 'Trending' },
  { key: 'bestSellers', label: 'Best Sellers' },
  { key: 'topRated', label: 'Top Rated' },
]

export function ProductTabs({ data }: { data: Record<TabKey, Product[]> }) {
  const [active, setActive] = useState<TabKey>('trending')

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    setActive(tabs[next].key)
    document.getElementById(`tab-${tabs[next].key}`)?.focus()
  }

  return (
    <section aria-labelledby="tabs-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sage">Most loved</p>
          <h2 id="tabs-title" className="font-serif text-3xl font-semibold text-espresso md:text-4xl">
            Customer Favourites
          </h2>
        </div>
        <div role="tablist" aria-label="Product lists" className="flex gap-1 rounded-full border border-taupe bg-card p-1">
          {tabs.map((t, i) => (
            <button
              key={t.key}
              id={`tab-${t.key}`}
              role="tab"
              type="button"
              aria-selected={active === t.key}
              aria-controls={`panel-${t.key}`}
              tabIndex={active === t.key ? 0 : -1}
              onClick={() => setActive(t.key)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                'flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors md:flex-none',
                active === t.key ? 'bg-espresso text-cream' : 'text-espresso hover:bg-taupe/50',
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div id={`panel-${active}`} role="tabpanel" aria-labelledby={`tab-${active}`}>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {data[active].map((p) => (
            <li key={p.id}>
              <ProductCard product={p} showRating={active === 'topRated'} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
