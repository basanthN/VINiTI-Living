import { useState } from 'react'
import { useScrollY, useIsMobile, useIsTablet } from './hooks.js'
import { FadeIn, Tag, GoldButton, GhostButton } from './components.jsx'
import {
  C, SERIF, SANS,
  SERVICES, WHY_US, EXPERTISE, CLIENTELE, CONTACT_ROWS, MARQUEE_ITEMS,
} from './constants.js'

function pad(n) { return String(n).padStart(2, '0') }
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// ─────────────────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────────────────
function Nav() {
  const scrollY  = useScrollY()
  const isMobile = useIsMobile()
  const glassy   = scrollY > 60
  const [menuOpen, setMenuOpen] = useState(false)
  const [hov, setHov] = useState(null)

  const links = [
    { label: 'About',    id: 'about'    },
    { label: 'Services', id: 'services' },
    { label: 'Why Us',   id: 'why'      },
    { label: 'Contact',  id: 'contact'  },
  ]

  const handleNav = (id) => {
    setMenuOpen(false)
    setTimeout(() => scrollTo(id), 50)
  }

  const logoColor = menuOpen ? C.charcoal : (glassy ? C.charcoal : '#fff')

  return (
    <>
      <nav style={{
        position:       'fixed', top: 0, left: 0, right: 0, zIndex: 300,
        padding:        isMobile ? '1rem 1.5rem' : '1.1rem 3.5rem',
        display:        'flex', alignItems: 'center', justifyContent: 'space-between',
        background:     (glassy || menuOpen) ? 'rgba(250,250,248,0.96)' : 'transparent',
        backdropFilter: (glassy || menuOpen) ? 'blur(14px)' : 'none',
        borderBottom:   (glassy || menuOpen) ? `1px solid ${C.divider}` : 'none',
        transition:     'background 0.4s, border-color 0.4s',
      }}>
        {/* Logo */}
        <button onClick={() => handleNav('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', zIndex: 301 }}>
          <span style={{ fontFamily: SERIF, fontSize: isMobile ? '1.35rem' : '1.55rem', fontWeight: 600, letterSpacing: '0.22em', color: logoColor, lineHeight: 1, transition: 'color 0.4s' }}>
            VINITI
          </span>
          <span style={{ fontSize: '0.44rem', letterSpacing: '0.42em', color: C.gold, fontWeight: 400, marginTop: '3px', paddingTop: '3px', borderTop: `1px solid ${C.gold}`, display: 'block', width: '100%', textAlign: 'center' }}>
            LIVING
          </span>
        </button>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.2rem' }}>
            {links.map(l => (
              <button key={l.id} onClick={() => handleNav(l.id)}
                onMouseEnter={() => setHov(l.id)} onMouseLeave={() => setHov(null)}
                style={{
                  background: 'none', border: 'none',
                  fontSize: '0.68rem', letterSpacing: '0.16em',
                  color: hov === l.id ? C.gold : (glassy ? C.charcoal : 'rgba(255,255,255,0.85)'),
                  fontFamily: SANS, fontWeight: 400, padding: 0,
                  transition: 'color 0.2s', cursor: 'pointer',
                }}
              >
                {l.label.toUpperCase()}
              </button>
            ))}
            <GhostButton onClick={() => handleNav('contact')}>GET IN TOUCH</GhostButton>
          </div>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 301 }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: menuOpen ? C.charcoal : (glassy ? C.charcoal : '#fff'), transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: menuOpen ? C.charcoal : (glassy ? C.charcoal : '#fff'), transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '1.5px', background: menuOpen ? C.charcoal : (glassy ? C.charcoal : '#fff'), transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        )}
      </nav>

      {/* Mobile full-screen menu */}
      {isMobile && menuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: C.warmWhite,
          display: 'flex', flexDirection: 'column',
          paddingTop: '100px', paddingLeft: '2rem', paddingRight: '2rem',
        }}>
          {links.map((l, i) => (
            <button key={l.id} onClick={() => handleNav(l.id)}
              style={{
                background: 'none', border: 'none',
                padding: '1.4rem 0',
                borderBottom: `1px solid ${C.divider}`,
                textAlign: 'left', cursor: 'pointer',
                fontFamily: SERIF, fontSize: '2rem', fontWeight: 300,
                color: C.charcoal, letterSpacing: '0.06em',
                animationDelay: `${i * 0.06}s`,
              }}
            >
              {l.label}
            </button>
          ))}
          <div style={{ marginTop: '2.5rem' }}>
            <GoldButton onClick={() => handleNav('contact')} style={{ width: '100%', padding: '1rem', fontSize: '0.75rem', letterSpacing: '0.18em' }}>
              GET IN TOUCH
            </GoldButton>
          </div>
          <div style={{ marginTop: 'auto', paddingBottom: '3rem' }}>
            <p style={{ fontSize: '0.72rem', color: C.stoneLight, letterSpacing: '0.1em' }}>
              +91 91143 99399 &nbsp;·&nbsp; hello@vinitil.com
            </p>
          </div>
        </div>
      )}
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  const scrollY  = useScrollY()
  const isMobile = useIsMobile()

  return (
    <section id="hero" style={{ height: '100svh', minHeight: isMobile ? '580px' : '660px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=90&fit=crop&auto=format"
        alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: `scale(${1 + scrollY * 0.00012}) translateY(${scrollY * 0.2}px)`,
          transformOrigin: 'center top', transition: 'transform 0.08s linear',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,25,22,0.1) 0%, rgba(26,25,22,0.78) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 1, padding: isMobile ? '0 1.5rem 4rem' : '0 3.5rem 5.5rem' }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          justifyContent: 'space-between',
          gap: isMobile ? '1.8rem' : '2rem',
        }}>
          <div>
            <p style={{ color: C.goldLight, fontSize: isMobile ? '0.6rem' : '0.68rem', letterSpacing: '0.25em', marginBottom: '1.2rem', fontWeight: 300 }}>
              • TILES &nbsp; • INTERIOR &nbsp; • WINDOWS &nbsp; • FURNITURE
            </p>
            <h1 style={{ fontFamily: SERIF, fontSize: isMobile ? '2.6rem' : 'clamp(3rem, 6.5vw, 5.5rem)', fontWeight: 300, color: '#fff', lineHeight: 1.1, margin: 0 }}>
              Crafting Timeless
              <br />
              <em style={{ fontStyle: 'italic', color: C.goldLight }}>Living Experiences</em>
            </h1>
          </div>

          <div style={{ maxWidth: isMobile ? '100%' : '300px', textAlign: isMobile ? 'left' : 'right', flexShrink: 0 }}>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.86rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.8rem', marginTop: 0 }}>
              Bespoke architectural interior solutions for luxury residences, villas, and commercial spaces across Hyderabad &amp; Andhra Pradesh.
            </p>
            <GoldButton onClick={() => scrollTo('services')} style={{ padding: '0.88rem 2.4rem', width: isMobile ? '100%' : 'auto' }}>
              EXPLORE OUR WORK
            </GoldButton>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, transparent, ${C.gold}, transparent)`, opacity: 0.55, zIndex: 1 }} />
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MARQUEE
// ─────────────────────────────────────────────────────────────────────────────
function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div style={{ background: C.gold, padding: '0.85rem 0', overflow: 'hidden', userSelect: 'none' }}>
      <div style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', animation: 'marquee 22s linear infinite' }}>
        {items.map((t, i) => (
          <span key={i} style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: '#fff', fontWeight: 300, flexShrink: 0 }}>
            {t.toUpperCase()} &nbsp; •
          </span>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────
function About() {
  const isMobile  = useIsMobile()
  const isTablet  = useIsTablet()
  const px        = isMobile ? '1.5rem' : '3.5rem'

  return (
    <section id="about" style={{ padding: `6rem ${px}`, background: C.warmWhite }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
          gap: isTablet ? '3.5rem' : '6.5rem',
          alignItems: 'center',
        }}>
          <FadeIn>
            <Tag>WHO WE ARE</Tag>
            <h2 style={{ fontFamily: SERIF, fontSize: isMobile ? '2.4rem' : 'clamp(2.4rem, 4.2vw, 3.5rem)', fontWeight: 300, lineHeight: 1.15, margin: '0 0 1.8rem', color: C.charcoal }}>
              Bespoke Living.
              <br />
              <em style={{ fontStyle: 'italic', color: C.gold }}>Crafted to Perfection.</em>
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.9, color: C.stone, fontWeight: 300, marginBottom: '1.5rem' }}>
              Started our journey as civil contractors and builders in 2014, we have evolved into a trusted partner for premium architectural interior solutions, catering to luxury residences, villas, large apartment communities, commercial spaces, and high-end developers across Hyderabad and Andhra Pradesh.
            </p>
            <blockquote style={{ margin: '0 0 2.8rem', padding: '1.2rem 1.7rem', borderLeft: `3px solid ${C.gold}`, background: C.ivory }}>
              <p style={{ fontFamily: SERIF, fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.78, color: C.charcoal, margin: 0, fontStyle: 'italic' }}>
                Built on a strong foundation of design sensibility, execution precision, and material expertise — delivering tailor-made solutions that seamlessly combine functionality, sophistication, and lasting quality.
              </p>
            </blockquote>
            <Tag style={{ marginBottom: '0.65rem' }}>OUR EXPERTISE SPANS ACROSS</Tag>
            {EXPERTISE.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.95rem', padding: '0.62rem 0', borderBottom: `1px solid ${C.divider}` }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.gold, flexShrink: 0 }} />
                <span style={{ fontSize: '0.83rem', color: C.charcoal, fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={isTablet ? 0 : 0.15}>
            <div style={{ position: 'relative', marginTop: isTablet ? '1rem' : 0 }}>
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=85&fit=crop&auto=format"
                alt="VINiTI Living architectural project"
                style={{ width: '100%', height: isMobile ? '300px' : '540px', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: isMobile ? '-1.5rem' : '-2.2rem', left: isMobile ? '-0.5rem' : '-2.2rem', background: C.charcoal, padding: isMobile ? '1.2rem 1.5rem' : '2rem 2.4rem' }}>
                <p style={{ fontFamily: SERIF, fontSize: isMobile ? '2rem' : '2.8rem', fontWeight: 300, color: C.gold, margin: '0 0 0.25rem', lineHeight: 1 }}>10+</p>
                <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.13em', margin: 0 }}>YEARS OF TRUSTED EXPERTISE</p>
              </div>
              {!isMobile && <div style={{ position: 'absolute', top: '-1.3rem', right: '-1.3rem', border: `1px solid ${C.gold}`, width: '110px', height: '110px', zIndex: -1, opacity: 0.35 }} />}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────
function ServiceRow({ svc, index }) {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const imgLeft  = !isMobile && index % 2 === 0
  const dark     = index === 1

  if (isMobile || isTablet) {
    return (
      <div style={{ marginBottom: '4px', background: dark ? C.charcoal : '#fff' }}>
        <div style={{ overflow: 'hidden' }}>
          <img src={svc.img} alt={svc.title} style={{ width: '100%', height: isMobile ? '240px' : '360px', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ padding: isMobile ? '2.2rem 1.5rem' : '3rem 3rem' }}>
          <span style={{ fontFamily: SERIF, fontSize: '2.6rem', fontWeight: 300, color: C.gold, opacity: 0.4, lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>{svc.num}</span>
          <Tag style={{ marginBottom: '0.3rem' }}>{svc.sub.toUpperCase()}</Tag>
          <h3 style={{ fontFamily: SERIF, fontSize: '1.7rem', fontWeight: 400, margin: '0 0 1.2rem', lineHeight: 1.2, color: dark ? '#fff' : C.charcoal }}>{svc.title}</h3>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '1.6rem', color: dark ? 'rgba(255,255,255,0.6)' : C.stone }}>{svc.desc}</p>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: C.gold, display: 'block', marginBottom: '0.65rem' }}>{svc.includesLabel}</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {svc.items.map((it, j) => (
              <span key={j} style={{ fontSize: '0.66rem', letterSpacing: '0.03em', border: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : C.divider}`, padding: '0.28rem 0.75rem', color: dark ? 'rgba(255,255,255,0.72)' : C.stone, fontWeight: 300 }}>{it}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginBottom: '3px' }}>
      <div style={{ order: imgLeft ? 1 : 2, overflow: 'hidden' }}>
        <img src={svc.img} alt={svc.title} style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }} />
      </div>
      <div style={{ order: imgLeft ? 2 : 1, padding: '3.8rem 4.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: dark ? C.charcoal : '#fff' }}>
        <FadeIn delay={0.08}>
          <span style={{ fontFamily: SERIF, fontSize: '3.2rem', fontWeight: 300, color: C.gold, opacity: 0.4, lineHeight: 1, display: 'block', marginBottom: '0.65rem' }}>{svc.num}</span>
          <Tag style={{ marginBottom: '0.4rem' }}>{svc.sub.toUpperCase()}</Tag>
          <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(1.55rem, 2.2vw, 2rem)', fontWeight: 400, margin: '0 0 1.4rem', lineHeight: 1.2, color: dark ? '#fff' : C.charcoal }}>{svc.title}</h3>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.9, fontWeight: 300, marginBottom: '2rem', color: dark ? 'rgba(255,255,255,0.6)' : C.stone }}>{svc.desc}</p>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: C.gold, display: 'block', marginBottom: '0.7rem' }}>{svc.includesLabel}</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.42rem' }}>
            {svc.items.map((it, j) => (
              <span key={j} style={{ fontSize: '0.66rem', letterSpacing: '0.04em', border: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : C.divider}`, padding: '0.3rem 0.78rem', color: dark ? 'rgba(255,255,255,0.72)' : C.stone, fontWeight: 300 }}>{it}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

function Services() {
  const isMobile = useIsMobile()
  const px = isMobile ? '1.5rem' : '3.5rem'
  return (
    <section id="services" style={{ background: C.ivory, paddingTop: '6rem', paddingBottom: '4px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: `0 ${px} ${isMobile ? '2.5rem' : '4.5rem'}` }}>
        <FadeIn>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '4rem' }}>
            <div>
              <Tag>OUR SERVICES</Tag>
              <h2 style={{ fontFamily: SERIF, fontSize: isMobile ? '2.4rem' : 'clamp(2.4rem, 4.2vw, 3.5rem)', fontWeight: 300, lineHeight: 1.15, margin: 0, color: C.charcoal }}>What We Offer</h2>
            </div>
            {!isMobile && <p style={{ fontSize: '0.85rem', lineHeight: 1.9, color: C.stone, fontWeight: 300, maxWidth: '270px', textAlign: 'right', margin: 0 }}>Complete lifestyle solutions for discerning homeowners, architects, and developers.</p>}
          </div>
        </FadeIn>
      </div>
      {SERVICES.map((svc, i) => <ServiceRow key={i} svc={svc} index={i} />)}
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// WHY US
// ─────────────────────────────────────────────────────────────────────────────
function WhyUs() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const px = isMobile ? '1.5rem' : '3.5rem'
  const cols = isMobile ? 'repeat(2, 1fr)' : (isTablet ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)')

  return (
    <section id="why" style={{ padding: `6rem ${px}`, background: C.warmWhite }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <Tag style={{ textAlign: 'center' }}>OUR PROMISE</Tag>
            <h2 style={{ fontFamily: SERIF, fontSize: isMobile ? '2.4rem' : 'clamp(2.4rem, 4.2vw, 3.5rem)', fontWeight: 300, color: C.charcoal, margin: 0 }}>
              Why VINiTI Living?
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '1px', background: C.divider }}>
          {WHY_US.map((item, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div style={{ background: C.warmWhite, padding: isMobile ? '1.8rem 1.2rem' : '2.4rem 1.5rem', textAlign: 'center', height: '100%' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: `1px solid ${C.gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                  <span style={{ fontFamily: SERIF, fontSize: '0.8rem', color: C.gold }}>{pad(i + 1)}</span>
                </div>
                <h4 style={{ fontFamily: SERIF, fontSize: '1.05rem', fontWeight: 500, margin: '0 0 0.8rem', color: C.charcoal, lineHeight: 1.3 }}>{item.title}</h4>
                <p style={{ fontSize: '0.77rem', lineHeight: 1.88, color: C.stone, margin: 0, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div style={{ marginTop: '3.5rem', padding: isMobile ? '2rem 1.5rem' : '2.6rem 3rem', background: C.ivory, borderLeft: `4px solid ${C.gold}`, display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '1.2rem' : '3.5rem', alignItems: isMobile ? 'flex-start' : 'center' }}>
            <div style={{ flexShrink: 0 }}>
              <p style={{ fontFamily: SERIF, fontSize: '2.6rem', fontWeight: 300, color: C.gold, lineHeight: 1, margin: 0 }}>20+</p>
              <p style={{ fontSize: '0.6rem', letterSpacing: '0.14em', color: C.stone, marginTop: '0.3rem' }}>YEARS GLOBAL SOURCING</p>
            </div>
            <p style={{ fontFamily: SERIF, fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 400, lineHeight: 1.78, color: C.charcoal, fontStyle: 'italic', flex: 1, margin: 0 }}>
              Our global sourcing expertise in China furniture procurement through our 20-year experienced associates enables us to offer internationally inspired solutions with exceptional quality standards.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CLIENTELE
// ─────────────────────────────────────────────────────────────────────────────
function Clientele() {
  const isMobile = useIsMobile()
  const px = isMobile ? '1.5rem' : '3.5rem'
  const cols = isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'

  return (
    <section style={{ padding: `6rem ${px}`, background: C.charcoal }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: '3.5rem' }}>
{/*             <Tag>WE PROUDLY WORK WITH</Tag> */}
            <h2 style={{ fontFamily: SERIF, fontSize: isMobile ? '2.4rem' : 'clamp(2.4rem, 4.2vw, 3.5rem)', fontWeight: 300, color: '#fff', margin: 0 }}>
{/*               Our Clientele */}
              WE PROUDLY WORK WITH
            </h2>
          </div>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '1px', background: 'rgba(255,255,255,0.07)' }}>
          {CLIENTELE.map((label, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div style={{ padding: isMobile ? '1.8rem 1.2rem' : '2.8rem 2.2rem', background: C.charcoal }}>
                <span style={{ fontFamily: SERIF, fontSize: isMobile ? '2.8rem' : '4rem', fontWeight: 300, color: C.gold, opacity: 0.3, lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>
                  {pad(i + 1)}
                </span>
                <p style={{ color: '#fff', fontSize: isMobile ? '0.85rem' : '1.02rem', fontWeight: 300, margin: 0, lineHeight: 1.5 }}>{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA BANNER
// ─────────────────────────────────────────────────────────────────────────────
function CtaBanner() {
  const isMobile = useIsMobile()
  return (
    <section style={{ position: 'relative', height: isMobile ? '440px' : '500px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1800&q=90&fit=crop&auto=format" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,25,22,0.72)' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 1.5rem' }}>
        <FadeIn>
          <h2 style={{ fontFamily: SERIF, fontSize: isMobile ? '2.6rem' : 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 300, color: '#fff', lineHeight: 1.1, margin: 0 }}>Transforming Spaces</h2>
          <h2 style={{ fontFamily: SERIF, fontSize: isMobile ? '2.6rem' : 'clamp(2.8rem, 5.5vw, 4.5rem)', fontWeight: 300, color: C.goldLight, fontStyle: 'italic', lineHeight: 1.1, margin: '0 0 1.6rem' }}>into Statements</h2>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.86rem', maxWidth: '480px', margin: '0 auto 2.2rem', lineHeight: 1.9, fontWeight: 300 }}>
            At VINiTI Living, we believe great spaces are not just designed — they are carefully crafted to inspire lifestyles, elevate experiences, and stand the test of time.
          </p>
          <GoldButton onClick={() => scrollTo('contact')} style={{ padding: '1rem 2.8rem', width: isMobile ? '100%' : 'auto', maxWidth: isMobile ? '320px' : 'none' }}>
            BEGIN YOUR JOURNEY
          </GoldButton>
        </FadeIn>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────
function Contact() {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const px = isMobile ? '1.5rem' : '3.5rem'

  return (
    <section id="contact" style={{ padding: `6rem ${px}`, background: C.ivory }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
          gap: isTablet ? '3.5rem' : '6.5rem',
          alignItems: 'start',
        }}>
          <FadeIn>
            <Tag>GET IN TOUCH</Tag>
            <h2 style={{ fontFamily: SERIF, fontSize: isMobile ? '2.2rem' : 'clamp(2.2rem, 3.8vw, 3.2rem)', fontWeight: 300, lineHeight: 1.2, margin: '0 0 1.5rem', color: C.charcoal }}>
              Experience Spaces
              <br />
              <em style={{ fontStyle: 'italic', color: C.gold }}>Crafted Around You</em>
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.9, color: C.stone, fontWeight: 300, marginBottom: '2.5rem' }}>
              Whether it is a luxury residence, a sophisticated workspace, or a landmark development, our team is committed to delivering excellence through innovation, craftsmanship, and detail-driven execution.
            </p>
            {[
              { label: 'CORPORATE OFFICE & SYSTEM WINDOWS EXPERIENCE CENTRE', text: <>Plot #24, IIIrd Floor, SNR Building,<br />Shilpi Ally, Vittal Rao Nagar Road,<br />Hitech City, Hyderabad, Telangana – 500081</> },
              { label: 'INTERIORS EXPERIENCE CENTRE', text: <>Plot #790, 4th Floor,<br />Above Rangoli Sarees,<br />Road No. 36, CBI Colony, Jubilee Hills,<br />Hyderabad, Telangana - 500033</> },
            ].map((a, i) => (
              <div key={i} style={{ marginBottom: i === 0 ? '1.6rem' : 0 }}>
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', color: C.gold, display: 'block', marginBottom: '0.5rem' }}>{a.label}</span>
                <p style={{ fontSize: '0.86rem', lineHeight: 1.85, color: C.charcoal, fontWeight: 300, margin: 0 }}>{a.text}</p>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={isTablet ? 0 : 0.15}>
            <div>
              {CONTACT_ROWS.map((row, i) => (
                <div key={i} style={{ padding: '1.4rem 0', borderBottom: `1px solid ${C.divider}`, display: 'flex', alignItems: 'baseline', gap: '2rem' }}>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: C.gold, minWidth: '68px', flexShrink: 0 }}>{row.label}</span>
                  <a href={row.href} style={{ fontFamily: sans-serif, fontSize: isMobile ? '1rem' : '1.12rem', color: C.charcoal, fontWeight: 400, wordBreak: 'break-all' }}>{row.value}</a>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem', background: C.charcoal, padding: '2.2rem' }}>
              <Tag style={{ color: C.gold }}>SYSTEM WINDOWS BY</Tag>
              <p style={{ fontSize: '1.3rem', fontWeight: 500, color: '#fff', margin: '0 0 0.3rem', letterSpacing: '0.06em', fontFamily: SANS }}>BLUE SCAPE™</p>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', margin: '0 0 1rem', letterSpacing: '0.08em' }}>Bespoke System Windows</p>
              <a href="https://www.bluescape.co.in" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: C.goldLight, letterSpacing: '0.1em' }}>www.bluescape.co.in →</a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  const isMobile = useIsMobile()
  return (
    <footer style={{
      padding: isMobile ? '2rem 1.5rem' : '2rem 3.5rem',
      background: C.charcoal,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      gap: '1.2rem',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <button onClick={() => scrollTo('hero')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: SERIF, fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.22em', color: '#fff', lineHeight: 1 }}>VINITI</span>
        <span style={{ fontSize: '0.44rem', letterSpacing: '0.42em', color: C.gold, fontWeight: 400, marginTop: '2px' }}>LIVING</span>
      </button>
      <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: '0.7rem', fontWeight: 300, margin: 0 }}>
        © 2025 VINiTI Living. Crafting Timeless Living Experiences.
      </p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {['Tiles', 'Interior', 'Windows', 'Furniture'].map(item => (
          <span key={item} style={{ color: 'rgba(255,255,255,0.27)', fontSize: '0.62rem', letterSpacing: '0.14em' }}>{item.toUpperCase()}</span>
        ))}
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ fontFamily: SANS, background: C.warmWhite, color: C.charcoal, overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      <Clientele />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  )
}
