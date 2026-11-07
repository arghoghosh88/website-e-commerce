import { newArrivals, offers, productTabs, recommended } from '@/lib/home-data'
import { AnnouncementBar } from '@/components/home/announcement-bar'
import { SiteHeader } from '@/components/home/site-header'
import { Hero } from '@/components/home/hero'
import { TryOnPopup } from '@/components/home/try-on-popup'
import { ShopByCategory } from '@/components/home/shop-by-category'
import { TryOnBanner } from '@/components/home/try-on-banner'
import { ProductRail } from '@/components/home/product-rail'
import { ProductTabs } from '@/components/home/product-tabs'
import { ShopTheLook } from '@/components/home/shop-the-look'
import { SeasonalBanner } from '@/components/home/seasonal-banner'
import { CustomerPhotos, Reviews } from '@/components/home/social-proof'
import { BrandStory, DeliveryInfo, WhyChooseUs } from '@/components/home/info-sections'
import { Newsletter } from '@/components/home/newsletter-form'
import { Faq, SocialFeed } from '@/components/home/social-faq'
import { SiteFooter } from '@/components/home/site-footer'

export default function HomePage() {
  return (
    <div className="home-theme min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex flex-col gap-20 pb-20 md:gap-28 md:pb-28">
        <Hero />
        <ShopByCategory />
        <TryOnBanner />
        <ProductRail
          id="new-title"
          eyebrow="Just in"
          title="New Arrivals"
          action={{ label: 'View all', href: '/collection/new' }}
          products={newArrivals}
        />
        <ProductTabs data={productTabs} />
        <ShopTheLook />
        <ProductRail
          id="offers-title"
          eyebrow="Limited time"
          title="Special Offers"
          tone="maroon"
          description="Selected pieces at reduced prices, while stock lasts."
          action={{ label: 'Shop all offers', href: '/offers' }}
          products={offers}
        />
        <SeasonalBanner />
        <ProductRail
          id="recommended-title"
          eyebrow="Picked for you"
          title="Recommended for You"
          description="Popular picks from our customers."
          products={recommended}
        />
        <CustomerPhotos />
        <Reviews />
        <WhyChooseUs />
        <DeliveryInfo />
        <BrandStory />
        <Newsletter />
        <SocialFeed />
        <Faq />
      </main>
      <SiteFooter />
      <TryOnPopup />
    </div>
  )
}
