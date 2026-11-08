# UI Specification Document (UI_SPEC.md)

## Bangladesh Men's Fashion AI E-Commerce Platform

## 1. Document Overview

**Document status:** Updated draft, 6 November 2026. Aligned with PRD v1.1 and APP_FLOW v1.2 for the active-session Virtual Try-On photo lifecycle. Existing approved colour tokens, typography, page layouts and other feature scope are preserved.

### 1.1 Purpose of UI_SPEC.md

This document serves as the authoritative UI/UX visual design specification and frontend implementation contract for the Bangladesh Men's Fashion AI E-Commerce Platform. It operationalises the product requirements defined in `PRD.md` (v1.1), the application navigation architecture and user journeys in `APP_FLOW.md` (v1.2), and the approved visual identity and subpage colour tokens (`Mens_Fashion_Ecommerce_Colour_System.pdf`).

This specification is designed to be directly consumable by:

1. **Figma Designers / UI/UX Teams:** To build component libraries, auto-layout design systems, page templates, and interactive prototypes.

2. **Frontend Engineers (React / Tailwind / Web):** To construct design tokens, utility classes, reusable UI component trees, responsive grid rules, and state management logics.

3. **Product Managers & Quality Assurance:** To verify strict visual compliance, functional completeness, accessibility standards, and contextual accuracy across all viewports.

### 1.2 Project Overview

A premium, responsive men's fashion e-commerce platform launching in Dhaka, Bangladesh (with nationwide expansion capabilities). The platform bridges traditional Bangladeshi menswear (Panjabi, Heritage) with modern global silhouettes (Casual, Formal, Streetwear, Old Money) through an AI-powered visual shopping experience.

### 1.3 Target Audience

* **Target Audience:** Bangladeshi men aged 15–40. The PRD identifies this as the target range; personas may include students, young professionals, event shoppers and quality-conscious fashion buyers.

* **Market Positioning:** Mid-range to Premium segment.

* **User Profiles:** Digital-native urban students, young professionals, groom/event shoppers, and quality-conscious fashion enthusiasts.

### 1.4 Brand Identity Direction

* **Design Paradigm:** *Modern Earthy Luxury*

* **Aesthetic Balance:** Modern minimalist layout structure enriched with subtle Bangladeshi traditional design nuances. Warm, natural earthy tones combined with crisp typography, generous whitespace, understated elevation, and refined gold/maroon accents.

* **Tone:** Trustworthy, elegant, clean, culturally resonant, and highly performant.

### 1.5 Design Objectives

1. **Trust-First E-Commerce:** Eliminate online purchase friction through crystal-clear pricing in BDT (`৳`), transparent delivery charges, prominent sizing guidance in inches, authentic customer reviews, and clear return policies.

2. **Phased AI Integration:** Integrate the single-garment Virtual Try-On pilot, curated outfit previews and size guidance according to the PRD release priorities. Complete Outfit Try-On remains feasibility-dependent. Every visual preview must carry an honest approximate-preview disclosure.

3. **Strict Visual Consistency:** Maintain strict visual coherence across 65% soft neutral backgrounds, 20% earthy neutral containers, 10% dark contrast elements, and 5% gold/maroon strategic accents.

4. **Mobile-First Performance:** Optimized layout design for mid-range mobile devices on Bangladeshi mobile networks, ensuring touch target compliance, fast image loading, and zero horizontal overflow.

### 1.6 Relationship with PRD.md and APP_FLOW.md

* **`PRD.md` Hierarchy:** Absolute authority on features, functional capabilities, business logic, legal/consent requirements, and MoSCoW priorities.

* **`APP_FLOW.md` Hierarchy:** Absolute authority on site topology, user navigation routes, screen transitions, operational error states, and modal/overlay behaviours.

* **`UI_SPEC.md` Hierarchy:** Absolute authority on layout geometry, color token applications, typography scale, component library standards, visual interaction states, and responsive breakpoint rules.

## 2. Overall UI/UX Design Philosophy

### 2.1 Modern Earthy Luxury

The visual identity avoids cold, clinical modernism as well as overly heavy traditional ornament. It relies on warm neutral surfaces (`#F2EDE4`, `#F8F5EF`), deep grounding typography tones (`#352A24`), and rich, natural accents (`#899482`, `#713B43`, `#A88A5A`). The interface feels like a high-end physical boutique in Dhaka—spacious, warm, organized, and inviting.

### 2.2 Balance of Modern and Traditional

* **Modern Elements:** Clean grid structures, sleek line iconography, borderless or fine-bordered cards, floating drawers, minimalist sticky navigation bars, and fluid auto-layouts.

* **Traditional Elements:** Subtle heritage motifs used as section dividers or background textures in the Panjabi Collection (`#713B43` Deep Maroon highlights), rich warm background shifts, and culturally tuned card proportions suited for long-form garments.

### 2.3 Premium Yet Accessible Appearance

Luxury is communicated through restraint rather than complexity:

* Generous line-height and letter-spacing for headings.

* Uncrowded product grids with generous inner padding (`p-4` to `p-6`).

* Subtle drop shadows and soft corner radiuses (4px to 12px), avoiding harsh black shadows or heavy gradients.

* Clear contrast ratios ensuring high readability for older users or outdoor mobile viewing.

### 2.4 Minimal and Clean Layouts

Content and product photography take absolute center stage. Controls, badges, and labels remain crisp and unobtrusive. Visual noise is minimized by keeping secondary actions in understated outline styles or icon-only buttons with clear tooltips.

### 2.5 Trust-Oriented Bangladesh E-Commerce Experience

To overcome local online shopping hesitations:

* **Prices:** Rendered prominently with the BDT symbol (`৳`) in high-contrast Dark Espresso (`#352A24`).

* **Sizing:** Expressed clearly in inches with an inline "Size Guide & Measurement" callout on every garment page.

* **Local Logistics & Payments:** Show delivery, payment, and exchange information only when confirmed by the business and configured in the system. Do not display unapproved delivery promises, payment-provider badges, charges, or return/exchange claims.

* **AI Transparency:** Clear badges marking AI-generated try-on images and explicit disclaimers confirming visual previews are approximate representations.

### 2.6 Visual Hierarchy Principles

* **Primary Focal Point:** High-quality product imagery and primary CTA buttons (`#292929` Charcoal or `#352A24` Espresso filled).

* **Secondary Focal Point:** Product titles, pricing, and key collection headers.

* **Tertiary Details:** Metadata, tags, filter counters, disclaimers, and breadcrumbs rendered in Muted Sage (`#899482`) or secondary body text tones.

## 3. Global Design System

### 3.1 Colour Tokens

#### Primary Brand Palette (Approved Tokens)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ COLOR TOKEN NAME    │ HEX CODE │ SEMANTIC ROLE & USAGE RULES            │
├─────────────────────┼──────────┼────────────────────────────────────────┤
│ Soft Beige          │ #F2EDE4  │ Global Page Background (65% balance)   │
│ Warm Taupe          │ #DCD1C3  │ Secondary background, borders, banners │
│ Cream               │ #F8F5EF  │ Card surfaces, inputs, modal containers│
│ Espresso            │ #352A24  │ Navbar, primary headings, primary text │
│ Muted Sage          │ #899482  │ Secondary accents, active filter tags  │
│ Antique Gold        │ #A88A5A  │ Premium badges, highlight borders (5%) │
│ Deep Maroon         │ #713B43  │ Traditional accent, sale badges, CTA   │
│ Charcoal            │ #292929  │ Primary buttons, dark interactive UI   │
│ Dark Footer         │ #211C19  │ Persistent site footer background      │
└─────────────────────┴──────────┴────────────────────────────────────────┘

```

#### Functional System Status Colours

* **Success Surface:** `#E8F0E6` | **Success Text/Icon:** `#2D5A27` (Sage green derived)

* **Warning Surface:** `#FDF6E2` | **Warning Text/Icon:** `#8C6B12` (Gold derived)

* **Error Surface:** `#F9EBEA` | **Error Text/Icon:** `#713B43` (Maroon derived)

* **Info Surface:** `#EBF3F5` | **Info Text/Icon:** `#1F5C6B`

### 3.2 Page-Specific Colour Tokens

To maintain structural visual hierarchy while establishing context across curated collections, subpages adopt exact approved color mappings:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ PAGE / SUBPAGE NAME      │ BACKGROUND TOKEN │ CARD / ACCENT TOKEN       │
├──────────────────────────┼──────────────────┼───────────────────────────┤
│ Homepage                 │ #F2EDE4          │ #F8F5EF Card / #DCD1C3 Sec│
│ All Products / Collection│ #F2EDE4          │ #F8F5EF Product Cards     │
│ Panjabi Collection       │ #EFE5DC          │ #713B43 Deep Maroon Accent│
│ Old Money Collection     │ #E8EAE1          │ #899482 Muted Sage Accent │
│ Streetwear Collection    │ #E9E9E4          │ #53634B Olive Accent      │
│ Product Details (PDP)    │ #F2EDE4          │ #F8F5EF Gallery Surface   │
│ AI Virtual Try-On        │ #EAE2D6          │ #F8F5EF Preview Area      │
│ Cart / Checkout          │ #F2EDE4          │ #F8F5EF Form & Card Surfs │
│ Login / Register / Account│ #F2EDE4         │ #F8F5EF Form Cards        │
└──────────────────────────┴──────────────────┴───────────────────────────┘

```

### 3.3 Typography System

#### Font Family Directions

* **Primary English Headings & Display:** Serif or Refined Display Font — *Cormorant Garamond* or *Playfair Display* (Fallback: Georgia, serif).

* **Primary Body Text & UI Elements:** Sans-Serif Font — *Plus Jakarta Sans* or *Inter* (Fallback: system-ui, sans-serif).

* **Bangla Typography Compatibility:** *Hind Siliguri* or *Noto Serif Bengali* (Ensures complete visual harmony and optical line-height balance when switching language modes).

#### Type Scale Hierarchy (Desktop / Mobile)

```
┌───────────────────────────────────────────────────────────────────────────┐
│ SCALE TOKEN   │ FONT SIZE (DESKTOP) │ FONT SIZE (MOBILE) │ LINE HEIGHT │ WEIGHT │
├───────────────┼─────────────────────┼────────────────────┼─────────────┼────────┤
│ Display Hero  │ 48px (3.0rem)       │ 32px (2.0rem)      │ 1.15        │ Bold   │
│ Heading 1 (H1)│ 36px (2.25rem)      │ 28px (1.75rem)     │ 1.20        │ Bold   │
│ Heading 2 (H2)│ 28px (1.75rem)      │ 22px (1.375rem)    │ 1.25        │ SemiBold
│ Heading 3 (H3)│ 22px (1.375rem)     │ 18px (1.125rem)    │ 1.30        │ Medium │
│ Subtitle / Lead│ 18px (1.125rem)    │ 16px (1.0rem)      │ 1.40        │ Regular│
│ Body Large    │ 16px (1.0rem)       │ 15px (0.9375rem)   │ 1.50        │ Regular│
│ Body Regular  │ 14px (0.875rem)     │ 14px (0.875rem)    │ 1.50        │ Regular│
│ Caption / Small│ 12px (0.75rem)      │ 11px (0.6875rem)   │ 1.40        │ Medium │
│ Button Text   │ 14px (0.875rem)     │ 14px (0.875rem)    │ 1.00        │ SemiBold
│ Price Display │ 18px–24px           │ 16px–20px          │ 1.10        │ Bold   │
└───────────────┴─────────────────────┴────────────────────┴─────────────┴────────┘

```

### 3.4 Spacing System

Built on an 8-point spatial system (`4px` micro-spacing, `8px` base grid):

* `space-1`: 4px (micro gaps, badge padding)

* `space-2`: 8px (inline elements, tight stacks)

* `space-3`: 12px (form field gaps, card metadata)

* `space-4`: 16px (standard container padding, mobile margins)

* `space-6`: 24px (card grid gaps, section inner padding)

* `space-8`: 32px (desktop gutters, layout blocks)

* `space-12`: 48px (sub-section separation)

* `space-16`: 64px (major section vertical spacing - Desktop)

* `space-24`: 96px (hero section vertical margins)

### 3.5 Layout and Grid System

* **Desktop Container Max-Width:** `1280px` centered with `px-8` (32px outer margin).

* **Tablet Layout (768px – 1023px):** Fluid width with `px-6` (24px outer margin).

* **Mobile Layout (320px – 767px):** Full-bleed fluid width with `px-4` (16px outer margin).

* **Grid Columns:**

  * *Desktop:* 12 Columns | Gutter: 24px

  * *Tablet:* 8 Columns | Gutter: 16px

  * *Mobile:* 4 Columns | Gutter: 12px

### 3.6 Border, Radius, and Shadow

* **Border Widths:** `1px` standard thin border; `2px` focus/active border.

* **Border Colors:** Primary `#DCD1C3` (Warm Taupe); Dark `#352A24`; Accent `#A88A5A`.

* **Corner Radii (Rounded Scale):**

  * `radius-sm` (4px): Badges, tooltips, subtle tags.

  * `radius-md` (8px): Primary buttons, input fields, dropdown menus.

  * `radius-lg` (12px): Product cards, overlay panels, form containers.

  * `radius-xl` (16px): Modals, hero media cards, try-on preview box.

  * `radius-full` (9999px): Pill buttons, circular swatches, count badges.

* **Shadow Treatments:**

  * `shadow-subtle`: `0px 2px 8px rgba(53, 42, 36, 0.04)` (Product cards default)

  * `shadow-hover`: `0px 8px 24px rgba(53, 42, 36, 0.08)` (Product cards hover)

  * `shadow-overlay`: `0px 16px 48px rgba(33, 28, 25, 0.16)` (Modals, cart drawer)

### 3.7 Iconography

* **Style:** Minimalist, geometric, uniform 1.5px stroke outline icons.

* **Library Recommendation:** Lucide Icons or Feather Icons.

* **Standard Scale:**

  * Micro: `16px × 16px` (inline inline tags, tooltips)

  * Standard: `20px × 20px` (buttons, inputs, dropdown arrows)

  * Nav / Header: `24px × 24px` (cart, search, wishlist, user account, mobile menu)

  * Feature Hero: `32px × 32px` or `48px × 48px` (try-on onboarding, status screens)

## 4. Global Components

### 4.1 Announcement Bar

* **Background:** `#352A24` (Espresso) or `#713B43` (Deep Maroon during promo campaigns).

* **Text:** `#F8F5EF` (Cream), 12px Medium, centered text.

* **Dimensions:** Height `36px` desktop / `32px` mobile.

* **Behaviour:** Dismissible via a right-aligned `16px` close icon. Can contain text and an underlined link.

### 4.2 Navbar

* **Background:** `#352A24` (Dark Espresso).

* **Text & Icons:** `#F8F5EF` (Cream); Active link / Accent: `#A88A5A` (Antique Gold).

* **Height:** `72px` Desktop / `60px` Mobile; sticky top position (`z-index: 50`).

* **Elements (Left to Right):**

  1. *Mobile:* Hamburger Icon (`24px`). *Desktop:* Brand Logo.

  2. *Desktop:* 7 Style/Product Category Links plus 2 Collection Links (`14px` Medium, space-x-6).

  3. *Right Utility Cluster:* Search Icon button, Virtual Try-On Quick Pill Button (Gold border `#A88A5A`), Wishlist Heart Icon (with badge), Cart Icon (with count badge), Account Profile/Login Icon.

### 4.3 Search Interface

* **Trigger:** Header Search Icon click opens an expandable top search bar overlay or dropdown drawer (`#F8F5EF` Cream surface).

* **Input:** 15px font, placeholder `"Search Panjabi, Streetwear, Shirts..."`.

* **States:** Auto-suggest list with instant thumbnail image, price in ৳, and category tags. Handles empty search with recent search tags and popular category suggestions.

### 4.4 Account Access Controls

* **Unauthenticated State:** Shows text link `"Login / Register"` or User Outline Icon with popover menu containing Login and Register buttons.

* **Authenticated State:** User icon with subtle dot indicator. Popover links: Dashboard, My Orders, Saved Looks, Wishlist, Profile, Logout.

### 4.5 Cart Icon and Badge

* **Icon:** Shopping Bag or Cart Icon (`24px`, `#F8F5EF`).

* **Badge:** Relative top-right corner `-top-1 -right-1`. Background `#713B43` (Deep Maroon), text `#F8F5EF` (Cream), 10px Bold, min-size `18px × 18px` rounded-full.

### 4.6 Footer

* **Background:** `#211C19` (Dark Footer).

* **Typography:** Headings `#F2EDE4` (14px Bold); Body/Links `#DCD1C3` (13px Regular, hover: `#A88A5A`).

* **Layout:** 4-Column Grid on Desktop, 2-Column on Tablet, Single Accordion Stack on Mobile.

  * *Col 1:* Brand Logo, Short Mission, Trust indicators using verified brand claims only.

  * *Col 2:* Quick Shop (7 Style/Product Categories and 2 Collections).

  * *Col 3:* Customer Care (Order Tracking, Size Guide, Returns Policy, FAQ, Contact).

  * *Col 4:* Newsletter Signup (Input with Gold Subscribe button) & Social Links.

* **Bottom Bar:** Copyright text and BDT (`৳`) indicator. Show payment-partner badges only for payment methods confirmed and enabled for launch.

### 4.7 Buttons

* **Primary Button:**

  * Background: `#292929` (Charcoal)

  * Text: `#F8F5EF` (Cream), 14px SemiBold

  * Border: None | Corner Radius: `8px` (`radius-md`)

  * Hover: `#352A24` (Espresso) + subtle y-shift `-1px`

  * Active: `#1A1A1A` | Focused: Ring 2px `#A88A5A`

* **Secondary Button:**

  * Background: `#F8F5EF` (Cream)

  * Text: `#352A24` (Espresso), 14px SemiBold

  * Border: `1px solid #DCD1C3` (Warm Taupe)

  * Hover: `#F2EDE4` (Soft Beige)

* **Accent / Premium Button (Virtual Try-On):**

  * Background: `#A88A5A` (Antique Gold) or Outline `1.5px solid #A88A5A`

  * Text: `#F8F5EF` (Cream) or `#352A24`

  * Hover: `#8F7347`

* **Traditional / Heritage Button (Panjabi Special):**

  * Background: `#713B43` (Deep Maroon)

  * Text: `#F8F5EF` (Cream)

### 4.8 Input Fields & Dropdowns

* **Background:** `#F8F5EF` (Cream).

* **Border:** `1px solid #DCD1C3` (Warm Taupe).

* **Corner Radius:** `8px` (`radius-md`).

* **Typography:** 14px Regular `#352A24`; Placeholder `#899482` (Muted Sage).

* **Focus State:** Border `2px solid #352A24`, ring `0px`.

* **Error State:** Border `1.5px solid #713B43` (Deep Maroon), inline error text `12px` Maroon.

### 4.9 Product Cards

Price examples in this section are illustrative formatting examples only. Production product names, prices, discounts, colours, stock and badges must come from catalogue data and must not be hardcoded.

* **Card Background:** `#F8F5EF` (Cream).

* **Dimensions & Proportions:** Aspect ratio `3:4` for image container (optimized for tall garments like Panjabis and suits).

* **Elements:**

  1. Image Container with subtle overflow zoom on hover (`scale-105` 300ms transition).

  2. Top Badges: `Absolute` top-2 left-2. Deep Maroon for "Sale" / Gold for "Premium" / Sage for "Try-On Ready".

  3. Wishlist Heart Button: `Absolute` top-2 right-2. Circular background `#F8F5EF` with 16px heart icon.

  4. Content Area (`p-4`): Category tag (11px Uppercase Sage), Product Name (14px SemiBold Espresso), Color Swatch Dots (12px circular swatches), Price Block (`৳ 2,450` in Bold Espresso; original price `৳ 2,950` in line-through Taupe).

### 4.10 Toast Notifications

* **Position:** Top-Right Desktop (`top-20 right-6`) / Top-Center Mobile (`top-16 inset-x-4`).

* **Surface:** `#352A24` (Dark Espresso) with `1px` border in `#A88A5A` (Gold) or `#899482` (Sage).

* **Text:** `#F8F5EF` (Cream), 13px Medium.

* **Duration:** Auto-dismiss after 4000ms; includes manual close cross icon.

## 5. Page-by-Page UI Specifications

**Coverage rule:** The page IDs in `APP_FLOW.md` are the authoritative inventory. The entries below complete the visual specifications for every customer page (PG-01–PG-32) and administration screen (AD-01–AD-11). Where the PRD/APP_FLOW marks a capability or business policy as TBD, the UI must show a neutral placeholder, omit the element, or keep it configuration-driven rather than inventing a value.

### PG-01: Homepage

1. **Page Purpose:** Main digital storefront introduction, showcasing modern/traditional fashion balance, 21 PRD-required sections, and promoting AI Virtual Try-On.

2. **User Intent:** Discover styles, understand brand credibility, enter categories, try AI features, and make purchases.

3. **Colour Tokens:** Page BG `#F2EDE4` (Soft Beige); Card Surfaces `#F8F5EF` (Cream); Dark Sections `#352A24` (Espresso).

4. **Layout Structure:** Single-column stacked layout with 21 responsive sections. Container width `1280px`.

5. **Section Hierarchy (PRD Requirement 15):**

   * *Sec 1:* Announcement Bar (`#352A24` Espresso BG, `#F8F5EF` Cream text).

   * *Sec 2:* Persistent Header & Navbar.

   * *Sec 3:* Hero Banner (Full-width 500px height. High-res Bangladeshi model banner, Display H1 serif, CTA button `#292929` Charcoal "Explore Collection").

   * *Sec 4:* AI Virtual Try-On Welcome Popup (Modal trigger/overlay).

   * *Sec 5:* Shop by Category / Collection destinations: seven style categories (Panjabi & Traditional Wear, Western Wear, Casual Wear, Old Money Fashion, Streetwear, Formal Wear, Smart Casual) plus two cross-cutting collections (Seasonal Collections, Premium Collections). Do not present the two collections as additional product categories.

   * *Sec 6:* AI Virtual Try-On Feature Banner (Earthy Taupe BG `#DCD1C3`, process steps 1-2-3, Gold `#A88A5A` "Try It Now" CTA).

   * *Sec 7:* New Arrivals (4-column horizontal scroll on mobile, grid on desktop).

   * *Sec 8:* Trending / Best Sellers / Top Rated Tabs (Tab pills `#352A24` active, Cream inactive).

   * *Sec 9:* Shop the Look (Curated multi-item outfit cards with total BDT price).

   * *Sec 10:* Special Offers & Discounts (Maroon accent headers `#713B43`).

   * *Sec 11:* Seasonal & Featured Collection (Full-width banner switchable by admin).

   * *Sec 12:* Recommended for You (Grid powered by browsing signals or fallback).

   * *Sec 13:* Real Customer Photos (Grid of moderated user photos with product tags).

   * *Sec 14:* Customer Reviews & Ratings (Testimonial cards with Gold star icons).

   * *Sec 15:* Why Choose Us (feature row using only confirmed brand/service benefits; avoid unverified delivery or payment claims).

   * *Sec 16:* Delivery, Payment & Return Information (show only confirmed delivery, payment, and return details; hide unconfirmed items).

   * *Sec 17:* Featured Brands / Brand Story (Editorial section with warm typography).

   * *Sec 18:* Newsletter Subscription Form (`#F8F5EF` form box, BD phone/email input).

   * *Sec 19:* Instagram & Social Media Feed (4-image square grid).

   * *Sec 20:* FAQ Section (Expandable Accordion cards in Cream `#F8F5EF`).

   * *Sec 21:* Persistent Footer (`#211C19`).

6. **Responsive Behaviour:** Grid columns collapse gracefully from 4 cols (Desktop) to 2 cols (Tablet) to 1.2 cols (Mobile swipe slider for product cards).

### PG-02 & PG-03: All Products & Category Pages

1. **Page Purpose:** Catalogue discovery, product list filtering, sorting, and pagination/infinite scroll.

2. **Colour Tokens:** Page BG `#F2EDE4` (Soft Beige); Filter Drawer `#F8F5EF` (Cream).

3. **Layout Structure:**

   * *Top Bar:* Page title (H1 Serif), optional editorial intro/hero, breadcrumb (where enabled), result count and active filter chips.

   * *Main Layout:* Desktop filter sidebar (up to 280px) beside a responsive product grid; mobile uses a filter/sort bottom sheet and a 2-column product grid. The grid column count must adapt to available width; do not force a 3-column grid at every desktop width.

4. **Interactive Elements:** Filter accordions (Size in inches, Color swatches, Price Slider in ৳, Availability toggle), Sort Dropdown ("Newest", "Price: Low to High", "Price: High to Low").

### PG-04: Special Collection Pages (Subpage Palette Implementations)

#### A. Panjabi Collection Page

* **Page Background:** `#EFE5DC`

* **Primary Accent:** `#713B43` (Deep Maroon)

* **UI Treatment:** Hero section includes traditional geometric outline patterns; Maroon filter tags; Gold outline details on product cards.

#### B. Old Money Collection Page

* **Page Background:** `#E8EAE1`

* **Primary Accent:** `#899482` (Muted Sage)

* **UI Treatment:** Minimalist layout; subtle Sage borders; serif display typography emphasized.

#### C. Streetwear Collection Page

* **Page Background:** `#E9E9E4`

* **Primary Accent:** `#53634B` (Olive)

* **UI Treatment:** Tighter grid margins; bold sans-serif category headers; high-contrast card outlines.

### PG-08: Product Details Page (PDP)

1. **Page Purpose:** Comprehensive garment evaluation, variant selection, size guidance, reviews, and entry into AI Virtual Try-On.

2. **Colour Tokens:** Page BG `#F2EDE4`; Gallery Container `#F8F5EF` (Cream).

3. **Layout Structure (Desktop 2-Column):**

   * *Left Column (60%):* Image Gallery Grid (1 large hero preview + 4 vertical thumbnails; zoom on click/hover; swipe gesture on mobile).

   * *Right Column (40% Sticky):* Product Title (H2 Serif), Price in ৳ (Large Bold Espresso), Discount Tag, Color Swatch Selector, Size Selector (S, M, L, XL, XXL pills), **Size Guide & Measurement Link** (opens Overlay `PG-09`), **AI Size Recommendation Entry Button**, **AI Virtual Try-On Button** (Gold bordered CTA with icon), Primary **Add to Cart Button** (`#292929` Charcoal full-width), Wishlist Button, Delivery & Return Accordion info (show confirmed policy details only; otherwise show a neutral availability message or omit the section).

4. **Bottom Sections:** Write a Review (`PG-27`), Customer Ratings (`FR-033`), Related Products Carousel (`FR-013`).

### PG-11: AI Virtual Try-On Page

1. **Page Purpose:** Upload a personal photo, provide required consent, and preview an eligible single garment on the customer photo. Complete Outfit Try-On remains optional and must be shown only if separately enabled and approved (PRD/APP_FLOW OQ-012). Other available actions may include colour change, compare, save, and add to cart.

2. **Colour Tokens:** Page BG `#EAE2D6` (Earthy Neutral); Try-On Workspace Card `#F8F5EF` (Cream).

3. **Layout Structure (Desktop Split View):**

   * *Left Pane (Workspace):* Photo Upload Box / Image Canvas (`3:4` aspect ratio).

   * *Right Pane (Controls):* Product Summary Card, Selected Variant, Consent Checkbox Panel, Try-On Action Button, Color Switcher, Compare Panel, Save/Share Controls, Add to Cart Action.

4. *(Detailed step-by-step UI specification provided in Section 6).*

### PG-15: Shopping Cart Page / Drawer

1. **Page Purpose:** Review cart items, edit quantities, apply promotional coupon codes, and see order subtotal in BDT.

2. **Colour Tokens:** Page BG `#F2EDE4`; Cart Item Cards `#F8F5EF`.

3. **Elements:** Item list (Thumbnail, Title, selected size/variant, colour, price in ৳, quantity stepper, remove action), optional coupon field when enabled, and cart summary (subtotal, configured delivery charge only when calculable/confirmed, discount if valid, total). Never hardcode a delivery estimate or charge. "Proceed to Checkout" is the primary CTA.

### PG-16: Checkout Page

1. **Page Purpose:** Collect the delivery address and phone number, display the applicable configured delivery fee, show confirmed payment methods, and place the order.

2. **Colour Tokens:** Page BG `#F2EDE4`; Form Container `#F8F5EF` (Cream).

3. **Layout Structure (2-Column Desktop):**

   * *Left Column (60%):*

     * Step 1: Contact Info (BD Mobile Number `+880` validation).

     * Step 2: Delivery Address (Recipient Name, Division Dropdown, District, Area/Thana, Street Address, Landmark).

     * Step 3: Delivery Method & Fee Display (show the applicable fee returned by the configured delivery rules; amounts and zones remain TBD until confirmed).

     * Step 4: Payment Method Selection (show radio cards only for payment methods and providers confirmed and enabled for launch; availability remains TBD).

   * *Right Column (40% Order Summary):* Order items breakdown, Subtotal, Delivery Fee, Discount, Final Total in ৳, "Place Order" CTA button (`#292929` Charcoal).

### PG-18, PG-19, PG-21: Authentication & Customer Account Hub

1. **Page Purpose:** Login, Registration, Password Recovery, and Dashboard for past orders, address book, saved looks, and privacy controls.

2. **Colour Tokens:** Page BG `#F2EDE4`; Form Card `#F8F5EF` (Cream surface with `#DCD1C3` border).

3. **Customer Dashboard Tabs (`PG-21`):**

   * *Overview:* Recent orders, default delivery address.

   * *Order History (`PG-24`):* Recent orders and status labels supplied by the order system. Exact status names and sequence remain TBD; do not hardcode a status progression.

   * *Saved Looks (`PG-14`):* Private-by-default grid of saved AI previews/outfits with available actions such as reopen, share (only when enabled) and delete.

   * *Privacy Centre (`PG-22`):* Consent status and withdrawal, photo/measurement deletion controls, personalisation controls and account-deletion request. Display the approved retention/deletion timeframe; do not promise instant deletion.


### 5.1 Remaining Customer Page Specifications (PG-05 to PG-07, PG-09 to PG-10, PG-12 to PG-14, PG-17, PG-20, PG-22 to PG-32)

The following pages reuse the global header, footer, typography, spacing, buttons, form controls and product-card components defined above. Their page-specific layouts and states are defined here.

#### PG-05: New Arrivals
- **Purpose / access:** Full listing reached from the homepage New Arrivals section; public page.
- **Visual system:** `#F2EDE4` page background, `#F8F5EF` product cards; same collection/listing template as PG-02/PG-03.
- **Layout:** Breadcrumb, H1 “New Arrivals”, optional short intro, result count, sort control and product grid. Filter controls may be reused if the catalogue supports them.
- **Content rules:** Include only products meeting the admin-defined “New Arrival” rule. The time window/criteria are TBD; do not invent a “new within 7 days” rule. If no items qualify, show an empty state and a link to All Products.
- **States:** Loading skeleton, populated, empty, service error with retry. Preserve sort/filter state when navigating back from a product.
- **Responsive:** Desktop 3–4 columns depending on container width; tablet 2–3; mobile 2 columns.

#### PG-06: Special Offers
- **Purpose / access:** Listing of currently valid discounted products; public. Dedicated route or filtered listing remains an APP_FLOW decision.
- **Visual system:** Global beige/cream; Deep Maroon `#713B43` reserved for sale labels and offer emphasis.
- **Layout:** Page title and concise intro, optional active campaign banner, result count, sort/filter controls and product grid.
- **Content rules:** Render a discount only when a valid promotion/price is returned by the catalogue. Show original price, current price and discount calculation consistently. Do not use fake countdowns, crossed-out prices, “limited stock” or urgency copy without verified data. Hide the page/section or show an honest empty state when no active offers exist.
- **States:** Loading, active offers, no current offers, expired/invalid offer, error.

#### PG-07: Search Results
- **Purpose / access:** Public keyword results from the global search interface.
- **Visual system:** Global listing template.
- **Layout:** Search input prefilled with submitted query, result heading (“Results for …”), result count, optional suggested categories, filters, sort and product grid. Query text must be safely displayed as text, not interpreted as markup.
- **States:** Initial suggestions/recent searches (if permitted), loading, results, no results with spelling/alternative category suggestions, empty query, network/server error with retry.
- **Behaviour:** Preserve query, filters and sort when opening a product and returning. Clear-search control resets to the search entry state.

#### PG-09: Size Guide (overlay or page)
- **Purpose / access:** Public measurement reference opened from PDP and size recommendation.
- **Visual system:** Cream modal/panel on beige backdrop; maintain readable inch labels.
- **Layout:** Product/category-specific size chart table; measurement diagram or concise measuring instructions; note describing how to measure; link back to selected product.
- **Data rules:** Display the size chart supplied for the selected product/category. Measurements use inches. Do not invent size values or imply all brands/products share one chart. If a chart is unavailable, show “Size guide is not available for this item yet” and a support/contact link if configured.
- **Interaction:** Close button, Escape, backdrop close where safe, keyboard focus containment; retain selected product and variant on close.
- **Responsive:** Desktop centered modal or side panel; mobile full-height sheet/page with scrollable table and visible close control.

#### PG-10: AI Size Recommendation
- **Purpose / access:** Separate sizing guidance feature; public/session use or account persistence follows PRD decisions. It is not the visual try-on feature.
- **Visual system:** Cream form card, Sage secondary labels; no try-on preview imagery required.
- **Layout:** Intro and limitation note; inputs only for fields defined by the approved size-chart method (e.g. product-specific measurements and/or customer measurements); measurement unit fixed to inches; optional “How to measure” link to PG-09.
- **Data rules:** Exact input fields, calculation method and supported product types must follow the implemented PRD-approved size logic. Do not invent a body-measurement questionnaire or promise fit accuracy. Saved measurements require explicit customer choice/consent.
- **Result:** Suggested size, basis/inputs used where appropriate, available alternatives and direct link to the size chart.
- **Mandatory disclaimer:** “This is a size suggestion based on the available size chart and the information you entered. It is guidance, not a guarantee of fit.”
- **States:** Not enough information, recommendation available, unsupported product/no chart, validation error, calculation failure, edit inputs/retry.
- **Responsive:** Single-column form on mobile; result appears below inputs; no horizontal table overflow.

#### PG-12: Outfit / Look Detail (Shop the Look)
- **Purpose / access:** Public detail page for a curated outfit/look.
- **Visual system:** Global beige/cream; editorial image-led layout.
- **Layout:** Look hero image, look name/description, occasion/style tags where curated, item list with thumbnail/name/variant availability/current price, total of currently available items, and “Add available items” action.
- **Rules:** This is a curated outfit presentation, not a promise of AI multi-garment rendering. Product prices and stock are live catalogue values. If one item is unavailable, mark it unavailable and allow remaining eligible items to be selected. Never add an unavailable variant.
- **States:** All items available, some unavailable, no purchasable items, loading/error.
- **Responsive:** Desktop editorial split layout; mobile stacked hero then item list; sticky total/action only if it does not obscure content.

#### PG-13: Wishlist
- **Purpose / access:** Saved products; registered customers, with guest behaviour governed by PRD OQ-026.
- **Visual system:** Global beige page with cream product cards.
- **Layout:** Page title, item count, product grid/list, current price, current availability, selected variant if one was saved, remove control and product link. Add-to-cart may be offered only when variant selection is complete.
- **Rules:** Display current price and availability, not historical saved price. If the saved variant is unavailable, clearly label it and route to PDP for another choice. Do not assume guest wishlist persistence.
- **States:** Populated, empty with “Explore products” CTA, login gate, item removed confirmation, unavailable item, load error.

#### PG-14: Saved Looks
- **Purpose / access:** Private collection of saved AI previews and/or outfit looks; registered customers.
- **Visual system:** Try-on neutral `#EAE2D6` used as a subtle page accent; cream cards; privacy-first presentation.
- **Layout:** Grid of saved-look thumbnails with saved date/title if available, associated product(s), AI-generated label, open/reopen action, delete action, and share action only when sharing is enabled and the customer explicitly chooses it.
- **Privacy rules:** Private by default. Shared access must be explicit, revocable and use the approved link/expiry behaviour. Do not show customer images publicly or in marketing without separate explicit consent.
- **States:** Empty, populated, deleted, unavailable product, expired/revoked shared link, load error.

#### PG-17: Order Confirmation
- **Purpose / access:** Confirmation after a successful order placement; order owner only.
- **Visual system:** Beige background, cream confirmation card, restrained Success status treatment.
- **Layout:** Confirmation heading, order number/reference, placed date/time, order summary (items/variants/quantities), delivery details, payment method/status, item subtotal, configured delivery charge, discount and final total. Provide “View order” for authenticated customers and “Continue shopping”.
- **Rules:** Show confirmation only after the order has been created. Payment-pending/failed states must be distinct from a confirmed paid order. Notification failure must not remove the confirmation. Do not invent courier, delivery date or notification claims.
- **States:** Order placed, payment pending, payment failed/cancelled, duplicate-submit prevention, confirmation data load failure with safe order lookup path.

#### PG-20: Forgot Password / Account Recovery
- **Purpose / access:** Public recovery entry for a customer who cannot sign in.
- **Visual system:** Same centered authentication card as PG-18/PG-19.
- **Layout:** Registered email/phone input according to the selected authentication method, submit action, link back to Login.
- **Rules:** Verification channel (email link, phone OTP or both) is TBD. Use neutral confirmation copy that does not reveal whether an account exists. Do not display a real OTP in the UI.
- **States:** Idle, validation error, request submitted, resend cooldown/limit if configured, expired/used token, reset success, service error.

#### PG-22: Profile Management and Privacy Centre
- **Purpose / access:** Registered customer profile, preferences and privacy controls.
- **Visual system:** Account layout with cream panels and clear section headings.
- **Layout sections:** Personal details (name, phone, email where supported); optional style preferences; optional saved measurements; marketing preferences; recommendation personalisation opt-out/reset; AI photo consent status; photo/measurement deletion controls; account deletion request.
- **Rules:** Do not preselect optional consent. Distinguish required processing consent from optional model-training, marketing or public-display consent. Withdrawal/deletion actions require confirmation and must explain the approved processing timeframe and any legally required retention. Do not promise immediate deletion. Do not expose sensitive photos in general account summaries.
- **States:** View, edit, saving, saved, validation error, consent withdrawn, deletion request submitted, action unavailable due to policy/retention requirement.

#### PG-23: Address Book
- **Purpose / access:** Manage saved delivery addresses; registered customers.
- **Visual system:** Account template; cream address cards.
- **Fields:** Recipient name, Bangladesh mobile number, division, district, area/thana/upazila, detailed address; optional landmark/postal code only if the configured address model supports them.
- **Layout:** Address cards with default indicator, Edit, Delete and Set as Default actions; Add New Address form.
- **Rules:** Validate phone format and required address fields. Editing an address must not change historical order addresses. If deleting the default address, follow the configured default-clearing/reselection rule; do not silently select another.
- **States:** Empty, populated, add/edit form, field validation, save success, delete confirmation, API failure.

#### PG-24: Order History
- **Purpose / access:** List a registered customer's own orders; newest first.
- **Visual system:** Account template with clean data rows/cards.
- **Layout:** Order number, placed date, item summary, total in ৳, current status from order system, and “View details”. Optional filters by status/date only if supported.
- **Rules:** Do not hardcode order status names or sequence; render the status value supplied by the order system. No access to another customer's orders.
- **States:** Empty with Shop CTA, populated, loading, pagination/load-more, no matching filter results, load error.
- **Responsive:** Desktop table/list; mobile stacked order cards with labels for each value.

#### PG-25: Order Details and Tracking
- **Purpose / access:** Detailed view for an order owned by the authenticated customer.
- **Visual system:** Account template; status indicator uses configured status labels.
- **Layout:** Order reference/date, item rows and variants, delivery address snapshot, payment method and payment status, totals, current order status, tracking reference/link only when provided, and available next actions.
- **Rules:** Courier integration/manual status update and status vocabulary remain TBD. If tracking is not yet available, show a neutral “Tracking details are not available yet” message. Reject unknown or non-owned order IDs without exposing order details.
- **States:** Status available, tracking pending, delivered, request in progress, order not found/unauthorised, network error.

#### PG-26: Cancellation, Exchange and Return Request
- **Purpose / access:** Submit a request against an eligible order item; registered customer.
- **Visual system:** Simple guided form in a cream card; avoid alarming red styling unless an error occurs.
- **Layout:** Order/item selector, request type (only policy-supported options), reason selector/text field as configured, optional evidence upload only if approved, review summary and submit confirmation.
- **Rules:** Show this action only when the business-approved policy says the item/order is eligible. Policy windows, excluded items, refund/exchange methods and evidence requirements are TBD until approved. If no policy is configured, hide the request CTA and link to support if configured.
- **States:** Eligible, ineligible with reason, form validation, submitted with request reference, pending/reviewed/approved/rejected statuses supplied by system, submission failure.

#### PG-27: Write a Review
- **Purpose / access:** Submit a product rating/review for an eligible purchase; registered customers.
- **Visual system:** PDP/account form style; neutral card.
- **Layout:** Product summary, rating selector, review text, optional photo attachment only if the photo-review capability is enabled, and submit action.
- **Rules:** Eligibility rules (for example, order delivery requirement) and moderation status follow PRD decisions. Do not label a review “verified purchase” unless the backend confirms eligibility. Photo upload is optional and requires its own content/privacy notice if enabled.
- **States:** Not eligible, form idle, validation error, submitted/pending moderation, approved/rejected/removed feedback where applicable, upload failure.

#### PG-28: Contact and Support
- **Purpose / access:** Public support/contact page.
- **Visual system:** Global beige background, cream contact cards.
- **Layout:** Only confirmed contact channels and business hours; optional contact form with name, email/phone, topic and message if enabled.
- **Rules:** Phone, email, WhatsApp/social links, response times and operating hours must come from approved business settings. Do not invent a hotline, 24/7 support claim or response-time promise. Form submission includes success/error feedback and spam protection.
- **States:** Contact details available/unavailable, form validation, submitted, service error.

#### PG-29: Policy Pages
- **Purpose / access:** Public business-approved legal and service information. Separate page template for Delivery, Payment, Returns & Exchange, Privacy Policy, Terms, and AI Try-On Notice.
- **Visual system:** Readable long-form editorial layout; cream content surface on beige; narrow reading width; clear heading hierarchy, table of contents for long pages where useful.
- **Content rules:** Publish only approved policy copy with effective date/version where supplied. Delivery charges/timelines, payment providers, return eligibility/windows, privacy retention/deletion and AI processor details remain TBD until confirmed. Never fill a policy page with placeholder legal claims. If policy content is not ready, show a neutral unavailable message and keep checkout/feature gating consistent with the PRD.
- **States:** Published, not yet available, updated/versioned content, load error.

#### PG-30: FAQ
- **Purpose / access:** Public FAQ page; homepage FAQ remains a condensed version of the same managed content.
- **Visual system:** Global beige background, cream accordion rows.
- **Layout:** Page title, optional category tabs/search if content volume justifies them, accordion questions and answers, Contact CTA.
- **Rules:** FAQ answers must agree with approved policies and actual platform behaviour. Do not promise delivery, payment, return, privacy or AI capabilities that are not confirmed. Empty categories are hidden.
- **States:** Default collapsed, expanded, search no-results (if search exists), content unavailable.

#### PG-31: Brand Story / About
- **Purpose / access:** Public editorial page describing the brand.
- **Visual system:** Modern Earthy Luxury; large editorial photography, Cormorant/Playfair display headings, warm neutral blocks and subtle Bangladeshi craft references.
- **Layout:** Brand introduction, mission/positioning, design or sourcing story only where factually supplied, editorial images with alt text, optional featured collections and Shop CTA.
- **Rules:** Do not invent founding date, manufacturing origin, ethical/sustainability claims, artisan partnerships, brand certifications or “made in Bangladesh” claims. Publish only business-approved copy and licensed imagery.
- **States:** Published, draft/unavailable, image fallback, load error.

#### PG-32: Shared Look View
- **Purpose / access:** Recipient-facing view of a look deliberately shared by its owner; link holder.
- **Visual system:** Try-on neutral/cream canvas with discreet brand header.
- **Layout:** Shared look image with AI-generated label and approximation disclaimer, product/outfit items and current purchasable product links. Owner identity is not displayed unless explicitly approved.
- **Privacy rules:** Render only while the share permission/token is valid. Provide a clear expired/revoked/unavailable state. Do not expose the customer's uploaded source photo, account details or private saved looks. Shared links must follow the approved expiry/revocation policy (TBD).
- **States:** Valid shared link, expired/revoked link, deleted source look, unavailable products, load error.

### 5.2 Administration UI Specifications (AD-01 to AD-11)

**Admin shell (shared by AD-01–AD-11):** Separate authenticated workspace; do not reuse the customer-facing header/footer. Use a restrained neutral admin UI with Espresso navigation, Cream content surfaces, Taupe dividers and clear status colours. Desktop uses a left sidebar plus top utility bar; tablet collapses the sidebar; mobile uses a menu drawer and stacked data cards. Include page title, breadcrumb, role-aware navigation, current staff identity, logout, and permission-denied states. All data tables need loading, empty, error, pagination and row-action feedback states. Role-based access follows PRD/APP_FLOW; hidden navigation is not a substitute for backend authorization.

#### AD-01: Admin Login and Dashboard
- **Login:** Staff email/username and password fields, show/hide password, validation, generic credential error, and configured MFA step if enabled. No customer registration link.
- **Dashboard:** KPI cards and concise charts/tables for orders, sales, catalogue/stock and AI usage only where those metrics are implemented and the staff role permits access. Date range and data freshness labels.
- **Rules:** Do not invent target values or show sample KPIs as live business data. Analyst role is read-only.

#### AD-02: Product Management
- **List:** Search, category/collection filters, status, product thumbnail, name/SKU, price, publication state and actions.
- **Create/edit:** Product name, description, category assignment, collection assignment, images, price/discount fields, colour variants, size variants, size chart, stock linkage, product tags, and try-on eligibility. Only fields supported by the catalogue model are displayed.
- **Preview/publish:** Draft preview, required-field validation, publish/unpublish confirmation, unsaved-change warning. Do not publish an item as Try-On Ready until its eligibility and required source assets are approved.

#### AD-03: Inventory Management
- **Layout:** Searchable stock table by product/SKU/variant, size, colour, available quantity and stock state; filters for low/out-of-stock only if thresholds are configured.
- **Actions:** Update stock quantity, record adjustment reason if the system supports it, and show success/failure feedback.
- **Rules:** Do not invent low-stock thresholds. Prevent negative stock where the business rule disallows it. Show clear conflict messaging when stock changes during checkout.

#### AD-04: Order Management
- **Layout:** Search by order number/customer phone/date; filters by configured status/payment state; table with order date, customer, total, payment and status.
- **Detail:** Items/variants, delivery snapshot, payment details, internal notes if authorized, status history and tracking reference/link.
- **Actions:** Update status, add tracking details, process cancellation/exchange/return requests where policy permits. Confirm consequential actions and log staff actor/time. Status labels and transition rules come from configuration.

#### AD-05: Customer Management
- **Layout:** Searchable customer list with only necessary account fields (customer ID, name, contact, registration date and order summary as authorized).
- **Detail:** Profile and order summary with role-based access. Sensitive photo/measurement data must not be exposed by default.
- **Rules:** Access to personal photos is restricted to explicitly authorized, need-based roles and is audit-logged. Provide only supported account actions; do not add arbitrary impersonation or password-view controls.

#### AD-06: Homepage Content Management
- **Layout:** Section-based editor for the 21 homepage sections, with enable/disable, content fields, image/media selection, CTA destination and display order where supported.
- **Preview:** Desktop/mobile preview and draft/published state.
- **Rules:** Keep fallback behaviour for empty reviews, customer photos, recommendations and social feed. Trust claims, delivery/payment details and policy summaries require approved copy. Do not expose arbitrary code entry as a content field unless explicitly designed and secured.

#### AD-07: Promotion and Coupon Management
- **List/form:** Coupon or campaign name/code, discount type/value, eligibility, start/end time, usage limits and active status only for fields implemented in PRD/business rules.
- **Validation:** Prevent invalid date ranges and invalid discount configurations. Display stacking/combination rules only after business decision.
- **Preview:** Show customer-facing price/discount presentation before activation. Expired/inactive promotions must not appear as active on the storefront.

#### AD-08: Review and Customer Photo Moderation
- **Tabs:** Pending, approved, rejected/removed review submissions; customer photos separated from text reviews.
- **Review detail:** Product, submitted content, moderation controls and reason field if supported.
- **Privacy:** Customer photos are visible only to authorized moderators for the approved purpose. Public display requires separate explicit consent. Record moderation actor/time; provide report/remove workflow only if supported.

#### AD-09: Delivery Zone and Charge Configuration
- **Layout:** Zone list/editor with zone name, serviceability, delivery charge, optional delivery estimate and active state.
- **Rules:** Values are business-configured; no default Dhaka/outside-Dhaka amount is prescribed in this UI spec. Validate required fields and prevent checkout from proceeding for disabled/non-serviceable zones. Delivery timelines are displayed only when confirmed.

#### AD-10: Try-On Eligibility, AI Usage Monitoring and Content Moderation
- **Eligibility:** Product/variant list with try-on-ready state, supported garment type, required source asset status and enable/disable action.
- **Monitoring:** Generation counts, success/failure, processing time and estimated provider cost only where returned by the AI service. Date filters and aggregate views; no unnecessary display of raw customer photos.
- **Moderation:** Flagged output/upload review and actions according to approved policy. Restrict photo access and audit every access.
- **Rules:** AI provider/model, usage limits, active-session expiry/deletion timing and saved-generated-image retention policy and cost thresholds remain TBD until selected. Do not invent monitoring thresholds or guarantee processing times.

#### AD-11: Staff Accounts, Roles and Audit Log
- **Staff list:** Name, staff identifier, role, active/inactive state and last sign-in where available.
- **Role editor:** Permission matrix derived from approved role definitions; Super Admin can manage roles only if authorized by policy.
- **Audit log:** Actor, action, affected record, timestamp and outcome; filters by actor/action/date. Sensitive values (passwords, tokens, full photo content) must never be rendered in logs.
- **Security states:** Access denied, session expired, MFA required if enabled, staff deactivated, permission changed.

### 5.3 Shared Page-State and Responsive Rules for All PG / AD Screens

- **Loading:** Use skeletons that preserve final layout dimensions; avoid blank jumps.
- **Empty:** Explain what is empty and provide one relevant next action; never use fabricated sample products/orders/reviews.
- **Error:** Human-readable message, retry where safe, and preserve user-entered data when possible.
- **Unavailable / disabled:** Explain the limitation without presenting an unconfirmed launch date.
- **Success:** Confirm the completed action and its next destination; do not show success before the server confirms it.
- **Validation:** Inline field-level messages, summary for long forms, and focus the first invalid field after submit.
- **Destructive actions:** Confirmation dialog for delete, cancel, revoke or publish/unpublish; state the affected item.
- **Responsive tables:** Convert to labelled cards on narrow screens; never require horizontal scrolling for core customer actions. Admin tables may use controlled horizontal scrolling only when the data cannot be meaningfully stacked.
- **Accessibility:** All controls have accessible names, visible focus, keyboard support and status announcements. Colour is never the only status signal.


## 6. AI Virtual Try-On UI Specification

### 6.1 Upload Interface, Session Reuse & Guidance

* **Container Surface:** `#F8F5EF` (Cream) with dashed border `2px dashed #A88A5A` (Antique Gold) when empty.

* **Guidance Card:**

  * Title: *"Upload Your Photo for AI Try-On"* (16px Display Serif).

  * Visual checklist (with micro-icons):

    * ✓ Full-length or half-body portrait

    * ✓ Good indoor lighting, plain background

    * ✓ Single person, standing pose

    * ✕ Avoid dark shadows or heavy loose outerwear

* **Upload Trigger:** Drag-and-drop zone + Primary Action Button `"Choose Photo from Device"`.

* **Session Rule (PRD FR-036):** Upload one personal photo per active Try-On session. After successful validation and consent, keep that photo available within the active session so the customer can try multiple eligible products without uploading again. Do not carry the original photo into a later session. Show a concise session notice near the upload area: `"Use this photo for multiple eligible items during this session."`

* **Replace / Delete:** Let the customer replace or delete the active-session photo at any time. Replacing a photo runs the required validation and consent flow for the replacement; deleting it prevents further reuse in that session.

* **File Constraints Display:** Show the accepted formats, file-size limit, and resolution requirements supplied by the approved upload configuration. These constraints remain TBD until confirmed (PRD upload requirements).

### 6.2 Image Preview & Pre-Processing Check

* **Preview Canvas:** Selected photo renders in a responsive portrait container (prefer `3:4` where suitable) with a maximum width that preserves the original image without cropping away required body context.

* **Action Bar:** `"Change Photo"` button + `"Delete Photo"` icon button.

* **Consent Panel (Mandatory PRD Rule):**

  * Checkbox (Unchecked by default): Use the approved photo-processing consent text. Before launch, the notice must explain what data is collected, why it is processed, who processes it, the active-session use and expiry behaviour, deletion timing, and how the customer can delete the photo or withdraw consent. Explain that the original photo is not retained across sessions. Any model-training, marketing, or public-display use requires separate optional consent; do not promise that data is never shared or used for training unless the approved policy confirms it.

  * Explicit Link: *"Read AI Privacy Notice"*.

### 6.3 Clothing Selection & Try-On Action

* **Garment Card Overlay:** Displays active product thumbnail, name, selected color swatch, and size selector.

* **Primary CTA Button:**

  * Label: `"Generate Virtual Try-On"`

  * Style: `#A88A5A` (Antique Gold filled) or `#292929` (Charcoal) with Gold sparkle icon.

  * Disabled State: Unclickable until consent checkbox is checked and valid photo is selected.

### 6.4 Processing State

* **Visual Treatment:** Soft pulsing overlay across the preview canvas using Cream surface (`#F8F5EF` opacity 80%).

* **Progress Indicator:**

  * Centered circular progress bar (`#A88A5A` Gold track).

  * Dynamic micro-copy may describe general processing stages (for example, preparing the image and generating a preview); do not imply technical steps that the selected provider does not expose or guarantee.

* **Cancel Control:** Show a cancel action only if cancellation is supported by the selected generation service. Do not promise usage-credit refunds or charging behaviour until the provider and usage policy are confirmed.

### 6.5 Result Presentation & Disclaimer

* **Session and Result Retention:** The original uploaded photo and every generated preview that the customer has not explicitly saved are session-only. When the active Try-On session ends or expires, they must become unavailable and be automatically deleted according to the approved deletion process. Do not show a later-session photo history or reuse the previous original photo. A generated image may move to Saved Looks only after the customer explicitly selects `Save Look`; its retention period and deletion timing remain subject to the approved policy.

* **Main Result Display:**

  * High-resolution rendered output on the canvas.

  * Watermark / Badge (Bottom Left): `"AI-Generated Visual Preview"` (11px badge, `#352A24` dark background, `#F8F5EF` text).

* **Mandatory Disclaimer Box (PRD FR-040):**

  * Surface: `#F2EDE4` (Soft Beige) with `1px solid #DCD1C3`.

  * Text: 12px Regular `#352A24`: *"Visual preview is an approximate digital representation. Fabric drape and exact fit may vary. Check the Size Guide for exact inch measurements."*

  * Inline Link: *"Open Size Guide"*.

* **Result Toolbar (Horizontal Row under canvas):**

  * `[ Change Color ]` — Opens swatch selector drawer.

  * `[ Compare Looks ]` — Side-by-side split screen view.

  * `[ Save Look ]` — Explicitly saves the generated preview to `PG-14` (prompts login if guest). Do not persist the generated image merely because it was created or viewed; unsaved previews are deleted at session end/expiry.

  * `[ Share Look ]` — Opens share link confirmation dialog.

  * `[ Delete My Photo ]` — Deletes the original photo for the active session and its unsaved generated previews through the approved deletion process. Explain the actual deletion timeframe; do not promise instant backend deletion. Deleting an explicitly saved look is a separate action in Saved Looks and removes its retained generated image according to the approved policy.

* **Purchase CTA Block:**

  * Variant size selector populated from the selected product inventory; do not hardcode a size set.

  * Full-width Primary Button: `"Add to Cart"`; show the current product price dynamically in the adjacent product/order summary when available.

### 6.6 Error Handling UI States

1. **Unsupported / Low Quality File:** Red border (`#713B43`) around upload box. Alert message: *"Photo could not be processed. Please upload a clear photo with single person and good lighting."* `[ Try Another Photo ]` CTA.

2. **Processing Timeout / System Fail:** Informative overlay: *"AI Try-On is taking longer than usual. You can retry or continue shopping without losing your cart."* `[ Retry Generation ]` | `[ Continue Shopping ]`.

3. **Ineligible Product Access:** Banner overlay: *"Virtual Try-On is not yet enabled for this item. Explore our Try-On Ready Collection."* `[ View Try-On Products ]`.

### 6.7 Mobile Responsiveness

* Single vertical column stack on mobile (`320px–767px`).

* Preview canvas uses a responsive portrait aspect ratio and a maximum height that fits the available viewport; avoid a fixed height that causes overflow on short screens.

* Sticky bottom bar containing `"Add to Cart"` and `"Save Look"` buttons for instant access without scrolling.

## 7. E-Commerce UI Components

### 7.1 Product Image Gallery

* **Desktop:** Main preview image (`500px × 667px`, `3:4` ratio) + Left/Bottom vertical thumbnail strip (4 thumbnails, `1px solid #A88A5A` active indicator).

* **Mobile:** Swipeable image carousel with pagination dots (active dot `#352A24`, inactive `#DCD1C3`). Pinch-to-zoom modal trigger icon on top-right.

### 7.2 Size Selection Component

* **Format:** Horizontal list of square pill buttons (`44px × 44px` min touch target).

* **States:**

  * *Default:* Surface `#F8F5EF`, Border `1px solid #DCD1C3`, Text `#352A24`.

  * *Selected:* Surface `#352A24` (Dark Espresso), Text `#F8F5EF`, Border `#352A24`.

  * *Out of Stock:* Surface `#F2EDE4`, Text `#899482`, Diagonal strike-through line, non-selectable.

* **Inline Context:** Includes small link right-aligned: `[ 📏 Size Guide (Inches) ]`.

### 7.3 Colour Selection Component

* **Format:** Circular color swatches (`32px × 32px`).

* **Active Indicator:** Outer ring `2px solid #A88A5A` (Gold) with `2px` white space separation.

* **Tooltip:** Hover/Focus shows color name (e.g., "Royal Maroon", "Earthy Taupe").

### 7.4 Quantity Selector

* **Format:** Stepper box (`120px × 40px`).

* **Controls:** `-` button (`40px`), Quantity text display (`40px`), `+` button (`40px`).

* **Surface:** `#F8F5EF` Cream surface with `1px solid #DCD1C3` border.

### 7.5 Cart Summary Component

* **Card Container:** `#F8F5EF` Cream surface, `p-6` padding, `radius-lg`.

* **Row Structure:**

  * Subtotal: `৳ X,XXX`

  * Delivery Charge: display the configured zone charge only after a valid address is entered and the zone is serviceable; otherwise show “Calculated after address” or omit the row. Never hardcode a sample amount.

  * Promo Discount: `- ৳ XXX` (Red text `#713B43`)

  * **Total Payable:** `৳ X,XXX` (20px Bold Espresso `#352A24`)

### 7.6 Order Summary & Checkout Forms

* **Input Groups:** Stacked vertical fields with floating or fixed labels (`13px Medium #352A24`).

* **Payment Method Selector:** Radio Card Stack (Each card: Radio button, Payment Logo/Title, Short subtext. Active card gets `#352A24` border and `#F8F5EF` highlight).

## 8. Responsive Design Specification

```
┌───────────────────────────────────────────────────────────────────────────┐
│ BREAKPOINT RANGE │ CONTAINER MAX │ GRID COLS │ OUTER MARGIN │ GUTTER SIZE │
├──────────────────┼───────────────┼───────────┼──────────────┼─────────────┤
│ Mobile (320-767) │ 100% Fluid    │ 4 Cols    │ 16px (px-4)  │ 12px        │
│ Tablet (768-1023)│ 100% Fluid    │ 8 Cols    │ 24px (px-6)  │ 16px        │
│ Desktop (1024+)  │ 1280px        │ 12 Cols   │ 32px (px-8)  │ 24px        │
└──────────────────┴───────────────┴───────────┴──────────────┴─────────────┘

```

### 8.1 Navigation Transformation

* **Desktop:** Horizontal category text list + right icon utility bar.

* **Tablet/Mobile:** Hamburger icon triggers full-height sliding side drawer (`#352A24` Espresso background, Gold `#A88A5A` active indicators, 20px typography links).

* **Mobile Bottom Bar (Proposed):** Fixed bottom navigation bar (`height: 56px`, `#352A24` surface) containing 5 core touch targets: `Home`, `Shop`, `Virtual Try-On` (Center highlighted pill), `Wishlist`, `Account`. (Hidden during Checkout and active Try-On generation).

### 8.2 Grid Adjustments by Subpage

* **Product Listings:** Desktop: 3 or 4 columns | Tablet: 2 columns | Mobile: 2 columns (tight 12px gutter).

* **Cart / Checkout:** Desktop: 2 Columns (60% Form / 40% Summary) | Mobile: Single vertical column stack (Form top, Summary bottom).

* **PDP Layout:** Desktop: 2 Columns side-by-side | Mobile: Vertical stack (Gallery top -> Details -> Actions).

### 8.3 Touch Target Requirements

* All interactive elements on touch screens must have a minimum physical touch target of **44px × 44px**.

* Spacing between adjacent touch targets must be at least **8px**.

## 9. Interaction and Component States

```
┌───────────────────────────────────────────────────────────────────────────┐
│ STATE    │ VISUAL TREATMENT / SPECIFICATION                               │
├──────────┼────────────────────────────────────────────────────────────────┤
│ Default  │ Base design token colors, 1px borders, subtle shadow.          │
│ Hover    │ Background darkens by 5% or shifts to specified hover token.   │
│          │ Y-axis translate -1px, shadow transitions to shadow-hover.     │
│ Active   │ Background darkens by 10%, scale down to 0.98.                 │
│ Focus    │ Visible 2px outline in Antique Gold (#A88A5A) with 2px offset. │
│ Disabled │ Opacity 50%, cursor-not-allowed, pointer-events-none.         │
│ Loading  │ Text replaced or accompanied by inline spinner/pulsing bar.    │
│ Success  │ Green tint surface (#E8F0E6), checkmark icon, green text.      │
│ Error    │ Maroon border (#713B43), error icon, inline message (#713B43). │
│ Selected │ Highlighted border (2px #352A24 or #A88A5A), bold text.       │
└──────────┴────────────────────────────────────────────────────────────────┘

```

### Component Specific Interaction Guidelines

* **Product Card Hover:** Image scales slightly (`1.03`), card shadow lifts (`shadow-hover`), secondary image switches if supplied.

* **Accordion Toggle (FAQ/Policy):** Chevron icon rotates 180 degrees smooth transition (200ms ease-in-out), content expands vertically.

* **Filter Pill Toggle:** Inactive state Cream `#F8F5EF` with Taupe border -> Active state Charcoal `#292929` text with Sage `#899482` background tint or Gold checkmark.

## 10. Accessibility Guidelines (WCAG 2.1 AA Compliance)

### 10.1 Colour Contrast

* **Body Text (`#352A24` Espresso on `#F2EDE4` Soft Beige):** Contrast ratio > `10.5:1` (Exceeds AA standard 4.5:1).

* **Primary Button (`#F8F5EF` Cream text on `#292929` Charcoal):** Contrast ratio > `14:1`.

* **Accent Badges (`#713B43` Deep Maroon on `#F8F5EF` Cream):** Contrast ratio > `5.2:1`.

* **Rule:** Light accent text like Antique Gold (`#A88A5A`) must never be used for small body text on white/beige backgrounds; reserved strictly for thick borders, large headings, or dark backgrounds.

### 10.2 Keyboard Navigation

* All interactive controls (links, buttons, inputs, swatches, modals) must be reachable using standard `Tab` / `Shift+Tab` key navigation.

* Modals and overlay drawers trap focus when open; pressing `Escape` closes the modal and returns focus to the trigger element.

### 10.3 Screen Readers & Semantic Hierarchy

* Proper H1 -> H6 document outline structure.

* All product images must render meaningful `alt` text (e.g., `"Men's Maroon Silk Panjabi with Embroidery - Front View"`).

* Icons used without visible text must include `aria-label` attribute (e.g., `aria-label="Shopping Cart"`).

## 11. Bangladesh Market UI Considerations

### 11.1 Currency Formatting

* Currency Symbol: **`৳`** (Bangladeshi Taka / BDT).

* Format Rule: Symbol placed before price with space: `৳ 2,450`.

* Thousand Separator: Standard comma formatting (`৳ 12,500`).

### 11.2 Phone Number Field

* Placeholder: `017XXXXXXXX` or `+880 17XX-XXXXXX`.

* Validation Rule: Auto-accepts 11-digit local mobile numbers starting with `013`, `014`, `015`, `016`, `017`, `018`, `019`.

### 11.3 Address Entry Layout

* Tailored for Bangladesh logistics:

  * Division (Dropdown: Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur, Mymensingh).

  * District & Thana / Upazila (Dependent Dropdown).

  * Detailed Street Address (House No, Road Name, Area/Block/Sector).

  * Landmark (Optional input e.g., "Near Westin Hotel").

### 11.4 Payment Interface Presentation

* Prominent badges displayed at checkout:

  * **Cash on Delivery (COD):** Display only if confirmed and enabled for launch; default selection is subject to business approval.

  * **Mobile Financial Services (MFS):** Display only the providers that are confirmed and integrated for launch; do not use placeholder provider logos as proof of availability.

## 12. Design Consistency Rules

1. **Global Identity Rule:** Never replace global navbar (`#352A24`), footer (`#211C19`), primary buttons (`#292929`), or main text (`#352A24`) with arbitrary page colors.

2. **Restrained Accents:** Limit Antique Gold (`#A88A5A`) and Deep Maroon (`#713B43`) strictly to badges, highlights, and specialized collection details. Never use Gold as a full page background.

3. **Collection Uniformity:** Special collections (Panjabi, Old Money, Streetwear) modify *only* subpage background tint and primary accent token. Layout structure, typography scale, and navigation remain 100% identical.

4. **Controlled Extensions:** Use the shared components and page templates specified in Sections 4 and 5. Any new page, feature or component not covered by PRD/APP_FLOW must be reviewed and added to this specification before implementation.

## 13. UI Implementation Handoff

### 13.1 Design Tokens (Tailwind CSS Mapping)

```
// tailwind.config.js - Token Mapping
module.exports = {
  theme: {
    colors: {
      brand: {
        beige: '#F2EDE4',     // Main Background
        taupe: '#DCD1C3',     // Secondary Surface / Border
        cream: '#F8F5EF',     // Product Card & Form Surface
        espresso: '#352A24',  // Primary Text & Navbar
        sage: '#899482',      // Secondary Accent
        gold: '#A88A5A',      // Premium Highlight
        maroon: '#713B43',    // Traditional / Sale Accent
        charcoal: '#292929',  // Primary Button
        footer: '#211C19',    // Dark Footer
      },
      collection: {
        panjabiBg: '#EFE5DC',
        oldMoneyBg: '#E8EAE1',
        streetwearBg: '#E9E9E4',
        streetwearOlive: '#53634B',
        tryOnBg: '#EAE2D6',
      }
    },
    fontFamily: {
      display: ['Cormorant Garamond', 'Georgia', 'serif'],
      sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      bangla: ['Hind Siliguri', 'sans-serif'],
    },
    borderRadius: {
      'sm': '4px',
      'md': '8px',
      'lg': '12px',
      'xl': '16px',
    }
  }
}

```

### 13.2 Developer Handoff Checklist

* \[ \] Verify color token mappings match section 3.1 & 3.2 exactly.

* \[ \] Ensure all images utilize `3:4` aspect ratio containers across cards and galleries.

* \[ \] Validate currency strings use `৳` symbol with thousand separators.

* \[ \] Confirm Try-On consent checkbox blocks the action button until checked.

* \[ \] Verify AI disclaimers accompany every visual preview canvas.

* \[ \] Test touch targets on mobile viewports (minimum 44px × 44px).

## 14. Open Questions and Assumptions

The UI specification defines presentation patterns but does not approve unresolved business, legal, provider or release decisions. The following items must remain configurable or gated until the owner confirms them. The PRD and APP_FLOW remain authoritative for the full decision register.

| Decision area | UI treatment until confirmed | Source reference |
|---|---|---|
| Try-On account requirement / guest session retention | Do not assume guest try-on is allowed; show the configured authentication gate. | APP_FLOW AFQ-04; PRD Section 20 |
| Under-18 registration and photo processing | Follow the legally approved age/consent policy; do not invent parental-consent handling. | PRD OQ-009 |
| Guest checkout and guest order lookup | Render guest path only when approved; otherwise preserve cart and prompt login. | PRD OQ-014; APP_FLOW AFQ-02 |
| Launch language and language switch | Use the approved launch language; keep Bangla font support available, but do not imply a language switch exists until enabled. | PRD OQ-010 |
| AI provider/model, supported garments, upload limits and generation limits | Read from approved provider/configuration; otherwise gate the affected feature. | PRD OQ-011, upload requirements, OQ-024 |
| Complete Outfit Try-On | Treat as feasibility-dependent; do not design it as a guaranteed MVP capability. | PRD FR-043 / Section 24; APP_FLOW Section 13 / OQ-012 |
| Photo retention, deletion, processor and consent wording | Original photo and unsaved previews are active-session-only; use legal-approved notice and actual deletion workflow/timeframe. Explicitly saved generated images follow a separate approved retention policy. No instant-deletion or no-training promises. | PRD FR-036, FR-038, FR-047; APP_FLOW Section 12 |
| Delivery zones, charges, delivery estimates and serviceability | Populate only from active business configuration; no hardcoded example amounts. | PRD OQ-005/OQ-006; BR-004 |
| Payment methods/providers and COD rules | Display only confirmed, integrated and enabled methods. | PRD OQ-007; BR-004 |
| Return, exchange and cancellation rules | Show request controls only where approved policy says eligible. | PRD FR-024; BR-004 |
| Product/category taxonomy and subcategory rules | Use seven style categories plus two cross-cutting collections as listed in APP_FLOW; product-type taxonomy remains subject to PRD decisions. | PRD OQ-002; APP_FLOW 7.2 |
| New Arrival, Trending, Best Seller and Premium Collection criteria | Use admin-configured rules/content; do not invent time windows or thresholds. | PRD OQ-033/OQ-034 |
| Reviews, customer-photo display and sharing | Apply eligibility/moderation and separate public-display consent; no public display by default. | PRD FR-032–034, FR-045; OQ-017/OQ-026 |
| Newsletter, social feed, notifications and support channels | Show only configured and approved channels/content. | PRD OQ-025/OQ-031/OQ-032 |
| Admin staff roles and MFA | Follow final staff-role matrix; show MFA only if enabled. | PRD OQ-036; FR-088 |

## 15. Final UI Quality Checklist

### 15.1 Specification Coverage

* [x] All customer page IDs PG-01 through PG-32 have a defined visual specification or shared-template specification.
* [x] All administration screen IDs AD-01 through AD-11 have a defined visual specification.
* [x] Homepage retains all 21 PRD sections and fallback behaviour for content-dependent sections.
* [x] Reusable listing, account, policy, form, product-card and admin-shell patterns are defined.
* [x] Loading, empty, error, unavailable, validation, success and destructive-action states are documented.
* [x] Desktop, tablet and mobile layout rules are documented.

### 15.2 Cross-Document Alignment

* [x] UI page IDs and names follow the APP_FLOW sitemap.
* [x] Release-sensitive AI features follow PRD phasing; Complete Outfit Try-On is not treated as guaranteed MVP scope.
* [x] AI preview and AI size recommendation remain separate features with separate disclaimers.
* [x] Delivery, payment, return, privacy and logistics claims remain configuration- or approval-dependent.
* [x] Original Try-On photos and unsaved previews are active-session-only; generated images persist as Saved Looks only after explicit customer save. Customer photos and saved looks are private by default; public display requires separate consent.
* [x] The UI does not promise instant photo deletion, guaranteed fit, fixed AI processing stages or unconfirmed usage-credit behaviour.
* [x] Navigation taxonomy distinguishes seven style categories from two cross-cutting collections.

### 15.3 Figma / Frontend Handoff Checks (Must Be Verified During Design and Implementation)

* [ ] Confirm final logo, brand name, approved photography and production copy.
* [ ] Verify colour contrast for every text/background combination against WCAG 2.1 AA.
* [ ] Confirm the exact upload constraints, active-session expiry/deletion timing, saved generated-image retention policy and consent/legal wording with the selected AI provider and legal reviewer.
* [ ] Confirm guest try-on, under-18 policy, guest checkout and launch language decisions.
* [ ] Confirm delivery zones/charges, payment methods, return policy and customer-support channels.
* [ ] Validate product size charts and all product-specific measurements in inches.
* [ ] Validate all product images and 3:4 image crops; allow exceptions for editorial banners and shared-look imagery.
* [ ] Test keyboard navigation, screen-reader labels, focus management and 44px minimum touch targets.
* [ ] Test responsive layouts at 1440px, 1024px, 768px, 390px and 320px widths.
* [ ] Verify all page states against real API responses; do not use sample content as production data.

**Readiness status:** The page-coverage gap in this UI specification is completed. The document is ready to be used as the Figma page-design brief, subject to the unresolved business/legal/provider decisions above. It is not a declaration that those decisions, final assets, contrast tests or implementation QA are already complete.

## 16. Device-Specific UI Design Strategy

### 16.1 Design Approach

  Use mobile-first performance principles while preparing complete desktop layouts and mobile adaptations. Tablet layouts should be specified as responsive adaptations, not as a separate independent website.

  The website must provide an optimized experience across:

  * Desktop / Laptop

  * Tablet

  * Mobile

  Do not create three completely independent designs for every page.

  Instead, use a combination of:

  * Complete Desktop UI designs.

  * Separate Mobile UI adaptations.

  * Tablet-specific responsive layout specifications.

### 16.2 Desktop / Laptop Design

  Create complete Desktop UI designs for every unique page template.

  Suggested Figma frame:

  * 1440 × 900 px

### 16.3 Mobile Design

  Create separate Mobile UI designs for every unique page template where the layout or interaction changes significantly.

  Suggested Figma frame:

  * 390 × 844 px

  Pay special attention to:

  * Mobile navigation

  * Product grids

  * Product details

  * AI Virtual Try-On

  * Cart and Checkout

  * Forms and input fields

### 16.4 Tablet Design

  Tablet layouts should primarily adapt from the Desktop and Mobile designs.

  Suggested Figma frame:

  * 768 × 1024 px

  Define tablet-specific:

  * Navigation behaviour

  * Grid columns

  * Section spacing

  * Sidebar and filter behaviour

  * Image proportions

  * Component positioning

  Validate all important pages at tablet dimensions.

### 16.5 Reusable Page Templates

  Use reusable page templates wherever possible.

  For example:

  * Panjabi Collection

  * Old Money Collection

  * Streetwear Collection

  These pages should share the same Collection Page layout and component structure while preserving their approved collection-specific backgrounds, accents, and content.

### 16.6 Responsive Breakpoints

  Use these project breakpoints:

  * Mobile: 320px–767px

  * Tablet: 768px–1023px

  * Desktop: 1024px and above

  Layouts must adapt smoothly between breakpoints.

### 16.7 Final Design Requirements

  The final Figma handoff must include:

  1. Complete Desktop layouts for all unique page templates.

  2. Mobile layouts for all unique page templates.

  3. Tablet responsive specifications.

  4. Shared component behaviour across devices.

  5. Responsive navigation and interaction states.

  6. Consistent typography, colours, spacing, and visual identity.

  The objective is to create one consistent, premium, fully responsive e-commerce website rather than three separate websites.

  Do not compromise the approved Modern Earthy Luxury brand identity across devices.
## Security & Privacy UI Specifications

### 1. Login Page
- Password visibility toggle.
- Forgot Password option.
- Clear authentication error messages.
- Loading state during login.
- Secure login feedback.

### 2. Registration Page
- Password visibility toggle.
- Password strength indicator.
- Password requirement guidance.
- Form validation feedback.
- Clear registration success/error states.

### 3. AI Virtual Try-On Page
- Display image privacy notice before upload.
- Show supported image formats and size limits.
- Provide image preview before processing.
- Provide Remove/Replace Image option.
- Show AI processing status.
- Display processing failure messages.
- Provide Delete Image option.
- Clearly explain temporary image handling.

### 4. User Profile & Account Settings
- Change password option.
- Logout option.
- Account security settings.
- Delete account option (if supported).
- Privacy information.

### 5. Admin Dashboard
- Admin-only access.
- Secure session expiration message.
- Unauthorized access error state.
- Confirmation before sensitive administrative actions.

### 6. Global Security UI
- HTTPS-only website.
- Never display API keys or secret credentials.
- Never expose internal server errors.
- Display user-friendly error messages.
- Show loading, success and failure states.
- Ensure security-related UI works on mobile and desktop.

### 7. Design Consistency
- Preserve the existing brand identity.
- Maintain the existing color system and typography.
- Do not redesign existing pages unnecessarily.
- Add security-related UI elements using existing design components.
- Maintain responsive layouts.