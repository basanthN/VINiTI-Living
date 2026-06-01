import { useInView } from './hooks.js'

// ─── FadeIn wrapper ──────────────────────────────────────────────────────────
export function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// ─── Section tag label ───────────────────────────────────────────────────────
export function Tag({ children, style = {} }) {
  return (
    <span
      style={{
        color:         '#9B7845',
        fontSize:      '0.65rem',
        letterSpacing: '0.28em',
        fontWeight:    400,
        display:       'block',
        marginBottom:  '0.9rem',
        ...style,
      }}
    >
      {children}
    </span>
  )
}

// ─── Gold CTA button ─────────────────────────────────────────────────────────
import { useState } from 'react'

export function GoldButton({ children, onClick, style = {} }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:    hovered ? '#C4A574' : '#9B7845',
        border:        'none',
        color:         '#fff',
        fontSize:      '0.68rem',
        letterSpacing: '0.16em',
        fontFamily:    "'DM Sans', sans-serif",
        padding:       '0.82rem 2.2rem',
        transition:    'background 0.3s',
        cursor:        'pointer',
        ...style,
      }}
    >
      {children}
    </button>
  )
}

// ─── Ghost (outline) button ──────────────────────────────────────────────────
export function GhostButton({ children, onClick, style = {} }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:    hovered ? '#9B7845' : 'transparent',
        border:        '1px solid #9B7845',
        color:         hovered ? '#fff' : '#9B7845',
        fontSize:      '0.65rem',
        letterSpacing: '0.16em',
        fontFamily:    "'DM Sans', sans-serif",
        padding:       '0.5rem 1.4rem',
        transition:    'all 0.3s',
        cursor:        'pointer',
        ...style,
      }}
    >
      {children}
    </button>
  )
}
