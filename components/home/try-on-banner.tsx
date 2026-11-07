import Image from 'next/image'
import Link from 'next/link'

const steps = [
  { title: 'Upload a photo', text: 'A clear, front-facing photo in good light works best.' },
  { title: 'Choose a garment', text: 'Pick any piece marked Try-On Ready.' },
  { title: 'Preview the look', text: 'See an approximate preview, then choose your size.' },
]

export function TryOnBanner() {
  return (
    <section aria-labelledby="tryon-title" className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid items-center gap-8 border-y border-taupe py-10 md:grid-cols-2 md:gap-14 md:py-14">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-[5/6]">
          <Image
            src="/images/try-on.png"
            alt="Man photographing his outfit in a mirror with a smartphone"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">AI Virtual Try-On</p>
          <h2 id="tryon-title" className="font-serif text-3xl font-semibold leading-tight text-espresso text-balance md:text-[44px]">
            Try before you choose.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Preview how eligible pieces may look on you in three simple steps.
          </p>
          <ol className="mt-8 flex flex-col gap-5">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-lg font-semibold text-gold">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[15px] font-medium text-espresso">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/try-on"
            className="mt-8 inline-block rounded-full bg-gold px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-[#a6895a]"
          >
            Try It Now
          </Link>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-muted-foreground">
            Previews are approximate and for visual reference only, not a guarantee of exact fit, colour or drape. Your
            original photo is used only during your active session.
          </p>
        </div>
      </div>
    </section>
  )
}
