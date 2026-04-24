import useIsMobile from '../hooks/useIsMobile'

const GOLD  = '#a07840'
const MUTED = '#8a8070'
const DARK  = '#1a1710'
const BDR   = 'rgba(160,120,64,.15)'

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer style={{ borderTop: `1px solid ${BDR}`, background: '#1a1710' }}>
      <div style={{ padding: isMobile ? '40px 24px' : '50px 60px',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto 1fr',
        alignItems: 'center', gap: isMobile ? '28px' : '40px',
        textAlign: isMobile ? 'center' : 'left' }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem',
            fontWeight: 300, letterSpacing: '.12em', textTransform: 'uppercase', color: '#f5f0e8' }}>
            S.<span style={{ color: GOLD }}>Bouye</span>
          </div>
          <div style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase',
            color: MUTED, marginTop: '6px' }}>Designer · Développeur Fullstack</div>
        </div>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['À propos', 'Compétences', 'Projets', 'Contact'].map(link => (
            <a key={link}
              href={`#${link.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              style={{ fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase',
                color: MUTED, textDecoration: 'none', transition: 'color .25s' }}
              onMouseEnter={e => e.target.style.color = GOLD}
              onMouseLeave={e => e.target.style.color = MUTED}
            >{link}</a>
          ))}
        </div>

        <div style={{ textAlign: isMobile ? 'center' : 'right' }}>
          <div style={{ fontSize: '.72rem', color: MUTED }}>bouyesaturnin@yahoo.fr</div>
        </div>
      </div>

      <div style={{ padding: isMobile ? '16px 24px' : '20px 60px',
        borderTop: '1px solid rgba(245,240,232,.08)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase',
          color: 'rgba(138,128,112,.5)' }}>© 2026 Saturnin Bouye</span>
        <div style={{ width: '40px', height: '1px', background: 'rgba(160,120,64,.4)' }} />
        <span style={{ fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase',
          color: 'rgba(138,128,112,.5)' }}>Tous droits réservés</span>
      </div>
    </footer>
  )
}
