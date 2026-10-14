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
              Prioritizing eco-friendly products to take care of your space <em>and</em> the planet
            </p></ScrollReveal>
            <ScrollReveal delay={200}><p className="hero-desc">
              Top-notch eco-friendly cleaning in Columbus and Delaware, including Franklin and Delaware counties.
              Specializing in commercial spaces and property turnovers, with residential cleaning using products
              that are kind to your family, your pets, and our planet.
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
            <h2 className="section-title">Cleaning that cares for your space &amp; the planet</h2>
          </ScrollReveal>

          <div className="about-grid">
            <ScrollReveal delay={100}><div className="about-profile">
              <img src={chelseaImg} alt="Chelsea, owner of GreenWave Cleaning" className="about-photo" />
              <div className="about-text">
              <p>
                Hi, I&apos;m <em>Chelsea!</em> I&apos;m the owner of GreenWave Cleaning LLC. I bring over 5 years of professional cleaning experience to every job, and I officially licensed and launched my LLC in 2026.
              </p>
              <p>
                I started with residential cleaning and am now focusing on commercial spaces and property turnovers — the work and workflow I enjoy most. I help local businesses and property managers keep their spaces clean, welcoming, and ready for what comes next.
              </p>
              <p>
                I continue to offer residential cleaning with eco-friendly, plant-powered products that are safe for families and pets. Truly Free remains my main cleaning brand, supporting my commitment to thoughtful care for your space and the planet.
              </p>
              <p>
                Proudly serving <strong style={{ color: '#FFFFFF' }}>Columbus, Franklin County, Delaware, and Delaware County, Ohio.</strong>
              </p>
              </div>
            </div></ScrollReveal>

            <div className="feature-grid">
              {[
                { ico: null, img: leafImg, label: 'Eco-Friendly Products' },
                { ico: null, img: houseImg, label: 'Commercial & Turnover Care' },
                { ico: null, img: pawsImg, label: 'Pet-Safe Formulas' },
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
            <p className="section-sub">Commercial and property turnovers, residential, hourly, and deep cleaning — eco-friendly every time</p>
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
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="home-cta">
        <div className="home-cta-inner">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.75)' }}>Ready to get started?</span>
          <h2 className="home-cta-title">Book your eco-friendly cleaning today</h2>
          <p className="home-cta-sub">Affordable rates · Eco-friendly products · Columbus, Franklin County, Delaware &amp; Delaware County</p>
          <Link to="/book" className="btn-primary home-cta-btn">
            Book Now <img src={sprayImg} alt="" className="btn-leaf-img" />
          </Link>
        </div>
      </section>

    </main>
  )
}
