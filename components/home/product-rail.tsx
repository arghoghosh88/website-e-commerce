import type { Product } from '@/lib/home-data'
import { ProductCard } from './product-card'
import { SectionHeading } from './section-heading'

type Props = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  action?: { label: string; href: string }
  products: Product[]
  tone?: 'default' | 'maroon'
}

export function ProductRail({ id, products, ...heading }: Props) {
  return (
    <section aria-labelledby={id} className="mx-auto max-w-7xl px-4 md:px-8">
      <SectionHeading id={id} {...heading} />
      <ul className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-4">
        {products.slice(0, 4).map((p) => (
          <li key={p.id} className="w-[62%] shrink-0 snap-start sm:w-[40%] md:w-auto">
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </section>
  )
}
