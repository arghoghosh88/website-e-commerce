import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  action?: { label: string; href: string }
  tone?: 'default' | 'maroon'
  id?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, action, tone = 'default', id, className }: Props) {
  return (
    <div className={cn('mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p
            className={cn(
              'mb-2 text-xs font-medium uppercase tracking-[0.2em]',
              tone === 'maroon' ? 'text-maroon' : 'text-sage',
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          id={id}
          className={cn(
            'font-serif text-3xl font-semibold leading-tight text-balance md:text-4xl',
            tone === 'maroon' ? 'text-maroon' : 'text-espresso',
          )}
        >
          {title}
        </h2>
        {description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="shrink-0 text-sm font-medium text-espresso underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          {action.label}
        </Link>
      )}
    </div>
  )
}
