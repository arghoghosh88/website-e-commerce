import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="px-4 pt-4 md:px-8 md:pt-6">
      <div className="relative mx-auto h-[540px] max-w-7xl overflow-hidden rounded-xl md:h-[500px]">
        <Image
          src="/images/hero.png"
          alt="Man in an ivory embroidered panjabi standing by an arched window"
          fill
          priority
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent md:bg-gradient-to-r md:from-background/95 md:via-background/60 md:to-transparent" />
        <div className="relative flex h-full max-w-xl flex-col justify-end gap-5 p-6 md:justify-center md:p-14">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-sage">New Season 2026</p>
          <h1 id="hero-title" className="font-serif text-[42px] font-semibold leading-[1.05] text-espresso text-balance md:text-6xl">
            Quiet refinement, made for Bangladesh.
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-espresso/80 md:text-base">
            Panjabi, tailoring and everyday essentials in considered fabrics. Preview the fit with AI Virtual Try-On before you buy.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/collection/new"
              className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-espresso"
            >
              Shop New Arrivals
            </Link>
            <Link
              href="/try-on"
              className="rounded-full border border-espresso px-6 py-3 text-sm font-medium text-espresso transition-colors hover:bg-espresso hover:text-cream"
            >
              Try It On
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
