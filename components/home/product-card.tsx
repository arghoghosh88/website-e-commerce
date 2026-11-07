import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatBDT, type Badge, type Product } from '@/lib/home-data'
import { WishlistButton } from './wishlist-button'

const badgeStyles: Record<Badge, string> = {
  Sale: 'bg-maroon text-cream',
  Premium: 'bg-espresso text-cream',
  'Try-On Ready': 'bg-card text-espresso ring-1 ring-gold',
}

export function ProductCard({
  product,
  showRating = false,
  className,
}: {
  product: Product
  showRating?: boolean
  className?: string
}) {
  const href = `/product/${product.id}`
  return (
    <article className={cn('group flex flex-col', className)}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-card">
        <Link href={href} aria-label={product.name} className="block h-full">
          <Image
            src={product.image || '/placeholder.svg'}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
        {product.badges.length > 0 && (
          <ul className="pointer-events-none absolute left-3 top-3 flex flex-col items-start gap-1.5">
            {product.badges.map((b) => (
              <li key={b} className={cn('rounded-full px-2.5 py-1 text-[11px] font-medium leading-none', badgeStyles[b])}>
                {b}
              </li>
            ))}
          </ul>
        )}
        <WishlistButton name={product.name} className="absolute right-3 top-3" />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 pt-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-sage">{product.category}</p>
        <h3 className="text-sm font-medium leading-snug text-espresso md:text-[15px]">
          <Link href={href} className="hover:underline hover:decoration-gold hover:underline-offset-4">
            {product.name}
          </Link>
        </h3>
        {showRating && (
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="size-3.5 fill-gold text-gold" aria-hidden="true" />
            <span className="font-medium text-espresso">{product.rating.toFixed(1)}</span>
            <span>({product.reviews} reviews)</span>
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <p className="flex items-baseline gap-2">
            <span className={cn('text-sm font-semibold', product.originalPrice ? 'text-maroon' : 'text-espresso')}>
              {formatBDT(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                <span className="sr-only">Original price </span>
                {formatBDT(product.originalPrice)}
              </span>
            )}
          </p>
          <ul className="flex items-center gap-1" aria-label={`${product.swatches.length} colours available`}>
            {product.swatches.map((c) => (
              <li key={c} className="size-3.5 rounded-full ring-1 ring-taupe" style={{ backgroundColor: c }} />
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
