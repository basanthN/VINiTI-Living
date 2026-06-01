// ─── Colour Palette ────────────────────────────────────────────────────────
export const C = {
  ivory:      '#F5F2ED',
  warmWhite:  '#FAFAF8',
  charcoal:   '#1A1916',
  gold:       '#9B7845',
  goldLight:  '#C4A574',
  goldMuted:  '#D4B896',
  stone:      '#8A8680',
  stoneLight: '#B5B1AB',
  divider:    '#E8E3DC',
}

// ─── Typography ─────────────────────────────────────────────────────────────
export const SERIF = "'Cormorant Garamond', serif"
export const SANS  = "'DM Sans', sans-serif"

// ─── Shared style snippets ──────────────────────────────────────────────────
export const T = {
  tag: {
    color:         C.gold,
    fontSize:      '0.65rem',
    letterSpacing: '0.28em',
    fontWeight:    400,
    display:       'block',
    marginBottom:  '0.9rem',
  },
  h2: {
    fontFamily: SERIF,
    fontWeight: 300,
    lineHeight: 1.15,
    margin:     0,
  },
  body: {
    fontSize:   '0.875rem',
    lineHeight: 1.9,
    color:      C.stone,
    fontWeight: 300,
  },
}

// ─── Content Data ────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    num:   '01',
    sub:   'Windows & Doors',
    title: 'Bespoke Aluminium Systems',
    desc:  'Premium aluminium window and door systems crafted for modern architecture with a focus on aesthetics, durability, performance, and precision engineering.',
    items: [
      'Sliding Systems',
      'Slimline Windows',
      'Folding & Corner Systems',
      'Parallel Windows',
      'System Doors',
      'Architectural Glazing Solutions',
    ],
    includesLabel: 'INCLUDES',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&fit=crop&auto=format',
  },
  {
    num:   '02',
    sub:   'Surface Excellence',
    title: 'Premium Tiles & Surface Solutions',
    desc:  'With 20+ years of experience through our sister group OME AGENCIES, we collaborate with major tile manufacturers in Gujarat to provide curated surface solutions that elevate every environment.',
    items: [
      'Luxury Villas',
      'Large Apartment Projects',
      'Commercial Developments',
      'Clubhouses & Hospitality Spaces',
    ],
    includesLabel: 'SUPPLYING FOR',
    img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=85&fit=crop&auto=format',
  },
  {
    num:   '03',
    sub:   'Crafted Spaces',
    title: 'Luxury Interiors & Modular Furniture',
    desc:  'Factory-made customized interiors designed for contemporary living. Every element engineered with precision, premium finishes, and thoughtful detailing to create elegant, functional spaces.',
    items: [
      'Modular Kitchens',
      'Wardrobes & Dressing Spaces',
      'TV Units & Feature Walls',
      'Bespoke Furniture',
      'Villa & Apartment Interiors',
      'Commercial Office Furniture',
      'Clubhouse Interiors',
    ],
    includesLabel: 'EXPERTISE INCLUDES',
    img: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=900&q=85&fit=crop&auto=format',
  },
]

export const WHY_US = [
  {
    title: 'Precision Engineering',
    desc:  'Modern modular manufacturing with advanced German machinery ensuring superior finish and consistency.',
  },
  {
    title: 'Bespoke Customisation',
    desc:  'Every space is thoughtfully tailored to reflect individual lifestyles and architectural intent.',
  },
  {
    title: 'End-to-End Execution',
    desc:  'From design consultation and sourcing to fabrication and installation — managed seamlessly under one roof.',
  },
  {
    title: 'Trusted Experience',
    desc:  'Over a decade of expertise in construction and interiors with deep understanding of premium residential and commercial projects.',
  },
  {
    title: 'Premium Materials',
    desc:  'Curated selection of luxury surfaces, aluminium systems, hardware, finishes, and furniture solutions.',
  },
]

export const EXPERTISE = [
  'Bespoke Aluminium Window & Door Systems',
  'Premium Tiles & Surface Solutions',
  'Factory-Made Modular Interiors',
  'Luxury Furniture & Customized Furnishings',
  'Commercial & Clubhouse Interior Solutions',
]

export const CLIENTELE = [
  'Premium Homeowners',
  'Luxury Villa Owners',
  'Residential Developers',
  'Architects & Interior Designers',
  'Commercial Office Projects',
  'Hospitality & Community Spaces',
]

export const CONTACT_ROWS = [
  { label: 'PHONE',   value: '+91 91143 99399',  href: 'tel:+919114399399' },
  { label: 'EMAIL',   value: 'hello@vinitil.com', href: 'mailto:hello@vinitil.com' },
  { label: 'WEBSITE', value: 'www.vinitil.com',   href: 'https://www.vinitil.com' },
]

export const MARQUEE_ITEMS = [
  'Tiles', 'Interior Design', 'Aluminium Windows',
  'Modular Furniture', 'Bespoke Spaces', 'Premium Surfaces', 'Architectural Glazing',
]
