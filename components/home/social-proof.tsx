import Image from 'next/image'
import { BadgeCheck, Star } from 'lucide-react'
import { customerPhotos, reviews } from '@/lib/home-data'
import { SectionHeading } from './section-heading'

export function CustomerPhotos() {
  return (
    <section aria-labelledby="photos-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeading id="photos-title" eyebrow="Worn by you" title="Real Customer Photos" description="Shared with permission by our customers." />
      <ul className="grid gap-4 sm:grid-cols-3 md:gap-6">
        {customerPhotos.map((c) => (
          <li key={c.image}>
            <figure>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={c.image || '/placeholder.svg'} alt={`${c.handle} wearing the ${c.product}`} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 flex flex-col">
                <span className="text-sm font-medium text-espresso">{c.handle}</span>
                <span className="text-xs text-muted-foreground">Wearing {c.product}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeading id="reviews-title" eyebrow="Reviews" title="What Our Customers Say" />
      <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
        {reviews.map((r) => (
          <li key={r.name} className="flex flex-col rounded-xl border border-taupe bg-card p-6">
            <div className="flex gap-0.5" role="img" aria-label={`Rated ${r.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={i < r.rating ? 'size-4 fill-gold text-gold' : 'size-4 text-taupe'} aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 font-serif text-xl leading-snug text-espresso">
              {`"${r.text}"`}
            </blockquote>
            <div className="mt-6 border-t border-taupe pt-4">
              <p className="flex items-center gap-1.5 text-sm font-medium text-espresso">
                {r.name}
                <span className="text-muted-foreground">· {r.location}</span>
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs text-sage">
                <BadgeCheck className="size-3.5" aria-hidden="true" /> Verified purchase · {r.product}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
