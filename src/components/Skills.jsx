import useIsMobile from '../hooks/useIsMobile'

const GOLD  = '#a07840'
const MUTED = '#8a8070'
const DARK  = '#1a1710'
const BDR   = 'rgba(160,120,64,.2)'

const categories = [
  { title: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Vite', 'Responsive Design'] },
  { title: 'Backend', items: ['Django', 'Python', 'REST API', 'PostgreSQL', 'Authentification JWT'] },
  { title: 'Design', items: ['Webdesign UI/UX', 'Arts graphiques', 'Typographie', 'Composition visuelle', 'Figma'] },
  { title: 'Autres', items: ['Git / GitHub', 'Méthode académique', 'Recherche & analyse', 'Dessin', 'Pédagogie'] },
]

export default function Skills() {
  const isMobile = useIsMobile()

  return (
    <section id="competences" style={{ padding: isMobile ? '80px 24px' : '120px 60px',
      borderTop: `1px solid ${BDR}`, background: '#ede8de' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: GOLD }} />
          <span style={{ fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: GOLD }}>Compétences</span>
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2.5rem, 4vw, 3.8rem)',
          fontWeight: 300, lineHeight: 1.1, color: DARK, marginBottom: '60px' }}>
          Ma <em style={{ fontStyle: 'italic', color: GOLD }}>boîte à outils</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)' }}>
          {categories.map((cat, i) => (
            <div key={i} style={{
              padding: isMobile ? '24px 16px' : '36px',
              background: '#f5f0e8',
              border: `1px solid ${BDR}`,
              borderLeft: i % (isMobile ? 2 : 4) === 0 ? `1px solid ${BDR}` : 'none',
              borderTop: isMobile && i >= 2 ? 'none' : `1px solid ${BDR}`,
            }}>
              <div style={{ fontSize: '.65rem', letterSpacing: '.25em', textTransform: 'uppercase',
                color: GOLD, marginBottom: '20px', fontWeight: 700 }}>{cat.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {cat.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px',
                    fontSize: isMobile ? '.78rem' : '.85rem', color: MUTED }}>
                    <span style={{ width: '4px', height: '4px', background: GOLD, borderRadius: '50%', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
