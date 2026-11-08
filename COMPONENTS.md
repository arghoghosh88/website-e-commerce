# Reusable UI Components (COMPONENTS.md)
## Bangladesh Men's Fashion AI E-Commerce Platform

| Field | Detail |
|---|---|
| **Document** | COMPONENTS.md |
| **Version** | 1.0 (Draft) |
| **Last Updated** | 6 November 2026 |
| **Primary references** | `UI_SPEC.md` (final) and the approved Figma design. This document **catalogues and documents** them for developers; it does **not** introduce a new design system. |
| **Companions** | `TRD.md` §5 (frontend architecture), `PLAN.md` Stage M4, `TESTING.md` §6, §14–15 |

> **Preservation rule (UI_SPEC §12 and Security UI §7).** All values below are taken from UI_SPEC. Where a component is needed that UI_SPEC does not define (e.g., a password-strength meter), it is built **only from existing tokens and components**, and is flagged **[Derived]**. Anything flagged **[Needs design confirmation]** must be reviewed in Figma before implementation, per UI_SPEC §12 rule 4.

---

## Table of Contents

1. Design System Overview
2. Design Tokens (Colour, Typography, Spacing, Shape)
3. Buttons
4. Announcement Bar, Navbar, Header and Mobile Navigation
5. Footer
6. Product Card
7. Product Grid
8. Category Card
9. Product Gallery
10. Variant Selectors and Cart Components
11. Search and Filter Components
12. Forms and Input Fields
13. Login and Registration Components
14. AI Virtual Try-On Components
15. Loading, Error and Success Feedback
16. Modal, Drawer and Popup Components
17. Security-Related UI Components
18. Wishlist Components
19. Review Components
20. Responsive Behaviour
21. Accessibility Requirements
22. Admin Shell Components
23. Traceability

---

## 1. Design System Overview

### 1.1 Identity

| Item | Specification (UI_SPEC §1.4, §2) |
|---|---|
| Paradigm | **Modern Earthy Luxury** — modern minimalist structure, subtle Bangladeshi traditional nuance |
| Colour balance | 65% soft neutral backgrounds · 20% earthy neutral containers · 10% dark contrast elements · 5% gold/maroon accents (UI_SPEC §1.5) |
| Tone | Trustworthy, elegant, clean, culturally resonant, performant |
| Approach | Mobile-first; one consistent site across Mobile / Tablet / Desktop (UI_SPEC §16) |

### 1.2 Component Principles

1. **Tokens only.** Components use Tailwind tokens from UI_SPEC §13.1 (`brand.*`, `collection.*`); no hard-coded hex values in component code.
2. **Presentation vs data.** Components receive data via props and never hardcode product names, prices, sizes, delivery charges or policy text (UI_SPEC §4.9, §6.5, §7.5; PRD BR-004).
3. **Always render all states.** Default, hover, focus, active, disabled, loading, success, error, selected (UI_SPEC §9).
4. **Server is authority.** Components display prices, eligibility and statuses supplied by the API; they never compute the amount charged (`TRD.md` §5.3).
5. **Safe by default.** Text is rendered as text; no `dangerouslySetInnerHTML` except the sanitised CMS renderer (§16 Safe-HTML below).
6. **Controlled extensions.** Any new component needed later is added to UI_SPEC first (UI_SPEC §12 rule 4).
7. **Collection pages reuse one template**; only background tint and accent token change (UI_SPEC §12 rule 3, §16.5).

### 1.3 Folder Mapping (`apps/web/components`)

| Folder | Contents |
|---|---|
| `ui/` | Button, Input, Select, Checkbox, Badge, Toast, Modal, Drawer, Skeleton, Accordion, Pagination, Alert |
| `layout/` | AnnouncementBar, Navbar, MobileDrawer, MobileBottomNav, Footer, Breadcrumbs, PageShell |
| `commerce/` | ProductCard, ProductGrid, CategoryCard, ProductGallery, SizeSelector, ColourSwatches, QuantityStepper, PriceBlock, CartSummary, PaymentMethodSelector, AddressForm |
| `search/` | SearchOverlay, SearchSuggestions, FilterBar, FilterPill, SortSelect |
| `tryon/` | TryOnUploadZone, PhotoGuidanceCard, ImagePreview, ConsentPanel, ProcessingOverlay, ResultCanvas, DisclaimerBox, ResultToolbar, TryOnErrorState |
| `account/` | LoginForm, RegisterForm, PasswordField, PasswordStrengthMeter, PrivacyCentre, ConsentList |
| `engagement/` | WishlistButton, ReviewList, RatingStars, ReviewForm |
| `admin/` | AdminShell, DataTable, ConfirmDialog, AuditLogTable |

### 1.4 Documentation Template

Every component below documents: **Purpose · Props/Inputs · Behaviour · States · Responsive · Accessibility**. Props are TypeScript interfaces (illustrative; final names may differ but behaviour must match).

---

## 2. Design Tokens

### 2.1 Colour (UI_SPEC §3.1, §3.2)

| Token (`tailwind`) | Hex | Role |
|---|---|---|
| `brand-beige` | `#F2EDE4` | Global page background (65%) |
| `brand-taupe` | `#DCD1C3` | Secondary background, borders, banners |
| `brand-cream` | `#F8F5EF` | Card surfaces, inputs, modal containers |
| `brand-espresso` | `#352A24` | Navbar, headings, primary text |
| `brand-sage` | `#899482` | Secondary accents, active filter tags, placeholder |
| `brand-gold` | `#A88A5A` | Premium badges, highlight borders (5%) |
| `brand-maroon` | `#713B43` | Traditional accent, sale badges, error text, cart badge |
| `brand-charcoal` | `#292929` | Primary buttons, dark interactive UI |
| `brand-footer` | `#211C19` | Footer background |

**Status colours:** Success surface `#E8F0E6` / text-icon `#2D5A27` · Warning `#FDF6E2` / `#8C6B12` · Error `#F9EBEA` / `#713B43` · Info `#EBF3F5` / `#1F5C6B`.

**Collection/page tokens:** Panjabi `#EFE5DC` + maroon accent · Old Money `#E8EAE1` + sage accent · Streetwear `#E9E9E4` + olive `#53634B` · Try-On page `#EAE2D6` · Gold must never be a full-page background (UI_SPEC §12).

### 2.2 Typography (UI_SPEC §3.3)

| Role | Font | Fallback |
|---|---|---|
| Headings/display | Cormorant Garamond (or Playfair Display) | Georgia, serif |
| Body/UI | Plus Jakarta Sans (or Inter) | system-ui, sans-serif |
| Bangla | Hind Siliguri (or Noto Serif Bengali) | sans-serif |

| Token | Desktop / Mobile | Line height | Weight |
|---|---|---|---|
| Display Hero | 48 / 32 px | 1.15 | Bold |
| H1 | 36 / 28 | 1.20 | Bold |
| H2 | 28 / 22 | 1.25 | SemiBold |
| H3 | 22 / 18 | 1.30 | Medium |
| Lead | 18 / 16 | 1.40 | Regular |
| Body Large | 16 / 15 | 1.50 | Regular |
| Body | 14 / 14 | 1.50 | Regular |
| Caption | 12 / 11 | 1.40 | Medium |
| Button | 14 / 14 | 1.00 | SemiBold |
| Price | 18–24 / 16–20 | 1.10 | Bold |

### 2.3 Spacing, Layout, Shape, Motion

| Group | Values |
|---|---|
| Spacing (8-pt) | 4, 8, 12, 16, 24, 32, 48, 64, 96 px (`space-1`…`space-24`) |
| Breakpoints | Mobile 320–767 (4 cols, 16 px margin, 12 px gutter) · Tablet 768–1023 (8 cols, 24 px, 16 px) · Desktop ≥1024 (12 cols, max 1280 px, 32 px, 24 px) |
| Radius | sm 4 · md 8 (buttons, inputs) · lg 12 (cards, panels) · xl 16 (modals, try-on canvas) · full (pills, swatches, badges) |
| Shadow | subtle `0 2px 8px rgba(53,42,36,.04)` · hover `0 8px 24px rgba(53,42,36,.08)` · overlay `0 16px 48px rgba(33,28,25,.16)` |
| Borders | 1 px standard (`#DCD1C3`), 2 px focus/active |
| Icons | Lucide, 1.5 px stroke; 16 / 20 / 24 / 32–48 px scales |
| Motion | Hover y-shift −1 px; card image `scale-105`/1.03 in 300 ms; accordion chevron 200 ms ease-in-out. Respect `prefers-reduced-motion` (§21) |

### 2.4 Global Interaction States (UI_SPEC §9)

| State | Treatment |
|---|---|
| Default | Base tokens, 1 px border, subtle shadow |
| Hover | Darken 5% or specified token, −1 px y, `shadow-hover` |
| Active | Darken 10%, scale 0.98 |
| Focus | 2 px Antique Gold outline, 2 px offset |
| Disabled | 50% opacity, `cursor-not-allowed`, `pointer-events-none`, `aria-disabled` |
| Loading | Inline spinner / pulsing bar; control not re-clickable |
| Success | `#E8F0E6` surface, check icon, green text |
| Error | Maroon border (`#713B43`), error icon, inline message |
| Selected | 2 px `#352A24` or `#A88A5A` border, bold text |

---

## 3. Buttons

### 3.1 `Button`

| | |
|---|---|
| **Purpose** | Triggers actions. Variants map to UI_SPEC §4.7. |
| **Props** | `variant: 'primary' \| 'secondary' \| 'accent' \| 'accentOutline' \| 'heritage' \| 'icon' \| 'link'` · `size?: 'md' \| 'lg'` · `loading?: boolean` · `disabled?: boolean` · `iconLeft?/iconRight?: ReactNode` · `fullWidth?: boolean` · `type?: 'button'\|'submit'` · `aria-label?` (required when icon-only) · `onClick` |

| Variant | Spec |
|---|---|
| **Primary** | Bg `#292929`, text `#F8F5EF`, 14 px SemiBold, radius 8; hover `#352A24` + −1 px; active `#1A1A1A`; focus ring gold 2 px |
| **Secondary** | Bg `#F8F5EF`, text `#352A24`, 1 px `#DCD1C3`; hover `#F2EDE4` |
| **Accent / Try-On** | Bg `#A88A5A` (text cream) or outline 1.5 px `#A88A5A` (text espresso); hover `#8F7347`; sparkle icon allowed |
| **Heritage** | Bg `#713B43`, text cream (Panjabi context only) |
| **Icon** | Circular, min 44×44 touch target (visual may be 24 px icon) |

**Behaviour:** `loading` shows spinner, sets `aria-busy`, ignores clicks (prevents double submit — important for order placement, `TRD.md` §6.3.1). `type="submit"` default only inside forms. Destructive actions use a confirm dialog (§16), not a special "danger" colour outside the palette; use Heritage/Maroon text treatment per approved Figma **[Needs design confirmation]**.

**States:** default, hover, active, focus-visible, disabled, loading.
**Responsive:** min height 44 px on touch; full-width option for mobile CTAs (e.g., Add to Cart); sticky bottom bar variants (§14.8).
**Accessibility:** native `<button>`; visible focus; disabled uses `disabled` (or `aria-disabled` when it must remain focusable to explain why); icon-only buttons require `aria-label`; contrast per §21.

### 3.2 `Badge`

| | |
|---|---|
| **Purpose** | Labels on cards and pages. |
| **Props** | `tone: 'sale' \| 'premium' \| 'tryon' \| 'status' \| 'info' \| 'success' \| 'warning' \| 'error'` · `children` |
| **Spec** | Sale = Maroon; Premium = Gold; **Try-On Ready = Sage** (UI_SPEC §4.9); radius sm/full; 11–12 px caption. "Sale" and "Try-On Ready" are **derived from data** (active sale price; `tryon_eligible`), never typed by hand. |
| **A11y** | Not colour-only: always includes text. Badge text must meet contrast on its background (see §21.3). |

### 3.3 `CartBadge` / `CountBadge`

Min 18×18 px circle at `-top-1 -right-1`, Maroon bg, cream 10 px Bold text (UI_SPEC §4.5). Props: `count`, `max=99`. Announces count to assistive tech via the parent's `aria-label` ("Shopping cart, 3 items").

---

## 4. Announcement Bar, Navbar, Header and Mobile Navigation

### 4.1 `AnnouncementBar` (FR-054)

| | |
|---|---|
| **Purpose** | Staff-managed, schedulable site message. |
| **Props** | `message: string`, `link?: {label, href}`, `tone?: 'espresso' \| 'maroon'`, `onDismiss` |
| **Behaviour** | Height 36 px desktop / 32 px mobile; bg Espresso (Maroon during promo); cream 12 px Medium centred; dismissible (16 px close icon); dismissal remembered in `localStorage` (non-sensitive) until the message changes; hidden outside `publish_starts_at–ends_at`. Content from CMS; claims need approved copy (BR-003). |
| **States** | visible, dismissed, hidden-by-schedule |
| **Responsive** | Text wraps to max two lines on mobile; close button ≥ 44 px target (hit area larger than 16 px icon) |
| **A11y** | `role="region"` + `aria-label="Announcement"`; close button `aria-label="Dismiss announcement"`; not an auto-rotating carousel |

### 4.2 `Navbar` (FR-055)

| | |
|---|---|
| **Purpose** | Primary navigation and utility cluster. |
| **Props** | `categories: {label, href}[]` (7 style + 2 collections), `cartCount`, `wishlistCount`, `user?: {name}`, `tryOnEnabled: boolean`, `onSearch` |
| **Spec** | Sticky top, `z-50`; bg `#352A24`; text cream; active link Gold; height 72 px desktop / 60 px mobile. Right cluster: Search icon, **Virtual Try-On quick pill (gold border)**, Wishlist heart + badge, Cart + badge, Account icon. |
| **Behaviour** | The Try-On pill is shown only when `tryOnEnabled` (feature flag) and routes per APP_FLOW §12.1 (no product → pick eligible product). Account control per UI_SPEC §4.4: guest → "Login / Register" popover; authenticated → dot indicator + popover (Dashboard, My Orders, Saved Looks, Wishlist, Profile, Logout). Logout calls the API then clears client state (TRD §11). |
| **States** | default, scrolled (same style; no colour change beyond shadow), active-link, search-open, popover-open |
| **Responsive** | Desktop: logo + horizontal links + utility cluster. Tablet/mobile: hamburger (24 px) → `MobileDrawer`; cart/search/wishlist stay in the bar; wishlist/account also in bottom nav |
| **A11y** | `<nav aria-label="Main">`; `aria-current="page"` on active link; popover is a disclosure (button + `aria-expanded`); all icons have `aria-label`; skip-to-content link is the first focusable element |

### 4.3 `MobileDrawer`

Full-height sliding panel from the left, bg `#352A24`, 20 px links, Gold active indicators (UI_SPEC §8.1). Props: `open`, `onClose`, `links`. Focus trap, `Escape` closes, focus returns to the hamburger, backdrop click closes, body scroll locked. `aria-modal="true"`, `role="dialog"`, labelled "Menu".

### 4.4 `MobileBottomNav` *(Proposed in UI_SPEC §8.1; APP_FLOW AFQ-12)*

| | |
|---|---|
| **Spec** | Fixed, 56 px, `#352A24`; five items: Home, Shop, **Virtual Try-On (centre highlighted pill)**, Wishlist, Account |
| **Behaviour** | **Hidden during Checkout and while a try-on is generating** (UI_SPEC §8.1). Try-On item hidden if the feature flag is off (4 items remain, evenly spaced). Active item Gold. |
| **A11y** | `<nav aria-label="Primary mobile">`; each target ≥ 44×44 with labels (not icon-only); `aria-current` |
| **Responsive** | Visible < 768 px only. Content gets bottom padding so nothing is obscured; honour safe-area insets |

### 4.5 `Breadcrumbs` *(Proposed, APP_FLOW §7.3 / AFQ-09)*

Props: `items: {label, href?}[]`. Renders `<nav aria-label="Breadcrumb"><ol>`; last item `aria-current="page"`; truncates middle items on mobile.

### 4.6 `PageShell`

Wraps announcement bar, navbar, content region (`<main id="main">`), footer, toast region, cookie banner. Applies page background token (default `#F2EDE4`; collection/try-on tokens via `theme` prop). Handles a global error boundary with the friendly fallback (AFQ-29).

---

## 5. Footer (`Footer`, FR-074)

| | |
|---|---|
| **Purpose** | Navigation, legal, contact, newsletter. |
| **Props** | `quickShop[]`, `customerCare[]` (Order Tracking, Size Guide, Returns Policy, FAQ, Contact — only approved/published pages), `social[]`, `contact` (from approved settings only), `paymentBadges[]` (only enabled methods), `onSubscribe` |
| **Spec** | Bg `#211C19`; headings `#F2EDE4` 14 px Bold; links `#DCD1C3` 13 px, hover Gold; 4 columns (Brand + trust claims verified only · Quick Shop · Customer Care · Newsletter + Social); bottom bar with copyright and ৳ indicator |
| **Behaviour** | Newsletter: email validation, honeypot, rate-limited API, success/error message, double opt-in notice (FR-071). Policy and AI Try-On Notice links always present. No hard-coded phone/hours/claims (UI_SPEC PG-28). |
| **States** | default, newsletter loading/success/error/already-subscribed |
| **Responsive** | Desktop 4-col · Tablet 2-col · Mobile single accordion stack (accordion rules §16.4) |
| **A11y** | `<footer>` landmark; each column a labelled `<nav>`; newsletter input has a visible label; link contrast on dark bg ≥ 4.5:1 |

---

## 6. Product Card (`ProductCard`, FR-001)

| | |
|---|---|
| **Purpose** | Compact product summary in listings, carousels, search, wishlist, related items. |
| **Props** | `product: { slug, name, categoryLabel, primaryImage:{src,alt,width,height}, secondaryImage?, colours:{name,hex}[], price: string, salePrice?: string, isPremium?: boolean, tryOnReady?: boolean, inStock: boolean }` · `wishlisted: boolean` · `onToggleWishlist(productId)` · `priority?: boolean` (above-the-fold images) |
| **Spec** | Bg cream; radius lg; shadow-subtle; image container **3:4**; image zoom `scale-105` 300 ms on hover (secondary image swap if supplied); badges top-left (Sale/Premium/Try-On Ready); wishlist heart top-right (circular cream, 16 px icon); content `p-4`: category tag (11 px uppercase Sage), name (14 px SemiBold Espresso), 12 px colour dots, price block (`৳ 2,450` Bold; original struck-through Taupe). Example prices in UI_SPEC are formatting samples only. |
| **Behaviour** | Whole card links to PDP (`/products/{slug}`); the heart is a separate button (does not navigate). Price via shared `formatBDT()` (`৳ 12,500`). Out-of-stock treatment follows business decision (OQ-035): either hidden by the query or shown with an "Unavailable" overlay and no wishlist-to-cart. Missing optional data (colours, secondary image) never breaks layout. |
| **States** | default, hover, focus-within, wishlisted, out-of-stock, loading (skeleton with 3:4 placeholder), image-error (neutral placeholder) |
| **Responsive** | 2-up on mobile (12 px gutter), 2 on tablet, 3–4 on desktop (UI_SPEC §8.2); hover effects only on pointer devices; heart target ≥ 44 px (visual 16 px) |
| **A11y** | Card is one link with accessible name = product name + price (sale and original described: "Now ৳2,450, was ৳2,950"); image `alt` meaningful (`"Men's Maroon Silk Panjabi with Embroidery - Front View"`); heart `aria-pressed` + `aria-label="Add to wishlist"/"Remove from wishlist"`; colour dots decorative with text alternative list; strike-through price has visually-hidden "was" text |

### 6.1 `PriceBlock`

Props `price`, `salePrice?`, `size?`. Shows ৳ + thousands separators; sale shows discounted price prominently and original struck through; never computes totals. A11y: visually hidden "Original price"/"Sale price" labels.

---

## 7. Product Grid (`ProductGrid`)

| | |
|---|---|
| **Purpose** | Responsive listing of `ProductCard`s with pagination or load-more. |
| **Props** | `items`, `loading`, `error?`, `emptyState: ReactNode`, `resultCount`, `onRetry`, `pagination: {mode: 'pages'\|'loadMore', ...}` (mode TBD in PRD FR-001) |
| **Behaviour** | CSS grid: 4 cols desktop (or 3 with filter sidebar), 2 tablet, 2 mobile; consistent 3:4 images to avoid layout shift; preserves scroll/filter/sort when returning from a PDP (UI_SPEC PG-05/07). |
| **States** | loading (skeleton cards that preserve final dimensions), populated, empty ("no products" + one next action), no-results (alternative suggestions), error with retry |
| **Responsive** | Gutter 24 px desktop / 16 tablet / 12 mobile |
| **A11y** | `role="list"`; result count in an `aria-live="polite"` region updated after filtering ("24 products"); focus returns to the grid heading after page change |

---

## 8. Category Card (`CategoryCard`, FR-058)

| | |
|---|---|
| **Purpose** | Entry tiles for "Shop by Category" and collection entry points. |
| **Props** | `name`, `href`, `image:{src,alt}`, `kind: 'style' \| 'collection'`, `themeKey?: 'panjabi'\|'old_money'\|'streetwear'` |
| **Behaviour** | Image tile with label overlay (text on solid/gradient scrim ensuring contrast); the `themeKey` only affects the collection's own page tint/accent, never the card's layout (UI_SPEC §12 rule 3). Nine tiles: seven style categories + two cross-cutting collections. |
| **States** | default, hover (image zoom, shadow-hover), focus, loading skeleton |
| **Responsive** | Mobile 2-col (or horizontal scroll with visible affordance); tablet 3-col; desktop per homepage layout |
| **A11y** | Link with visible text label (not image-only); decorative image `alt=""` if label repeats the name; focus ring visible on image edges |

---

## 9. Product Gallery (`ProductGallery`, FR-007)

| | |
|---|---|
| **Purpose** | View multiple product (and per-colour) images with zoom. |
| **Props** | `images: {src, alt, width, height, colourId?}[]`, `activeColourId?`, `initialIndex?` |
| **Spec** | **Desktop:** main image 500×667 (3:4) + 4-thumbnail strip, active thumbnail 1 px gold border; zoom on hover/click. **Mobile:** swipeable carousel with pagination dots (active `#352A24`, inactive `#DCD1C3`), pinch-to-zoom modal via top-right icon. |
| **Behaviour** | Selecting a colour swatch swaps to that colour's images (falls back to common images); keyboard arrows move between images; lightbox zoom modal (§16.1). First image loaded with priority; others lazy. |
| **States** | loading (skeleton 3:4), loaded, zoomed, single-image (no strip/dots), image-error fallback |
| **Responsive** | Desktop left 60% column of PDP; mobile stacked at top; no horizontal page overflow |
| **A11y** | Carousel `role="region"`, `aria-roledescription="carousel"`; slide controls are buttons with labels; "Image 2 of 5" announced; thumbnails are buttons with `aria-current`; every image has descriptive `alt`; swipe is not the only way (buttons provided); zoom modal traps focus and closes with `Escape` |

---

## 10. Variant Selectors and Cart Components

### 10.1 `SizeSelector` (FR-009, UI_SPEC §7.2)

| | |
|---|---|
| **Props** | `sizes: {label, available: boolean}[]`, `value?`, `onChange`, `onOpenSizeGuide`, `error?` |
| **Spec** | Horizontal square pills, min 44×44; default cream + taupe border; **selected** espresso bg + cream text; **out of stock** beige bg, sage text, diagonal strike, non-selectable. Right-aligned link "📏 Size Guide (Inches)". Sizes come from data, never hardcoded (UI_SPEC §6.5). **No size pre-selected** (AFQ-14 default). |
| **Behaviour** | Add-to-cart requires a size where sizes apply; missing size shows inline error and scrolls/focuses the selector. |
| **A11y** | `role="radiogroup"` with `aria-label="Size"`; each pill `role="radio"` + `aria-checked`; unavailable use `aria-disabled` and text "Out of stock" for screen readers (strike-through is not the only cue); arrow-key navigation |
| **Responsive** | Wraps to multiple rows; spacing ≥ 8 px |

### 10.2 `ColourSwatches` (FR-008, UI_SPEC §7.3)

Props `colours: {id, name, hex, available, tryOnSupported}[]`, `value`, `onChange`. 32 px circles; active = 2 px gold ring with 2 px gap; tooltip with colour name on hover **and focus**. Out-of-stock swatch shows a strike overlay + "(out of stock)" in its accessible name. `radiogroup` semantics; hit area padded to 44 px; colour name always available as text, never colour-only.

### 10.3 `QuantityStepper` (UI_SPEC §7.4)

Props `value`, `min=1`, `max`, `onChange`, `disabled`. 120×40 box: `−` (40 px) / value (40 px) / `+` (40 px), cream, 1 px taupe. Clamps at min/max (max from stock and rules TBD, AFQ-23). A11y: buttons labelled "Decrease/Increase quantity"; value is a numeric `<input inputmode="numeric">` with label; announces changes politely. Touch targets padded to 44 px.

### 10.4 `AddToCartButton`

Primary full-width on mobile. Props `variantId`, `disabled`, `onAdded`. Shows loading → success toast "Added to cart" (count updates, AFQ-11 default); handles "variant unavailable" and price-changed errors from the API.

### 10.5 `CartSummary` (UI_SPEC §7.5)

| | |
|---|---|
| **Props** | `subtotal`, `delivery?: {amount?: string, state: 'calculated'\|'pending_address'\|'unavailable'}`, `discount?`, `total`, `currency='BDT'` (all strings from API) |
| **Spec** | Cream card, `p-6`, radius lg; rows Subtotal, Delivery Charge, Promo Discount (`− ৳ XXX` Maroon), **Total Payable** 20 px Bold Espresso. Delivery row shows "Calculated after address" until a serviceable address exists, or is omitted; **never a hard-coded amount**. |
| **States** | loading (skeleton rows), populated, delivery-unavailable (blocks checkout with message), price-changed notice (AFQ-24) |
| **A11y** | Description list semantics (`<dl>`); total in `aria-live="polite"` region when it changes; discount text includes the word "Discount" (not colour-only) |

### 10.6 `PaymentMethodSelector` (UI_SPEC §7.6, §11.4)

Radio-card stack; each card: radio, title/logo, short subtext; active card gets `#352A24` border + cream highlight. **Renders only methods returned as enabled by the API** (COD/MFS providers); never placeholder logos. `radiogroup` with legend "Payment method". Selection persists on error; payment-failed state returns here with cart intact (FR-019).

### 10.7 `AddressForm` (UI_SPEC §11.3, BD-3)

Fields: recipient name, mobile (`PhoneInput`), Division (dropdown of 8), District and Thana/Upazila (dependent dropdowns), detailed address (house/road/area), landmark (optional), postal code (optional). Shows serviceability message after selection (BD-4). Field-level errors; autocomplete attributes (`name`, `tel`, `address-line1`, …). See §12.

---

## 11. Search and Filter Components

### 11.1 `SearchOverlay` and `SearchSuggestions` (UI_SPEC §4.3, FR-003)

| | |
|---|---|
| **Props** | `open`, `onClose`, `onSubmit(query)`, `suggestions: {name, thumb, price, categoryTag, href}[]`, `recent: string[]`, `popularCategories` |
| **Spec** | Opens from the header icon as an expandable top overlay/drawer on cream; 15 px input, placeholder "Search Panjabi, Streetwear, Shirts..."; suggestion list with thumbnail, ৳ price, category tags; empty-input state shows recent searches (if consent/local) and popular categories. |
| **Behaviour** | Debounced (≈250 ms) suggestion requests; cancels outdated requests; Enter navigates to Search Results; empty query handled without error; query is **always rendered as text**; recent searches kept locally only. Rate-limit (429) handled gracefully. |
| **States** | idle, typing, loading, suggestions, no-suggestions, error (inline, retry), offline |
| **Responsive** | Full-width on mobile with large input and ≥ 44 px rows |
| **A11y** | ARIA combobox pattern: `role="combobox"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`; ↑/↓ to move, Enter to choose, `Escape` closes; results count announced politely; focus trapped within overlay, returns to trigger |

### 11.2 `FilterBar` / `FilterPill` / `SortSelect` (FR-004, FR-005)

| | |
|---|---|
| **Props** | `filters: {category, size[], colour[], priceRange:[min,max], availability, discount?}`, `onChange`, `onClear`, `resultCount`, `sort`, `onSortChange` |
| **Spec** | Pill toggles: inactive cream + taupe border → active charcoal text with sage tint or gold check (UI_SPEC §9). Price range in ৳. Sort options: Newest, Price low→high, Price high→low (+ Rating/Popularity when data exists). |
| **Behaviour** | Multiple filters combine; "Clear all" restores full list; result count shown; filter/sort state kept in URL query (shareable, back-button safe) using **validated allow-listed keys only**; selection persists across paging. |
| **States** | default, applied (count badge), loading results, no results |
| **Responsive** | Desktop: sidebar or top bar. Mobile: "Filters" button → full-height sheet with sticky "Show N results" and "Clear" actions |
| **A11y** | Groups are `<fieldset>` with `<legend>`; pills are checkboxes/toggle buttons with `aria-pressed`; applied filters listed as removable chips with labelled remove buttons; results update announced via live region |

---

## 12. Forms and Input Fields

### 12.1 `TextField`, `Select`, `Textarea`, `Checkbox`, `RadioGroup`

| | |
|---|---|
| **Purpose** | Standard inputs (UI_SPEC §4.8). |
| **Props** | `label` (required), `name`, `type`, `value`, `onChange`, `hint?`, `error?`, `required?`, `disabled?`, `autoComplete`, `inputMode`, `maxLength`, `aria-describedby` auto-wired |
| **Spec** | Bg cream; border 1 px taupe; radius 8; text 14 px Espresso; placeholder Sage; **focus** border 2 px `#352A24`; **error** border 1.5 px Maroon + inline 12 px Maroon message with error icon. Labels 13 px Medium Espresso (fixed or floating, per UI_SPEC §7.6). |
| **Behaviour** | Validate on blur and submit (never aggressively while typing); error text is specific and actionable (NFR-021); server errors map back to fields; preserves input on error; `autoComplete` values set correctly. |
| **States** | default, hover, focus, filled, disabled, error, success (optional), loading (async validation) |
| **Responsive** | Single-column stacking on mobile; 16 px minimum font on iOS inputs to avoid zoom (implementation note: UI_SPEC body 14 px — confirm exception **[Needs design confirmation]**); target height ≥ 44 px |
| **A11y** | Visible `<label for>`; placeholder is never the only label; error linked via `aria-describedby` + `aria-invalid="true"`; required indicated by text and `aria-required`; error summary at top of long forms with links to fields; `fieldset/legend` for groups |

### 12.2 `PhoneInput` (UI_SPEC §11.2, BD-2)

Placeholder `017XXXXXXXX` or `+880 17XX-XXXXXX`. Accepts 11-digit local numbers beginning `013–019` and `+880` format; strips spaces/hyphens; shows normalised value on blur; inline error "Enter a valid Bangladesh mobile number". `inputMode="tel"`, `autoComplete="tel"`. Client check is UX only; the API re-validates (`TRD.md` §16).

### 12.3 `PasswordField` — see §13.3. `Dependent Dropdown` (Division → District → Thana) disables child until parent selected and announces loaded options.

### 12.4 Form-Level Behaviour

Submit button shows loading and blocks double-submit; CSRF header attached by the API client (not visible to users); on `422/400` field errors focus the first invalid field; on `429` show a calm "Please wait a moment and try again" message with countdown if `Retry-After` is present; on `5xx` show the generic safe message (§15).

---

## 13. Login and Registration Components

### 13.1 `LoginForm` (PG-18, UI_SPEC Security UI §1)

| | |
|---|---|
| **Props** | `onSuccess(returnTo)`, `returnTo?` (validated relative path), `identifierMode: 'email'\|'phone'\|'either'` (OQ-015) |
| **Elements** | Identifier field, `PasswordField` with show/hide toggle, "Forgot password?" link, primary "Log in" button, "Create account" link |
| **Behaviour** | Generic failure text: "Incorrect details. Please try again." — never says which field is wrong (APP_FLOW I2); loading state on submit; handles lockout/throttle with a neutral message and wait time; after success returns to the originating page via the safe return-to rule (APP_FLOW §18.2; open redirects rejected). |
| **States** | idle, validation-error, submitting, auth-error, throttled, success (redirect), session-expired notice (if arriving from expiry) |
| **Responsive** | Cream form card (`radius-lg`) centred on `#F2EDE4`; full-width inputs on mobile |
| **A11y** | Error announced via `role="alert"`; focus moves to the error summary; password toggle is a button with `aria-pressed` and label "Show password"; `autocomplete="username"` / `"current-password"` for password managers |

### 13.2 `RegisterForm` (PG-19, Security UI §2)

Fields: full name, email and/or phone (per OQ-015), password, confirm (optional), **Terms & Privacy acceptance checkbox** (required; links to policy pages), and — where the try-on age gate applies — an "I confirm I am 18 or older" control shown **in the try-on consent step, not here** (TA-01). Duplicate account → message with Login and Forgot Password links. Under-18 behaviour follows OQ-009 (do not invent parental flows). Success → verification step (code or "check your email") (APP_FLOW I5). States: idle, validating, submitting, duplicate, invalid-phone, terms-not-accepted, verification-required, success. A11y as 13.1; password rules read by screen readers.

### 13.3 `PasswordField` and `PasswordStrengthMeter` **[Derived from Security UI §2]**

| | |
|---|---|
| **Props** | `value`, `onChange`, `showRequirements?`, `autoComplete: 'current-password'\|'new-password'` |
| **Spec** | Input per §12.1 + trailing eye icon button; strength meter built from existing tokens (segmented bar using Taupe → Sage → success green `#2D5A27`; weak uses Maroon) plus **text label** ("Weak/Fair/Strong"); requirement checklist with check/cross icons |
| **Behaviour** | Strength is advisory, computed client-side (e.g., zxcvbn-style); the **server enforces the real policy** (length, common-password list). Paste allowed. Never logs or stores the value. |
| **A11y** | Meter has `role="meter"`/`aria-valuenow` and text; requirement list `aria-live="polite"`; toggle button labelled; colour is never the only indicator |

### 13.4 `ForgotPasswordForm` / `ResetPasswordForm` (PG-20)

Neutral confirmation after submit regardless of account existence ("If an account exists, we've sent instructions"). Reset form validates the new password with the meter; expired/used token shows a clear message with "Request a new link". Resend limited with visible cooldown.

### 13.5 `VerificationCodeInput`

Props `length`, `onComplete`, `onResend`. One-time-code semantics (`autocomplete="one-time-code"`, `inputmode="numeric"`), paste support, attempt-limit and resend-cooldown messaging. A11y: single logical field with group label; announces errors.

---

## 14. AI Virtual Try-On Components (PG-11, UI_SPEC §6)

Page background `#EAE2D6`; workspace card cream; desktop split view (left canvas, right controls); mobile single column. Every component here is gated by the `FEATURE_TRYON_ENABLED` flag and product `tryOnEligible` (FR-053). Privacy behaviour is a **functional requirement of these components**, not decoration (TRD §8–9).

### 14.1 `PhotoGuidanceCard`

Title "Upload Your Photo for AI Try-On" (16 px display serif) and a checklist with micro-icons: ✓ Full-length or half-body portrait · ✓ Good indoor lighting, plain background · ✓ Single person, standing pose · ✕ Avoid dark shadows or heavy loose outerwear. Props: `guidanceItems` (content TBD, FR-037), `constraints: {formats[], maxMB, minSide, maxSide}` read from `GET /tryon/config` (approved upload configuration, TA-09). **Also states, in plain words, that the photo is processed temporarily and deleted after processing** (Security UI §3) with a link "Read AI Privacy Notice". A11y: list semantics; icons paired with text; ✓/✕ also have visually-hidden "Do"/"Avoid".

### 14.2 `TryOnUploadZone`

| | |
|---|---|
| **Purpose** | Select a photo from the device (drag-and-drop + button). |
| **Props** | `accept` (from config), `maxBytes`, `onFileSelected(file)`, `disabled`, `error?` |
| **Spec** | Cream container with `2px dashed #A88A5A` when empty; primary button "Choose Photo from Device"; shows accepted formats, size limit and resolution requirements from configuration (UI_SPEC §6.1) |
| **Behaviour** | **Client-side checks only** — type (allow-list), size, and dimensions read locally — before showing a preview. **Nothing is uploaded at this stage** (APP_FLOW D4–D5, AS-03). Rejection shows the unsupported-file message in a Maroon-bordered box with "Try Another Photo" (UI_SPEC §6.6). Client checks are advisory; the API re-validates (magic bytes, decode, re-encode, EXIF strip). The file lives only in memory (object URL revoked after use); never in `localStorage`/IndexedDB. If camera capture is approved (TBD), `capture` attribute is added and `Permissions-Policy` updated. |
| **States** | empty, drag-over (gold border thickens), file-error, selected (→ ImagePreview), disabled (no consent/limit reached) |
| **Responsive** | Full width, portrait-friendly height using `max-height` relative to viewport (UI_SPEC §6.7) |
| **A11y** | The drop zone is a real `<button>`/file input with label; drag-and-drop is an enhancement, never the only path; errors announced with `role="alert"`; keyboard operable |

### 14.3 `ImagePreview` (UI_SPEC §6.2)

| | |
|---|---|
| **Props** | `src` (object URL), `alt`, `onChange`, `onDelete`, `aspect?='3:4'` |
| **Spec** | Responsive portrait canvas (prefer 3:4) with max width that preserves the original without cropping away body context; action bar: **"Change Photo"** button + **"Delete Photo"** icon button (aria-labelled) |
| **Behaviour** | "Delete Photo" removes the in-memory file immediately and revokes the object URL; if a job exists it calls the delete endpoint and shows confirmation (FR-047). Preview never leaves the device until the customer confirms consent and generates. |
| **States** | loading (decode), ready, error (cannot decode) |
| **A11y** | `alt="Your selected photo preview"` (never the person's identity); buttons labelled; focus moves to the primary action after change/delete |

### 14.4 `ConsentPanel` (UI_SPEC §6.2; FR-038; CR-1–CR-6)

| | |
|---|---|
| **Props** | `consentText` (approved, **versioned** content from the API; includes `textVersion`), `required: true`, `checked`, `onChange`, `ageConfirmRequired: boolean`, `ageChecked`, `onAgeChange`, `optionalUses?: {id,label,checked}[]` (separate optional choices, off by default) |
| **Spec** | Checkbox **unchecked by default**; explicit link "Read AI Privacy Notice"; text states what is collected, why, who processes it, retention, and how to delete/withdraw. **Must not promise "never shared/never used for training" unless the approved policy says so** (UI_SPEC §6.2). Optional extra uses (training, marketing, public display) are separate, optional, off by default (CR-5). |
| **Behaviour** | The primary "Generate Virtual Try-On" CTA stays **disabled until consent is checked, a valid photo is selected and (if required) the 18+ confirmation is ticked** (UI_SPEC §6.3, §13.2). On generate, the client first records consent (`POST /me/consents`, includes `textVersion`) and only then submits the photo; the **server re-checks** consent (no UI-only enforcement). If the text version changed since last consent, the panel re-asks (AFQ-17). Declining shows "Try-on needs your consent. You can keep shopping." (APP_FLOW D6) |
| **States** | unchecked, checked, version-changed (re-consent), declined, age-confirmation-missing, loading (recording consent), error (consent save failed → no upload) |
| **A11y** | Real `<input type="checkbox">` with associated label; the disabled CTA exposes the reason via `aria-describedby` ("Tick the consent box to continue"); privacy notice link opens in the same tab or a modal with focus management |

### 14.5 `GarmentSummaryCard`

Overlay/summary of the active product: thumbnail, name, selected colour swatch, size selector (data-driven), price. Props `product`, `colourId`, `onColourChange`. Sizes from inventory; no hard-coded set (UI_SPEC §6.5). Shows "Try-On Ready" badge.

### 14.6 `ProcessingOverlay` (UI_SPEC §6.4)

| | |
|---|---|
| **Props** | `stage?: string` (generic only), `onCancel?` (only if cancellation supported), `slow: boolean` |
| **Spec** | Soft pulsing overlay (cream at 80%) over the preview canvas; centred circular progress with Gold track; generic micro-copy ("Preparing your image…", "Generating your preview…") — **no technical steps the provider doesn't guarantee**; progress indicator visible within 1 s of submission (NFR-003) |
| **Behaviour** | Polls `GET /tryon/jobs/{id}` with backoff; after the slow threshold shows "Taking longer than usual" with **Keep waiting / Cancel** (APP_FLOW D8); Cancel shown only if supported; no promise about credits/refunds; page remains interactive (not frozen); mobile bottom nav hidden while generating. |
| **A11y** | `role="status"` + `aria-live="polite"` text updates; spinner has text alternative; reduced-motion variant replaces pulsing with static state; cancel is a labelled button |

### 14.7 `ResultCanvas` + `DisclaimerBox` (UI_SPEC §6.5; FR-040; NFR-039)

| | |
|---|---|
| **Props** | `resultUrl` (short-lived signed URL), `alt`, `product`, `onExpired` |
| **Spec** | High-resolution result on a 3:4 canvas (radius xl); bottom-left badge **"AI-Generated Visual Preview"** (11 px, espresso bg, cream text); **mandatory** disclaimer box below (bg `#F2EDE4`, 1 px taupe, 12 px): *"Visual preview is an approximate digital representation. Fabric drape and exact fit may vary. Check the Size Guide for exact inch measurements."* + inline link **"Open Size Guide"** |
| **Behaviour** | The badge and disclaimer are **inseparable from the canvas** — one component, so they can never be omitted, including on saved and shared views. When the signed URL expires the component shows the "expired" state (APP_FLOW §12.4) with "Upload a new photo". Right-click/long-press is not blocked (no false security), but the image is served `no-store`. Size recommendation is a separate entry (FR-050) and is never implied by the preview. |
| **States** | loading image, loaded, expired, failed-to-load |
| **A11y** | `alt` = "AI-generated preview of {product name} on your photo"; disclaimer is text in the reading order immediately after the image; badge is real text |

### 14.8 `ResultToolbar`

Horizontal row under the canvas: **Change Color** (opens swatch drawer, Should Have/Phase 2 behaviour per release), **Compare Looks** (side-by-side), **Save Look** (prompts login if guest), **Share Look** (confirmation dialog; Phase 2), **Delete My Photo/Data** (explains the deletion timeframe — no promise of "instant" beyond the approved process, UI_SPEC §6.5). Each button hidden if its feature flag is off. Mobile: **sticky bottom bar** with "Add to Cart" and "Save Look" (UI_SPEC §6.7). Purchase block: size selector from inventory + full-width Primary "Add to Cart" + dynamic price. A11y: toolbar `role="toolbar"` with arrow-key navigation or simple button group; labels not icon-only.

### 14.9 `TryOnErrorState` (UI_SPEC §6.6; FR-048)

| Case | UI |
|---|---|
| Unsupported / low quality photo | Maroon border around upload box; *"Photo could not be processed. Please upload a clear photo with single person and good lighting."* + **Try Another Photo** |
| Timeout / system failure / provider unavailable | Overlay: *"AI Try-On is taking longer than usual. You can retry or continue shopping without losing your cart."* + **Retry Generation** · **Continue Shopping** |
| Unsafe content (screened) | Neutral message ("We couldn't use this photo. Please try a different one.") — no detail about why |
| Limit reached | Friendly message with when they can try again (limits TBD) |
| Ineligible product | Banner: *"Virtual Try-On is not yet enabled for this item. Explore our Try-On Ready Collection."* + **View Try-On Products** |
| Age/consent/login gate | Explains what is needed and offers the next step |

**Rules:** never show technical or provider messages; failure never blocks add-to-cart or navigation; "Retry" re-submits the photo still held in browser memory (no second consent unless version changed, TRD §8.6). A11y: `role="alert"` for new errors; focus to the message; actions are buttons.

### 14.10 `TryOnPrivacyNotice`

Short, plain-language summary shown **before upload** and linked from the consent panel: the photo is used only to create your preview, is processed temporarily, and is deleted after processing; you can delete generated images any time; what (if anything) is retained follows the approved policy. Text comes from versioned CMS content (`ai_tryon_notice`), not hard-coded, because wording requires legal approval (OQ-019).

---

## 15. Loading, Error and Success Feedback

### 15.1 `Skeleton` and `Spinner`

Skeletons preserve final dimensions (3:4 cards, stacked rows) to avoid layout shift (UI_SPEC §5.3). Spinner: 16–24 px, gold or espresso on appropriate background. Props `variant`, `lines`, `aspect`. A11y: container gets `aria-busy="true"`; decorative skeleton shapes hidden from assistive tech; a single polite "Loading" status is announced; reduced motion disables shimmer.

### 15.2 `Toast` (UI_SPEC §4.10)

| | |
|---|---|
| **Props** | `kind: 'success'\|'error'\|'info'\|'warning'`, `message`, `duration=4000`, `actionLabel?`, `onAction?`, `onClose` |
| **Spec** | Top-right desktop (`top-20 right-6`), top-centre mobile (`top-16 inset-x-4`); espresso surface, 1 px Gold (or Sage) border; cream 13 px Medium text; auto-dismiss 4000 ms; close cross |
| **Behaviour** | Queue with max visible 3; pause on hover/focus; errors that need action use persistent `Alert` (§15.3) instead of auto-dismiss. Never contains sensitive data. |
| **A11y** | Toast region is `aria-live="polite"` (errors `role="alert"`); auto-dismiss ≥ 4 s and pausable (WCAG 2.2.1); close button labelled; not the only place a critical error appears |

### 15.3 `Alert` / `InlineMessage` (Success, Warning, Error, Info)

Surfaces per UI_SPEC §3.1 status colours with matching icon and text. Props `tone`, `title?`, `children`, `actions?`, `dismissible?`. Messages follow NFR-021: specific, polite, actionable. **Safe error copy only** — no stack traces, SQL, internal codes or provider messages (Security UI §6); the API's `requestId` may be shown as a support reference. A11y: `role="alert"` (errors) or `role="status"`; icon + text (not colour-only); focus management for blocking errors.

### 15.4 `EmptyState`

Icon/illustration (no fabricated sample data), one-sentence explanation, one primary next action (e.g., "Explore products"). Used for empty cart, wishlist, saved looks, orders, no search results (UI_SPEC §5.3).

### 15.5 `ErrorBoundaryFallback` and `NotFoundPage`

Friendly branded pages (AFQ-29) with Home and Shop links; show request ID if available; never technical details. Admin has its own variant.

### 15.6 `ProgressBar` / `Stepper`

Checkout step indicator (delivery → payment → review) and upload progress. Uses `aria-current="step"`; progress uses `role="progressbar"` with `aria-valuenow`.

---

## 16. Modal, Drawer and Popup Components

### 16.1 `Modal` (UI_SPEC §10.2)

| | |
|---|---|
| **Purpose** | Size guide, zoom, share confirmation, delete confirmation, privacy notice. |
| **Props** | `open`, `onClose`, `title` (required), `size: 'sm'\|'md'\|'lg'\|'fullscreen-mobile'`, `initialFocusRef?`, `dismissible?` |
| **Spec** | Cream container, radius xl, `shadow-overlay`, beige/dark backdrop; visible close control |
| **Behaviour** | Focus trapped inside; `Escape` closes and returns focus to the trigger; backdrop click closes (unless `dismissible=false` for destructive confirmations); body scroll locked; stacked modals avoided. |
| **Responsive** | Desktop centred; **mobile full-height sheet/page** with scrollable content and a visible close control (e.g., Size Guide table) |
| **A11y** | `role="dialog"` (or `alertdialog` for confirmations), `aria-modal="true"`, `aria-labelledby`/`describedby`; inert background; focus ring visible |

### 16.2 `Drawer`

Side or bottom sheet using the same rules (cart drawer, mobile menu, filters, swatch selector). Cart drawer uses `shadow-overlay`. Swipe-to-close is an enhancement; a close button is always present.

### 16.3 `ConfirmDialog`

Props `title`, `description` (names the affected item), `confirmLabel`, `cancelLabel`, `onConfirm`, `loading`. Required for delete, cancel, revoke, publish/unpublish (UI_SPEC §5.3) and for **sensitive admin actions** (Security UI §5). Default focus on the **safe** option (Cancel). Used by "Delete my try-on data": explains exactly what will be deleted, including saved-look images (APP_FLOW AFQ-18).

### 16.4 `Accordion` (FAQ, policies, footer on mobile; UI_SPEC §9)

Chevron rotates 180° (200 ms ease-in-out), content expands vertically. Button-based headers with `aria-expanded`/`aria-controls`; Enter/Space toggles; content region labelled; reduced-motion respected.

### 16.5 `TryOnWelcomePopup` (FR-057, Should Have)

| | |
|---|---|
| **Props** | `open`, `onTryNow`, `onDismiss`, `rules` (first-visit/frequency, OQ-037) |
| **Behaviour** | Dismissible, **never blocks essential content** (NFR-019), not shown on checkout/account/try-on pages or when the try-on flag is off; display rules from configuration; "Try it now" → try-on entry; dismissal remembered locally. Does not auto-appear immediately on load before the user can orient (delay configurable). Honours cookie-consent banner precedence (only one overlay at a time). |
| **A11y** | Modal rules (§16.1); visible, reachable close button; not announced repeatedly |

### 16.6 `CookieConsentBanner` (FR-078, NFR-032)

Non-blocking bottom banner (or compact modal) with Accept / Reject non-essential / Manage choices; choices stored locally and (when logged in) as `consent_records`. Non-essential scripts load **only after consent**. Keyboard accessible; does not trap focus unless it is a modal; reopenable from the footer.

### 16.7 `SafeHtml` (CMS renderer)

Renders staff-authored rich content (policies, FAQ, brand story) from **sanitised** HTML/Markdown only (allow-list tags/attributes; no scripts, iframes, inline event handlers; `https:`/relative links with `rel="noopener noreferrer"`). It is the **only** component permitted to use `dangerouslySetInnerHTML`; lint enforces this (`TRD.md` §5.3, §18.2). Headings in content are offset to keep a valid H1→H6 outline.

---

## 17. Security-Related UI Components

Derived from UI_SPEC "Security & Privacy UI Specifications", built from existing components/tokens only (Security UI §7). Backend enforcement is in `TRD.md`; these components provide honest, accessible feedback — **UI is never the control**.

| Component | Purpose | Key behaviour | States | A11y |
|---|---|---|---|---|
| **`PasswordField` + strength meter** (§13.3) | Safe password entry | Show/hide toggle; advisory strength; server enforces | masked, revealed, weak/fair/strong | Labelled toggle, text strength |
| **`AuthErrorMessage`** | Generic, non-revealing login errors | Same wording for wrong account/password; shows throttle wait time | idle, error, throttled | `role="alert"` |
| **`SessionExpiredNotice`** | Explain expiry & return to login | Modal/banner: "Your session has ended. Please log in again."; preserves return-to (safe relative path); for admin, shows the secure-session-expired screen (Security UI §5) | shown/hidden | Focus moves to message; action button |
| **`UnauthorizedState` (403/401 screen)** | Admin/unauthorised access | Neutral "You don't have access to this page" with link home; no information about whether the resource exists | — | Heading + landmark |
| **`PrivacyCentre`** (PG-22) | Control personal data | Lists consents with current state and date/version; withdraw consent; **Delete my try-on data**; remove saved measurements; marketing/personalisation toggles; request account deletion; shows privacy information | loading, populated, saving, confirm, success, error | Each toggle labelled; confirm dialogs |
| **`ConsentList`** | Display consent records | Read-only history (type, version, date, granted/withdrawn) | empty/populated | Table/list semantics |
| **`AccountSecuritySettings`** (Security UI §4) | Change password, logout, devices | Change password requires current password; "Log out of all devices"; list of active sessions (coarse device/time info only) | idle, saving, success, error | Labelled forms |
| **`DeleteAccountFlow`** | Request erasure | Explains what is deleted vs retained (orders anonymised); requires re-authentication; confirm dialog; status "pending deletion" shown | steps | Alertdialog |
| **`TryOnPrivacyNotice` / `ConsentPanel` / delete-photo controls** (§14) | Image privacy | Show privacy notice before upload; supported formats/limits; preview before processing; Remove/Replace; Delete image; clearly explain **temporary** handling | see §14 | see §14 |
| **`ConfirmSensitiveAction`** (admin) | Guard risky admin actions | Confirm dialog naming the action and record; may require re-entering MFA for the most sensitive operations; result recorded in audit log | idle, confirming, done | Alertdialog |
| **`MfaSetup` / `MfaChallenge`** (admin) | Staff 2-factor | QR/secret enrolment, 6-digit code entry with attempt-limit messaging; recovery guidance | enrol, verify, error, locked | One-time-code semantics |
| **`SecureErrorPage`** | Safe failures | Generic message + support reference (`requestId`); **no stack trace, SQL, paths, API keys or provider details** | — | `role="alert"` |
| **`RateLimitNotice`** | 429 handling | "Too many attempts. Please wait N seconds." with disabled submit during cooldown | countdown | Live region, not colour-only |
| **`UploadSecurityHints`** | Safer uploads | Shows accepted types/size; rejects locally; explains that files are checked and metadata (location) is removed | idle/error | Linked to the field |
| **`HttpsOnlyGuard`** (infra) | HTTPS-only | No UI; enforced by edge redirect + HSTS; no mixed-content resources; verified by tests | — | — |
| **Secrets in the UI** | — | **Never** render API keys, tokens, session IDs, internal IDs that are secret, or server errors; no secrets in `NEXT_PUBLIC_*` | — | — |

---

## 18. Wishlist Components (FR-030, FR-031; PG-13, PG-14)

### 18.1 `WishlistButton`

| | |
|---|---|
| **Props** | `productId`, `colourId?`, `variantId?`, `initial: boolean`, `size: 'sm'\|'md'`, `onRequireLogin()` |
| **Spec** | Circular cream button with 16 px heart icon on cards (top-right); outline when off, filled Maroon when on |
| **Behaviour** | Optimistic toggle with rollback on error and a toast; guest → login prompt with return-to-origin (APP_FLOW §18.2) — guest persistence is TBD (OQ-026), so default is account-only; rate-limited API. |
| **States** | off, on, loading, error (rolled back), disabled |
| **A11y** | `aria-pressed`, label "Add {name} to wishlist"; announces result via polite live region; 44 px target |

### 18.2 `WishlistPage` components

`WishlistGrid` using `ProductCard` variants: shows **current** price and availability (not historical), "Unavailable" label with route to PDP when the saved variant is out of stock, remove control with confirmation toast, empty state ("Explore products"), login gate, load error with retry (UI_SPEC PG-13).

### 18.3 `SavedLookCard` / `SavedLooksGrid` (PG-14, FR-031)

| | |
|---|---|
| **Props** | `look: {id, name, products[], imageUrl?, expiresAt?, shared?: boolean}`, `onOpen`, `onRename`, `onDelete`, `onShare?` |
| **Behaviour** | If a generated image is stored it appears with the AI badge and disclaimer (inseparable, §14.7); **reference-only looks** show product thumbnails with "Regenerate preview" action. Expiry shown ("Image available until {date}") when applicable. Delete explains that the image is removed (FR-031). Expired/deleted/unavailable-product states are explicit. Shared state and revoke are **Phase 2** (FR-045). Private by default. |
| **States** | populated, empty, expired image, unavailable product, deleting, error |
| **A11y** | Card actions are labelled buttons; image `alt` as in §14.7; delete uses `ConfirmDialog` |

### 18.4 `CompareLooks` *(Should Have/Phase 2)*

Side-by-side view of 2+ looks with items and prices; mobile stacks vertically with swipe; prompts to generate/open another when fewer than two (APP_FLOW D13).

---

## 19. Review Components (FR-032, FR-033; PG-27)

### 19.1 `RatingStars`

Props `value: number | null`, `count?`, `size`, `interactive?`, `onChange?`. Display shows average and count; **`null`/0 count displays "No ratings yet", not a zero score** (FR-033). Interactive mode is a radio group of 1–5. A11y: read-only `role="img"` with label "Rated 4.5 out of 5 from 32 reviews"; interactive uses `radiogroup`, arrow keys, visible focus, not colour-only (filled vs outline shapes).

### 19.2 `ReviewSummary` and `ReviewList`

Props `reviews: {id, rating, title?, body, authorDisplay, date, verifiedPurchase?: boolean}[]`, `aggregate`, `loading`, `error`, pagination. Shows **approved reviews only**. "Verified purchase" label **only when supplied by the backend as true** (UI_SPEC PG-27). Review text rendered as plain text (no HTML). Empty state: "No reviews yet" (never fabricated). Customer photos (Phase 2) appear only when approved and permitted for public display.

### 19.3 `ReviewForm` (PG-27)

Props `product`, `eligibility: 'eligible'|'not_eligible'|'login_required'`, `onSubmit`. Elements: product summary, rating selector, optional title, text area (character counter, max per schema), submit. **No photo field unless the photo-review capability is enabled** (UI_SPEC PG-27) and then with its own privacy notice. After submit: "Thanks — your review will appear after moderation" (BR-011). Not-eligible state explains why (rule TBD, OQ-017). Rate-limited; spam protection. States: idle, validation-error, submitting, pending-moderation, rejected/removed feedback, not-eligible, error. A11y: labelled fields, error summary, counter announced politely.

### 19.4 Admin `ReviewModerationQueue` (AD-08)

Tabs Pending / Approved / Rejected-Removed, detail view with product, content, approve/reject/remove actions and reason field, confirm dialogs, audit-logged.

---

## 20. Responsive Behaviour

### 20.1 Breakpoint Rules (UI_SPEC §8, §16.6)

| Range | Container | Columns | Margin | Gutter |
|---|---|---|---|---|
| Mobile 320–767 | Fluid | 4 | 16 px | 12 px |
| Tablet 768–1023 | Fluid | 8 | 24 px | 16 px |
| Desktop ≥ 1024 | max 1280 px | 12 | 32 px | 24 px |

### 20.2 Component Adaptation Summary

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navbar | Hamburger → drawer; utility icons; bottom nav | Hamburger → drawer | Full horizontal links + pill |
| Footer | Single accordion stack | 2 columns | 4 columns |
| Product grid | 2 cols (12 px) | 2 cols | 3–4 cols |
| PDP | Vertical stack: gallery → details → actions; sticky add-to-cart optional | Stacked/2-col | 2 cols (60/40, sticky details) |
| Gallery | Swipe carousel + dots + zoom modal | Carousel | Main + 4 thumbnails |
| Cart / Checkout | Single column (form then summary) | Single/2-col | 2 cols (60% form / 40% summary) |
| Filters | Full-height sheet | Sheet/sidebar | Sidebar/top bar |
| Try-On | Single vertical stack, sticky bottom Add to Cart + Save Look | Single/split | Split view (canvas left, controls right) |
| Modals | Full-height sheets | Centred/sheet | Centred |
| Tables (account/orders) | Labelled cards | Cards/table | Table |
| Admin tables | Cards where meaningful; controlled horizontal scroll only if unavoidable | Table | Table + left sidebar |

### 20.3 Rules

1. **No horizontal page scrolling** at 320 px (NFR-005); wide content scrolls inside its own container.
2. **Touch targets ≥ 44×44 px**, spacing ≥ 8 px (UI_SPEC §8.3).
3. **Fluid type** via the scale in §2.2; never below 11 px.
4. **Images:** 3:4 aspect-ratio containers, `srcset`/`sizes`, lazy loading below the fold, priority for the first visible image (NFR-001, NFR-007).
5. **Performance on mid-range Android/slow networks** (BD-18): skeletons, no heavy animation, no layout shift.
6. **Hover-only affordances** have focus/tap equivalents.
7. **Safe areas:** fixed bars respect device insets; content has bottom padding for bottom nav and sticky CTAs.
8. **Orientation and zoom:** layouts remain usable at 200% zoom and in landscape.
9. One site, three viewports — not three designs (UI_SPEC §16.7).

---

## 21. Accessibility Requirements (WCAG 2.1 AA — PRD NFR-016–019, UI_SPEC §10)

### 21.1 Global Requirements

| Area | Requirement |
|---|---|
| Structure | One `<h1>` per page, logical H1→H6 outline; landmarks: `header`, `nav`, `main`, `footer`; skip-to-content link |
| Keyboard | Everything reachable with `Tab`/`Shift+Tab`; logical order; no keyboard traps except intentional modal traps; `Escape` closes overlays and returns focus to trigger |
| Focus | Visible focus on every interactive element (2 px Gold outline with 2 px offset per UI_SPEC §9; see §21.3 note on contrast) |
| Names | Icon-only controls have `aria-label` (e.g., "Shopping Cart") |
| Images | Meaningful `alt` for product images; decorative images `alt=""` |
| Forms | Visible labels, `aria-describedby` for hints/errors, `aria-invalid`, error summaries, correct `autocomplete` and `inputmode` |
| Status | Dynamic updates (cart count, results count, toasts, upload/processing status) use `aria-live` regions |
| Motion | Honour `prefers-reduced-motion` (disable zoom/pulse/slide animations) |
| Colour | Information never conveyed by colour alone (strike-through + text for out-of-stock, icons + text for status) |
| Language | `lang` attribute set (`en`; `bn` for Bangla content) |
| Time limits | Toasts ≥ 4 s and pausable; session-expiry warnings give users a chance to continue |
| Zoom/reflow | Works to 200% zoom and 320 px width without loss of function |
| Touch | ≥ 44 px targets |

### 21.2 Component-Specific Checklist

| Component | Must verify |
|---|---|
| Navbar/drawer | Disclosure patterns, focus trap in drawer, current page indicated |
| Search | Combobox semantics, live result count |
| Product card | One link, accessible price description, wishlist `aria-pressed` |
| Gallery | Carousel semantics, non-swipe controls, zoom modal focus |
| Size/colour selectors | Radio-group semantics, unavailable state exposed textually |
| Modals/drawers | Trap, `Escape`, labelled, restore focus |
| Accordion | `aria-expanded`/`controls` |
| Toasts/alerts | Correct live-region roles |
| Try-on | Upload via button (not only drag-drop), consent checkbox native, disabled-reason described, progress announced, result alt text and disclaimer in reading order |
| Forms | Error summary, association of messages |
| Admin tables | Header/scope, sortable-column state announced |

### 21.3 Contrast Notes for Design QA (derived from UI_SPEC §10.1)

UI_SPEC confirms: Espresso on Soft Beige > 10.5:1; Cream on Charcoal > 14:1; Maroon on Cream > 5.2:1; and prohibits Gold for small text. The following should be **verified in design QA** (computed from the specified hex values; not changes to the design):

| Item | Observation | Suggested resolution within existing tokens |
|---|---|---|
| **Gold (`#A88A5A`) focus ring on Cream/Beige** | Approx. 2.8–3.0 : 1 against `#F2EDE4`/`#F8F5EF`; WCAG 2.1 non-text contrast (1.4.11) asks for 3:1 for focus indicators | Keep the Gold ring but pair it with a 1 px Espresso inner/outer line, or use Espresso for the ring on light surfaces; confirm with design owner **[Needs design confirmation]** |
| **Placeholder text (Sage `#899482`) on Cream** | Approx. 2.7 : 1 — below 4.5 : 1 if placeholders convey needed information | Treat placeholders as hints only (labels are always visible), or use a darker approved tone for placeholder text |
| **Category tag (11 px uppercase Sage) on Cream** | Same ratio; small text | Use Espresso at reduced weight/opacity-free alternative, or increase size/weight; confirm with design |
| **Sage "Try-On Ready" badge text** | Check cream-on-sage ratio (≈ 2.7 : 1) | Use Espresso text on Sage or a darker sage variant if approved |
| **Cream text on Gold button (`#A88A5A`)** | Low contrast; UI_SPEC allows Espresso text alternative | Prefer the **Espresso-text** variant for the gold filled button |
| **Taupe struck-through original price** | Secondary information; verify ≥ 4.5 : 1 or add a visually-hidden label | Ensure the sale price is the visually dominant, accessible element |

These flags are recorded so the NFR-016 audit (WCAG 2.1 AA before launch) does not discover them late; the final decisions belong to the design owner.

---

## 22. Admin Shell Components (AD-01–AD-11, UI_SPEC §5.2)

| Component | Notes |
|---|---|
| `AdminShell` | Separate authenticated workspace (not the customer header/footer); restrained neutral UI with Espresso navigation, Cream surfaces, Taupe dividers; desktop left sidebar + top utility bar; collapses to a drawer on small screens; `noindex` |
| `DataTable` | Search, filters, sorting, pagination; row actions gated by permission; converts to labelled cards on narrow screens; masks sensitive fields |
| `StatusPill` | Order/review/job statuses using status colours + text |
| `ConfirmDialog` / `ConfirmSensitiveAction` | §16.3, §17 |
| `AuditLogTable` | Actor, action, record, timestamp, outcome; never renders passwords, tokens or photo content (UI_SPEC AD-11) |
| `TryOnMonitoring` (AD-10) | Aggregate counts, success/failure, processing time, cost indicators; **no customer photos displayed** (TRD §7.2 note) |
| `ProductEditor` | Required-field validation, alt-text required for images, draft preview, publish/unpublish confirmation, unsaved-change warning; "Try-On Ready" can be switched on only when eligibility and assets are approved (UI_SPEC AD-02) |
| `ContentEditor` | Structured fields; rich text via sanitising editor; no arbitrary code fields (UI_SPEC AD-06) |
| Session handling | Short timeout with expiry screen; MFA challenge; unauthorised state |

---

## 23. Traceability

| UI_SPEC / PRD item | Component(s) |
|---|---|
| UI_SPEC §3 Design system | §2 tokens, Tailwind mapping |
| §4.1–4.6 Global components | §4, §5 |
| §4.7 Buttons | §3 |
| §4.8 Inputs | §12 |
| §4.9 Product cards, FR-001 | §6, §7 |
| §4.10 Toasts | §15.2 |
| §6 Try-On UI | §14 |
| §7 E-commerce components | §9, §10 |
| §8 Responsive | §20 |
| §9 States | §2.4 |
| §10 Accessibility | §21 |
| §11 Bangladesh UI | §10.7, §12.2 |
| §12 Consistency rules | §1.2, §2.1 |
| §13 Tailwind handoff | §1.3, §2 |
| §14 Open questions (flags) | Feature-flag-driven rendering across components |
| §16.5 Reusable page templates | `PageShell`, collection `themeKey` |
| Security & Privacy UI §1–7 | §13, §17, §14.4, §14.10, §15.3 |
| FR-030/031 Wishlist & looks | §18 |
| FR-032/033/085 Reviews | §19 |
| FR-038/040/047 Consent, disclaimer, deletion | §14.4, §14.7, §17 |
| NFR-016–019 Accessibility | §21 |
| BR-004 No unconfirmed policies displayed | Data-driven components (§1.2 #2) |

*End of document — COMPONENTS.md v1.0 (Draft)*
