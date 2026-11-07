export type Badge = 'Sale' | 'Premium' | 'Try-On Ready'

export type Product = {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  swatches: string[]
  badges: Badge[]
  rating: number
  reviews: number
}

export const formatBDT = (value: number) => `৳ ${value.toLocaleString('en-US')}`

export const categories = [
  { name: 'Panjabi & Traditional', href: '/category/panjabi', image: '/images/products/ivory-panjabi.png' },
  { name: 'Western Wear', href: '/category/western', image: '/images/products/denim-jacket.png' },
  { name: 'Casual Wear', href: '/category/casual', image: '/images/products/linen-shirt.png' },
  { name: 'Old Money', href: '/category/old-money', image: '/images/products/knit-polo.png' },
  { name: 'Streetwear', href: '/category/streetwear', image: '/images/products/oversized-tee.png' },
  { name: 'Formal Wear', href: '/category/formal', image: '/images/products/navy-blazer.png' },
  { name: 'Smart Casual', href: '/category/smart-casual', image: '/images/products/chinos.png' },
]

export const collections = [
  {
    name: 'Seasonal Collection',
    description: 'Festive panjabi and occasion pieces for the season.',
    href: '/collection/seasonal',
    image: '/images/seasonal.png',
  },
  {
    name: 'Premium Collection',
    description: 'Silk blends, fine wool and considered tailoring.',
    href: '/collection/premium',
    image: '/images/products/maroon-panjabi.png',
  },
]

export const navLinks = [
  { label: 'Panjabi', href: '/category/panjabi' },
  { label: 'Western', href: '/category/western' },
  { label: 'Casual', href: '/category/casual' },
  { label: 'Old Money', href: '/category/old-money' },
  { label: 'Streetwear', href: '/category/streetwear' },
  { label: 'Formal', href: '/category/formal' },
  { label: 'Smart Casual', href: '/category/smart-casual' },
  { label: 'Seasonal', href: '/collection/seasonal' },
  { label: 'Premium', href: '/collection/premium' },
]

export const products: Product[] = [
  {
    id: 'ivory-panjabi',
    name: 'Ivory Embroidered Cotton Panjabi',
    category: 'Panjabi & Traditional',
    price: 3450,
    image: '/images/products/ivory-panjabi.png',
    swatches: ['#F3EEE3', '#D9C9A8', '#2F3A4A'],
    badges: ['Try-On Ready'],
    rating: 4.8,
    reviews: 126,
  },
  {
    id: 'maroon-panjabi',
    name: 'Maroon Silk-Blend Panjabi',
    category: 'Panjabi & Traditional',
    price: 4850,
    originalPrice: 5650,
    image: '/images/products/maroon-panjabi.png',
    swatches: ['#7A2E2E', '#1F2A3A'],
    badges: ['Sale', 'Premium'],
    rating: 4.9,
    reviews: 88,
  },
  {
    id: 'linen-shirt',
    name: 'Sand Linen Relaxed Shirt',
    category: 'Casual Wear',
    price: 2450,
    originalPrice: 2950,
    image: '/images/products/linen-shirt.png',
    swatches: ['#D8C7A6', '#F4F0E8', '#6F7D6B'],
    badges: ['Sale', 'Try-On Ready'],
    rating: 4.6,
    reviews: 204,
  },
  {
    id: 'charcoal-blazer',
    name: 'Charcoal Wool-Blend Blazer',
    category: 'Formal Wear',
    price: 8950,
    image: '/images/products/navy-blazer.png',
    swatches: ['#2B2F36', '#1E2A3F'],
    badges: ['Premium'],
    rating: 4.7,
    reviews: 57,
  },
  {
    id: 'knit-polo',
    name: 'Cream Knitted Polo',
    category: 'Old Money',
    price: 2850,
    image: '/images/products/knit-polo.png',
    swatches: ['#EFE6D4', '#8A7A63', '#2F3A4A'],
    badges: ['Try-On Ready'],
    rating: 4.8,
    reviews: 143,
  },
  {
    id: 'oversized-tee',
    name: 'Olive Heavyweight Oversized Tee',
    category: 'Streetwear',
    price: 1290,
    originalPrice: 1450,
    image: '/images/products/oversized-tee.png',
    swatches: ['#6B6A55', '#222222', '#E8E2D6'],
    badges: ['Sale'],
    rating: 4.5,
    reviews: 312,
  },
  {
    id: 'tan-chinos',
    name: 'Tan Stretch Cotton Chinos',
    category: 'Smart Casual',
    price: 2250,
    image: '/images/products/chinos.png',
    swatches: ['#B89A73', '#2F3A4A', '#E9E2D2'],
    badges: [],
    rating: 4.6,
    reviews: 175,
  },
  {
    id: 'denim-jacket',
    name: 'Washed Indigo Denim Jacket',
    category: 'Western Wear',
    price: 3950,
    image: '/images/products/denim-jacket.png',
    swatches: ['#3E5778', '#1E2633'],
    badges: ['Try-On Ready'],
    rating: 4.7,
    reviews: 96,
  },
]

export const byId = (id: string) => products.find((p) => p.id === id)!

export const newArrivals = ['ivory-panjabi', 'knit-polo', 'denim-jacket', 'linen-shirt', 'charcoal-blazer'].map(byId)

export const productTabs = {
  trending: ['maroon-panjabi', 'oversized-tee', 'knit-polo', 'tan-chinos'].map(byId),
  bestSellers: ['linen-shirt', 'ivory-panjabi', 'oversized-tee', 'tan-chinos'].map(byId),
  topRated: ['maroon-panjabi', 'ivory-panjabi', 'knit-polo', 'charcoal-blazer'].map(byId),
}

export const recommended = ['knit-polo', 'tan-chinos', 'charcoal-blazer', 'denim-jacket'].map(byId)

export const offers = products.filter((p) => p.originalPrice)

export const looks = [
  {
    id: 'eid-evening',
    title: 'Eid Evening',
    note: 'A festive, quietly refined panjabi look.',
    image: '/images/products/ivory-panjabi.png',
    items: ['ivory-panjabi', 'tan-chinos'].map(byId),
  },
  {
    id: 'weekend-old-money',
    title: 'Weekend, Old Money',
    note: 'Soft knits and tailored ease for slow weekends.',
    image: '/images/products/knit-polo.png',
    items: ['knit-polo', 'linen-shirt'].map(byId),
  },
]

export const reviews = [
  {
    name: 'Tanvir A.',
    location: 'Dhaka',
    product: 'Ivory Embroidered Cotton Panjabi',
    rating: 5,
    text: 'The embroidery is subtle and the fabric breathes well. The inch size guide was accurate for my chest and length.',
  },
  {
    name: 'Rafiq H.',
    location: 'Chattogram',
    product: 'Sand Linen Relaxed Shirt',
    rating: 5,
    text: 'Exactly the relaxed fit I wanted for the office and weekends. The colour is even better in person.',
  },
  {
    name: 'Nafis K.',
    location: 'Sylhet',
    product: 'Cream Knitted Polo',
    rating: 4,
    text: 'Feels premium and holds its shape after washing. The Try-On preview helped me pick the right colour.',
  },
]

export const customerPhotos = [
  { image: '/images/customers/customer-1.png', handle: 'Shahriar, Dhaka', product: 'Ivory Embroidered Cotton Panjabi' },
  { image: '/images/customers/customer-2.png', handle: 'Imran, Gulshan', product: 'Sand Linen Relaxed Shirt' },
  { image: '/images/customers/customer-3.png', handle: 'Arif, Mirpur', product: 'Olive Heavyweight Oversized Tee' },
]

export const socialPosts = [
  { image: '/images/social/social-1.png', alt: 'Folded linen shirts with loafers and a watch' },
  { image: '/images/social/social-2.png', alt: 'Close-up of tonal panjabi collar embroidery' },
  { image: '/images/social/social-3.png', alt: 'Man in a cream knit polo walking through Old Dhaka' },
  { image: '/images/social/social-4.png', alt: 'Taupe blazer on a wooden hanger against an ivory wall' },
]

export const faqs = [
  {
    q: 'How does AI Virtual Try-On work?',
    a: 'Upload a clear photo, choose an eligible garment, and we generate an approximate preview of how it may look. Previews are a visual reference only and are not a guarantee of exact fit, colour or drape.',
  },
  {
    q: 'What happens to the photo I upload?',
    a: 'Your original photo is used only during your active session and is not retained across sessions. You can replace or delete it at any time. Full details are in our Try-On privacy notice.',
  },
  {
    q: 'How do I find my size?',
    a: 'Every product includes a size guide in inches with chest, length and shoulder measurements. Compare them with a garment that already fits you well.',
  },
  {
    q: 'Where can I see delivery charges and payment options?',
    a: 'Available delivery areas, charges and payment methods are shown at checkout before you place your order.',
  },
  {
    q: 'Can I exchange or return an item?',
    a: 'Please read our Exchange & Returns policy for eligibility and the steps to request an exchange or return.',
  },
]
