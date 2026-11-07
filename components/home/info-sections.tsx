import Image from 'next/image'
import Link from 'next/link'
import { CreditCard, Ruler, Scissors, Sparkles, Truck, Undo2, Layers } from 'lucide-react'
import { SectionHeading } from './section-heading'

const reasons = [
  { icon: Layers, title: 'Curated styles', text: 'From panjabi to tailoring, every piece is chosen to work together.' },
  { icon: Scissors, title: 'Considered fabrics', text: 'Breathable cottons, linens and blends suited to our climate.' },
  { icon: Ruler, title: 'Sizes in inches', text: 'Clear chest, length and shoulder measurements on every product.' },
  { icon: Sparkles, title: 'AI Virtual Try-On', text: 'Preview eligible pieces on yourself before you decide.' },
]

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeading id="why-title" eyebrow="Our promise" title="Why Choose Us" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {reasons.map(({ icon: Icon, title, text }) => (
          <li key={title} className="rounded-xl border border-taupe bg-card p-6">
            <span className="flex size-11 items-center justify-center rounded-full border border-gold text-gold">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-semibold text-espresso">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const policies = [
  { icon: Truck, title: 'Delivery', text: 'Available delivery areas and charges are shown at checkout.', href: '/delivery', link: 'Delivery information' },
  { icon: CreditCard, title: 'Payment', text: 'Available payment methods are shown at checkout before you order.', href: '/payment', link: 'Payment information' },
  { icon: Undo2, title: 'Exchange & Returns', text: 'Read our policy for eligibility and how to request an exchange.', href: '/returns', link: 'Returns policy' },
]

export function DeliveryInfo() {
  return (
    <section aria-labelledby="policy-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <h2 id="policy-title" className="sr-only">
        Delivery, payment and returns
      </h2>
      <ul className="grid divide-y divide-taupe border-y border-taupe md:grid-cols-3 md:divide-x md:divide-y-0">
        {policies.map(({ icon: Icon, title, text, href, link }) => (
          <li key={title} className="flex gap-4 py-6 md:px-8 md:first:pl-0 md:last:pr-0">
            <Icon className="mt-0.5 size-5 shrink-0 text-sage" aria-hidden="true" />
            <div>
              <h3 className="text-[15px] font-medium text-espresso">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              <Link href={href} className="mt-2 inline-block text-sm font-medium text-espresso underline decoration-gold underline-offset-4 hover:text-gold">
                {link}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function BrandStory() {
  return (
    <section aria-labelledby="story-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
          <Image src="/images/brand-story.png" alt="A tailor measuring ivory fabric in a Dhaka atelier" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="max-w-lg">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sage">Our story</p>
          <h2 id="story-title" className="font-serif text-3xl font-semibold leading-tight text-espresso text-balance md:text-[44px]">
            Made with patience, worn with ease.
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              Shuta began with a simple idea: menswear for Bangladesh should feel as refined as it is practical. We work with
              fabrics that breathe in our climate and cuts that respect tradition while fitting the way you live today.
            </p>
            <p>
              From festive panjabi to everyday shirts and tailoring, each piece is chosen to be worn often and kept for years.
            </p>
          </div>
          <Link
            href="/about"
            className="mt-7 inline-block rounded-full border border-espresso px-6 py-3 text-sm font-medium text-espresso transition-colors hover:bg-espresso hover:text-cream"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  )
}
