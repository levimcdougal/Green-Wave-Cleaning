import { useState } from 'react'
import { Phone, Mail } from '../components/Svgs'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/animations.css'
import './BookNow.css'


const steps = [
  { n: '1', text: 'Reach out by call, text, or email' },
  { n: '2', text: 'Tell us your home type & square footage' },
  { n: '3', text: 'We\'ll give you a quick quote' },
  { n: '4', text: 'Pick a date and we\'ll take it from there!' },
]

const faqs = [
  {
    q: 'How is pricing calculated?',
    a: 'Pricing is based on square footage. Residential maintenance cleans start at $0.10/sq. ft., monthly $0.12, one-time standard $0.15, and deep clean $0.18. Move-in/move-out cleans for empty homes run $0.25–$0.30/sq. ft. Commercial office maintenance is $0.20/sq. ft. and office deep cleaning is $0.40/sq. ft. Add-ons are also available — see our Services page for the full list.',
  },
  {
    q: 'What products do you use?',
    a: 'We use safe, effective, eco-friendly cleaning products that are non-toxic and safe for your family, pets, and the environment. Feel free to ask us about our specific products when you book.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: 'Not at all! Many clients provide access and go about their day. We just need a way to get in and out safely.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer residential cleaning, office cleaning, and move-in/move-out cleaning. Add-on services are also available — see our Services page for the full list.',
  },
  {
    q: 'How far in advance do I need to book?',
    a: 'We recommend reaching out a few days ahead, but we\'ll always do our best to accommodate last-minute requests when possible.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Columbus, OH and surrounding areas including Gahanna, Westerville, Dublin, Hilliard, Reynoldsburg, Delaware, Pickerington, Grove City, Lancaster, and more.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <span className="faq-chevron">{open ? '−' : '+'}</span>
      </div>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

export default function BookNow() {
  return (
    <main style={{ paddingTop: 72 }}>

      {/* ── Page header ── */}
      <section className="book-header">
        <div className="book-inner" style={{ textAlign: 'center' }}>
          <ScrollReveal delay={0}><span className="section-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Let&apos;s Get Started</span></ScrollReveal>
          <ScrollReveal delay={100}><h1 className="book-header-title">Book Your Cleaning</h1></ScrollReveal>
          <ScrollReveal delay={200}><p className="book-header-sub">
            Ready for a spotless, eco-friendly home? Reach out and Chelsea will get back to you fast.
          </p></ScrollReveal>
        </div>
      </section>

      {/* ── Section 1: Contact ── */}
      <section className="book-section book-contact-section">
        <div className="book-inner">
          <ScrollReveal>
            <span className="section-label">Prefer to Talk?</span>
            <h2 className="book-section-title">Reach out to Chelsea</h2>
            <p className="book-section-sub">Call, text, or email — whatever works best for you</p>
          </ScrollReveal>

          <div className="contact-cards">
            <ScrollReveal delay={100}>
              <a href="tel:614-671-6041" className="contact-card contact-card-primary">
                <div className="contact-card-ico"><Phone size={22} /></div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Call or Text</span>
                  <span className="contact-card-value">614-671-6041</span>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <a href="mailto:greenwavecleanllc@gmail.com" className="contact-card">
                <div className="contact-card-ico"><Mail size={20} /></div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Send an Email</span>
                  <span className="contact-card-value">greenwavecleanllc@gmail.com</span>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Section 2: How it works ── */}
      <section className="book-section book-how-section">
        <div className="book-inner">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Simple Process</span>
          <h2 className="book-section-title" style={{ color: '#FFFFFF' }}>How it works</h2>
          <p className="book-section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Getting a clean home is easy — here&apos;s what to expect</p>

          <div className="steps">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 100}>
                <div className="step">
                  <div className="step-num">{s.n}</div>
                  <p className="step-text">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: FAQ ── */}
      <section className="book-section book-faq-section">
        <div className="book-inner">
          <span className="section-label">Common Questions</span>
          <h2 className="book-section-title">Frequently Asked Questions</h2>
          <p className="book-section-sub">Everything you need to know before booking</p>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 60}>
                <FaqItem q={f.q} a={f.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
