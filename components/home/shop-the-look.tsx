import Image from 'next/image'
import Link from 'next/link'
import { formatBDT, looks } from '@/lib/home-data'
import { SectionHeading } from './section-heading'

export function ShopTheLook() {
  return (
    <section aria-labelledby="look-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeading id="look-title" eyebrow="Styled for you" title="Shop the Look" description="Complete outfits, put together by our stylists." />
      <ul className="grid gap-6 md:grid-cols-2">
        {looks.map((look) => {
          const total = look.items.reduce((sum, p) => sum + p.price, 0)
          return (
            <li key={look.id} className="grid grid-cols-[1fr_1.1fr] overflow-hidden rounded-xl border border-taupe bg-card">
              <div className="relative min-h-[320px]">
                <Image src={look.image || '/placeholder.svg'} alt={`${look.title} outfit`} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="flex flex-col p-5 md:p-6">
                <h3 className="font-serif text-2xl font-semibold text-espresso">{look.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{look.note}</p>
                <ul className="mt-5 flex flex-col divide-y divide-taupe">
                  {look.items.map((p) => (
                    <li key={p.id} className="flex items-center gap-3 py-3">
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-md">
                        <Image src={p.image || '/placeholder.svg'} alt="" fill sizes="56px" className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <Link href={`/product/${p.id}`} className="line-clamp-2 text-sm font-medium text-espresso hover:underline">
                          {p.name}
                        </Link>
                        <p className="text-xs text-muted-foreground">{formatBDT(p.price)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <p className="mb-3 flex justify-between text-sm">
                    <span className="text-muted-foreground">Look total</span>
                    <span className="font-semibold text-espresso">{formatBDT(total)}</span>
                  </p>
                  <Link
                    href={`/look/${look.id}`}
                    className="block rounded-full bg-charcoal px-5 py-2.5 text-center text-sm font-medium text-cream transition-colors hover:bg-espresso"
                  >
                    Shop this look
                  </Link>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
