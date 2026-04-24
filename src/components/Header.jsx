import { useState, useEffect } from 'react'
import useIsMobile from '../hooks/useIsMobile'

const GOLD   = '#a07840'
const MUTED  = '#8a8070'
const DARK   = '#1a1710'
const BG     = '#f5f0e8'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { if (!isMobile) setMenuOpen(false) }, [isMobile])

  const links = ['À propos', 'Compétences', 'Projets', 'Contact']

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? `16px ${isMobile ? '24px' : '60px'}` : `28px ${isMobile ? '24px' : '60px'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled || menuOpen ? 'rgba(245,240,232,.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(160,120,64,.2)' : '1px solid transparent',
        transition: 'all .4s ease',
      }}>
        <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem',
          fontWeight: 300, letterSpacing: '.12em', textTransform: 'uppercase',
          color: DARK, textDecoration: 'none' }}>
          S.<span style={{ color: GOLD }}>Bouye</span>
        </a>

        {!isMobile && (
          <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            {links.map(link => (
              <a key={link}
                href={`#${link.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
                  color: MUTED, textDecoration: 'none', transition: 'color .25s' }}
                onMouseEnter={e => e.target.style.color = GOLD}
                onMouseLeave={e => e.target.style.color = MUTED}
              >{link}</a>
            ))}
            <div style={{ width: '1px', height: '18px', background: 'rgba(160,120,64,.3)' }} />
            <a href="https://github.com/bouyesaturnin" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', color: MUTED, textDecoration: 'none', transition: 'color .25s' }}
              onMouseEnter={e => e.currentTarget.style.color = GOLD}
              onMouseLeave={e => e.currentTarget.style.color = MUTED}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/saturnin-bouye" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', color: MUTED, textDecoration: 'none', transition: 'color .25s' }}
              onMouseEnter={e => e.currentTarget.style.color = GOLD}
              onMouseLeave={e => e.currentTarget.style.color = MUTED}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </nav>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(o => !o)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '1.5px', background: GOLD,
                transition: 'transform .3s, opacity .3s',
                transform: menuOpen ? i === 0 ? 'translateY(6.5px) rotate(45deg)' : i === 2 ? 'translateY(-6.5px) rotate(-45deg)' : 'scaleX(0)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}
      </header>

      {isMobile && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99,
          background: 'rgba(245,240,232,.98)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '36px',
          opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity .3s ease',
        }}>
          {links.map(link => (
            <a key={link}
              href={`#${link.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem',
                fontWeight: 300, color: DARK, textDecoration: 'none', letterSpacing: '.08em', transition: 'color .25s' }}
              onMouseEnter={e => e.target.style.color = GOLD}
              onMouseLeave={e => e.target.style.color = DARK}
            >{link}</a>
          ))}
          <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
            <a href="https://github.com/bouyesaturnin" target="_blank" rel="noopener noreferrer" style={{ color: MUTED }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/saturnin-bouye" target="_blank" rel="noopener noreferrer" style={{ color: MUTED }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
