'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export function WishlistButton({ name, className }: { name: string; className?: string }) {
  const [saved, setSaved] = useState(false)
  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${name} from wishlist` : `Add ${name} to wishlist`}
      onClick={() => setSaved((s) => !s)}
      className={cn(
        'flex size-9 items-center justify-center rounded-full bg-card/90 text-espresso backdrop-blur transition-colors hover:bg-card',
        className,
      )}
    >
      <Heart className={cn('size-4', saved && 'fill-maroon text-maroon')} aria-hidden="true" />
    </button>
  )
}
