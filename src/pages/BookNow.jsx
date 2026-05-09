import { useState, useEffect } from 'react'
import { Leaf, Mushroom, Flower, Sparkle, WaveDown, WaveUp } from '../components/Svgs'
import phoneImg from '../assets/phone.png'
import envelopeImg from '../assets/envelope.png'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/animations.css'
import './BookNow.css'

function CalEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", {origin:"https://cal.com"});
      Cal("inline", {
        elementOrSelector:"#cal-booking-embed",
        calLink: "green-wave-cleaning",
        layout: "month_view"
      });
      Cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#3D6B40"}},"hideEventTypeDetails":true,"layout":"month_view"});
    `
    document.body.appendChild(script)

    // Aggressively hide Cal.com branding
    const hideBranding = () => {
      document.querySelectorAll('a, div, span').forEach(el => {
        if (el.textContent.trim() === 'Cal.com' || el.href === 'https://cal.com') {
          el.style.setProperty('display', 'none', 'important')
          if (el.parentElement && el.parentElement !== document.body) {
            el.parentElement.style.setProperty('display', 'none', 'important')
          }
        }
      })
    }

    const observer = new MutationObserver(hideBranding)
    observer.observe(document.body, { childList: true, subtree: true })
    const interval = setInterval(hideBranding, 500)
    setTimeout(() => clearInterval(interval), 15000)

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="cal-embed-outer">
      <div id="cal-booking-embed" className="cal-embed" />
      <div className="cal-cover" />
      <div className="cal-branding-block" />
    </div>
  )
}

const steps = [
  { n: '1', text: 'Reach out by call, text, or email' },
  { n: '2', text: 'Tell us your home type & square footage' },
  { n: '3', text: 'We\'ll give you a quick quote' },
  { n: '4', text: 'Pick a date and we\'ll take it from there!' },
]

const faqs = [
  {
    q: 'How is pricing calculated?',
    a: 'Pricing is based on your home\'s square footage. Basic cleaning starts at $0.05/sq. ft., pet-friendly at $0.10/sq. ft., deep cleaning at $0.15/sq. ft., and deep pet-friendly at $0.20/sq. ft.',
  },
  {
    q: 'What products do you use?',
    a: 'We use Koala Eco products exclusively — safe, effective, and eco-friendly. They\'re non-toxic and safe for your family, pets, and the environment.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: 'Not at all! Many clients provide access and go about their day. We just need a way to get in and out safely.',
  },
  {
    q: 'What types of homes do you clean?',
    a: 'We clean houses, apartments, condos, duplexes, trailers, and manufactured homes — basically any kind of home!',
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
        <div className="book-hd-deco-l"><Leaf size={110} color="rgba(122,155,124,0.22)" /></div>
        <div className="book-hd-deco-r"><Flower size={80} /></div>
        <div className="book-hd-sp1"><Sparkle size={20} color="#ECC5BA" /></div>
        <div className="book-hd-sp2"><Sparkle size={14} color="#A8C4A8" /></div>
        <div className="book-hd-sp3"><Sparkle size={18} color="#C97B6E" /></div>
        <div className="book-inner" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <ScrollReveal delay={0}><span className="section-label" style={{ color: 'rgba(168,196,168,0.85)' }}>Let&apos;s Get Started</span></ScrollReveal>
          <ScrollReveal delay={100}><h1 className="book-header-title">Book Your Cleaning</h1></ScrollReveal>
          <ScrollReveal delay={200}><p className="book-header-sub">
            Ready for a spotless, eco-friendly home? Reach out and Chelsea will get back to you fast.
          </p></ScrollReveal>
        </div>
      </section>

      <WaveDown from="#2A4A2C" to="#FDF8EE" />

      {/* ── Calendar ── */}
      <section className="book-section book-cal-section">
        <div className="book-inner">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#7A9B7C' }}>Pick a Time</span>
            <h2 className="book-section-title" style={{ color: '#3D6B40' }}>Book a Cleaning</h2>
            <p className="book-section-sub">Choose a date and time that works for you</p>
          </ScrollReveal>
          <CalEmbed />
        </div>
        <div className="cal-section-cover" />
      </section>

      <WaveDown from="#FDF8EE" to="#F5EDD8" />

      {/* ── Section 1: Contact ── */}
      <section className="book-section book-contact-section">
        <div className="book-inner">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#7A9B7C' }}>Prefer to Talk?</span>
            <h2 className="book-section-title" style={{ color: '#3D6B40' }}>Reach out to Chelsea</h2>
            <p className="book-section-sub">Call, text, or email — whatever works best for you</p>
          </ScrollReveal>

          <div className="contact-cards">
            <ScrollReveal delay={100}>
              <a href="tel:614-671-6041" className="contact-card contact-card-primary">
                <div className="contact-card-ico"><img src={phoneImg} alt="phone" className="card-ico-img" /></div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Call or Text</span>
                  <span className="contact-card-value">614-671-6041</span>
                </div>
                <span className="contact-card-arrow">→</span>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <a href="mailto:greenwavecleanllc@gmail.com" className="contact-card">
                <div className="contact-card-ico"><img src={envelopeImg} alt="email" className="card-ico-img" /></div>
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

      <WaveDown from="#FDF8EE" to="#7A9B7C" />

      {/* ── Section 2: How it works ── */}
      <section className="book-section book-how-section">
        <div className="about-deco-br"><Mushroom size={110} /></div>
        <div className="about-deco-tl"><Leaf size={80} color="#3D6B40" /></div>
        <div className="book-inner" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-label" style={{ color: 'rgba(253,248,238,0.8)' }}>Simple Process</span>
          <h2 className="book-section-title" style={{ color: '#FDF8EE' }}>How it works</h2>
          <p className="book-section-sub" style={{ color: 'rgba(253,248,238,0.75)' }}>Getting a clean home is easy — here&apos;s what to expect</p>

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

      <WaveUp from="#7A9B7C" to="#FDF8EE" />

      {/* ── Section 3: FAQ ── */}
      <section className="book-section book-faq-section">
        <div className="book-inner">
          <span className="section-label" style={{ color: '#C97B6E' }}>Common Questions</span>
          <h2 className="book-section-title" style={{ color: '#3D6B40' }}>Frequently Asked Questions</h2>
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
