import useIsMobile from '../hooks/useIsMobile'

export default function Hero() {
  const isMobile = useIsMobile()
  const pad = isMobile ? '110px 24px 60px' : '140px 60px 80px'

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: pad, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(201,169,110,.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '750px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px',
          animation: 'fadeUp .8s .1s ease both' }}>
          <div style={{ width: '40px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontSize: isMobile ? '.6rem' : '.68rem', letterSpacing: '.3em',
            textTransform: 'uppercase', color: '#c9a96e' }}>
            Designer · Développeur · Docteur ENS
          </span>
        </div>

        <h1 style={{ fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? 'clamp(3rem, 15vw, 4.5rem)' : 'clamp(3.5rem, 8vw, 7rem)',
          fontWeight: 300, lineHeight: .95, color: '#faf8f3', marginBottom: '32px',
          animation: 'fadeUp .8s .25s ease both' }}>
          Saturnin<br />
          <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Bouye</em>
        </h1>

        <p style={{ fontSize: isMobile ? '.88rem' : '1rem', lineHeight: 1.8, color: '#6b6657',
          maxWidth: '480px', marginBottom: '52px',
          animation: 'fadeUp .8s .4s ease both' }}>
          Je conçois des interfaces web élégantes et des applications robustes,
          à la croisée du <strong style={{ color: '#f0ead8' }}>design graphique</strong>,
          du <strong style={{ color: '#f0ead8' }}>développement React & Django</strong>
          {' '}et d'une exigence académique forgée à l'<strong style={{ color: '#f0ead8' }}>ENS de Paris</strong>.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center',
          animation: 'fadeUp .8s .55s ease both' }}>
          <a href="#projets" style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: '#c9a96e', color: '#0a0a08', padding: '16px 36px',
            fontFamily: "'Syne', sans-serif", fontSize: '.72rem', fontWeight: 700,
            letterSpacing: '.2em', textTransform: 'uppercase', textDecoration: 'none',
            borderRadius: '2px', transition: 'transform .25s, background .25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#f0ead8'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#c9a96e'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Voir mes projets <span>→</span>
          </a>

          <a href="#contact" style={{
            fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase',
            color: '#6b6657', textDecoration: 'none', borderBottom: '1px solid #6b6657',
            paddingBottom: '2px', transition: 'color .25s, border-color .25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#c9a96e'; e.currentTarget.style.borderColor = '#c9a96e' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#6b6657'; e.currentTarget.style.borderColor = '#6b6657' }}
          >
            Me contacter
          </a>

          <a href="/cv-saturnin-bouye.pdf" download style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase',
            color: '#c9a96e', textDecoration: 'none',
            border: '1px solid rgba(201,169,110,.4)', padding: '14px 24px',
            borderRadius: '2px', transition: 'background .25s, color .25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#c9a96e'; e.currentTarget.style.color = '#0a0a08' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a96e' }}
          >
            ↓ CV
          </a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        display: isMobile ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        animation: 'fadeIn 1s 1s ease both' }}>
        <span style={{ fontSize: '.6rem', letterSpacing: '.25em', textTransform: 'uppercase', color: '#6b6657' }}>Scroll</span>
        <div style={{ width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, #c9a96e, transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
