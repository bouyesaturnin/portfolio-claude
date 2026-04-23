import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['À propos', 'Compétences', 'Projets', 'Contact']

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '16px 60px' : '28px 60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,8,.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,169,110,.15)' : '1px solid transparent',
      transition: 'all .4s ease',
    }}>
      <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem',
        fontWeight: 300, letterSpacing: '.12em', textTransform: 'uppercase',
        color: '#f0ead8', textDecoration: 'none' }}>
        S.<span style={{ color: '#c9a96e' }}>Bouye</span>
      </a>

      <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {links.map(link => (
          <a key={link}
            href={`#${link.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
            style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
              color: '#6b6657', textDecoration: 'none', transition: 'color .25s' }}
            onMouseEnter={e => e.target.style.color = '#c9a96e'}
            onMouseLeave={e => e.target.style.color = '#6b6657'}
          >{link}</a>
        ))}
      </nav>
    </header>
  )
}
