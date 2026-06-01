import { useState, useEffect, useRef } from 'react'

/** Returns the current window.scrollY. */
export function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const fn = () => setY(window.scrollY)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return y
}

/** Returns current window.innerWidth, updated on resize. */
export function useWindowWidth() {
  const [w, setW] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1200))
  useEffect(() => {
    const fn = () => setW(window.innerWidth)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return w
}

/** Convenience: true when width < breakpoint (default 768). */
export function useIsMobile(bp = 768) {
  return useWindowWidth() < bp
}

/** Convenience: true when width < 1024. */
export function useIsTablet(bp = 1024) {
  return useWindowWidth() < bp
}

/**
 * Returns [ref, isVisible].
 * Once the element enters the viewport it stays visible (one-shot).
 */
export function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}
