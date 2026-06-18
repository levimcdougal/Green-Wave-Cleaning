import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import leafImg from '../assets/leaf.png'
import houseImg from '../assets/house.png'
import pawsImg from '../assets/paws.png'
import starImg from '../assets/star.png'
import logoImg from '../assets/logo.png'
import sprayImg from '../assets/spray.png'
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
              Top-notch eco-friendly cleaning in Columbus, Ohio and surrounding areas.
              Residential, office, and move-in/move-out cleaning using products
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
            <h2 className="section-title">Cleaning that cares for your home &amp; the planet</h2>
          </ScrollReveal>

          <div className="about-grid">
            <ScrollReveal delay={100}><div className="about-text">
              <p>
                Hi, I&apos;m <em>Chelsea!</em> I&apos;m a dedicated eco-friendly cleaning professional with over 4 years of hands-on experience providing reliable, detailed cleaning services for homes and businesses.
              </p>
              <p>
                I specialize in residential and office cleaning, and I&apos;m experienced with a wide range of home and commercial spaces.
              </p>
              <p>
                My goal is to create clean, healthy, and welcoming spaces while using environmentally conscious products and practices whenever possible. I believe a clean environment shouldn&apos;t come at the expense of your health or the planet, which is why I focus on safe, effective cleaning.
              </p>
              <p>
                Proudly serving <strong style={{ color: '#FFFFFF' }}>Columbus, OH and surrounding areas</strong> including
                Gahanna, Westerville, Dublin, Hilliard, Reynoldsburg, Delaware, Pickerington, Grove City, Lancaster, and more.
              </p>
            </div></ScrollReveal>

            <div className="feature-grid">
              {[
                { ico: null, img: leafImg, label: 'Eco-Friendly Products' },
                { ico: null, img: houseImg, label: 'Residential & Office' },
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
            <p className="section-sub">Residential, office, and move-in/move-out cleaning — eco-friendly every time</p>
          </ScrollReveal>

          <div className="preview-cards">
            {[
              { label: 'Residential Cleaning' },
              { label: 'Office Cleaning' },
              { label: 'Move-In / Move-Out' },
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
          <p className="home-cta-sub">Affordable rates · Eco-friendly products · Columbus &amp; surrounding areas</p>
          <Link to="/book" className="btn-primary home-cta-btn">
            Book Now <img src={sprayImg} alt="" className="btn-leaf-img" />
          </Link>
        </div>
      </section>

    </main>
  )
}
