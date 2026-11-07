import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { NewsletterForm } from './newsletter-form'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'Panjabi & Traditional', href: '/category/panjabi' },
      { label: 'Western Wear', href: '/category/western' },
      { label: 'Formal Wear', href: '/category/formal' },
      { label: 'Seasonal Collection', href: '/collection/seasonal' },
      { label: 'Premium Collection', href: '/collection/premium' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Delivery Information', href: '/delivery' },
      { label: 'Exchange & Returns', href: '/returns' },
      { label: 'Track Order', href: '/track' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Virtual Try-On', href: '/try-on' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Try-On Privacy Notice', href: '/privacy/try-on' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
]

function LinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="text-sm text-cream/70 transition-colors hover:text-cream">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-footer text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <p className="font-serif text-3xl font-semibold">Shuta</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Premium menswear for Bangladesh. Get new arrivals and seasonal edits in your inbox.
            </p>
            <div className="mt-5">
              <NewsletterForm variant="dark" />
            </div>
          </div>

          <div className="hidden gap-8 md:grid md:grid-cols-3">
            {columns.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">{c.title}</h2>
                <LinkList links={c.links} />
              </nav>
            ))}
          </div>

          <div className="flex flex-col divide-y divide-cream/15 border-y border-cream/15 md:hidden">
            {columns.map((c) => (
              <details key={c.title} className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-medium uppercase tracking-[0.16em] text-gold">
                  {c.title}
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <nav aria-label={c.title} className="pb-5">
                  <LinkList links={c.links} />
                </nav>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Shuta. All rights reserved.</p>
          <p>Prices in Bangladeshi Taka (৳).</p>
        </div>
      </div>
    </footer>
  )
}
