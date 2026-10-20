import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import leafImg from '../assets/leaf.png'
import houseImg from '../assets/house.png'
import pawsImg from '../assets/paws.png'
import starImg from '../assets/star.png'
import logoImg from '../assets/logo.png'
import sprayImg from '../assets/spray.png'
import chelseaImg from '../assets/me.jpg'
import '../styles/animations.css'
import './Home.css'

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="hero-copy">
            <ScrollReveal delay={0}><h1 className="hero-title">GreenWave Cleaning</h1></ScrollReveal>
            <ScrollReveal delay={100}><p className="hero-tagline">
              Residential cleaning, property turnovers &amp; small commercial spaces
            </p></ScrollReveal>
            <ScrollReveal delay={200}><p className="hero-desc">
              Providing professional cleaning services across Columbus and Franklin, Delaware, Union, and Marion counties. I specialize in residential cleanings, property turnovers, and commercial spaces, delivering spotless results to get your space ready.
            </p></ScrollReveal>
            <ScrollReveal delay={300}><div className="hero-btns">
              <Link to="/book"     className="btn-primary">Get a Free Quote</Link>
              <Link to="/services" className="btn-outline">View Services</Link>
            </div></ScrollReveal>
          </div>

          {/* Hero logo panel */}
          <div className="hero-art">
            <div className="art-circle" />
            <img src={logoImg} alt="GreenWave Cleaning" className="hero-logo-img" />
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="home-about">
        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Personal care for every space</h2>
          </ScrollReveal>

          <div className="about-grid">
            <ScrollReveal delay={100}><div className="about-profile">
              <img src={chelseaImg} alt="Chelsea, owner of GreenWave Cleaning" className="about-photo" />
              <div className="about-text">
              <p>
                GreenWave Cleaning provides trusted, independent cleaning services backed by professional experience. Operating as a dedicated solo cleaner, I specialize personally in reliable residential cleanings, thorough property turnovers, and small commercial spaces like offices. I work directly with homeowners, landlords, and business owners to deliver spotless results every time.
              </p>
              <p>
                Proudly serving <strong style={{ color: '#FFFFFF' }}>Delaware County, Franklin County, Marion County, and Union County, Ohio.</strong>
              </p>
              </div>
            </div></ScrollReveal>

            <div className="feature-grid">
              {[
                { ico: null, img: leafImg, label: 'Residential Care' },
                { ico: null, img: houseImg, label: 'Property Turnover Care' },
                { ico: null, img: pawsImg, label: 'Personal Attention' },
                { ico: null, img: starImg, label: 'Deep & Detailed' },
              ].map((f, i) => (
                <ScrollReveal key={f.label} delay={i * 80}><div className="feature-card">
                  {f.img
                    ? <img src={f.img} alt="" className="feat-ico-img" />
                    : <span className="feat-ico">{f.ico}</span>
                  }
                  <h3>{f.label}</h3>
                </div></ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section className="home-services-preview">
        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label" style={{ color: 'var(--green)' }}>What We Offer</span>
            <h2 className="section-title" style={{ color: 'var(--navy)' }}>Our Services</h2>
            <p className="section-sub">Residential cleaning, property turnovers, small commercial spaces, hourly, and deep cleaning</p>
          </ScrollReveal>

          <div className="preview-cards">
            {[
              { label: 'Commercial & Turnover Cleaning' },
              { label: 'Recurring Residential Cleaning' },
              { label: 'Hourly Cleaning' },
              { label: 'Deep Cleaning' },
            ].map(s => (
              <div key={s.label} className="preview-chip">
                {s.label}
              </div>
            ))}
          </div>

          <Link to="/services" className="btn-primary" style={{ display: 'inline-block', marginTop: '2.5rem' }}>
            See All Services &amp; Rates →
          </Link>
          <p><Link to="/services#maintenance-guide">Read the Recurring Maintenance Cleaning Service Guide →</Link></p>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="home-cta">
        <div className="home-cta-inner">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Ready to get started?</span>
          <h2 className="home-cta-title">Book your professional cleaning today</h2>
          <p className="home-cta-sub">Affordable rates · Premium products · Columbus, Franklin County, Delaware &amp; Delaware County, Union County &amp; Marion County</p>
          <Link to="/book" className="btn-primary home-cta-btn">
            Book Now <img src={sprayImg} alt="" className="btn-leaf-img" />
          </Link>
        </div>
      </section>

    </main>
  )
}
