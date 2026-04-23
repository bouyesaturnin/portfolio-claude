import { useState } from 'react'

const projects = [
  {
    num: '01',
    title: 'Réseau Social',
    tags: ['React', 'Django', 'Python'],
    desc: 'Réseau social fullstack inspiré de Facebook — publications, profils utilisateurs, interactions sociales et fil d\'actualité en temps réel.',
    github: 'https://github.com/bouyesaturnin/websocial-django',
    image: '/proj1.jpeg',
  },
  {
    num: '02',
    title: 'Recettes Africaines',
    tags: ['React', 'Django', 'Python'],
    desc: 'Plateforme de découverte des différentes recettes de repas africains — recherche, catégories et fiches détaillées par plat.',
    github: 'https://github.com/bouyesaturnin/websocial-django',
    image: '/proj2.jpeg',
  },
  {
    num: '03',
    title: 'Les Mets Africains',
    tags: ['React', 'Django', 'Python'],
    desc: 'Application web pour explorer la richesse et la variété de la gastronomie africaine, avec articles et contenus éditoriaux.',
    github: 'https://github.com/bouyesaturnin/SiteCreationArticles',
    image: '/proj3.jpeg',
  },
  {
    num: '04',
    title: 'App Santé',
    tags: ['React', 'Django', 'Python'],
    desc: 'Application de prise de rendez-vous médicaux — interface patient, gestion des créneaux hospitaliers et suivi des consultations.',
    github: 'https://github.com/bouyesaturnin/SiteCreationArticles',
    image: '/proj4.jpeg',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setImgPos({ x: e.clientX + 24, y: e.clientY - 80 })
  }

  return (
    <section id="projets" style={{ padding: '120px 60px', borderTop: '1px solid rgba(201,169,110,.12)', position: 'relative' }}>

      {/* Floating preview image */}
      {hovered !== null && (
        <div style={{
          position: 'fixed',
          left: imgPos.x, top: imgPos.y,
          width: '280px', height: '180px',
          zIndex: 200, pointerEvents: 'none',
          borderRadius: '4px', overflow: 'hidden',
          border: '1px solid rgba(201,169,110,.3)',
          boxShadow: '0 20px 60px rgba(0,0,0,.6)',
          transition: 'opacity .2s',
        }}>
          <img src={projects[hovered].image} alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a96e' }}>Projets</span>
        </div>

        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
          fontWeight: 300, lineHeight: 1.1, color: '#faf8f3', marginBottom: '60px' }}>
          Travaux <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>sélectionnés</em>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((p, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={handleMouseMove}
              style={{
                display: 'grid', gridTemplateColumns: '80px 1fr 160px',
                gap: '40px', alignItems: 'center',
                padding: hovered === i ? '40px 20px' : '40px 0',
                borderBottom: '1px solid rgba(201,169,110,.12)',
                transition: 'padding .3s ease',
                cursor: 'default',
              }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem',
                fontWeight: 300,
                color: hovered === i ? 'rgba(201,169,110,.6)' : 'rgba(201,169,110,.25)',
                transition: 'color .3s' }}>
                {p.num}
              </div>

              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: 500,
                  color: hovered === i ? '#faf8f3' : '#f0ead8',
                  marginBottom: '10px', transition: 'color .25s' }}>{p.title}</div>
                <div style={{ fontSize: '.82rem', lineHeight: 1.7, color: '#6b6657',
                  maxWidth: '560px' }}>{p.desc}</div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase',
                      color: '#c9a96e', border: '1px solid rgba(201,169,110,.3)',
                      padding: '4px 12px', borderRadius: '2px',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    fontSize: '.65rem', letterSpacing: '.18em', textTransform: 'uppercase',
                    color: hovered === i ? '#c9a96e' : '#6b6657',
                    textDecoration: 'none',
                    border: `1px solid ${hovered === i ? 'rgba(201,169,110,.4)' : 'rgba(107,102,87,.3)'}`,
                    padding: '10px 18px', borderRadius: '2px',
                    transition: 'color .25s, border-color .25s',
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  GitHub <span style={{ fontSize: '.9rem' }}>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
