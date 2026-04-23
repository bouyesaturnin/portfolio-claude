import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,.03)',
    border: '1px solid rgba(201,169,110,.2)', borderRadius: '2px',
    padding: '16px 20px', color: '#f0ead8',
    fontFamily: "'Syne', sans-serif", fontSize: '.85rem',
    outline: 'none', transition: 'border-color .25s',
  }

  return (
    <section id="contact" style={{ padding: '120px 60px', borderTop: '1px solid rgba(201,169,110,.12)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ width: '40px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontSize: '.68rem', letterSpacing: '.3em', textTransform: 'uppercase', color: '#c9a96e' }}>Contact</span>
        </div>

        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
          fontWeight: 300, lineHeight: 1.1, color: '#faf8f3', marginBottom: '16px' }}>
          Travaillons<br /><em style={{ fontStyle: 'italic', color: '#c9a96e' }}>ensemble</em>
        </h2>

        <p style={{ fontSize: '.9rem', lineHeight: 1.8, color: '#6b6657', marginBottom: '48px' }}>
          Un projet web, une collaboration, une question ? Écrivez-moi.
        </p>

        {sent ? (
          <div style={{ padding: '40px', border: '1px solid rgba(201,169,110,.3)',
            borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✓</div>
            <div style={{ color: '#c9a96e', letterSpacing: '.1em' }}>Message envoyé — je vous répondrai très vite.</div>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true) }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <input type="text" placeholder="Votre nom" required value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#c9a96e'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,169,110,.2)'}
              />
              <input type="email" placeholder="Votre email" required value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
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
            <button type="submit" style={{
              alignSelf: 'flex-start', background: '#c9a96e', color: '#0a0a08',
              border: 'none', padding: '16px 40px', cursor: 'pointer',
              fontFamily: "'Syne', sans-serif", fontSize: '.72rem', fontWeight: 700,
              letterSpacing: '.2em', textTransform: 'uppercase', borderRadius: '2px',
              transition: 'background .25s, transform .25s',
            }}
              onMouseEnter={e => { e.target.style.background = '#f0ead8'; e.target.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.target.style.background = '#c9a96e'; e.target.style.transform = 'translateY(0)' }}
            >
              Envoyer le message →
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
