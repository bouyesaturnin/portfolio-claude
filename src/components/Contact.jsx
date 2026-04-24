import { useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'

const FORMSPREE_URL = 'https://formspree.io/f/mlevdrkr'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const isMobile = useIsMobile()
  const pad = isMobile ? '80px 24px' : '120px 60px'

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,.03)',
    border: '1px solid rgba(201,169,110,.2)', borderRadius: '2px',
    padding: '16px 20px', color: '#f0ead8',
    fontFamily: "'Syne', sans-serif", fontSize: '.85rem',
    outline: 'none', transition: 'border-color .25s',
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" style={{ padding: pad, borderTop: '1px solid rgba(201,169,110,.12)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a96e' }}>Contact</span>
        </div>

        <h2 style={{ fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2.5rem, 4vw, 3.8rem)',
          fontWeight: 300, lineHeight: 1.1, color: '#faf8f3', marginBottom: '16px' }}>
          Travaillons<br /><em style={{ fontStyle: 'italic', color: '#c9a96e' }}>ensemble</em>
        </h2>

        <p style={{ fontSize: '.9rem', lineHeight: 1.8, color: '#6b6657', marginBottom: '48px' }}>
          Un projet web, une collaboration, une question ? Écrivez-moi.
        </p>

        {status === 'sent' ? (
          <div style={{ padding: '40px', border: '1px solid rgba(201,169,110,.3)',
            borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '16px', color: '#c9a96e' }}>✓</div>
            <div style={{ color: '#c9a96e', letterSpacing: '.1em', marginBottom: '8px' }}>Message envoyé avec succès !</div>
            <div style={{ fontSize: '.8rem', color: '#6b6657', marginBottom: '24px' }}>
              Je vous répondrai à l'adresse indiquée très prochainement.
            </div>
            <button onClick={() => setStatus('idle')} style={{
              background: 'transparent', border: '1px solid rgba(201,169,110,.3)',
              color: '#c9a96e', padding: '10px 24px', cursor: 'pointer',
              fontFamily: "'Syne', sans-serif", fontSize: '.68rem',
              letterSpacing: '.18em', textTransform: 'uppercase', borderRadius: '2px',
            }}>
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
              <input type="text" placeholder="Votre nom" required value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#c9a96e'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,169,110,.2)'}
              />
              <input type="email" placeholder="Votre email" required value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#c9a96e'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,169,110,.2)'}
              />
            </div>
            <textarea placeholder="Votre message..." required rows={6} value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = '#c9a96e'}
              onBlur={e => e.target.style.borderColor = 'rgba(201,169,110,.2)'}
            />
            {status === 'error' && (
              <div style={{ fontSize: '.82rem', color: '#e07070', padding: '12px 16px',
                border: '1px solid rgba(224,112,112,.3)', borderRadius: '2px' }}>
                Une erreur s'est produite. Écrivez-moi à bouyesaturnin@yahoo.fr
              </div>
            )}
            <button type="submit" disabled={status === 'sending'} style={{
              alignSelf: 'flex-start', background: status === 'sending' ? '#8a6f42' : '#c9a96e',
              color: '#0a0a08', border: 'none', padding: '16px 40px', cursor: status === 'sending' ? 'wait' : 'pointer',
              fontFamily: "'Syne', sans-serif", fontSize: '.72rem', fontWeight: 700,
              letterSpacing: '.2em', textTransform: 'uppercase', borderRadius: '2px',
              transition: 'background .25s, transform .25s', width: isMobile ? '100%' : 'auto',
            }}
              onMouseEnter={e => { if (status !== 'sending') { e.target.style.background = '#f0ead8'; e.target.style.transform = 'translateY(-2px)' }}}
              onMouseLeave={e => { e.target.style.background = status === 'sending' ? '#8a6f42' : '#c9a96e'; e.target.style.transform = 'translateY(0)' }}
            >
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
