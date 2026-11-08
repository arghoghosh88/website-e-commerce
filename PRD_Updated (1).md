# Product Requirements Document (PRD)
## Bangladesh Men's Fashion AI E-commerce Platform

---

## 1. Document Information

| Field | Detail |
|---|---|
| **Document Name** | PRD.md — Men's Fashion AI E-commerce Website |
| **Version** | 1.1 (Draft for Approval) |
| **Status** | Draft — pending business-owner review of all items marked **TBD** |
| **Prepared For** | Business Owner / Project Sponsor |
| **Prepared By** | Product Management & Business Analysis |
| **Last Updated** | 6 November 2026 |
| **Document Scope** | Product and business requirements only. Excludes technical architecture (TRD), data schema, application flow, detailed UI specification and delivery plan. |

### Conventions Used in This Document

| Convention | Meaning |
|---|---|
| **TBD** | To Be Decided. The business owner has not confirmed this item. No assumption has been made. |
| **Proposed** | A recommendation by the document author. Not a confirmed commitment. |
| **FR-xxx** | Functional Requirement ID |
| **NFR-xxx** | Non-Functional Requirement ID |
| **BR-xxx** | Business Rule ID |
| **OQ-xxx** | Open Question ID |
| **AC-xxx** | Release-level Acceptance Criterion ID |
| ৳ / BDT | Bangladeshi Taka |

> **Important:** This document does not invent delivery prices, delivery timelines, payment-provider integrations, return policies, AI vendors or numerical business targets. Where such information is needed, it is marked **TBD**.

---

## 2. Table of Contents

1. [Document Information](#1-document-information)
2. [Table of Contents](#2-table-of-contents)
3. [Executive Summary](#3-executive-summary)
4. [Project Overview](#4-project-overview)
5. [Product Vision](#5-product-vision)
6. [Business Goals and Objectives](#6-business-goals-and-objectives)
7. [Main Website Goal](#7-main-website-goal)
8. [Target Market Analysis](#8-target-market-analysis)
9. [Target Audience and User Personas](#9-target-audience-and-user-personas)
10. [Business Model Overview](#10-business-model-overview)
11. [Brand Identity and Positioning](#11-brand-identity-and-positioning)
12. [Fashion Categories](#12-fashion-categories)
13. [Product Scope](#13-product-scope)
14. [Core Website Features](#14-core-website-features)
15. [Homepage Requirements](#15-homepage-requirements)
16. [AI-Powered Features Requirements](#16-ai-powered-features-requirements)
17. [E-commerce Functional Requirements](#17-e-commerce-functional-requirements)
18. [Customer Account and Personalization Requirements](#18-customer-account-and-personalization-requirements)
19. [Bangladesh-Specific Requirements](#19-bangladesh-specific-requirements)
20. [User Roles and Permissions](#20-user-roles-and-permissions)
21. [Functional Requirements](#21-functional-requirements)
22. [Non-Functional Requirements](#22-non-functional-requirements)
23. [Business Rules](#23-business-rules)
24. [MVP Scope and Prioritization](#24-mvp-scope-and-prioritization)
25. [Future Enhancements](#25-future-enhancements)
26. [Assumptions and Constraints](#26-assumptions-and-constraints)
27. [Dependencies](#27-dependencies)
28. [Risks and Mitigation](#28-risks-and-mitigation)
29. [Success Metrics and KPIs](#29-success-metrics-and-kpis)
30. [Acceptance Criteria](#30-acceptance-criteria)
31. [Out of Scope](#31-out-of-scope)
32. [Open Questions and TBD Decisions](#32-open-questions-and-tbd-decisions)
33. [Glossary](#33-glossary)

---

## 3. Executive Summary

The project is a **responsive, Bangladesh-based men's fashion e-commerce website** that combines conventional online retail with AI-powered fashion experiences. It launches in **Dhaka** and is planned to expand to **nationwide delivery**. It serves **men aged 15–40** in the **mid-range and premium** price segments, with a brand that balances **modern fashion and traditional heritage** under a **"Modern Earthy Luxury"** direction.

The main differentiator is **AI-Powered Virtual Try-On**: customers upload a personal photo, give explicit consent, and see an AI-generated preview of clothing on themselves. Around this core, the platform offers AI outfit previews, complete outfit try-on, AI size recommendation, personalised recommendations, and wishlist / saved looks.

**Key product positions taken in this PRD**

| Topic | Position |
|---|---|
| Try-on accuracy | AI previews are **visual approximations only** and are never presented as a guaranteed fit. |
| Size recommendation | Treated as a **separate feature** from visual try-on, with its own inputs, logic and disclaimers. |
| AI technology | No AI model, API or provider has been selected. All such decisions are **TBD**. |
| MVP | A **realistic, phased MVP** is recommended (Section 24). The core e-commerce experience is built to a high standard first, and the try-on launches in a controlled scope. Not every AI feature is assumed to be fully delivered at launch. |
| Homepage | All **21 homepage sections** are specified and retained. Their release priority varies by section. |
| Business policies | Delivery charges, delivery times, return rules, payment providers and promotional policies are **TBD**. |

---

## 4. Project Overview

### 4.1 Project Summary

| Attribute | Detail |
|---|---|
| Project Name | Men's Fashion AI E-commerce Website (final brand name **TBD**) |
| Business Type | Men's fashion e-commerce |
| Primary Market | Bangladesh |
| Initial Launch Location | Dhaka |
| Future Expansion | Nationwide Bangladesh |
| Target Audience | Men aged 15–40 |
| Price Segment | Mid-range and Premium |
| Brand Identity | Balanced Modern + Traditional ("Modern Earthy Luxury") |
| Main Differentiator | AI-Powered Virtual Try-On |
| Platform | Responsive website (mobile, tablet, desktop) |
| Business Currency | Bangladeshi Taka (BDT / ৳) |

### 4.2 Customer Capabilities

Customers should be able to:

1. Explore men's fashion collections.
2. Discover clothing that matches their personal style.
3. Virtually try on clothing using their own photos.
4. Preview complete outfits using AI.
5. Receive AI-powered size recommendations.
6. Get personalised product recommendations.
7. Save favourite products and AI-generated looks.
8. Purchase products through a seamless shopping experience.

### 4.3 Problem Statement

Online clothing buyers in Bangladesh commonly cannot judge how a garment will look on them or which size will suit them before purchasing. This creates purchase hesitation and a risk of returns or exchanges. Many shoppers also struggle to combine items into a coherent outfit, particularly across traditional and western wear. This project addresses these problems with AI-assisted visualisation, outfit guidance and size guidance, supported by a trustworthy, locally adapted shopping experience.

> The size of these problems in the Bangladeshi market is not quantified here. Validation through customer research is recommended (see OQ-028).

---

## 5. Product Vision

**Vision statement:** *To be Bangladesh's most trusted destination for men's fashion, where every customer can see, style and choose their look with confidence before buying.*

| Vision Pillar | Description |
|---|---|
| **See it on you** | Customers preview clothing on their own photo before purchase. |
| **Style with confidence** | The platform helps customers combine garments into complete outfits across traditional and modern wear. |
| **Shop with trust** | Transparent pricing, clear policies, honest AI disclaimers and strong privacy protection. |
| **Made for Bangladesh** | BDT pricing, local address and phone formats, local payment methods, inch-based measurements and Dhaka-first logistics. |

---

## 6. Business Goals and Objectives

Numerical targets are not confirmed by the business owner and are therefore **TBD**. The right-hand column states how each objective would be measured.

| ID | Business Goal | Objective | How Measured | Target |
|---|---|---|---|---|
| BG-01 | Establish a credible online fashion brand | Launch a polished, trustworthy storefront in Dhaka | Launch completed; brand-trust feedback | TBD |
| BG-02 | Generate online revenue | Convert visitors into paying customers | Conversion rate, orders, revenue | TBD |
| BG-03 | Differentiate through AI | Make virtual try-on a recognisable reason to choose this brand | Try-on usage rate; share of orders involving try-on | TBD |
| BG-04 | Increase purchase confidence | Reduce hesitation and fit-related returns | Return/exchange rate for fit reasons | TBD |
| BG-05 | Build customer loyalty | Encourage registration, wishlist and repeat purchase | Registration rate; repeat purchase rate | TBD |
| BG-06 | Prepare for nationwide growth | Design delivery, content and operations to scale beyond Dhaka | Delivery coverage and fulfilment readiness | TBD |
| BG-07 | Protect customer data | Handle photos and personal data with transparency and care | Consent records; privacy complaints | Zero unconsented photo processing |

---

## 7. Main Website Goal

> **The primary goal of the website is to let customers discover men's fashion that fits their style, visualise it on themselves with AI, and complete a confident purchase, all in a trustworthy, Bangladesh-adapted shopping experience.**

**Primary conversion goal:** a completed order.
**Supporting goals:** registration, wishlist or saved-look creation, newsletter subscription, try-on completion.

---

## 8. Target Market Analysis

> Market size, competitor revenue and customer-behaviour statistics have **not** been supplied and are **not invented** here. The analysis below is qualitative and should be validated through research.

### 8.1 Market Context

| Factor | Observation (to be validated) |
|---|---|
| Geography | Bangladesh; Dhaka first, then nationwide. |
| Demographic | Men aged 15–40, spanning students, young professionals and established earners. |
| Price segment | Mid-range and premium; neither budget nor mass-discount positioning. |
| Fashion culture | Demand spans traditional wear (e.g., Panjabi, with festive and wedding seasonality) and western, casual, formal and street styles. |
| Device usage | Mobile-first browsing is highly likely. Must be verified with analytics after launch. |
| Payment behaviour | Cash on Delivery and mobile financial services are commonly expected in Bangladeshi e-commerce. Actual provider support is **TBD**. |
| Trust concerns | Online fashion buyers typically care about product authenticity, delivery reliability and return/exchange ease. Validate through research. |

### 8.2 Competitor and Reference Websites

These websites are used as **market and design inspiration references only**. This PRD does **not** claim any competitor feature as verified. Designs must not be copied.

| # | Reference | URL | Use in this project |
|---|---|---|---|
| 1 | Aarong | https://www.aarong.com/ | Reference for heritage and traditional wear positioning |
| 2 | YELLOW | https://www.yellowclothing.net/ | Reference for mainstream fashion retail |
| 3 | Sailor | — | Reference (feature audit TBD) |
| 4 | Le Reve | — | Reference (feature audit TBD) |
| 5 | Cats Eye | — | Reference (feature audit TBD) |
| 6 | KAY KRAFT | — | Reference (feature audit TBD) |
| 7 | Infinity Mega Mall | — | Reference (feature audit TBD) |
| 8 | Rang Bangladesh | — | Reference (feature audit TBD) |
| 9 | Ecstasy | — | Reference (feature audit TBD) |
| 10 | Gentle Park | — | Reference (feature audit TBD) |
| 11 | Twelve | — | Reference (feature audit TBD) |
| 12 | RichMan | — | Reference (feature audit TBD) |
| 13 | Anjan's | — | Reference (feature audit TBD) |
| 14 | Deshal | — | Reference (feature audit TBD) |
| 15 | Easy Fashion | — | Reference (feature audit TBD) |
| 16 | Lubnan | — | Reference (feature audit TBD) |

**Recommended next step (OQ-027):** conduct a structured competitor audit of the listed websites (catalogue, pricing, payment, delivery, return policy, mobile experience) before design begins.

### 8.3 Positioning Opportunity (Hypothesis)

| Hypothesis | Validation Needed |
|---|---|
| AI virtual try-on can differentiate the brand in the Bangladeshi men's fashion segment. | User testing of try-on prototype; adoption after launch. |
| Customers value a balanced traditional + modern catalogue in one trusted destination. | Customer interviews; category sales mix. |
| Transparent delivery, return and sizing information increases trust. | Pre-launch survey; post-launch metrics. |

---

## 9. Target Audience and User Personas

**Target audience:** Men aged 15–40 in Bangladesh, mid-range and premium segment, initially in Dhaka.

> **Minor users (ages 15–17):** The target range includes minors. Photo upload, account registration, payment and data consent for under-18 users require a **legal and policy decision (TBD, OQ-009)** before launch.

### 9.1 Personas (Assumed — To Be Validated by Research)

| | **Persona A: Rafi** | **Persona B: Tanvir** | **Persona C: Imran** | **Persona D: Arif** |
|---|---|---|---|---|
| Age | 17 | 25 | 32 | 38 |
| Segment | Student | Young professional | Married professional | Senior professional / business owner |
| Style interest | Streetwear, Casual | Smart Casual, Formal, Western | Panjabi & Traditional, Formal | Old Money, Premium, Formal |
| Price sensitivity | Higher; seeks value within mid-range | Moderate | Moderate–low for occasions | Low; values quality |
| Main goal | Find trendy outfits and see how they look | Build a professional wardrobe quickly | Buy for festivals/weddings with confidence | Buy refined, high-quality pieces with minimal time |
| Pain points | Unsure how styles look on him; limited budget | Unsure of fit and outfit combinations | Fit uncertainty for occasion wear; delivery timing | Quality trust; time constraints |
| Key features used | Try-on, wishlist, share looks | Outfit preview, size recommendation | Panjabi collection, size guide, delivery info | Premium collection, recommendations, easy checkout |
| Special considerations | Minor: consent and policy rules (TBD) | Mobile-heavy usage | Seasonal peaks | Premium service expectations |

### 9.2 Secondary Audience

| Audience | Need |
|---|---|
| Gift buyers (family members, partners) | Gift guidance, size help, delivery to other addresses |
| Business staff (admin, content, support) | Efficient product, order and content management (Section 20) |

---

## 10. Business Model Overview

| Element | Detail |
|---|---|
| Core model | Online retail of men's fashion to consumers (B2C). |
| Revenue source | Product sales in BDT. |
| Value proposition | Curated men's fashion with AI-powered try-on, outfit guidance and size guidance, backed by trust and convenience. |
| Customer segments | Men aged 15–40, mid-range and premium. |
| Channels | Responsive website (initial). Native apps, marketplaces and social commerce are not in the initial scope. |
| Fulfilment | Delivery within Dhaka first, then nationwide. Logistics partners, charges and timelines are **TBD**. |
| Payments | Cash on Delivery, MFS and online payments, **subject to provider integration (TBD)**. |
| Cost drivers | Product sourcing, AI processing, hosting, payment fees, delivery, marketing, support. Amounts **TBD**. |
| Sourcing model | Own brand, curated multi-brand or mixed is **TBD (OQ-001)**. This affects the "Featured Brands / Brand Story" section, inventory and returns. |

---

## 11. Brand Identity and Positioning

**Brand direction: Modern Earthy Luxury.**

### 11.1 Brand Attributes

| Attribute | Expression on the website (requirement-level) |
|---|---|
| Premium quality | High-quality photography, restrained layouts, clear product detail |
| Modern fashion | Contemporary collections and clean presentation |
| Traditional heritage | Prominent Panjabi and traditional wear, culturally respectful tone |
| Elegance | Refined typography and generous spacing |
| Trustworthiness | Clear policies, transparent pricing, honest AI disclaimers |
| Simplicity | Uncluttered navigation and few steps to purchase |
| Accessibility | Inclusive design, readable text, usable on modest devices and networks |

### 11.2 Colour Palette

| Colour | HEX | Proposed Role (to be confirmed in UI specification) |
|---|---|---|
| Soft Beige | #F2EDE4 | Primary light background |
| Warm Taupe | #DCD1C3 | Secondary surfaces, dividers |
| Cream | #F8F5EF | Card and section backgrounds |
| Espresso | #352A24 | Primary text, strong emphasis |
| Muted Sage | #899482 | Secondary accent, positive states |
| Antique Gold | #A88A5A | Premium accent, highlights |
| Deep Maroon | #713B43 | Key call-to-action and sale emphasis |
| Charcoal | #292929 | Body text, dark UI elements |
| Footer Dark | #211C19 | Footer background |

> **Accessibility note:** Contrast between some palette pairs (e.g., Antique Gold or Muted Sage on light backgrounds) may fall below accessibility minimums for small text. Contrast must be verified against WCAG 2.1 AA (NFR-016). Final colour roles are defined in the UI specification, not here.

### 11.3 Positioning Statement

*For men in Bangladesh who want premium-quality traditional and modern clothing, this platform is the men's fashion destination that lets you see outfits on yourself with AI before you buy, with the trust, transparency and local convenience you expect.*

### 11.4 Tone of Voice (Proposed)

Warm, confident, respectful and clear. Avoid exaggerated claims, especially for AI accuracy. Language policy (English, Bangla or both) is **TBD (OQ-010)**.

---

## 12. Fashion Categories

| # | Category | Description (proposed) | Notes |
|---|---|---|---|
| 1 | Panjabi & Traditional Wear | Panjabi and other traditional menswear | Strong seasonal and festive demand; high brand-heritage value |
| 2 | Western Wear | Contemporary western-style clothing | May overlap with Casual and Formal |
| 3 | Casual Wear | Everyday relaxed clothing | High-volume category |
| 4 | Old Money Fashion | Understated, classic, refined styling | Style-led category (curated) |
| 5 | Streetwear | Urban, trend-led clothing | Likely popular with younger users |
| 6 | Formal Wear | Business and formal occasion clothing | Size and fit sensitive |
| 7 | Smart Casual | Polished casual clothing | Bridges Casual and Formal |
| 8 | Seasonal Collections | Time-limited collections (e.g., Eid, winter, wedding season) | Cross-cutting; dates and themes **TBD** |
| 9 | Premium Collections | Higher-tier, premium-priced items | Cross-cutting; premium criteria **TBD** |

**Taxonomy note (OQ-004):** Categories 1–7 are style/product categories. Categories 8–9 are cross-cutting *collections*. Because a product may belong to multiple categories (e.g., a premium Panjabi in a seasonal collection), the platform must support **multi-category assignment** (FR-002). Product types within each category (shirts, trousers, footwear, accessories) are **TBD (OQ-002)**.

---

## 13. Product Scope

### 13.1 In Scope (Overall Product)

| Area | Included |
|---|---|
| Storefront | Responsive website with homepage (21 sections), category/listing, product detail, search, cart, checkout, account |
| E-commerce | Catalogue, variants (colour, size), pricing, discounts, wishlist, orders, tracking, reviews |
| AI features | Virtual try-on, personal photo upload, AI outfit preview, complete outfit try-on, AI size recommendation, personalised recommendations, saved looks |
| Bangladesh localisation | BDT, local phone/address formats, delivery zones, local payment options, inch measurements |
| Administration | Back-office for products, inventory, orders, customers, content, promotions, reviews, reporting |
| Trust and compliance | Consent management, privacy policy, return/exchange information, support channels |

### 13.2 Product Scope Boundaries

| Item | Status |
|---|---|
| Native mobile apps | Out of initial scope (Section 31) |
| Women's and children's fashion | Out of scope (men's fashion only) |
| International shipping | Out of initial scope |
| Marketplace with third-party sellers | Out of scope unless confirmed (OQ-001) |

---

## 14. Core Website Features

| # | Feature Area | Summary | Detail Section |
|---|---|---|---|
| 1 | Homepage | 21 defined sections combining discovery, AI, trust and engagement | 15 |
| 2 | Product Discovery | Categories, search, filters, sorting, related products | 17 |
| 3 | Product Presentation | Gallery, colours, sizes, size guide, pricing, discounts | 17 |
| 4 | AI Virtual Try-On | Photo-based clothing preview with consent and privacy controls | 16 |
| 5 | AI Outfit Features | Outfit preview, complete outfit try-on, compare, save, share | 16 |
| 6 | AI Size Recommendation | Size guidance independent of visual try-on | 16 |
| 7 | Personalisation | Recommendations, wishlist, saved looks | 16, 18 |
| 8 | Purchase | Cart, checkout, payment, order confirmation | 17 |
| 9 | Customer Account | Registration, login, profile, addresses, history | 18 |
| 10 | Post-Purchase | Order history, tracking, reviews, exchange/return requests | 17 |
| 11 | Bangladesh Localisation | BDT, addresses, phone, delivery, payments | 19 |
| 12 | Trust and Support | Policies, FAQ, support contact, reviews | 15, 19 |
| 13 | Administration | Catalogue, orders, content, promotions, AI oversight | 20, 21 |

---

## 15. Homepage Requirements

The homepage **must contain all 21 sections** below. None has been removed, merged or ignored. Each section lists its business purpose, requirements, acceptance criteria and priority. Section *n* maps to **FR-(053+n)** (e.g., Section 1 → FR-054).

> **Priority note:** All 21 sections are part of the homepage design. "Priority" indicates how critical a section's full-featured behaviour is for the first release. Sections that depend on data not yet available at launch (e.g., real customer photos, reviews, personalised recommendations) must still appear with a defined fallback state (see Section 24).

### A. Top Section

#### Section 1 — Announcement Bar (FR-054)
**Business purpose:** Communicate time-sensitive messages (offers, delivery notices, seasonal campaigns) at the top of every page without taking hero space.
**Requirements:**
- Displays one or more short messages managed by authorised staff.
- Optional link per message; optional start/end schedule.
- Dismissible or persistent behaviour **TBD**.
- Must not display delivery charges, timelines or offers unless confirmed by the business (BR-004).

**Acceptance criteria:**
- An admin can create, schedule and remove a message without developer help.
- A scheduled message appears only within its start/end dates.
- The bar is readable on mobile without horizontal scrolling.

**Priority:** Must Have

#### Section 2 — Header & Navigation (FR-055)
**Business purpose:** Provide consistent navigation, search and access to account, wishlist and cart, which are the primary routes to purchase.
**Requirements:**
- Brand logo linking to the homepage.
- Primary navigation covering the nine fashion categories (Section 12).
- Search entry, account, wishlist and cart (with item count).
- Access point to Virtual Try-On.
- Mobile navigation pattern for small screens.

**Acceptance criteria:**
- All nine categories are reachable from the navigation within two interactions on desktop and mobile.
- Cart count updates immediately when an item is added.
- Header remains usable on screens from small mobile to large desktop.

**Priority:** Must Have

#### Section 3 — Hero Banner (FR-056)
**Business purpose:** Deliver the strongest first impression of the brand and direct visitors to the highest-priority campaign, collection or the AI try-on.
**Requirements:**
- Large visual with headline, short supporting text and one primary call-to-action (CTA).
- Content (image, text, link) managed by staff.
- Support for single banner or rotating banners (rotation behaviour **TBD**).
- Images must not rely on text-in-image for essential information.

**Acceptance criteria:**
- Staff can change the hero image, text and link without developer help.
- The CTA leads to the configured destination.
- Hero content is visible and legible on mobile and desktop.

**Priority:** Must Have

#### Section 4 — AI Virtual Try-On Welcome Popup (FR-057)
**Business purpose:** Introduce the platform's main differentiator at first visit and invite users into the try-on experience.
**Requirements:**
- Appears for eligible visitors under defined display rules (e.g., first visit; frequency **TBD**).
- Explains the try-on in brief, with CTAs to "Try it now" and "Not now".
- Must not request photo upload or consent inside the popup. Consent happens in the try-on flow (FR-038).
- Must be dismissible and must not reappear immediately after dismissal.
- Must be keyboard accessible and must not block essential navigation on mobile.
- Must not trigger on checkout or account-sensitive pages.

**Acceptance criteria:**
- Popup is closable by click/tap, close control and keyboard.
- After dismissal, it does not reappear within the configured suppression period.
- "Try it now" opens the try-on entry (FR-035).
- Popup can be switched off by an admin.

**Priority:** Should Have

#### Section 5 — Shop by Category (FR-058)
**Business purpose:** Help visitors quickly enter the catalogue through the nine fashion categories and reinforce brand breadth.
**Requirements:**
- Visual entry for each of the nine categories.
- Each links to its listing page.
- Order and imagery managed by staff.

**Acceptance criteria:**
- All nine categories are displayed and linked.
- Hiding an empty or inactive category is possible by admin.
- Layout adapts to mobile, tablet and desktop.

**Priority:** Must Have

### B. Shopping & Product Discovery

#### Section 6 — AI Virtual Try-On Feature Section (FR-059)
**Business purpose:** Explain and promote the AI try-on in more detail, build understanding and drive usage.
**Requirements:**
- Describes the try-on journey in simple steps.
- Includes a CTA to start the try-on.
- States clearly that previews are visual approximations, not a guarantee of exact fit.
- Summarises privacy handling and links to the privacy policy.
- Illustrative imagery must not misrepresent AI capability.

**Acceptance criteria:**
- Disclaimer about approximate preview and a privacy link are visible in the section.
- The CTA opens the try-on entry.
- No statement guarantees exact fit or accuracy.

**Priority:** Must Have

#### Section 7 — New Arrivals (FR-060)
**Business purpose:** Show freshness of the catalogue and give repeat visitors a reason to return.
**Requirements:**
- Displays the most recently added eligible products.
- Product card shows image, name, price in ৳, discount (if any) and wishlist control.
- "View all" link to a full New Arrivals listing.
- Definition of "new" (e.g., number of days or count) is **TBD**.

**Acceptance criteria:**
- Section automatically reflects newly published products.
- Out-of-stock products are handled per business rule (BR-009).
- Each card links to the product detail page.

**Priority:** Must Have

#### Section 8 — Trending Now / Best Sellers / Top Rated (Tabbed) (FR-061)
**Business purpose:** Provide social proof and guide undecided shoppers toward popular products.
**Requirements:**
- Three tabs: Trending Now, Best Sellers, Top Rated.
- Each tab lists products based on defined criteria. Calculation rules (time window, minimum review count) are **TBD**.
- Switching tabs does not reload the whole page.
- Fallback when data is insufficient (e.g., curated by staff).

**Acceptance criteria:**
- All three tabs are present and operable by mouse, touch and keyboard.
- Each tab shows products or a defined fallback, never an empty block.
- Top Rated never shows products with no ratings.

**Priority:** Should Have

#### Section 9 — Shop the Look (FR-062)
**Business purpose:** Increase basket size by presenting complete outfits and inspiring customers.
**Requirements:**
- Displays curated outfits composed of multiple products.
- Each look shows individual items with prices and a total.
- Customer can add all or selected items to cart.
- Where supported, a link to preview the look using try-on (FR-043).
- Looks are curated by staff in MVP. AI-generated looks are future or phased (Section 24).

**Acceptance criteria:**
- Each look lists its items and a total in ৳ that matches item prices.
- Customer can select size and colour for each item before adding to cart.
- Unavailable items are clearly marked and do not silently fail on add-to-cart.

**Priority:** Should Have

#### Section 10 — Special Offers & Discounts (FR-063)
**Business purpose:** Drive conversion through promotions and communicate value transparently.
**Requirements:**
- Displays products or campaigns that are currently discounted.
- Shows original price, discounted price and (optionally) discount amount or percentage.
- Offers appear only when active, with optional end date.
- No offer, percentage or coupon is pre-defined in this PRD (BR-004).

**Acceptance criteria:**
- Displayed discounted price equals the price applied in cart and checkout.
- Expired offers disappear automatically.
- Section hides gracefully if no offers are active.

**Priority:** Must Have

#### Section 11 — Seasonal & Featured Collection (FR-064)
**Business purpose:** Highlight timely or strategically important collections (e.g., festive, wedding, winter) and the Premium Collections.
**Requirements:**
- Staff-managed featured collection with title, imagery, short description and linked products.
- Seasonal themes and calendar are **TBD**.
- Supports changing the featured collection without code changes.

**Acceptance criteria:**
- Staff can change the featured collection independently.
- Collection CTA leads to the corresponding listing.
- Section adapts across screen sizes.

**Priority:** Must Have

#### Section 12 — Recommended for You (FR-065)
**Business purpose:** Raise relevance and average order value through personalised suggestions.
**Requirements:**
- Displays products tailored to the user (e.g., based on browsing, wishlist, purchase history, or try-on history) when permitted.
- For new or unidentified users, shows a defined fallback (e.g., popular or curated products).
- Personalisation must respect user consent and be controllable (FR-052).
- Recommendation logic is **TBD**.

**Acceptance criteria:**
- New visitors see fallback products, not an empty section.
- A user can turn off personalisation and the section switches to non-personalised content.
- Recommended items are in stock or clearly labelled.

**Priority:** Should Have (rule-based). Advanced AI personalisation is Could Have.

### C. Customer Experience & Trust

#### Section 13 — Real Customer Photos (FR-066)
**Business purpose:** Build trust and authenticity with genuine customer imagery.
**Requirements:**
- Displays customer-submitted photos with explicit permission from the customer.
- Moderated by staff before publication.
- Each photo can link to the related product.
- Must never use fabricated or stock images presented as customers.
- Must never use try-on-generated images or uploaded try-on photos unless the customer has given separate, explicit consent for public display.
- Source of initial content (before customers submit any) is **TBD**.

**Acceptance criteria:**
- Only moderated, permission-confirmed photos are shown.
- Staff can remove a photo immediately on request.
- If no approved photos exist, the section is hidden or shows a defined alternative.

**Priority:** Should Have

#### Section 14 — Customer Reviews & Ratings (FR-067)
**Business purpose:** Provide social proof and help purchase decisions.
**Requirements:**
- Displays selected reviews with rating, reviewer first name or alias, date and product reference.
- Shows aggregate store or product rating only if supported by real data.
- Review authenticity rules (e.g., verified purchase only) are **TBD** (OQ-017).
- Link to full reviews.

**Acceptance criteria:**
- Only approved reviews are shown.
- Aggregate ratings are computed from real stored reviews.
- Section is hidden or shows a defined state when no reviews exist.

**Priority:** Should Have

#### Section 15 — Why Choose Us (FR-068)
**Business purpose:** Communicate unique brand strengths and reinforce the differentiator.
**Requirements:**
- Presents key benefits (e.g., AI try-on, quality, curated collections, trust).
- Claims must be factual and approved by the business (BR-003).
- Content managed by staff.

**Acceptance criteria:**
- Each benefit has a title and short description.
- No unverified claims are displayed (approval workflow before publishing).

**Priority:** Must Have

#### Section 16 — Delivery, Payment & Return Benefits (FR-069)
**Business purpose:** Reduce purchase anxiety by summarising logistics and policies upfront.
**Requirements:**
- Summarises delivery, payment options and return/exchange information.
- Delivery charges, timelines, payment methods and return rules are displayed **only after the business confirms them (TBD)**.
- Each item links to the full policy page (FR-076).

**Acceptance criteria:**
- Every statement matches the published policy pages.
- No placeholder or unconfirmed information appears on the live site.

**Priority:** Must Have

#### Section 17 — Featured Brands / Brand Story (FR-070)
**Business purpose:** Establish brand identity, heritage and credibility; if multi-brand, showcase partners.
**Requirements:**
- Shows either the brand story, featured brands, or both, depending on the sourcing model (OQ-001).
- Includes imagery and short copy aligned with "Modern Earthy Luxury".
- Brand logos displayed only with permission.

**Acceptance criteria:**
- Content is editable by staff.
- Third-party brand logos appear only if usage permission is confirmed.

**Priority:** Should Have

### D. Engagement & Footer

#### Section 18 — Newsletter Subscription (FR-071)
**Business purpose:** Build an owned audience for marketing and repeat sales.
**Requirements:**
- Collects email address and/or phone number (channel **TBD**).
- Requires explicit opt-in; includes link to privacy policy.
- Confirms subscription and handles duplicates and invalid inputs.
- Any signup incentive is **TBD** and not assumed.

**Acceptance criteria:**
- Invalid email/phone shows a clear error.
- Successful signup shows a confirmation message.
- Subscriber can unsubscribe.

**Priority:** Should Have

#### Section 19 — Instagram & Social Media Feed (FR-072)
**Business purpose:** Show brand activity, community and fresh style inspiration.
**Requirements:**
- Displays posts from the brand's official social accounts (platforms **TBD**).
- Links open the original post in a new tab or app.
- Feed source method (live integration versus curated images) is **TBD**.
- Must degrade gracefully if the feed is unavailable.

**Acceptance criteria:**
- Section shows posts or a fallback and never breaks the page when the feed fails.
- Links go to official accounts only.

**Priority:** Could Have (with curated-link fallback acceptable at launch)

#### Section 20 — FAQ Section (FR-073)
**Business purpose:** Answer common questions, reduce support load and increase trust.
**Requirements:**
- Expandable questions and answers grouped by theme (e.g., Try-On, Sizing, Delivery, Payment, Returns, Privacy).
- Content managed by staff.
- Try-on FAQs must explain limitations and privacy handling.
- Policy-related answers appear only when policies are confirmed (TBD).

**Acceptance criteria:**
- Each FAQ is operable by keyboard and touch.
- Staff can add, edit and reorder questions.
- Try-on FAQ includes an "approximate preview" statement and photo handling statement.

**Priority:** Must Have

#### Section 21 — Footer (FR-074)
**Business purpose:** Provide reference navigation, legal links and contact details, and close the page with brand reassurance.
**Requirements:**
- Links: categories, customer care, policies (delivery, returns, privacy, terms), About, Contact.
- Contact details, business address and social links (**TBD**).
- Payment method indicators only for confirmed methods.
- Newsletter or app links only if applicable.
- Uses Footer Dark (#211C19) as specified.

**Acceptance criteria:**
- All footer links resolve to valid pages.
- Contact information matches confirmed business details.
- Footer is usable on mobile.

**Priority:** Must Have

---

## 16. AI-Powered Features Requirements

### 16.1 Guiding Principles for All AI Features

| # | Principle |
|---|---|
| AP-1 | **No guarantee of fit.** AI previews are visual approximations and must never be described or implied as exact fit. |
| AP-2 | **Separation of concerns.** Visual try-on (FR-039) and size recommendation (FR-049) are distinct features, with separate inputs, outputs and disclaimers. |
| AP-3 | **Consent first.** No personal photo is processed before explicit, recorded consent. |
| AP-4 | **Privacy by default.** Collect minimum data; allow deletion; no use of photos for model training or marketing without separate explicit consent. |
| AP-5 | **Never block purchase.** Customers can buy any product without using AI features. |
| AP-6 | **Graceful failure.** If AI fails or is unavailable, the shopping experience continues normally. |
| AP-7 | **Vendor-neutral.** No AI model, API or provider is assumed. Selection is **TBD** (OQ-011). |
| AP-8 | **Honest representation.** AI-generated images are labelled as AI-generated. |

### 16.2 Customer Journey (Virtual Try-On Concept)

| Step | Customer Action | Platform Behaviour | Related Requirements |
|---|---|---|---|
| 1 | Selects a fashion product | Product page shown with try-on availability indicated | FR-006, FR-053 |
| 2 | Opens Virtual Try-On | Try-on entry shown with brief explanation | FR-035 |
| 3 | Uploads a personal photo | Photo accepted, checked and guidance given | FR-036, FR-037 |
| 4 | Provides consent | Explicit consent captured and recorded before processing | FR-038 |
| 5 | AI generates preview | Processing state shown, preview generated | FR-039, FR-048 |
| 6 | Views clothing on own photo | Preview shown with AI disclaimer | FR-040 |
| 7 | Changes colours (where supported) | Alternative colour previews shown | FR-041 |
| 8 | Previews outfit combinations | Outfit preview / complete outfit try-on | FR-042, FR-043 |
| 9 | Compares looks | Looks shown for comparison | FR-044 |
| 10 | Saves or shares favourite look | Saved to account; share option provided | FR-031, FR-045 |
| 11 | Selects desired product | Product and variant chosen | FR-046 |
| 12 | Adds product to cart | Items added with selected size/colour | FR-046, FR-015 |

### 16.3 AI Feature 1 — AI-Powered Virtual Try-On

| Aspect | Description |
|---|---|
| **Description** | Generates a preview of a selected clothing item on the customer's uploaded photo. |
| **User benefit** | Helps customers imagine how a garment looks on them, improving confidence and reducing hesitation. |
| **Related requirements** | FR-035, FR-039, FR-040, FR-048, FR-053 |
| **Expected behaviour** | Customer starts from a product; after photo upload, validation and consent, a preview is generated and displayed with a disclaimer. The same photo can be reused to try multiple eligible products within the same active try-on session without uploading it again. Customer can replace the photo, regenerate or exit at any time. A new session requires a new upload. |
| **Limitations** | Preview is approximate. Quality depends on photo quality, pose, lighting and garment type. It may not accurately render fabric drape, texture, embroidery, fit or length. Not every product may be eligible (FR-053). Processing time and cost are TBD. |
| **Privacy requirements** | The original uploaded photo is used only during the active try-on session and is not retained long-term. It may be reused for multiple eligible products within that session. The original photo and unsaved generated previews are automatically deleted when the session ends or expires. Earlier deletion must remain available. No secondary use without separate consent; access is restricted (NFR-012 to NFR-015). |
| **Acceptance criteria** | (1) A customer with an eligible product, valid photo and consent receives a preview or a clear failure message. (2) Disclaimer is visible with every preview. (3) No preview is generated without recorded consent. (4) Ineligible products do not show an active try-on control. |
| **Release position** | **MVP: limited-scope pilot** — Must Have for a defined set of eligible products (Section 24). Eligible product types **TBD**. |
| **TBD** | AI provider/model; eligible garment types; processing limits; per-user usage limits; output resolution. |

### 16.4 AI Feature 2 — Personal Photo Upload

| Aspect | Description |
|---|---|
| **Description** | Lets the customer provide a personal photo for use in try-on. |
| **User benefit** | Enables a personalised preview using the customer's own appearance. |
| **Related requirements** | FR-036, FR-037, FR-038, FR-047 |
| **Expected behaviour** | Customer uploads or captures a photo once per active try-on session (capture method **TBD**), receives guidance (e.g., full-body, even lighting, plain background, single person), and sees validation feedback. After validation and consent, the same photo remains available for multiple eligible product try-ons within that session. Customer can replace or delete it at any time. A new session requires a new upload. |
| **Limitations** | Accepted file types, size and resolution are **TBD**. Poor-quality photos may produce poor results. Photos of other people, or photos not belonging to the user, must not be accepted by policy. |
| **Privacy requirements** | Explicit consent; session-scoped processing; no long-term storage of the original uploaded photo; encrypted transmission and any temporary storage (NFR-013); no public visibility. The original photo and unsaved generated previews are automatically deleted when the active session ends or expires. Minors are handled per policy (OQ-009). |
| **Acceptance criteria** | (1) Unsupported or invalid files are rejected with a clear message. (2) After one successful upload and consent, the same photo can be used for multiple eligible product try-ons in the active session without re-upload. (3) Customer can replace or delete the photo and receives confirmation. (4) No photo processing occurs without consent. (5) The original photo is not reused in a later session and is automatically deleted when the active session ends or expires. (6) Photo is not visible to other customers. |
| **Release position** | **MVP: Must Have** (prerequisite for try-on). |
| **TBD** | Active-session expiry/termination rule and exact deletion timing; permitted formats and size; camera capture; handling of minors; retention period for generated images explicitly saved as Saved Looks. The original uploaded photo is session-only and is not reused across sessions. |

### 16.4a Consent Requirements (Applies to Features 1–5)

| ID | Requirement |
|---|---|
| CR-1 | Consent is explicit, informed and separate from general Terms acceptance. |
| CR-2 | Consent text states what is collected, why, who processes it, how long it is retained and how to delete it. (Exact legal wording requires legal review, **TBD**.) |
| CR-3 | Consent is recorded with timestamp and consent-text version. |
| CR-4 | Consent can be withdrawn at any time; withdrawal stops further processing and triggers deletion per policy. |
| CR-5 | Consent for any use beyond try-on (e.g., model training, marketing, public display) is optional, separate and off by default. |
| CR-6 | For users under 18, additional rules apply (**TBD**, OQ-009). |

### 16.5 AI Feature 3 — AI Outfit Preview

| Aspect | Description |
|---|---|
| **Description** | Shows how selected or suggested items look together as an outfit. An outfit preview may be shown on a standard visual presentation (e.g., composed product images or model imagery) and, where supported, on the customer's own photo. |
| **User benefit** | Helps customers understand how products combine and encourages multi-item purchases. |
| **Related requirements** | FR-042, FR-044, FR-045, FR-046, FR-062 |
| **Expected behaviour** | Customer picks a base item; the platform offers compatible items (curated in MVP, AI-assisted later); customer previews the combination, swaps items, and adds items to cart. |
| **Limitations** | Compatibility suggestions are style guidance, not rules. Quality depends on catalogue data (tags, categories). Visual composition accuracy varies. |
| **Privacy requirements** | If the outfit is previewed on the customer's own photo, all consent and photo-handling rules apply. Outfit previews without personal photos need no photo consent. |
| **Acceptance criteria** | (1) Customer can preview at least one multi-item outfit combination. (2) Item prices and total reflect current prices. (3) Unavailable items are flagged. (4) Customer can add the outfit's items to cart with chosen variants. |
| **Release position** | **MVP: Should Have** (staff-curated outfits, no personal photo required). AI-assisted outfit suggestions are Could Have / Future. |
| **TBD** | Whether outfit composition is AI-generated or rules-based; how compatibility is determined; styling taxonomy. |

### 16.6 AI Feature 4 — Complete Outfit Try-On

| Aspect | Description |
|---|---|
| **Description** | Renders multiple garments (e.g., shirt, trousers, footwear, accessories) together on the customer's uploaded photo. |
| **User benefit** | Allows a head-to-toe visualisation, which is especially useful for occasion wear. |
| **Related requirements** | FR-043, FR-044, FR-045, FR-046, FR-048 |
| **Expected behaviour** | Customer selects multiple compatible items and sees them applied together on their photo, with a disclaimer; can swap items and compare. |
| **Limitations** | Technically more complex than single-garment try-on. Layering, garment overlap, footwear/accessory rendering and consistency may be limited. Feasibility depends on the AI approach selected (**TBD**). Processing time and cost are higher. |
| **Privacy requirements** | Same as Features 1 and 2. |
| **Acceptance criteria** | (1) When enabled, customer can generate a multi-garment preview or receives a clear explanation if unsupported. (2) Disclaimer shown. (3) Failure never blocks adding items to cart. |
| **Release position** | **Could Have** in initial release, **Should Have** for Release 2, subject to feasibility validation (OQ-012). |
| **TBD** | Technical feasibility; supported garment combinations; cost per generation. |

### 16.7 AI Feature 5 — AI Size Recommendation

| Aspect | Description |
|---|---|
| **Description** | Suggests a size for a product based on information the customer provides (e.g., height, weight, typical size, key body measurements in inches) and the product's size chart. **This is independent of the visual try-on.** |
| **User benefit** | Reduces size uncertainty and the likelihood of wrong-size orders. |
| **Related requirements** | FR-010, FR-049, FR-050 |
| **Expected behaviour** | Customer enters measurements or answers a short questionnaire; the system suggests a size and states confidence or uncertainty where relevant; customer retains final choice. |
| **Limitations** | A recommendation is guidance only, not a guarantee. Accuracy depends on size-chart quality, garment variation and input accuracy. It must never use the try-on image to determine size in the initial release. |
| **Privacy requirements** | Body measurements are personal data: collect only with notice; allow edit/delete; store only with the customer's consent (NFR-014). |
| **Acceptance criteria** | (1) Customer can obtain a size suggestion without using try-on. (2) Every suggestion carries a "guidance only" statement and a link to the size guide. (3) Recommendation uses inches. (4) If data is insufficient, the system says so instead of guessing. (5) Customer can choose any size regardless of recommendation. |
| **Release position** | **MVP: Should Have** (size-chart-based logic). ML-based refinement using return/fit data is Future. |
| **TBD** | Recommendation method (rule-based vs. learned); size-chart data availability per product; inputs required; whether suggestions can be saved to profile. |

### 16.8 AI Feature 6 — Wishlist & Saved Looks

| Aspect | Description |
|---|---|
| **Description** | Lets customers save favourite products (wishlist) and generated or curated looks (saved looks) for later. |
| **User benefit** | Supports consideration over time, comparison and return visits; links inspiration to purchase. |
| **Related requirements** | FR-030, FR-031, FR-044, FR-045 |
| **Expected behaviour** | Customer can add/remove products to wishlist from listings and product pages, and save looks from try-on or Shop the Look. Items persist for logged-in users. Guest behaviour is **TBD**. |
| **Limitations** | Saved looks containing personal photos are subject to retention rules and deletion rights. Saved items may become unavailable or change price. |
| **Privacy requirements** | Saved looks containing a user's photo are private by default. Sharing is explicit and revocable. |
| **Acceptance criteria** | (1) Logged-in customer can add and remove wishlist items and they persist across sessions. (2) Saved looks list is accessible from the account area. (3) Deleting a saved look removes the generated image. (4) Unavailable items are clearly marked. |
| **Release position** | **MVP: Wishlist — Must Have. Saved looks — Should Have.** |
| **TBD** | Guest wishlist (local vs. account-only); maximum saved items; share method and link expiry. |

### 16.9 AI Feature 7 — Personalised Product Recommendations

| Aspect | Description |
|---|---|
| **Description** | Suggests products relevant to individual customers, shown in "Recommended for You", product pages and elsewhere. |
| **User benefit** | Reduces search effort; surfaces relevant styles and categories. |
| **Related requirements** | FR-013, FR-051, FR-052, FR-065 |
| **Expected behaviour** | Uses permitted signals (e.g., viewed categories, wishlist, purchases, selected style preferences) to rank suggestions. Defaults to popular/curated items when signals are lacking. Customers can reset or turn off personalisation. |
| **Limitations** | Needs sufficient behavioural data to be useful. Early results will be generic. The system must not infer or display sensitive attributes. Try-on photos must not be used for recommendations without separate consent. |
| **Privacy requirements** | Behavioural tracking only per cookie/analytics consent (FR-078); transparent explanation of personalisation; opt-out supported. |
| **Acceptance criteria** | (1) New visitors see sensible fallback recommendations. (2) Returning users see items reflecting their activity once sufficient data exists. (3) Opt-out immediately removes personalisation. (4) Recommended items respect stock status. |
| **Release position** | **MVP: rule-based recommendations — Should Have.** Machine-learned personalisation — Could Have / Future. |
| **TBD** | Data signals used; algorithm; tracking tools; whether a style-preference questionnaire is included. |

---

## 17. E-commerce Functional Requirements

This section summarises the e-commerce capabilities required and the detailed requirement IDs in Section 21.

| Capability | Requirement Summary | Requirement IDs |
|---|---|---|
| Product listing | Browsable grid of products with image, name, price, discount, colour hints and wishlist control; pagination or load-more behaviour **TBD** | FR-001 |
| Product categories | Nine fashion categories, multi-category assignment, category landing pages | FR-002 |
| Product search | Keyword search across name, category, colour and other attributes; handles no-result cases | FR-003 |
| Filters and sorting | Filter by category, size, colour, price range (৳), availability, discount; sort by relevance, newest, price, rating | FR-004, FR-005 |
| Product details | Full product information: name, price, description, material/care (if supplied), colours, sizes, availability, reviews, try-on entry | FR-006 |
| Product image gallery | Multiple images per product and colour, zoom, swipe on mobile | FR-007 |
| Product colours | Colour variants with swatches, linked images and stock | FR-008 |
| Size selection | Size selection per variant with availability status | FR-009 |
| Size guide | Size chart in inches, how-to-measure guidance, link to size recommendation | FR-010, FR-049 |
| Product pricing | Prices displayed in ৳ with consistent formatting | FR-011 |
| Discounts | Original and discounted price display, campaign and coupon support | FR-012, FR-020 |
| Wishlist | Save and remove favourite products | FR-030 |
| Shopping cart | Add, edit, remove items; running totals; persistent cart | FR-015 |
| Checkout | Delivery details, delivery charge, payment selection, order review, order placement | FR-016 to FR-019 |
| Customer registration | Account creation with Bangladesh phone/email | FR-025 |
| Login and authentication | Secure login, session handling, logout | FR-026, FR-027 |
| Customer profile | Personal details, addresses, preferences, privacy controls | FR-028, FR-029 |
| Order confirmation | On-screen confirmation and notification with order summary | FR-021, FR-090 |
| Order history | List and detail of past orders | FR-022 |
| Order tracking | Order status and tracking information | FR-023 |
| Customer reviews | Submit and display reviews for purchased products | FR-032 |
| Ratings | Star ratings and aggregates | FR-033 |
| Related products | Suggestions on the product page | FR-013 |

---

## 18. Customer Account and Personalization Requirements

| Area | Requirement | Requirement IDs |
|---|---|---|
| Account creation | Customers register using phone number and/or email (method **TBD**). Guest checkout availability is **TBD** (OQ-014). | FR-016, FR-025 |
| Authentication | Secure login, logout and password recovery. Verification method (OTP/email link) is **TBD** (OQ-015). | FR-026, FR-027 |
| Profile | Name, phone, email, gender-neutral style preferences (optional), measurements (optional, consented), delivery addresses | FR-028, FR-029 |
| Wishlist | Persistent list of saved products | FR-030 |
| Saved looks | Saved AI-generated and curated looks, privately stored | FR-031 |
| Style preferences | Optional preferences (categories, styles, colours) that improve recommendations. Questionnaire format **TBD**. | FR-051 |
| Personalised recommendations | Relevant product suggestions with opt-out | FR-051, FR-052 |
| Privacy centre | Customer can delete the photo in the active try-on session, saved-look images and saved measurements; manage consent and marketing preferences | FR-028, FR-047 |
| Order and review history | Past orders, tracking, submitted reviews | FR-022, FR-023, FR-032 |
| Data deletion | Customer can request account and data deletion. Process and legal retention exceptions **TBD** (OQ-019). | FR-028, FR-047 |

---

## 19. Bangladesh-Specific Requirements

> Per project rules, no delivery prices, timelines, payment integrations or business policies are invented. Everything unconfirmed is marked **TBD**.

| # | Area | Requirement | Status |
|---|---|---|---|
| BD-1 | Currency | All prices, discounts, delivery charges, totals and payments in **BDT (৳)**. Format for ৳ amounts (e.g., thousand separators) to be defined in UI specification. | Confirmed |
| BD-2 | Phone numbers | Accept and validate Bangladesh mobile number formats (including local 11-digit and +880 international formats). Normalised storage format is a technical decision. | Confirmed (validation rules in FR-025) |
| BD-3 | Addresses | Bangladesh-friendly address fields: recipient name, mobile number, division, district, area/thana (upazila where relevant), detailed address (house/road/block/village), landmark (optional), and postal code (optional). Exact field list **TBD**. | Field set TBD |
| BD-4 | Dhaka launch | Delivery serviceable in Dhaka initially; non-serviceable locations must be clearly communicated at address entry. Dhaka service area definition **TBD**. | Confirmed (area TBD) |
| BD-5 | Dhaka vs outside-Dhaka | Platform must support different delivery information for Dhaka and outside-Dhaka locations. | Confirmed (values TBD) |
| BD-6 | Nationwide expansion | Delivery zones, charges and availability must be configurable by staff so new regions can be enabled without redevelopment (FR-086). | Confirmed |
| BD-7 | Delivery charges | Transparent display of delivery charge before order placement. **Amounts TBD**. | TBD |
| BD-8 | Delivery timelines | Display estimated delivery information only after the business confirms it. **Timelines TBD**. | TBD |
| BD-9 | Cash on Delivery | Support COD as a payment method if confirmed. Rules (limits, eligible areas, confirmation calls) **TBD**. | TBD |
| BD-10 | Mobile Financial Services | Support MFS payment options (specific providers **TBD**) subject to actual provider integration. | TBD |
| BD-11 | Online payments | Support card or other online payment options subject to actual provider integration. Provider(s) **TBD**. | TBD |
| BD-12 | Exchange and returns | Clear exchange and return information on the product page, checkout and dedicated policy page. **Policy TBD**. | TBD |
| BD-13 | Measurements | All clothing measurements and size charts in **inches**. | Confirmed |
| BD-14 | Customer support | Visible support channels and contact details (channels and hours **TBD**). | TBD |
| BD-15 | Trust features | Clear policies, secure checkout indicators (only where true), genuine reviews and customer photos, transparent AI disclaimers, contact information. | Confirmed |
| BD-16 | Language | English at minimum; Bangla support **TBD** (OQ-010). Platform must support Bangla text input and display (Unicode) regardless (NFR-034). | TBD |
| BD-17 | Seasonality | Support festive and seasonal campaigns (e.g., major festivals) through the Seasonal Collections feature. Specific calendar **TBD**. | TBD |
| BD-18 | Connectivity | Experience must remain usable on mobile networks and mid-range devices (NFR-007). | Confirmed |

---

## 20. User Roles and Permissions

### 20.1 Roles

| Role | Description |
|---|---|
| **Visitor (Guest)** | Unauthenticated website user |
| **Customer** | Registered, authenticated user |
| **Super Admin** | Full system administration |
| **Catalogue & Inventory Manager** | Manages products, variants, prices, stock, size charts and try-on eligibility |
| **Order Manager** | Processes orders, updates statuses, handles cancellations, exchanges and returns |
| **Content & Marketing Manager** | Manages homepage content, banners, collections, promotions, newsletter and social content |
| **Customer Support Agent** | Assists customers with orders and account queries; moderates reviews (if assigned) |
| **Analyst (Read-only)** | Views reports and dashboards without changing data |

> Exact staff structure and job titles are **TBD**. Roles above are proposed functional groupings.

### 20.2 Permission Matrix

Legend: **C** = Create, **R** = Read, **U** = Update, **D** = Delete, **—** = No access, **L** = Limited (own data / defined scope).

| Capability | Visitor | Customer | Super Admin | Catalogue & Inventory | Order Manager | Content & Marketing | Support Agent | Analyst |
|---|---|---|---|---|---|---|---|---|
| Browse catalogue, search | R | R | R | R | R | R | R | R |
| Use virtual try-on | L (account requirement **TBD**) | L | — | — | — | — | — | — |
| Manage own profile & addresses | — | C R U D (own) | — | — | — | — | — | — |
| Manage own wishlist & saved looks | L (guest TBD) | C R U D (own) | — | — | — | — | — | — |
| Place orders | L (guest TBD) | C R (own) | R | — | R | — | R | — |
| Submit reviews | — | C (own, rule TBD) | — | — | — | — | — | — |
| Moderate reviews | — | — | C R U D | — | — | — | R U | — |
| Manage products, prices, stock | — | — | C R U D | C R U D | R | R | R | R |
| Manage size charts, try-on eligibility | — | — | C R U D | C R U D | — | — | — | R |
| Manage orders & statuses | — | — | C R U D | R | C R U D | — | R U (limited) | R |
| Manage delivery zones & charges | — | — | C R U D | — | R U (if assigned, TBD) | — | — | R |
| Manage homepage content, banners | — | — | C R U D | — | — | C R U D | — | R |
| Manage promotions & coupons | — | — | C R U D | R | R | C R U D | R | R |
| View customer details | — | R (own) | R U | — | R (order-related) | — | R (limited) | R (aggregated) |
| View customer-uploaded try-on photos | — | R (own) | **Restricted** (audit-logged, need-based, TBD) | — | — | — | — | — |
| View reports & KPIs | — | — | R | R (catalogue) | R (orders) | R (marketing) | — | R |
| Manage staff accounts & roles | — | — | C R U D | — | — | — | — | — |

**Rules:**
- Access to customer personal photos is restricted to the minimum necessary and every access must be logged (NFR-012, NFR-027).
- Staff cannot download or export customer try-on photos unless a documented policy permits it (**TBD**).

---

## 21. Functional Requirements

All functional requirements use unique IDs (FR-001 onwards). Priorities follow MoSCoW: **Must Have**, **Should Have**, **Could Have**, **Won't Have (Initial Release)**. Priorities are **proposed** pending business-owner approval.

### 21.1 Catalogue and Product Discovery

| ID | Feature | Description | User Benefit | Priority | Acceptance Criteria |
|---|---|---|---|---|---|
| FR-001 | Product listing | The system shall display products in a browsable listing showing primary image, name, price (৳), discount indicator, colour availability and wishlist control. | Quick browsing and comparison | Must Have | A listing page shows all active products of the selected scope; each card displays the listed fields; clicking a card opens the product page; inactive products never appear. |
| FR-002 | Category structure | The system shall provide the nine defined fashion categories and allow a product to belong to more than one category or collection. | Easy navigation by style | Must Have | All nine categories exist with their own listing pages; a product assigned to two categories appears in both; an admin can assign and change categories without developer help. |
| FR-003 | Product search | The system shall provide keyword search covering product name, category and key attributes (e.g., colour), and handle no-result queries. | Fast finding of specific items | Must Have | Searching an existing product name returns it in results; a query with no matches shows a "no results" message with alternative suggestions; empty query is handled without error. |
| FR-004 | Filters | The system shall allow filtering listings by at least category, size, colour, price range (৳) and availability. Additional filters (e.g., discount) are TBD. | Narrow choices efficiently | Must Have | Applying each filter reduces results to matching products only; multiple filters combine; clearing filters restores the full list; result count is shown. |
| FR-005 | Sorting | The system shall allow sorting by at least newest, price low-to-high, price high-to-low. Rating and popularity sorting are added when supporting data exists. | Orders results to preference | Must Have | Each sort option orders the displayed results correctly; selected sort persists while paging within the listing. |
| FR-006 | Product detail page | The system shall present each product's name, price, description, available colours and sizes, availability, size guide link, reviews summary, related products and try-on entry (where eligible). | Informed purchase decisions | Must Have | All listed elements render for a product with complete data; missing optional data (e.g., no reviews) does not break the page; variants selectable before add-to-cart. |
| FR-007 | Product image gallery | The system shall display multiple images per product (and per colour where available) with zoom and mobile swipe. | Better visual evaluation | Must Have | Customer can view all images; zoom works on desktop and mobile; selecting a colour shows that colour's images where supplied. |
| FR-008 | Product colour options | The system shall support colour variants with swatches, associated images and independent stock. | Choose preferred colour | Must Have | Selecting a swatch updates images and availability; out-of-stock colours are clearly indicated. |
| FR-009 | Size selection | The system shall let customers select a size per product with per-size availability. | Correct size ordering | Must Have | Sizes are displayed per product; unavailable sizes are marked and not selectable for purchase; add-to-cart requires a size selection where sizes apply. |
| FR-010 | Size guide | The system shall provide a size guide in **inches** per product or category, with how-to-measure guidance. Size chart data is supplied by the business. | Reduces size uncertainty | Must Have | Size guide opens from the product page; all measurements shown in inches; displays the chart relevant to that product's category. |
| FR-011 | Product pricing | The system shall display prices in BDT (৳) in a consistent format on all pages. | Price clarity | Must Have | Price is shown with ৳ symbol on listing, product, cart and checkout; the same product shows the same price everywhere at a given time. |
| FR-012 | Discounts | The system shall support discounted products showing original and discounted prices, with optional schedule. Discount amounts are business-defined (**TBD**). | Visible savings | Must Have | A discounted product shows both prices; the discounted price is the one charged; expired discounts revert to the original price automatically. |
| FR-013 | Related products | The system shall show related products on the product page, based on category, style or curated links. | Discovery of alternatives | Should Have | Product page displays related items other than the current product; items link to their product pages; section hides when no related items exist. |
| FR-014 | Stock availability | The system shall display product and variant availability and prevent purchase of unavailable variants. | Avoids failed orders | Must Have | Out-of-stock variants cannot be added to cart; stock changes reflect on the site; low-stock messaging only if confirmed by the business (TBD). |

### 21.2 Cart, Checkout and Orders

| ID | Feature | Description | User Benefit | Priority | Acceptance Criteria |
|---|---|---|---|---|---|
| FR-015 | Shopping cart | The system shall allow adding, changing quantity/variant and removing items, and show item subtotals and cart total in ৳. Cart persists across the session (and for logged-in users across sessions). | Control over purchase | Must Have | Added item appears in cart with selected size/colour; quantity change recalculates totals; removal updates totals; logged-in cart persists after re-login. |
| FR-016 | Guest checkout | The system shall allow checkout without registration **if approved by the business (TBD, OQ-014)**. | Faster purchase | Should Have | If enabled, a guest can complete an order with required contact and delivery details; if disabled, the customer is prompted to register or log in. |
| FR-017 | Checkout delivery details | The system shall collect recipient name, Bangladesh mobile number and Bangladesh-friendly address fields (Section 19, BD-3), with validation. | Accurate delivery | Must Have | Invalid mobile numbers and missing required address fields are rejected with clear messages; valid details proceed to the next step; logged-in users can select a saved address. |
| FR-018 | Delivery charge display | The system shall display the applicable delivery charge before order placement, based on configured delivery zone rules. Charges are **TBD**. | Price transparency | Must Have | The delivery charge shown at checkout matches the configured rule for the selected zone; total equals subtotal + delivery − discounts; if delivery is unavailable for a location, the customer is informed before payment. |
| FR-019 | Payment method selection | The system shall present only the payment methods the business has confirmed and integrated (COD, MFS, online; **TBD**) and process the chosen method. | Convenient, familiar payment | Must Have | Only enabled methods are shown; selecting each enabled method leads to the correct completion flow; failed payments return the customer to checkout with their cart intact. |
| FR-020 | Coupon codes | The system shall support promotion/coupon codes with rules (validity, eligibility, stacking **TBD**). | Savings | Should Have | Valid code applies the configured discount and shows it in the total; invalid or expired code shows a clear message; rules defined by admin are enforced. |
| FR-021 | Order confirmation | The system shall display an order confirmation with order number and summary after placement, and send a notification (FR-090). | Assurance of purchase | Must Have | After successful placement, a confirmation page shows order number, items, delivery details, payment method and totals; the order appears in admin; duplicate submission does not create duplicate orders. |
| FR-022 | Order history | The system shall let logged-in customers view past orders and details. | Reference and reorder | Must Have | Customer sees only their own orders, newest first; each order shows items, totals, date and status. |
| FR-023 | Order tracking | The system shall show order status progression (statuses **TBD**) and courier tracking information when available. | Delivery visibility | Should Have | Order status shown in order detail updates when staff change it; tracking reference/link shown if provided. Courier integration is TBD (OQ-022). |
| FR-024 | Cancellation, exchange and return requests | The system shall support customer-initiated requests per the business's confirmed policy (**TBD**, OQ-008). | Post-purchase confidence | Should Have | Request option appears only where the policy permits; submitted requests are visible to staff and to the customer with status; ineligible items show the reason. |

### 21.3 Customer Account and Engagement

| ID | Feature | Description | User Benefit | Priority | Acceptance Criteria |
|---|---|---|---|---|---|
| FR-025 | Customer registration | The system shall allow account registration with name and phone and/or email (method **TBD**), validating Bangladesh phone formats, and requiring acceptance of Terms and Privacy Policy. | Personalised, saved experience | Must Have | Valid details create an account; duplicate phone/email is rejected with guidance; invalid phone formats are rejected; policy acceptance is recorded. |
| FR-026 | Login and authentication | The system shall provide secure login and logout and maintain sessions appropriately. Verification method (OTP/email) is **TBD**. | Secure access | Must Have | Correct credentials grant access; incorrect credentials show a generic error; logout ends the session; repeated failures trigger a protective measure (NFR-023). |
| FR-027 | Password / access recovery | The system shall allow customers to recover account access through a verified channel. | Regain access | Must Have | Recovery request sends a time-limited link/code to the registered channel; used or expired codes are rejected. |
| FR-028 | Customer profile and privacy controls | The system shall let customers view/edit personal details, manage marketing preferences, delete the photo in an active try-on session and manage saved measurements, withdraw consent and request account deletion. The original try-on photo is not retained across sessions. | Control over personal data | Must Have | Edits persist; consent withdrawal and active-session photo deletion take effect and are confirmed to the customer; account-deletion request is logged and handled per policy (**TBD**). |
| FR-029 | Address book | The system shall let customers save, edit, delete and select default delivery addresses. | Faster checkout | Should Have | Saved addresses appear at checkout; edits do not alter past orders; deletion removes the address from future selection. |
| FR-030 | Wishlist | The system shall allow customers to add and remove products to a wishlist from listing and product pages and view the wishlist. | Save for later | Must Have | Heart/save control toggles state; wishlist shows saved items with current price and availability; logged-in wishlist persists across sessions; guest behaviour per decision (OQ-026). |
| FR-031 | Saved looks | The system shall allow customers to save try-on results and outfit combinations to their account, view, rename, delete and re-open them. | Revisit and compare looks | Should Have | Saving adds the look to "Saved Looks"; deleting a look removes its generated image; only the owner can see a look unless explicitly shared. |
| FR-032 | Review submission | The system shall allow eligible customers to submit a rating and written review for a product. Eligibility rule (e.g., verified purchase) **TBD** (OQ-017). | Shared experiences | Should Have | Eligible customer can submit rating and text; submission enters moderation before display; ineligible users see an explanatory message. |
| FR-033 | Ratings display | The system shall show star ratings and aggregate averages and counts calculated from approved reviews. | Social proof | Should Have | Average and count match underlying approved ratings; products with no ratings show "No ratings yet" rather than a zero score. |
| FR-034 | Customer photo submission | The system shall let customers optionally submit real photos with reviews, with explicit permission for public display. | Authentic social proof | Could Have | Submission requires a permission checkbox; photos remain unpublished until staff approval; customer can request removal. |

### 21.4 AI Features

| ID | Feature | Description | User Benefit | Priority | Acceptance Criteria |
|---|---|---|---|---|---|
| FR-035 | Try-on entry points | The system shall provide Virtual Try-On entry points on eligible product pages, the header and the homepage try-on section. | Easy access | Must Have | Entry control appears on eligible products and opens the try-on experience; not shown on ineligible products. |
| FR-036 | Personal photo upload | The system shall let customers upload a personal photo once per active try-on session (formats, size limits and camera capture **TBD**). | Personalised preview | Must Have | A valid photo uploads successfully and is shown for confirmation; after consent, it can be reused for multiple eligible product try-ons in that active session without re-upload; unsupported or oversized files are rejected with a clear message; customer can replace or delete the photo; a new session requires a new upload. |
| FR-037 | Photo guidance and validation | The system shall give guidance for a suitable photo (e.g., lighting, pose, one person) and perform basic validation. Validation rules are **TBD**. | Better results | Should Have | Guidance is visible before upload; photos failing defined validation checks prompt the customer to retake or replace. |
| FR-038 | Consent capture | The system shall obtain and record explicit, informed, separate consent before processing any personal photo (CR-1 to CR-6). | Control and transparency | Must Have | Upload processing cannot start until the consent is given; consent record stores timestamp and text version; withdrawing consent stops further processing and triggers deletion. |
| FR-039 | Single-garment try-on generation | The system shall generate an AI preview of one eligible garment on the customer's photo. | See product on self | Must Have | For an eligible product with photo and consent, the system returns a preview or a clear failure message; processing state is shown; the preview is clearly associated with the selected product and colour. |
| FR-040 | AI preview disclaimer | The system shall display, with every AI preview, a statement that it is an approximate visual representation and not a guarantee of exact fit, and a link to the size guide. | Honest expectations | Must Have | Disclaimer is visible on every preview display, including shared/saved looks; no wording on the site claims exact fit. |
| FR-041 | Colour change in try-on | The system shall allow switching to other available colours of the product within the preview where supported. | Compare colours | Should Have | Selecting an available colour regenerates or swaps the preview for that colour; unsupported colours are shown as unavailable for try-on; colour shown matches the purchasable variant. |
| FR-042 | AI outfit preview | The system shall present multi-item outfit combinations (curated in the initial release) with item details and totals. | Style inspiration, outfit confidence | Should Have | Customer can open an outfit, see all its items, prices and total, swap items where allowed, and view availability. |
| FR-043 | Complete outfit try-on | The system shall render multiple garments together on the customer's photo, **subject to feasibility (OQ-012)**. | Head-to-toe visualisation | Could Have | Where enabled, selected compatible items appear together in one preview with the disclaimer; unsupported combinations show a clear message. |
| FR-044 | Compare looks | The system shall let the customer view two or more looks side by side. | Choose best look | Should Have | Customer can select at least two saved or generated looks and view them together; each shows its items and price. |
| FR-045 | Save and share look | The system shall let customers save a look and share it through a share action with a private, revocable link or downloadable image (method **TBD**). Shared looks contain the customer's photo only after an explicit sharing confirmation. | Social validation | Should Have | Save adds the look to the account; share requires explicit confirmation of what will be shared; the customer can revoke sharing; shared view carries the AI disclaimer. |
| FR-046 | Add to cart from try-on or look | The system shall allow adding the products in a preview or look to the cart with selected size and colour. | Seamless purchase | Must Have | Selecting add-to-cart from a preview adds the correct product variant(s); missing size selection prompts the customer; unavailable items are flagged and do not block others. |
| FR-047 | Photo retention and deletion | The original uploaded photo and unsaved generated previews shall be retained only for the active try-on session and automatically deleted when that session ends or expires. The original photo shall not be retained across sessions. A generated image may be retained as a Saved Look only after the customer explicitly saves it; its retention/deletion policy remains subject to approval. | Privacy control | Must Have | Customer can delete the original photo and unsaved previews before session expiry; deletion is confirmed. Session end/expiry automatically deletes the original photo and unsaved previews. The original photo is not available in a later session. Deleting a Saved Look removes its retained generated image according to the approved deletion process. |
| FR-048 | Try-on failure and fallback | The system shall handle processing errors, timeouts and unsupported photos with clear messages, offer retry, and never block shopping. | Reliable experience | Must Have | On failure, the customer sees an understandable message and a retry or "continue shopping" option; the failure is logged for staff; cart and browsing are unaffected. |
| FR-049 | AI size recommendation | The system shall suggest a size from customer-provided inputs (e.g., height, weight, measurements in inches) and the product's size chart, with a "guidance only" statement. | Size confidence | Should Have | Valid inputs produce a recommended size; insufficient or out-of-range inputs produce a clear message instead of a guess; recommendation links to the size guide; customer can select any size. |
| FR-050 | Independence of size recommendation | The system shall keep size recommendation separate from visual try-on: using one shall not be required for the other, and try-on output shall not be presented as size advice. | Clear expectations | Must Have | Size recommendation works with no photo upload; try-on works with no size inputs; the two features have separate entry points and separate disclaimers. |
| FR-051 | Personalised recommendations | The system shall recommend products using permitted signals (e.g., browsing, wishlist, purchases, optional style preferences). Method **TBD**. | Relevant discovery | Should Have | After a user views or saves items in a category, recommended items reflect that category; recommendations exclude unavailable items. |
| FR-052 | Recommendation fallback and control | The system shall provide non-personalised fallback recommendations for new users and allow users to opt out of or reset personalisation. | Control, no empty states | Should Have | New visitors see fallback items; selecting opt-out or reset removes personalisation immediately. |
| FR-053 | Try-on eligibility management | The system shall let authorised staff mark which products (and colours) are eligible for try-on. | Quality control | Must Have | Only products flagged eligible show active try-on controls; changes take effect without developer involvement. |

### 21.5 Homepage Sections

| ID | Feature | Description | User Benefit | Priority | Acceptance Criteria |
|---|---|---|---|---|---|
| FR-054 | Announcement Bar | Staff-managed, schedulable message bar (Section 15, #1). | Timely information | Must Have | See Section 15, #1. |
| FR-055 | Header & Navigation | Brand, category navigation, search, account, wishlist, cart, try-on access (#2). | Easy navigation | Must Have | See Section 15, #2. |
| FR-056 | Hero Banner | Primary campaign banner with CTA, staff-managed (#3). | Strong first impression | Must Have | See Section 15, #3. |
| FR-057 | AI Virtual Try-On Welcome Popup | Dismissible introduction to try-on with display rules (#4). | Feature awareness | Should Have | See Section 15, #4. |
| FR-058 | Shop by Category | Entry tiles for the nine categories (#5). | Quick category access | Must Have | See Section 15, #5. |
| FR-059 | AI Virtual Try-On Feature Section | Explains try-on, limits and privacy, with CTA (#6). | Understand and trust try-on | Must Have | See Section 15, #6. |
| FR-060 | New Arrivals | Latest products section (#7). | Fresh discovery | Must Have | See Section 15, #7. |
| FR-061 | Trending / Best Sellers / Top Rated | Tabbed product section (#8). | Social proof | Should Have | See Section 15, #8. |
| FR-062 | Shop the Look | Curated outfits with add-to-cart (#9). | Outfit inspiration | Should Have | See Section 15, #9. |
| FR-063 | Special Offers & Discounts | Active promotions display (#10). | Savings visibility | Must Have | See Section 15, #10. |
| FR-064 | Seasonal & Featured Collection | Staff-managed featured collection (#11). | Timely curation | Must Have | See Section 15, #11. |
| FR-065 | Recommended for You | Personalised or fallback recommendations (#12). | Relevance | Should Have | See Section 15, #12. |
| FR-066 | Real Customer Photos | Moderated customer imagery (#13). | Authentic trust | Should Have | See Section 15, #13. |
| FR-067 | Customer Reviews & Ratings | Approved reviews and ratings display (#14). | Social proof | Should Have | See Section 15, #14. |
| FR-068 | Why Choose Us | Brand benefits section (#15). | Brand clarity | Must Have | See Section 15, #15. |
| FR-069 | Delivery, Payment & Return Benefits | Policy summary (#16). | Reduced anxiety | Must Have | See Section 15, #16. |
| FR-070 | Featured Brands / Brand Story | Brand story or partner brands (#17). | Brand credibility | Should Have | See Section 15, #17. |
| FR-071 | Newsletter Subscription | Opt-in subscription form (#18). | Stay informed | Should Have | See Section 15, #18. |
| FR-072 | Instagram & Social Media Feed | Brand social content (#19). | Community and inspiration | Could Have | See Section 15, #19. |
| FR-073 | FAQ Section | Staff-managed FAQs (#20). | Self-service answers | Must Have | See Section 15, #20. |
| FR-074 | Footer | Navigation, legal, contact (#21). | Reference and trust | Must Have | See Section 15, #21. |

### 21.6 Platform, Compliance and Support

| ID | Feature | Description | User Benefit | Priority | Acceptance Criteria |
|---|---|---|---|---|---|
| FR-075 | Customer support and contact | The system shall provide contact information and a contact method (channels **TBD**, OQ-018) accessible from the footer and key pages. | Help when needed | Must Have | Confirmed contact channels are visible in the footer and on order pages; contact submissions (if form-based) reach staff and the customer receives acknowledgement. |
| FR-076 | Policy pages | The system shall provide pages for Delivery, Payment, Returns/Exchange, Privacy Policy, Terms and AI Try-On notice. Content is supplied and approved by the business (**TBD**). | Transparency | Must Have | Each page is reachable from the footer and relevant flows; no page is published with placeholder content; try-on notice explains limits and photo handling. |
| FR-077 | Language support | The system shall support English content and, if approved, Bangla content. Decision **TBD** (OQ-010). | Accessibility to wider audience | Should Have | English content is complete at launch; if Bangla is approved, customer can switch language and Bangla text renders correctly. |
| FR-078 | Cookie, analytics and consent | The system shall inform users about cookies/tracking, and apply analytics and personalisation tracking according to their consent choices. | Privacy control | Must Have | Consent choice is collected and honoured; analytics events relevant to KPIs (Section 29) are captured where consent permits. |
| FR-090 | Notifications | The system shall send transactional notifications (e.g., order confirmation, status updates) through confirmed channels (email/SMS/other **TBD**, OQ-031). | Order assurance | Must Have | Order placement triggers a confirmation through at least one confirmed channel; status changes trigger notifications as configured. |

### 21.7 Administration

| ID | Feature | Description | User Benefit (Business) | Priority | Acceptance Criteria |
|---|---|---|---|---|---|
| FR-079 | Product management | Authorised staff can create, edit, publish/unpublish products with images, colours, sizes, prices, categories, descriptions and size-chart data. | Catalogue control | Must Have | A new product published by staff appears on the storefront with all supplied data; unpublishing removes it from listings; changes are logged. |
| FR-080 | Inventory management | Staff can set and update stock per variant; stock decreases upon orders. | Prevent overselling | Must Have | Stock updates reflect on the site; placing an order reduces stock of purchased variants; cancellation restores stock per policy (**TBD**). |
| FR-081 | Order management | Staff can view, search, filter orders, update statuses, add tracking details, and process cancellations/returns. | Efficient fulfilment | Must Have | Orders are searchable by order number, phone and date; status updates are saved and visible to the customer; every change is logged. |
| FR-082 | Customer management | Authorised staff can view customer accounts and order relationships, with privacy restrictions. | Support effectiveness | Should Have | Staff see only data allowed by their role; access to sensitive data is logged. |
| FR-083 | Homepage content management | Staff can manage all homepage sections' content (banners, collections, FAQ, brand story, announcement) without developers. | Agility | Must Have | Authorised staff edit and publish content for each managed section and see the change on the live site. |
| FR-084 | Promotion management | Staff can create, schedule, and end discounts and coupon codes. | Campaign control | Must Have | Scheduled promotions activate and expire at the set times; edits do not affect completed orders. |
| FR-085 | Review moderation | Staff can approve, reject, or remove reviews and customer photos. | Quality and trust | Should Have | Only approved content is public; rejected content is never displayed; removal takes effect immediately. |
| FR-086 | Delivery zone and charge configuration | Authorised staff can define delivery zones (Dhaka, outside Dhaka, future zones), charges and availability. Values **TBD**. | Scalability of delivery | Must Have | Changing a zone's charge updates checkout for that zone; disabling a zone prevents orders to it with a clear message. |
| FR-087 | Reporting dashboard | Staff can view reports on sales, orders, products, customers (aggregated), try-on usage, and conversion. | Data-driven decisions | Should Have | Reports display data for selectable date ranges; figures reconcile with order records; try-on metrics exclude personal photos. |
| FR-088 | Role-based access control | The system shall enforce the role permissions in Section 20. | Security | Must Have | A user can access only functions allowed to their role; unauthorised attempts are denied and logged. |
| FR-089 | AI usage monitoring and content moderation | Staff can monitor try-on volume, failures, and cost indicators, and the system shall screen uploaded photos for unsafe or inappropriate content, per defined rules (**TBD**). | Cost, safety and quality control | Should Have | Try-on usage and failure counts are visible per period; photos violating the rules are rejected with a neutral message and are not processed. |

---

## 22. Non-Functional Requirements

> **Targets policy:** Numerical targets below are marked **Proposed**. They are drawn from widely used industry benchmarks (e.g., Google Core Web Vitals "good" thresholds, WCAG 2.1 AA) and are **not** confirmed business commitments. Where no defensible basis exists, the target is **TBD**.

| ID | Category | Requirement | Measure / Proposed Target | Priority |
|---|---|---|---|---|
| NFR-001 | Performance | Key pages (home, listing, product) shall load quickly on typical Bangladesh mobile connections and mid-range devices. | Proposed: Largest Contentful Paint ≤ 2.5 s at the 75th percentile on mobile, measured with real-user monitoring | Must Have |
| NFR-002 | Performance | Interactions (menu, filters, add-to-cart) shall respond without perceptible delay. | Proposed: Interaction to Next Paint ≤ 200 ms at the 75th percentile | Must Have |
| NFR-003 | Performance | Try-on processing shall show progress feedback and not freeze the page. Total generation time target depends on the selected AI provider. | Progress indicator shown within 1 s of submission; generation-time target **TBD** | Must Have |
| NFR-004 | Performance | Search shall return results promptly. | Proposed: results displayed within 1 s under normal load; confirm after catalogue size is known | Should Have |
| NFR-005 | Responsiveness | The site shall adapt to small mobile, tablet and desktop screens with no horizontal scrolling of the main page content. | Verified on defined breakpoints (**TBD** in UI spec) | Must Have |
| NFR-006 | Responsiveness | The site shall work on current versions of major browsers (Chrome, Safari, Firefox, Edge, Samsung Internet). | Supported-version policy **TBD** | Must Have |
| NFR-007 | Responsiveness / Performance | The site shall remain usable on slower mobile networks and mid-range Android devices; images shall be optimised and loaded progressively. | Tested on a defined low-bandwidth profile (**TBD**) | Must Have |
| NFR-008 | Scalability | The platform shall handle seasonal traffic peaks (e.g., festival and campaign periods) without degradation of checkout. | Expected peak concurrency **TBD** (OQ-029); load testing before launch | Must Have |
| NFR-009 | Scalability | The catalogue, categories, delivery zones and content shall be extendable (including nationwide expansion) without redesign. | Verified by adding a new zone and 10× catalogue volume in test (**TBD** baseline) | Should Have |
| NFR-010 | Scalability | AI processing shall handle bursts with queuing or limits so that one user's load does not impair others. | Per-user and system limits **TBD** | Must Have |
| NFR-011 | Reliability | The storefront and checkout shall be available during business-critical periods. | Availability target **TBD** (OQ-029) | Must Have |
| NFR-012 | Privacy / Security | Customer photos and generated images shall be accessible only to the owning customer and tightly restricted authorised staff, with every staff access logged. | Access-control tests; audit log reviewed | Must Have |
| NFR-013 | Security | Personal data and photos shall be encrypted in transit and at rest. | Verified by security review | Must Have |
| NFR-014 | Privacy | Only data necessary for each feature shall be collected; body measurements are optional and stored only with consent. | Data-collection inventory approved | Must Have |
| NFR-015 | Privacy | Retention limits shall be defined and enforced; deletion requests shall be honoured within a defined period. | Retention period and deletion window **TBD** (OQ-013) | Must Have |
| NFR-016 | Accessibility | The site shall meet WCAG 2.1 Level AA, including colour contrast for the brand palette. | Proposed: WCAG 2.1 AA audit passed before launch | Must Have |
| NFR-017 | Accessibility | All interactive elements (menus, popups, tabs, FAQ, try-on) shall be keyboard operable with visible focus. | Manual keyboard test passes | Must Have |
| NFR-018 | Accessibility | Images shall have meaningful alternative text; forms shall have labels and accessible error messages. | Accessibility audit | Must Have |
| NFR-019 | Accessibility | Popups and overlays (including the try-on welcome popup) shall be dismissible, trap focus appropriately and not obstruct essential content. | Manual and assistive-technology test | Must Have |
| NFR-020 | Usability | The path from product page to order placement shall be simple and avoid unnecessary steps. | Proposed: usability testing with representative users; step count recorded as baseline | Must Have |
| NFR-021 | Usability | Error and validation messages shall be specific, polite and actionable. | Content review | Must Have |
| NFR-022 | Usability | The try-on journey shall be understandable without instructions, with clear photo guidance, consent text and limits. | Proposed: usability test completion rate (target **TBD**) | Must Have |
| NFR-023 | Security | Authentication shall follow current best practice (secure password storage, session protection, protection against brute-force attempts). | Security review | Must Have |
| NFR-024 | Security | Payment card data shall not be stored by the platform; payments shall be handled through compliant providers. | Payment provider compliance **TBD** | Must Have |
| NFR-025 | Security | The platform shall be protected against common web vulnerabilities (e.g., OWASP Top 10). | Pre-launch vulnerability assessment | Must Have |
| NFR-026 | Security | Administrative access shall use strong authentication; multi-factor authentication is proposed. | Proposed: MFA for all admin roles | Should Have |
| NFR-027 | Security | Staff actions on orders, customers, prices, content and sensitive data shall be recorded in an audit log. | Audit log reviewable by Super Admin | Must Have |
| NFR-028 | Reliability | Data shall be backed up and recoverable. | Backup frequency and recovery objectives **TBD** | Must Have |
| NFR-029 | Reliability | If AI services are unavailable, the rest of the website shall continue to operate. | Verified by simulated AI outage | Must Have |
| NFR-030 | Reliability | Order creation shall be consistent and not duplicated or lost on retries or network interruptions. | Tested with repeated submissions and interrupted connections | Must Have |
| NFR-031 | Privacy | Every consent event (photo processing, marketing, cookies) shall be recorded and retrievable. | Consent records queryable | Must Have |
| NFR-032 | Privacy | Cookies and tracking technologies shall be used according to disclosed purposes and user choices. | Cookie audit | Must Have |
| NFR-033 | Privacy / Legal | The platform shall comply with applicable Bangladesh law and regulation on data protection, e-commerce and consumer protection. | Legal review required (**TBD**, OQ-019) | Must Have |
| NFR-034 | Localisation | The platform shall correctly store and display Bangla and English text and BDT (৳) amounts. | Visual and data verification | Must Have |
| NFR-035 | Localisation | Dates, numbers and phone/address formats shall suit Bangladeshi users. | Format rules defined in UI spec | Should Have |
| NFR-036 | Discoverability | Pages shall be indexable and have meaningful titles, descriptions and structured product data to support search-engine discovery. | SEO audit | Should Have |
| NFR-037 | Maintainability | Business content (homepage, banners, FAQs, policies, products) shall be updatable by non-technical staff. | Staff completes content tasks without developers | Must Have |
| NFR-038 | AI Safety | Uploaded photos shall be screened for unsafe content, and generated outputs shall not produce nudity or offensive modifications of the customer's image. | Moderation rules and tests **TBD** (FR-089) | Must Have |
| NFR-039 | AI Transparency | AI-generated images and AI-based suggestions shall be clearly labelled as such. | Visual review of all AI surfaces | Must Have |
| NFR-040 | AI Quality | Try-on output quality shall be evaluated against agreed test photos and garments before launch, and unsupported cases documented. | Acceptance quality threshold **TBD** (set after provider evaluation) | Must Have |

---

## 23. Business Rules

| ID | Rule |
|---|---|
| BR-001 | All prices, charges and payments are in BDT (৳). |
| BR-002 | The price shown on listing, product, cart and checkout for the same product at the same time must be identical. |
| BR-003 | Marketing and "Why Choose Us" claims must be factual and approved by the business before publication. |
| BR-004 | No delivery charge, delivery timeline, discount, payment method or return policy may be displayed unless the business has confirmed it. Until then it remains TBD and unpublished. |
| BR-005 | AI previews must never be presented as a guarantee of exact fit, and the disclaimer must accompany every preview. |
| BR-006 | Visual try-on and size recommendation are separate features and must not be merged or substituted for each other. |
| BR-007 | No personal photo may be processed without prior recorded explicit consent. |
| BR-008 | Customer photos must not be used for AI model training, marketing, public display or any purpose beyond the customer's try-on without separate, explicit, revocable consent. |
| BR-009 | Out-of-stock variants cannot be purchased. Display treatment of out-of-stock products (hide vs. show as unavailable) is **TBD**. |
| BR-010 | Rules for combining discounts and coupons are **TBD** (OQ-016). Until confirmed, only one promotion applies per order. *(Proposed default; requires approval.)* |
| BR-011 | Reviews and customer photos are published only after moderation. Only genuine content may be displayed. |
| BR-012 | Exchange, return and cancellation eligibility is governed by the policy to be approved by the business (**TBD**, OQ-008). |
| BR-013 | Photo upload, registration and purchase by users under 18 follow a policy to be decided with legal advice (**TBD**, OQ-009). |
| BR-014 | Customers may use and purchase from the site without using any AI feature. |
| BR-015 | Cash on Delivery availability and conditions are **TBD**. |
| BR-016 | All size information is in inches. |
| BR-017 | Customer personal data is not sold to third parties. *(Proposed; requires approval.)* |
| BR-018 | A customer's deletion request for photos or saved looks must be honoured, subject to any legally required retention (**TBD**). |
| BR-019 | AI-generated content must be labelled as AI-generated. |
| BR-020 | Only staff with the appropriate role may change prices, stock, promotions, or content, and these changes are recorded. |

---

## 24. MVP Scope and Prioritization

### 24.1 Priority Levels

| Level | Meaning |
|---|---|
| **Must Have** | Essential for the first usable release. The release is not acceptable without it. |
| **Should Have** | Important and expected for release, but a workable alternative or phased approach exists. |
| **Could Have** | Desirable; included only if time and budget allow. |
| **Won't Have (Initial Release)** | Explicitly deferred. |

### 24.2 Recommended MVP Philosophy

The MVP should deliver a **complete, trustworthy shopping experience** and a **focused, high-quality AI try-on pilot**, rather than attempting every AI feature at full scale on day one.

**Reasoning:**

1. **Revenue depends on the basics.** If browsing, checkout, delivery and trust features are weak, AI will not rescue conversion. These must be excellent first.
2. **The differentiator must still be present.** Virtual try-on is the main differentiator, so a limited, well-executed try-on is included, limited to a small set of eligible garment types where output quality is strongest (set after provider evaluation; **TBD**).
3. **AI risk is concentrated in a few places.** Photo privacy, output quality, cost per generation and processing time are uncertain until a provider is selected. Launching a controlled pilot lets the business measure these before scaling.
4. **Complete outfit try-on is the hardest feature.** It should be validated through a feasibility study and introduced after single-garment try-on is stable.
5. **Size recommendation and personalisation can start simple.** Size-chart-based guidance and rule-based recommendations deliver value without heavy machine learning.
6. **The homepage keeps all 21 sections.** Sections that depend on content or data not yet available (customer photos, reviews, personalisation, social feed) launch with defined fallback behaviour and staff-curated content.

### 24.3 MVP Scope by Area

| Area | Must Have | Should Have | Could Have | Won't Have (Initial Release) |
|---|---|---|---|---|
| **Catalogue & discovery** | Listing, nine categories, search, filters, sorting, product page, gallery, colours, sizes, size guide (inches), pricing, discounts, stock status (FR-001 to FR-012, FR-014) | Related products (FR-013) | — | — |
| **Cart & checkout** | Cart, delivery details, delivery charge display, payment selection (confirmed methods), order confirmation, order history (FR-015, 017, 018, 019, 021, 022) | Guest checkout (decision), coupons, order tracking, cancellation/return requests (FR-016, 020, 023, 024) | — | Buy-now-pay-later; loyalty points |
| **Accounts** | Registration, login, recovery, profile, privacy controls, wishlist (FR-025 to FR-028, FR-030) | Address book, saved looks, reviews, ratings (FR-029, 031, 032, 033) | Customer photo submission (FR-034) | Social login (unless approved); multiple user profiles per account |
| **AI Try-On** | Entry points, photo upload, consent, single-garment try-on (pilot), disclaimer, add-to-cart from preview, retention/deletion, failure handling, eligibility management, independence of size recommendation (FR-035, 036, 038, 039, 040, 046, 047, 048, 050, 053) | Photo guidance, colour change, compare looks, save/share look, curated outfit preview (FR-037, 041, 042, 044, 045) | Complete outfit try-on (FR-043) | Video try-on; live camera/AR try-on; AI-generated outfit styling from free text |
| **AI Size** | Separate from try-on (FR-050) | Chart-based size recommendation (FR-049) | — | ML-based fit prediction from return data |
| **Personalisation** | — | Rule-based recommendations, fallbacks, opt-out (FR-051, 052) | — | Advanced predictive personalisation |
| **Homepage** | Announcement bar, header, hero, category tiles, try-on feature section, new arrivals, special offers, seasonal collection, why choose us, delivery/payment/returns benefits, FAQ, footer | Try-on welcome popup, tabbed products, Shop the Look, Recommended for You, customer photos, reviews, brand story, newsletter | Instagram/social feed | — |
| **Bangladesh localisation** | BDT, phone and address formats, delivery zones, confirmed payment methods, inch sizing, policy pages, support contact (Section 19) | Bangla language (decision) | — | Nationwide delivery at launch (expansion phase) |
| **Admin** | Product, inventory, order, content, promotion, zones, access control (FR-079 to FR-081, 083, 084, 086, 088) | Customer management, review moderation, reporting, AI monitoring (FR-082, 085, 087, 089) | — | Advanced analytics suite; marketing automation |
| **Platform** | Policy pages, cookie/consent, notifications, support (FR-075, 076, 078, 090) | Language switch (FR-077) | — | Native mobile apps |

### 24.4 Suggested Release Phasing (Proposed)

| Phase | Focus | Content |
|---|---|---|
| **Release 1 (MVP)** | Dhaka launch | Core e-commerce + all 21 homepage sections (with fallbacks) + single-garment try-on pilot + wishlist + localised delivery/payment (confirmed methods) |
| **Release 2** | Strengthen AI and engagement | Colour change, compare/share looks, curated outfit try-on, chart-based size recommendation improvements, reviews with photos, rule-based personalisation expansion |
| **Release 3** | Scale | Complete outfit try-on (if feasible), nationwide delivery expansion, advanced personalisation, deeper analytics |

> Whether any "Should Have" AI items move into the launch release depends on the AI provider evaluation and budget (OQ-011, OQ-029). **This phasing is a recommendation; the business owner must approve it.**

---

## 25. Future Enhancements

| # | Enhancement | Description | Prerequisites |
|---|---|---|---|
| 1 | Complete outfit try-on at scale | Multi-garment, multi-layer rendering | Feasibility study, provider capability |
| 2 | AI-generated outfit suggestions | Style-aware suggestions based on occasion, weather, budget | Tagged catalogue, quality evaluation |
| 3 | ML-based size/fit prediction | Learning from return reasons and measurements | Sufficient order and return data; consent |
| 4 | Advanced personalisation | Predictive recommendations, style profile | Data volume, consent framework |
| 5 | Video or live AR try-on | Motion preview or camera-based try-on | Technology maturity, cost |
| 6 | Nationwide logistics integration | Courier APIs, automated tracking, regional pricing | Partner agreements |
| 7 | Native mobile applications | iOS and Android apps | Traffic and business case |
| 8 | Loyalty and rewards | Points, tiers, referral | Retention data |
| 9 | Social commerce integrations | Shopping from social platforms, shareable looks with community features | Adoption |
| 10 | Marketplace / multi-vendor | Third-party sellers | Business model change (OQ-001) |
| 11 | Occasion-based planners | E.g., wedding or festival outfit planning | Content and data |
| 12 | Physical store integration | Click-and-collect, store inventory | Business decision (OQ-030) |
| 13 | Additional payment options | Buy-now-pay-later, instalments | Provider and policy |
| 14 | Advanced analytics and marketing automation | Segmentation, lifecycle campaigns | Data and tooling |
| 15 | Expansion of categories | Additional product types such as accessories, footwear | Merchandising plan (OQ-002) |

---

## 26. Assumptions and Constraints

### 26.1 Assumptions

| ID | Assumption | Risk if Wrong |
|---|---|---|
| A-01 | A suitable AI try-on technology can deliver acceptable quality for a limited set of garment types. | MVP try-on scope reduced or delayed |
| A-02 | The business can supply high-quality, consistent product photography, including images suited to try-on use. | Poor try-on results; weak catalogue |
| A-03 | The business can supply accurate size charts in inches for each product type. | Size guide and recommendation unreliable |
| A-04 | Customers are willing to upload personal photos when privacy is clearly explained. | Low try-on adoption |
| A-05 | Most traffic will be from mobile devices. | Design priorities misaligned |
| A-06 | At least one delivery partner will be available for Dhaka at launch. | Launch blocked |
| A-07 | At least one confirmed payment method (e.g., COD) will be available at launch. | Launch blocked |
| A-08 | The business will provide all policy content (delivery, returns, privacy, terms). | Pages cannot be published (BR-004) |
| A-09 | The business has the legal right to use all brand names, logos and images that will be displayed. | IP exposure |
| A-10 | A single-language (English) launch is acceptable if Bangla is not approved. | Reach limited |

### 26.2 Constraints

| ID | Constraint |
|---|---|
| C-01 | Platform is a responsive website (no native apps in the initial release). |
| C-02 | Primary market and launch location: Bangladesh, Dhaka. |
| C-03 | Currency is BDT. |
| C-04 | No AI provider, model or API has been selected (TBD). |
| C-05 | Budget, timeline and team size are not provided (TBD, OQ-029). |
| C-06 | Delivery, payment and return details are unconfirmed (TBD). |
| C-07 | Brand palette and identity direction are fixed as specified (Section 11). |
| C-08 | Legal and regulatory requirements for personal data, especially photos and minors, are not yet reviewed. |

---

## 27. Dependencies

| ID | Dependency | Needed For | Owner | Status |
|---|---|---|---|---|
| D-01 | AI virtual try-on provider/model selection and evaluation | Try-on, outfit try-on | Business owner / technical lead | TBD |
| D-02 | Delivery partner agreement(s) and rate card | Delivery charges, tracking, Dhaka launch | Business owner | TBD |
| D-03 | Payment providers (COD process, MFS providers, online gateway) | Checkout | Business owner | TBD |
| D-04 | Product catalogue content (photos, descriptions, sizes, prices) | Launch | Business owner | TBD |
| D-05 | Size charts in inches | Size guide, size recommendation | Business owner / sourcing | TBD |
| D-06 | Legal review: privacy policy, consent text, terms, minors, data protection | Launch, AI features | Legal advisor | TBD |
| D-07 | Policy content: delivery, returns, exchange | Policy pages and homepage sections | Business owner | TBD |
| D-08 | Brand assets (logo, brand name, imagery, copy) | Design and content | Business owner | TBD |
| D-09 | Customer-support capability (staff, channels, hours) | Support features | Business owner | TBD |
| D-10 | Social media accounts and permissions | Social feed | Marketing | TBD |
| D-11 | SMS/email notification providers | Notifications, OTP (if used) | Technical lead | TBD |
| D-12 | Domain, hosting and security infrastructure | Launch | Technical lead | TBD |
| D-13 | Photography/model shoots (including try-on-suitable garment images) | Catalogue, hero, lookbooks | Marketing | TBD |
| D-14 | Competitor audit completion | Positioning validation | Product | TBD |

---

## 28. Risks and Mitigation

| ID | Risk | Likelihood / Impact (Proposed) | Mitigation |
|---|---|---|---|
| R-01 | AI try-on output is unrealistic, distorts the body or garments, or misrepresents the product, causing disappointment or distrust. | High / High | Limit MVP to eligible garments; evaluate providers with a defined test set (NFR-040); always show disclaimer; allow easy feedback; never claim exact fit. |
| R-02 | Customers mistake AI preview for guaranteed fit, leading to returns and complaints. | Medium / High | Mandatory disclaimers (FR-040); separate size recommendation (FR-050); size guide links; clear policy. |
| R-03 | Privacy breach or misuse of customers' personal photos. | Medium / Very High | Consent, minimal retention, encryption, restricted access, audit logs, deletion rights (FR-038, 047; NFR-012 to 015). |
| R-04 | Non-compliance with data protection, consumer or e-commerce laws, including for minors. | Medium / High | Early legal review (D-06); minors policy (OQ-009); document consent. |
| R-05 | AI cost per generation exceeds budget as usage grows. | Medium / High | Usage limits per user, monitoring (FR-089), pilot scope, cost modelling after provider selection. |
| R-06 | Slow try-on processing causes drop-off. | Medium / Medium | Progress indicator, queuing, background processing, clear expectations, optional retry. |
| R-07 | Poor-quality user photos lead to failures. | High / Medium | Photo guidance and validation (FR-037); clear error messages; retake support. |
| R-08 | Delivery or payment arrangements are not ready for launch. | Medium / High | Start partner discussions early; launch only with confirmed methods; BR-004. |
| R-09 | Insufficient product photography and data for try-on and catalogue. | Medium / High | Content standards early; shoot plan (D-13); try-on eligibility flag (FR-053). |
| R-10 | Low trust in new online brand in market. | Medium / High | Transparent policies, support visibility, genuine reviews, secure payments, COD (if approved). |
| R-11 | Fit-related returns and exchanges harm margins. | Medium / Medium | Accurate size charts in inches, size recommendation, clear exchange policy. |
| R-12 | Scope creep from attempting all AI features at launch. | High / High | Phased MVP (Section 24); formal change control. |
| R-13 | Fake or manipulated reviews or customer photos. | Medium / Medium | Moderation (FR-085); review eligibility rules (OQ-017). |
| R-14 | Seasonal traffic spikes overload checkout. | Medium / High | Load testing (NFR-008); capacity planning before festivals. |
| R-15 | Misuse of try-on (inappropriate uploads, using photos of other people). | Medium / High | Content screening (FR-089, NFR-038); terms of use; reporting; consent confirmation that the photo is of the user. |
| R-16 | Brand palette causes accessibility contrast failures. | Medium / Medium | Contrast verification (NFR-016) during UI specification. |
| R-17 | Unverified competitor assumptions lead to wrong positioning. | Medium / Medium | Complete competitor audit (OQ-027). |

---

## 29. Success Metrics and KPIs

> No baseline or target figures were supplied; all **targets are TBD** and should be set by the business after approving this PRD and, where possible, after a baseline period (OQ-023).

| Category | KPI | Definition | Target |
|---|---|---|---|
| **Business** | Revenue | Total order value in ৳ over period | TBD |
| | Orders | Count of completed orders | TBD |
| | Average order value (AOV) | Revenue ÷ orders | TBD |
| | Conversion rate | Orders ÷ sessions | TBD |
| | Repeat purchase rate | Customers with ≥ 2 orders ÷ customers | TBD |
| **Funnel** | Cart abandonment rate | Carts created without order ÷ carts created | TBD |
| | Checkout completion rate | Orders ÷ checkout starts | TBD |
| **AI try-on** | Try-on start rate | Sessions starting try-on ÷ eligible product views | TBD |
| | Try-on completion rate | Successful previews ÷ try-on starts | TBD |
| | Try-on-to-cart rate | Add-to-cart after try-on ÷ successful previews | TBD |
| | Try-on conversion uplift | Conversion of try-on users vs. non-users (observational, interpreted with care) | TBD |
| | Try-on failure rate | Failed generations ÷ attempts | TBD |
| | Consent opt-in rate | Users giving consent ÷ users shown consent | TBD |
| | Photo deletion requests | Count and fulfilment time | Fulfilled within the defined window (TBD) |
| **Size / returns** | Fit-related return/exchange rate | Fit-reason returns ÷ orders | TBD |
| | Size-recommendation usage and acceptance | Usage ÷ product views; accepted ÷ shown | TBD |
| **Engagement** | Registration rate | Registrations ÷ sessions | TBD |
| | Wishlist / saved-look usage | Users saving ≥ 1 item ÷ users | TBD |
| | Recommendation click-through rate | Clicks ÷ impressions of recommended items | TBD |
| | Newsletter signups | Count and rate | TBD |
| **Trust / quality** | Average customer rating | Mean of approved ratings | TBD |
| | Support contact rate | Contacts ÷ orders | TBD |
| | Delivery success rate | Delivered ÷ dispatched | TBD |
| **Experience** | Core Web Vitals (mobile) | LCP, INP as per NFR-001/002 | Proposed: "good" thresholds |
| | Accessibility compliance | WCAG 2.1 AA audit result | Pass |

---

## 30. Acceptance Criteria

### 30.1 Release-Level Acceptance Criteria

| ID | Acceptance Criterion | Verification |
|---|---|---|
| AC-001 | All 21 homepage sections are present, each meeting its section-level acceptance criteria (Section 15), with defined fallbacks where data is unavailable. | Homepage review against Section 15 |
| AC-002 | A customer can browse the nine categories, search, filter, sort, view a product, choose colour and size, and add it to the cart. | End-to-end test |
| AC-003 | A customer can complete checkout with every enabled payment method, with Bangladesh phone and address validation, and receive an order confirmation. | End-to-end test per method |
| AC-004 | Delivery charges and information shown at checkout match staff-configured rules; none are shown if unconfirmed. | Configuration and display test |
| AC-005 | A registered customer can log in, view order history, manage profile, addresses (if enabled), wishlist, and privacy controls. | Functional test |
| AC-006 | A customer with an eligible product, valid photo and consent receives an AI preview carrying the approximate-fit disclaimer, or a clear failure message. | Functional test with test photos |
| AC-007 | No photo is processed without recorded consent; consent can be withdrawn; photos and generated images can be deleted and are removed according to the retention rule. | Functional and data-handling test |
| AC-008 | Try-on and size recommendation are independently usable and separately presented. | Functional test |
| AC-009 | A try-on failure or AI outage does not prevent browsing, cart or checkout. | Fault-injection test |
| AC-010 | All displayed prices are in ৳, consistent across listing, product, cart and checkout, and discount prices are charged correctly. | Price consistency test |
| AC-011 | All sizes and measurements are in inches. | Content review |
| AC-012 | No policy, charge, timeline, or offer appears that the business has not confirmed. | Content review against BR-004 |
| AC-013 | Staff can manage products, stock, orders, homepage content, promotions and delivery zones with role-based access and audit logging. | Admin functional and security test |
| AC-014 | The site works on current major browsers and on mobile, tablet and desktop layouts without horizontal page scroll. | Cross-device test |
| AC-015 | The site meets the WCAG 2.1 AA checks defined in NFR-016 to NFR-019. | Accessibility audit |
| AC-016 | Performance meets the proposed targets in NFR-001 and NFR-002 (or the business-approved replacements). | Performance test |
| AC-017 | Privacy policy, terms, try-on notice, delivery and return pages are published with business-approved content. | Content approval record |
| AC-018 | Security review and vulnerability assessment completed with no unresolved high-severity findings. | Security report |
| AC-019 | Reviews and customer photos are shown only after moderation and with permission. | Functional test |
| AC-020 | All **Must Have** requirements in Section 21 pass their acceptance criteria. | Requirements traceability review |

### 30.2 Definition of "Testable"

A requirement is testable when a tester, without interpretation, can decide pass or fail from stated inputs, steps and outputs. Where a requirement refers to a **TBD** value, it becomes testable only after the value is approved; such items are listed in Section 32.

---

## 31. Out of Scope

The following are **not** part of the initial release:

| # | Item |
|---|---|
| 1 | Native iOS and Android applications |
| 2 | Women's and children's fashion |
| 3 | International shipping and multi-currency |
| 4 | Multi-vendor marketplace |
| 5 | Live camera / augmented-reality try-on and video try-on |
| 6 | Guarantee of exact fit based on AI visualisation |
| 7 | Using a try-on photo to determine body measurements |
| 8 | Use of customer photos for model training |
| 9 | Loyalty programme, buy-now-pay-later and gift cards |
| 10 | In-store point-of-sale and physical store integration |
| 11 | Detailed UI design, page-level specifications, application flows, technical architecture, database schema and delivery plan (these are separate documents) |
| 12 | Invented delivery prices, timelines, payment integrations or business policies |
| 13 | Replicating competitor designs or claiming competitor features that are not verified |

---

## 32. Open Questions and TBD Decisions

All items require business-owner decision. "Blocks" indicates what cannot be finalised without the decision.

| ID | Question / Decision | Why It Matters | Blocks |
|---|---|---|---|
| OQ-001 | Is the business selling its own brand, curating multiple brands, or both? | Affects the Brand section, inventory and returns | Section 15 #17; catalogue structure |
| OQ-002 | Which product types per category (shirts, trousers, panjabi, footwear, accessories, etc.)? | Defines catalogue and try-on eligibility | Catalogue; FR-053 |
| OQ-003 | What is the final brand name, logo and domain? | Brand, legal, design | Design; legal |
| OQ-004 | Final taxonomy and rules for cross-cutting collections (Seasonal, Premium) and multi-category assignment | Navigation and merchandising | FR-002 |
| OQ-005 | Delivery charges for Dhaka and outside Dhaka | Checkout transparency | FR-018, FR-086 |
| OQ-006 | Delivery timelines and delivery partner(s) | Customer expectation and trust | Policy pages; FR-023 |
| OQ-007 | Which payment methods (COD, specific MFS providers, card/online gateway) at launch? | Checkout, integration scope | FR-019 |
| OQ-008 | Exchange, return and cancellation policy (windows, conditions, costs) | Trust, operations | FR-024; policy pages |
| OQ-009 | Policy for users aged 15–17 (registration, photo upload, parental consent, payment) | Legal and ethical | FR-025, FR-038 |
| OQ-010 | Language: English only, or English + Bangla at launch? | Content workload, reach | FR-077 |
| OQ-011 | AI provider/model, hosting approach, and budget for try-on | Feasibility, cost, quality, privacy | FR-039 to FR-043 |
| OQ-012 | Feasibility of complete outfit try-on (garment combinations supported) | Scope of FR-043 | Release 2/3 plan |
| OQ-013 | Exact active-session expiry/deletion timing and retention policy for generated images explicitly saved as Saved Looks | Privacy design | FR-047; NFR-015 |
| OQ-014 | Allow guest checkout? | Conversion vs. data capture | FR-016 |
| OQ-015 | Verification method for accounts (phone OTP, email, both)? | Security, cost | FR-025, FR-026 |
| OQ-016 | Discount and coupon rules, including stacking | Promotions | FR-012, FR-020; BR-010 |
| OQ-017 | Who may review (verified purchasers only?) and moderation process | Review authenticity | FR-032 |
| OQ-018 | Customer support channels, hours, and staffing | Trust | FR-075 |
| OQ-019 | Legal review: privacy, consent text, data protection, consumer law; retention exceptions | Compliance | NFR-033; policy pages |
| OQ-020 | Size-chart data availability and measurement standard per product type | Size guide and recommendation | FR-010, FR-049 |
| OQ-021 | Inventory model (single warehouse, multiple locations, pre-orders, made-to-order)? | Stock logic | FR-014, FR-080 |
| OQ-022 | Courier integration for automated tracking vs. manual updates | Tracking scope | FR-023 |
| OQ-023 | KPI targets and baseline period | Success measurement | Section 29 |
| OQ-024 | Which products are try-on eligible at launch; per-user try-on limits | Cost and quality | FR-053; NFR-010 |
| OQ-025 | Social platforms and method for the social feed (live vs. curated) | Section 15 #19 | FR-072 |
| OQ-026 | Guest wishlist behaviour; look-sharing method and link expiry | Personalisation | FR-030, FR-045 |
| OQ-027 | Completion of competitor audit of all 16 reference websites | Positioning | Section 8 |
| OQ-028 | Customer research to validate personas and try-on appetite | Prioritisation | Sections 8, 9 |
| OQ-029 | Launch date, budget, team size, expected traffic, availability target | Scope, NFR targets | NFR-008, NFR-011; MVP phasing |
| OQ-030 | Any physical store, showroom or Dhaka pickup option? | Fulfilment | Future scope |
| OQ-031 | Notification channels (SMS, email, WhatsApp, others) | Notifications, cost | FR-090 |
| OQ-032 | Newsletter channel (email and/or SMS) and any signup incentive | Marketing | FR-071 |
| OQ-033 | Seasonal calendar and criteria for "Premium Collections" | Merchandising | FR-064 |
| OQ-034 | Definition of "New Arrival", "Trending", "Best Seller" rules (time window, thresholds) | Homepage logic | FR-060, FR-061 |
| OQ-035 | Out-of-stock display policy (hide vs. show as unavailable) | Merchandising | BR-009 |
| OQ-036 | Staff structure and final role definitions | Access control | Section 20 |
| OQ-037 | Try-on welcome popup rules (first-visit only, frequency) | UX | FR-057 |

---

## 33. Glossary

| Term | Definition |
|---|---|
| **AI** | Artificial Intelligence |
| **AI Virtual Try-On** | A feature that generates a visual preview of clothing on a customer's uploaded photo |
| **AI Outfit Preview** | A presentation of multiple items combined into an outfit, either curated or AI-assisted |
| **Complete Outfit Try-On** | A try-on that renders several garments together on the customer's photo |
| **AI Size Recommendation** | Guidance on suitable size from customer inputs and size charts, independent of visual try-on |
| **BDT / ৳** | Bangladeshi Taka |
| **COD** | Cash on Delivery |
| **MFS** | Mobile Financial Services (e.g., mobile wallets); providers TBD |
| **CTA** | Call to action; a button or link that prompts a specific action |
| **FR / NFR** | Functional / Non-Functional Requirement |
| **MVP** | Minimum Viable Product: the first usable release |
| **MoSCoW** | Prioritisation method: Must, Should, Could, Won't Have |
| **Modern Earthy Luxury** | The brand direction: refined, warm, natural-toned premium styling |
| **Old Money Fashion** | Understated, classic, timeless style with refined silhouettes |
| **Panjabi** | A traditional South Asian men's garment (kurta-style) |
| **Saved Look** | A try-on result or outfit combination stored in a customer's account |
| **Shop the Look** | A curated outfit with directly purchasable items |
| **TBD** | To Be Decided; not confirmed by the business owner |
| **Variant** | A specific colour/size combination of a product |
| **Wishlist** | A customer's saved list of favourite products |
| **WCAG** | Web Content Accessibility Guidelines |
| **LCP / INP** | Largest Contentful Paint / Interaction to Next Paint (web performance measures) |
| **Consent** | Explicit, informed, recorded permission from a customer for a specific use of their data |
| **Retention** | How long data is stored before deletion |
| **Moderation** | Staff review of user-submitted content before publication |

---
## Security & Privacy Requirements

### 1. Authentication & Account Security
- Secure user registration and login.
- Passwords must be securely hashed.
- Implement secure password reset functionality.
- Protect against brute-force login attempts.
- Implement session expiration and logout.
- Use secure authentication mechanisms.

### 2. Authorization & Access Control
- Implement Role-Based Access Control (RBAC).
- Separate Customer and Admin permissions.
- Restrict admin dashboard access to authorized admins.
- Users must only access their own private data.

### 3. API Security
- Never expose secret API keys in frontend code.
- Store API keys using server-side environment variables.
- All sensitive AI API requests must pass through the backend.
- Apply API rate limiting and request validation.
- Restrict API permissions wherever supported.

### 4. Data Protection & Privacy
- Use HTTPS throughout the website.
- Protect customer personal information.
- Never store passwords in plain text.
- Do not expose sensitive information in URLs or logs.
- Follow data minimization principles.

### 5. AI Virtual Try-On Image Privacy
- Validate uploaded image types and file sizes.
- Store uploaded images temporarily and securely.
- Do not permanently store customer photos by default.
- Delete temporary images after AI processing is completed.
- Do not use customer photos for other purposes without consent.
- Provide a clear image privacy notice.

### 6. Input & Application Security
- Validate and sanitize user inputs.
- Prevent SQL Injection and XSS attacks.
- Implement CSRF protection where applicable.
- Protect against malicious file uploads.
- Use secure error handling.

### 7. Payment Security
- Use trusted payment gateways.
- Never store raw card details.
- Verify payment status on the backend.
- Protect payment-related API endpoints.

### 8. Security Monitoring
- Monitor suspicious login attempts.
- Implement rate limiting.
- Log security-related events without exposing secrets.
- Provide a process for revoking compromised API keys.

*End of document — PRD.md v1.0 (Draft)*