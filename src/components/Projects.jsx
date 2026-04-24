import { useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'

const GOLD  = '#a07840'
const MUTED = '#8a8070'
const DARK  = '#1a1710'
const BDR   = 'rgba(160,120,64,.15)'

const projects = [
  { num: '01', title: 'Réseau Social', tags: ['React', 'Django', 'Python'],
    desc: 'Réseau social fullstack inspiré de Facebook — publications, profils utilisateurs, interactions sociales et fil d\'actualité.',
    github: 'https://github.com/bouyesaturnin/websocial-django', image: '/proj1.jpeg' },
  { num: '02', title: 'Recettes Africaines', tags: ['React', 'Django', 'Python'],
    desc: 'Plateforme de découverte des différentes recettes de repas africains — recherche, catégories et fiches détaillées.',
    github: 'https://github.com/bouyesaturnin/websocial-django', image: '/proj2.jpeg' },
  { num: '03', title: 'Les Mets Africains', tags: ['React', 'Django', 'Python'],
    desc: 'Application web pour explorer la richesse et la variété de la gastronomie africaine, avec articles éditoriaux.',
    github: 'https://github.com/bouyesaturnin/SiteCreationArticles', image: '/proj3.jpeg' },
  { num: '04', title: 'App Santé', tags: ['React', 'Django', 'Python'],
    desc: 'Application de prise de rendez-vous médicaux — interface patient, gestion des créneaux et suivi des consultations.',
    github: 'https://github.com/bouyesaturnin/SiteCreationArticles', image: '/proj4.jpeg' },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 })
  const isMobile = useIsMobile()

  return (
    <section id="projets" style={{ padding: isMobile ? '80px 24px' : '120px 60px',
      borderTop: `1px solid ${BDR}`, background: '#f5f0e8', position: 'relative' }}>

      {!isMobile && hovered !== null && (
        <div style={{ position: 'fixed', left: imgPos.x, top: imgPos.y,
          width: '280px', height: '180px', zIndex: 200, pointerEvents: 'none',
          borderRadius: '4px', overflow: 'hidden',
          border: '1px solid rgba(160,120,64,.3)', boxShadow: '0 20px 60px rgba(26,23,16,.2)' }}>
          <img src={projects[hovered].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: GOLD }} />
          <span style={{ fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: GOLD }}>Projets</span>
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2.5rem, 4vw, 3.8rem)',
          fontWeight: 300, lineHeight: 1.1, color: DARK, marginBottom: '60px' }}>
          Travaux <em style={{ fontStyle: 'italic', color: GOLD }}>sélectionnés</em>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {projects.map((p, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={e => setImgPos({ x: e.clientX + 24, y: e.clientY - 80 })}
              style={{ display: 'grid',
                gridTemplateColumns: isMobile ? '48px 1fr' : '80px 1fr 160px',
                gap: isMobile ? '16px' : '40px', alignItems: 'center',
                padding: !isMobile && hovered === i ? '40px 20px' : '40px 0',
                borderBottom: `1px solid ${BDR}`, transition: 'padding .3s ease',
              }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '1.4rem' : '1.8rem',
                fontWeight: 300, color: hovered === i ? 'rgba(160,120,64,.8)' : 'rgba(160,120,64,.3)',
                transition: 'color .3s' }}>{p.num}</div>
              <div>
                <div style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 500,
                  color: DARK, marginBottom: '10px' }}>{p.title}</div>
                <div style={{ fontSize: '.82rem', lineHeight: 1.7, color: MUTED, maxWidth: '560px' }}>{p.desc}</div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '.6rem', letterSpacing: '.15em', textTransform: 'uppercase',
                      color: GOLD, border: '1px solid rgba(160,120,64,.3)', padding: '4px 12px', borderRadius: '2px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {!isMobile && (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px',
                      fontSize: '.65rem', letterSpacing: '.18em', textTransform: 'uppercase',
                      color: hovered === i ? GOLD : MUTED, textDecoration: 'none',
                      border: `1px solid ${hovered === i ? 'rgba(160,120,64,.4)' : 'rgba(138,128,112,.3)'}`,
                      padding: '10px 18px', borderRadius: '2px', transition: 'color .25s, border-color .25s' }}>
                    GitHub <span>↗</span>
                  </a>
                </div>
              )}
              {isMobile && (
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{ gridColumn: '2', fontSize: '.65rem', color: GOLD,
                    textDecoration: 'none', letterSpacing: '.1em' }}>
                  GitHub ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
