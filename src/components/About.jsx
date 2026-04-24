import useIsMobile from '../hooks/useIsMobile'

const timeline = [
  { year: '2000', label: 'Arts graphiques', desc: 'Formation aux fondamentaux du dessin et de la composition visuelle.' },
  { year: '2019', label: 'Doctorat — ENS Paris', desc: 'Doctorat obtenu à l\'École Normale Supérieure de Paris, rigueur et profondeur analytique.' },
  { year: '2020', label: 'Webdesign — Doranco', desc: 'Formation professionnelle en webdesign, UI/UX et intégration web.' },
  { year: '2023+', label: 'React & Django — Dyma', desc: 'Développement fullstack : interfaces React modernes et APIs robustes en Django/Python.' },
]

export default function About() {
  const isMobile = useIsMobile()
  const pad = isMobile ? '80px 24px' : '120px 60px'

  return (
    <section id="a-propos" style={{ padding: pad, borderTop: '1px solid rgba(201,169,110,.12)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
          gap: isMobile ? '40px' : '60px',
          alignItems: 'start', marginBottom: '64px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div style={{ width: '40px', height: '1px', background: '#c9a96e' }} />
              <span style={{ fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a96e' }}>À propos</span>
            </div>

            <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2.5rem, 4vw, 3.8rem)',
              fontWeight: 300, lineHeight: 1.1, color: '#faf8f3', marginBottom: '28px' }}>
              Un profil<br /><em style={{ fontStyle: 'italic', color: '#c9a96e' }}>atypique</em>
            </h2>

            <p style={{ fontSize: '.92rem', lineHeight: 1.9, color: '#6b6657', marginBottom: '20px', maxWidth: '520px' }}>
              Mon parcours est une synthèse rare : une sensibilité artistique cultivée depuis 2000,
              une exigence intellectuelle forgée au plus haut niveau académique, et des compétences
              techniques acquises dans les meilleures formations du secteur.
            </p>
            <p style={{ fontSize: '.92rem', lineHeight: 1.9, color: '#6b6657', marginBottom: '36px', maxWidth: '520px' }}>
              Passionné de dessin, de musique et de sport, j'apporte une vision humaine et créative
              à chaque projet web — qu'il s'agisse d'une interface React ou d'une API Django.
            </p>

            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase',
              color: '#c9a96e', textDecoration: 'none',
              borderBottom: '1px solid rgba(201,169,110,.4)', paddingBottom: '4px',
              transition: 'gap .25s',
            }}
              onMouseEnter={e => e.currentTarget.style.gap = '18px'}
              onMouseLeave={e => e.currentTarget.style.gap = '10px'}
            >
              Travaillons ensemble <span>→</span>
            </a>
          </div>

          {/* Photo */}
          <div style={{ position: 'relative', flexShrink: 0,
            display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}>
            <div style={{
              width: isMobile ? '160px' : '220px',
              height: isMobile ? '200px' : '280px',
              border: '1px solid rgba(201,169,110,.25)', borderRadius: '4px',
              overflow: 'hidden', position: 'relative',
              boxShadow: '0 30px 60px rgba(0,0,0,.5)',
            }}>
              <img src="/photo.jpg" alt="Saturnin Bouye"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div style={{ position: 'absolute', top: '-12px', right: '-12px',
              width: '50px', height: '50px',
              borderTop: '2px solid #c9a96e', borderRight: '2px solid #c9a96e', borderRadius: '0 4px 0 0' }} />
            <div style={{ position: 'absolute', bottom: '-12px', left: '-12px',
              width: '50px', height: '50px',
              borderBottom: '2px solid #c9a96e', borderLeft: '2px solid #c9a96e', borderRadius: '0 0 0 4px' }} />
            <div style={{ position: 'absolute', bottom: '-24px', left: '50%', transform: 'translateX(-50%)',
              background: '#0a0a08', border: '1px solid rgba(201,169,110,.3)',
              padding: '8px 20px', borderRadius: '2px', whiteSpace: 'nowrap',
              fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#c9a96e' }}>
              Saturnin Bouye
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: '0',
          borderTop: '1px solid rgba(201,169,110,.12)', paddingTop: '48px',
        }}>
          {timeline.map((item, i) => (
            <div key={i} style={{
              padding: isMobile ? '20px 0' : '0 32px 0 0',
              borderRight: !isMobile && i < timeline.length - 1 ? '1px solid rgba(201,169,110,.1)' : 'none',
              borderBottom: isMobile && i < timeline.length - 1 ? '1px solid rgba(201,169,110,.1)' : 'none',
              marginRight: !isMobile && i < timeline.length - 1 ? '32px' : '0',
            }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem',
                fontWeight: 300, color: '#c9a96e', marginBottom: '12px' }}>{item.year}</div>
              <div style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.1em',
                textTransform: 'uppercase', color: '#f0ead8', marginBottom: '10px' }}>{item.label}</div>
              <div style={{ fontSize: '.82rem', lineHeight: 1.7, color: '#6b6657' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
