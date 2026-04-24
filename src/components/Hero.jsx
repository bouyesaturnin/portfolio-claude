import useIsMobile from '../hooks/useIsMobile'

const GOLD  = '#a07840'
const MUTED = '#8a8070'
const DARK  = '#1a1710'

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: isMobile ? '110px 24px 60px' : '140px 60px 80px',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #f5f0e8 0%, #ede8de 100%)',
    }}>
      <div style={{
        position: 'absolute', top: '15%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(160,120,64,.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(160,120,64,.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '750px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px',
          animation: 'fadeUp .8s .1s ease both' }}>
          <div style={{ width: '40px', height: '1px', background: GOLD }} />
          <span style={{ fontSize: isMobile ? '.6rem' : '.68rem', letterSpacing: '.3em',
            textTransform: 'uppercase', color: GOLD }}>
            Designer · Développeur · Docteur ENS
          </span>
        </div>

        <h1 style={{ fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? 'clamp(3rem, 15vw, 4.5rem)' : 'clamp(3.5rem, 8vw, 7rem)',
          fontWeight: 300, lineHeight: .95, color: DARK, marginBottom: '32px',
          animation: 'fadeUp .8s .25s ease both' }}>
          Saturnin<br />
          <em style={{ fontStyle: 'italic', color: GOLD }}>Bouye</em>
        </h1>

        <p style={{ fontSize: isMobile ? '.88rem' : '1rem', lineHeight: 1.8, color: MUTED,
          maxWidth: '480px', marginBottom: '52px', animation: 'fadeUp .8s .4s ease both' }}>
          Je conçois des interfaces web élégantes et des applications robustes,
          à la croisée du <strong style={{ color: DARK }}>design graphique</strong>,
          du <strong style={{ color: DARK }}>développement React & Django</strong>
          {' '}et d'une exigence académique forgée à l'<strong style={{ color: DARK }}>ENS de Paris</strong>.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center',
          animation: 'fadeUp .8s .55s ease both' }}>
          <a href="#projets" style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: GOLD, color: '#fff', padding: '16px 36px',
            fontFamily: "'Syne', sans-serif", fontSize: '.72rem', fontWeight: 700,
            letterSpacing: '.2em', textTransform: 'uppercase', textDecoration: 'none',
            borderRadius: '2px', transition: 'transform .25s, background .25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = DARK; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Voir mes projets <span>→</span>
          </a>

          <a href="#contact" style={{
            fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase',
            color: MUTED, textDecoration: 'none', borderBottom: `1px solid ${MUTED}`,
            paddingBottom: '2px', transition: 'color .25s, border-color .25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = GOLD; e.currentTarget.style.borderColor = GOLD }}
            onMouseLeave={e => { e.currentTarget.style.color = MUTED; e.currentTarget.style.borderColor = MUTED }}
          >
            Me contacter
          </a>

          <a href="/cv-saturnin-bouye.pdf" download style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase',
            color: GOLD, textDecoration: 'none',
            border: `1px solid rgba(160,120,64,.4)`, padding: '14px 24px',
            borderRadius: '2px', transition: 'background .25s, color .25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD }}
          >
            ↓ CV
          </a>
        </div>
      </div>

      {!isMobile && (
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
          animation: 'fadeIn 1s 1s ease both' }}>
          <span style={{ fontSize: '.6rem', letterSpacing: '.25em', textTransform: 'uppercase', color: MUTED }}>Scroll</span>
          <div style={{ width: '1px', height: '50px',
            background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
            animation: 'scrollPulse 2s ease-in-out infinite' }} />
        </div>
      )}
    </section>
  )
}
