const categories = [
  {
    title: 'Frontend',
    items: ['React', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Vite', 'Responsive Design'],
  },
  {
    title: 'Backend',
    items: ['Django', 'Python', 'REST API', 'PostgreSQL', 'Authentification JWT'],
  },
  {
    title: 'Design',
    items: ['Webdesign UI/UX', 'Arts graphiques', 'Typographie', 'Composition visuelle', 'Figma'],
  },
  {
    title: 'Autres',
    items: ['Git / GitHub', 'Méthode académique', 'Recherche & analyse', 'Dessin', 'Pédagogie'],
  },
]

export default function Skills() {
  return (
    <section id="competences" style={{ padding: '120px 60px', borderTop: '1px solid rgba(201,169,110,.12)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a96e' }}>Compétences</span>
        </div>

        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
          fontWeight: 300, lineHeight: 1.1, color: '#faf8f3', marginBottom: '60px' }}>
          Ma <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>boîte à outils</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
          {categories.map((cat, i) => (
            <div key={i} style={{
              padding: '40px 36px',
              borderLeft: i === 0 ? '1px solid rgba(201,169,110,.15)' : 'none',
              borderRight: '1px solid rgba(201,169,110,.15)',
              borderTop: '1px solid rgba(201,169,110,.15)',
              borderBottom: '1px solid rgba(201,169,110,.15)',
            }}>
              <div style={{ fontSize: '.65rem', letterSpacing: '.25em', textTransform: 'uppercase',
                color: '#c9a96e', marginBottom: '24px' }}>{cat.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {cat.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px',
                    fontSize: '.85rem', color: '#6b6657' }}>
                    <span style={{ width: '4px', height: '4px', background: '#c9a96e',
                      borderRadius: '50%', flexShrink: 0 }} />
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
