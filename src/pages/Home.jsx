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
              Residential and move-in/move-out cleaning using products
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
            <ScrollReveal delay={100}><div className="about-profile">
              <img src={chelseaImg} alt="Chelsea, owner of GreenWave Cleaning" className="about-photo" />
              <div className="about-text">
              <p>
                Hi, I&apos;m <em>Chelsea!</em> As the face behind your local eco-friendly home cleaning service, I bring over 5 years of professional residential experience to every house I visit.
              </p>
              <p>
                I proudly serve homeowners throughout Delaware and Columbus, Ohio, who value reliability and meticulous attention to detail.
              </p>
              <p>
                My mission is simple: exceptional cleaning results with environmentally conscious products. Truly Free is my main cleaning brand because I refuse to compromise on your health or the planet. My non-toxic, plant-powered approach leaves your home fresh, safe for crawling babies, and welcoming for pets.
              </p>
              <p>
                Proudly serving <strong style={{ color: '#FFFFFF' }}>Columbus, Franklin County, Delaware, and Delaware County, Ohio.</strong>
              </p>
              </div>
            </div></ScrollReveal>

            <div className="feature-grid">
              {[
                { ico: null, img: leafImg, label: 'Eco-Friendly Products' },
                { ico: null, img: houseImg, label: 'Residential Specialist' },
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
            <p className="section-sub">Residential, hourly, deep, and move-in/move-out cleaning — eco-friendly every time</p>
          </ScrollReveal>

          <div className="preview-cards">
            {[
              { label: 'Residential Cleaning' },
              { label: 'Hourly Cleaning' },
              { label: 'Move-In / Move-Out' },
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
