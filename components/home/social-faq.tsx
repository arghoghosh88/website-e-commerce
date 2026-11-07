import Image from 'next/image'
import { Plus } from 'lucide-react'
import { faqs, socialPosts } from '@/lib/home-data'
import { SectionHeading } from './section-heading'

export function SocialFeed() {
  return (
    <section aria-labelledby="social-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeading
        id="social-title"
        eyebrow="@shuta.bd"
        title="Follow Our Journal"
        action={{ label: 'Follow on Instagram', href: 'https://instagram.com' }}
      />
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {socialPosts.map((p) => (
          <li key={p.image}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src={p.image || '/placeholder.svg'} alt={p.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <span className="sr-only"> (opens Instagram in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="mx-auto max-w-3xl px-4 md:px-8">
      <SectionHeading id="faq-title" eyebrow="Help" title="Frequently Asked Questions" className="md:block md:text-center" />
      <div className="flex flex-col gap-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-xl border border-taupe bg-card px-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-medium text-espresso">
              {f.q}
              <Plus className="size-4 shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
