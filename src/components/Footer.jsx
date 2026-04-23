export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(201,169,110,.12)' }}>
      <div style={{ padding: '50px 60px', display: 'grid',
        gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '40px' }}>

        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem',
            fontWeight: 300, letterSpacing: '.12em', textTransform: 'uppercase', color: '#faf8f3' }}>
            S.<span style={{ color: '#c9a96e' }}>Bouye</span>
          </div>
          <div style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase',
            color: '#6b6657', marginTop: '6px' }}>Designer · Développeur Fullstack</div>
        </div>

        <div style={{ display: 'flex', gap: '32px' }}>
          {['À propos', 'Compétences', 'Projets', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              style={{ fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase',
                color: '#6b6657', textDecoration: 'none', transition: 'color .25s' }}
              onMouseEnter={e => e.target.style.color = '#c9a96e'}
              onMouseLeave={e => e.target.style.color = '#6b6657'}
            >{link}</a>
          ))}
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '.72rem', color: '#6b6657' }}>bouyesaturnin@yahoo.fr</div>
        </div>
      </div>

      <div style={{ padding: '20px 60px', borderTop: '1px solid rgba(201,169,110,.08)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase',
          color: 'rgba(107,102,87,.4)' }}>© 2026 Saturnin Bouye</span>
        <div style={{ width: '40px', height: '1px', background: 'rgba(201,169,110,.3)' }} />
        <span style={{ fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase',
          color: 'rgba(107,102,87,.4)' }}>Tous droits réservés</span>
      </div>
    </footer>
  )
}
