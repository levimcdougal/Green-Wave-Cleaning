import { useEffect, useState } from 'react'
import { Phone, Mail, Clock } from '../components/Svgs'
import apartImg from '../assets/apart.png'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/animations.css'
import './BookNow.css'

function CalEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.textContent = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", {origin:"https://cal.com"});
      Cal("inline", {elementOrSelector:"#cal-booking-embed", calLink:"green-wave-cleaning", layout:"month_view"});
      Cal("ui", {theme:"light", styles:{branding:{brandColor:"#3D6B40"}}, layout:"month_view"});
    `

    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <div className="cal-embed-outer">
      <div id="cal-booking-embed" className="cal-embed" />
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
    a: 'Hourly cleaning is $50 per hour for up to 6 hours. Recurring maintenance ranges from $0.08–$0.20 per sq. ft. based on frequency. Deep cleans range from $0.20–$0.50 per sq. ft. depending on soil level; nicotine-affected homes are $0.62 per sq. ft. Deep cleans and move-in/move-out cleans require a free in-person quote.',
  },
  {
    q: 'What products do you use?',
    a: 'Truly Free is our primary cleaning brand. We use effective, eco-friendly, plant-powered products chosen with your family, pets, and the environment in mind.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: 'Not at all! Many clients provide access and go about their day. We just need a way to get in and out safely.',
  },
  {
    q: 'What services do you offer?',
    a: 'We offer residential maintenance, deep cleaning, hourly cleaning, and move-in/move-out cleaning. We do not provide office/commercial cleaning, hoarding cleanup, biohazard cleanup, mold remediation, or animal-waste cleanup.',
  },
  {
    q: 'How far in advance do I need to book?',
    a: 'Current service hours are Tuesday–Thursday, 10 AM–8 PM, and Friday–Saturday, 12 PM–6 PM. Sunday and Monday are unavailable. Booking ahead is recommended.',
  },
  {
    q: 'How long will my cleaning take?',
    a: 'Cleaning times vary by service type, home size, and soil level. Hourly appointments can be booked for up to 6 hours. Deep and move-in/move-out cleans may take a full day or multiple days. Our priority is quality, not speed; your free in-person quote will establish a realistic plan.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Columbus, Franklin County, Delaware, and Delaware County, Ohio.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'All payments are securely processed through Stripe. We do not accept personal checks.',
  },
  {
    q: 'Do you require a deposit, and what is your cancellation policy?',
    a: 'A 50% deposit is required to reserve every appointment, processed securely through Stripe. Cancellations more than 48 hours before your appointment receive a full deposit refund. Cancellations between 24 and 48 hours before your appointment result in 50% of your deposit being retained. Cancellations within 24 hours — including same-day — result in the entire deposit being retained. If Chelsea arrives and is unable to access the property or the appointment cannot be completed due to a client-related circumstance, you are responsible for 100% of the total scheduled service price. Rescheduling requests made within 48 hours of your appointment are treated as cancellations. See our Terms of Service for full details.',
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

      {/* ── Calendar ── */}
      <section className="book-section book-cal-section">
        <div className="book-inner">
          <ScrollReveal>
            <span className="section-label">Pick a Time</span>
            <h2 className="book-section-title">Book a Cleaning</h2>
            <p className="book-section-sub">Book hourly service directly, or choose a free in-person quote for deep cleans and move-in/move-out cleans.</p>
          </ScrollReveal>
          <CalEmbed />
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

      {/* ── Hours & Availability ── */}
      <section className="book-section book-hours-section">
        <div className="book-inner">
          <ScrollReveal>
            <span className="section-label">When We Work</span>
            <h2 className="book-section-title">Hours &amp; Availability</h2>
            <p className="book-section-sub">Here&apos;s when you can typically reach us and get booked</p>
          </ScrollReveal>

          <div className="hours-cards">
            <ScrollReveal delay={100}>
              <div className="hours-card">
                <div className="hours-card-ico"><Clock size={22} /></div>
                <div className="hours-card-text">
                  <span className="hours-card-label">Tuesday – Thursday</span>
                  <span className="hours-card-value">10:00 AM – 8:00 PM</span>
                  <span className="hours-card-days">Sunday &amp; Monday: unavailable</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="hours-card">
                <div className="hours-card-ico"><img src={apartImg} alt="" className="hours-card-img" /></div>
                <div className="hours-card-text">
                  <span className="hours-card-label">Friday &amp; Saturday</span>
                  <span className="hours-card-value">12:00 PM – 6:00 PM</span>
                  <span className="hours-card-days">Book online based on availability</span>
                </div>
              </div>
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
