import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories, collections } from '@/lib/home-data'
import { SectionHeading } from './section-heading'

export function ShopByCategory() {
  return (
    <section aria-labelledby="categories-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeading id="categories-title" eyebrow="Explore" title="Shop by Category" />
      <ul className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-4 md:gap-4 md:overflow-visible md:px-0 lg:grid-cols-7">
        {categories.map((c) => (
          <li key={c.href} className="w-[38%] shrink-0 snap-start md:w-auto">
            <Link href={c.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-card">
                <Image
                  src={c.image || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 14vw, (min-width: 768px) 25vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-3 text-center text-sm font-medium text-espresso group-hover:text-gold">{c.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="mb-5 mt-14 font-serif text-2xl font-semibold text-espresso md:text-3xl">Collections</h3>
      <ul className="grid gap-4 md:grid-cols-2">
        {collections.map((c) => (
          <li key={c.href}>
            <Link href={c.href} className="group flex items-center gap-5 rounded-xl border border-taupe bg-card p-3 transition-colors hover:border-gold">
              <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-lg md:w-36">
                <Image src={c.image || '/placeholder.svg'} alt="" fill sizes="144px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 pr-2">
                <p className="font-serif text-2xl font-semibold text-espresso">{c.name}</p>
                <p className="text-sm text-muted-foreground">{c.description}</p>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-espresso group-hover:text-gold">
                  Explore <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
