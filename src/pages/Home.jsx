import { Link } from 'react-router-dom'
import { Leaf, Mushroom, Sparkle, Flower, WaveDown, WaveUp } from '../components/Svgs'
import ScrollReveal from '../components/ScrollReveal'
import starImg from '../assets/star.png'
import houseImg from '../assets/house.png'
import leafImg from '../assets/leaf.png'
import pawsImg from '../assets/paws.png'
import '../styles/animations.css'
import './Home.css'

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="hero-copy">
            <ScrollReveal delay={0}><h1 className="hero-title">GreenWave<br />Cleaning</h1></ScrollReveal>
            <ScrollReveal delay={100}><p className="hero-tagline">
              Prioritizing eco-friendly products to take care of<br />your space <em>and</em> the planet
            </p></ScrollReveal>
            <ScrollReveal delay={200}><p className="hero-desc">
              Top-notch eco-friendly cleaning in Columbus, Ohio and surrounding areas.
              I love keeping homes clean, safe, and welcoming — using Koala Eco products
              that are kind to your family, your pets, and our planet.
            </p></ScrollReveal>
            <ScrollReveal delay={300}><div className="hero-btns">
              <Link to="/book"     className="btn-primary">Get a Free Quote</Link>
              <Link to="/services" className="btn-outline">View Services</Link>
            </div></ScrollReveal>
          </div>

          {/* Floating nature illustration */}
          <div className="hero-art">
            <div className="art-circle" />
            <div className="art-el" style={{ top: '8%',   right: '12%', animationDelay: '0s',   animationDuration: '8s'  }}><Mushroom size={95} /></div>
            <div className="art-el" style={{ top: '6%',   left:  '18%', animationDelay: '1.2s', animationDuration: '9s'  }}><Leaf size={58} color="#5B8A5E" /></div>
            <div className="art-el" style={{ bottom: '12%', right: '8%', animationDelay: '2s',  animationDuration: '7s'  }}><Leaf size={44} color="#7A9B7C" /></div>
            <div className="art-el" style={{ bottom: '22%', left:  '10%', animationDelay: '0.5s', animationDuration: '10s' }}><Leaf size={34} color="#A8C4A8" /></div>
            <div className="art-el" style={{ bottom: '28%', right: '22%', animationDelay: '1.5s', animationDuration: '7.5s' }}><Mushroom size={52} /></div>
            <div className="art-el" style={{ top: '32%',  left:  '26%', animationDelay: '3s',   animationDuration: '8.5s' }}><Flower size={54} /></div>
            <div className="art-el" style={{ bottom: '10%', left: '32%', animationDelay: '1.8s', animationDuration: '11s'  }}><Flower size={34} /></div>
            <div className="art-el sp" style={{ top: '14%',   right: '28%', animationDelay: '0s'   }}><Sparkle size={26} color="#C97B6E" /></div>
            <div className="art-el sp" style={{ top: '48%',   right: '4%',  animationDelay: '1s'   }}><Sparkle size={18} color="#7A9B7C" /></div>
            <div className="art-el sp" style={{ bottom: '38%', left:  '5%', animationDelay: '2.2s' }}><Sparkle size={22} color="#C97B6E" /></div>
            <div className="art-el sp" style={{ bottom: '8%',  right: '18%', animationDelay: '0.6s' }}><Sparkle size={15} color="#3D6B40" /></div>
            <div className="art-el sp" style={{ top: '22%',   left:  '8%',  animationDelay: '1.4s' }}><Sparkle size={14} color="#8B6B4E" /></div>
          </div>
        </div>
      </section>

      <WaveDown from="#F5EDD8" to="#7A9B7C" />

      {/* ── About ── */}
      <section className="home-about">
        <div className="about-deco about-deco-br"><Mushroom size={130} /></div>
        <div className="about-deco about-deco-tl"><Leaf size={90} color="#3D6B40" /></div>

        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Cleaning that cares for<br />your home &amp; the planet</h2>
          </ScrollReveal>

          <div className="about-grid">
            <ScrollReveal delay={100}><div className="about-text">
              <p>
                Hi, I&apos;m <em>Chelsea!</em> I love keeping homes clean, safe, and welcoming, and I always prioritize eco-friendly products to take care of your space and the planet.
              </p>
              <p>
                I do houses, apartments, condos, duplexes, trailers, and manufactured homes, basically <em>any kind of home!</em> Every space gets the same careful, detailed attention.
              </p>
              <p>
                I use safe and effective eco-friendly products from <strong style={{ color: '#FDF8EE' }}>Koala Eco</strong>, good for your family, your pets, and our planet.
              </p>
              <p>
                Proudly serving <strong style={{ color: '#FDF8EE' }}>Columbus, OH and surrounding areas</strong> including
                Gahanna, Westerville, Dublin, Hilliard, Reynoldsburg, Delaware, Pickerington, Grove City, Lancaster, and more.
              </p>
            </div></ScrollReveal>

            <div className="feature-grid">
              {[
                { ico: null, img: leafImg, label: 'Eco-Friendly Products' },
                { ico: null, img: houseImg, label: 'Any Type of Home' },
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

      <WaveUp from="#7A9B7C" to="#FDF8EE" />

      {/* ── Services preview ── */}
      <section className="home-services-preview">
        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#7A9B7C' }}>What We Clean</span>
            <h2 className="section-title" style={{ color: '#3D6B40' }}>We clean all kinds of homes</h2>
            <p className="section-sub">Houses, apartments, condos, duplexes, trailers, manufactured homes — basically any kind of home!</p>
          </ScrollReveal>

          <div className="preview-cards">
            {[
              { label: 'Houses' },
              { label: 'Apartments' },
              { label: 'Condos' },
              { label: 'Duplexes' },
              { label: 'Trailers' },
              { label: 'Manufactured Homes' },
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
        <div className="home-cta-deco-l"><Leaf size={110} color="rgba(168,196,168,0.2)" /></div>
        <div className="home-cta-deco-r"><Mushroom size={100} /></div>
        <div className="home-cta-inner">
          <span className="section-label" style={{ color: 'rgba(168,196,168,0.8)' }}>Ready to get started?</span>
          <h2 className="home-cta-title">Book your eco-friendly cleaning today</h2>
          <p className="home-cta-sub">Affordable rates · Koala Eco products · Columbus &amp; surrounding areas</p>
          <Link to="/book" className="btn-primary home-cta-btn">
            Book Now <img src={leafImg} alt="" className="btn-leaf-img" />
          </Link>
        </div>
      </section>

    </main>
  )
}
