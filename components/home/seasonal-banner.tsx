import Image from 'next/image'
import Link from 'next/link'

export function SeasonalBanner() {
  return (
    <section aria-labelledby="seasonal-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="relative overflow-hidden rounded-xl">
        <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/8]">
          <Image
            src="/images/seasonal.png"
            alt="Two men in maroon and sand panjabis in a sunlit heritage courtyard"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:p-12">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-cream/85">Seasonal Collection</p>
          <h2 id="seasonal-title" className="max-w-xl font-serif text-3xl font-semibold leading-tight text-cream text-balance md:text-5xl">
            The Festive Edit
          </h2>
          <p className="max-w-md text-sm text-cream/85 md:text-base">
            Panjabi in rich maroon, soft sand and ivory, finished with fine detail for the days that matter.
          </p>
          <Link
            href="/collection/seasonal"
            className="mt-2 w-fit rounded-full bg-cream px-6 py-3 text-sm font-medium text-espresso transition-colors hover:bg-background"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
