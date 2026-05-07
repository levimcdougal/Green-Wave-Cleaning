import { Link } from 'react-router-dom'
import { Leaf, Mushroom, Sparkle, WaveDown, WaveUp } from '../components/Svgs'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/animations.css'
import deepImg from '../assets/Deep.png'
import pawsImg from '../assets/paws.png'
import leafImg from '../assets/leaf.png'
import starImg from '../assets/star.png'
import houseImg from '../assets/house.png'
import apartImg from '../assets/apart.png'
import condoImg from '../assets/condo.png'
import duoImg from '../assets/duo.png'
import traiImg from '../assets/trai.png'
import manImg from '../assets/man.png'
import './Services.css'

const services = [
  { img: houseImg, title: 'Houses',             desc: 'Single-family homes of all sizes, cleaned top to bottom with eco-friendly care and attention to every detail.' },
  { img: apartImg, title: 'Apartments',         desc: 'From studios to multi-bedroom apartments — thorough, efficient, and affordable cleaning you can count on.' },
  { img: duoImg,   title: 'Duplexes',           desc: 'Both units or just yours — we handle duplexes with the same care and ease as any other home.' },
  { img: traiImg,  title: 'Trailers',           desc: 'Specialized cleaning for trailer homes, respecting your unique layout and using products safe for your space.' },
  { img: condoImg, title: 'Condos',             desc: 'Detailed condo cleaning that keeps your shared and private spaces pristine without harsh chemicals.' },
  { img: manImg,   title: 'Manufactured Homes', desc: 'Experienced with all styles and sizes of manufactured and modular homes — no job is too unique.' },
]

const pricing = [
  {
    ico: null,
    img: leafImg,
    name: 'Basic Eco-Friendly Clean',
    amount: '$0.05',
    unit: 'per square foot',
    feats: ['Routine cleaning', 'General dusting & vacuuming', 'Kitchen & bathroom cleaning', 'Koala Eco products'],
    featured: false,
  },
  {
    ico: null,
    img: pawsImg,
    name: 'Basic Clean — Pet-Friendly',
    amount: '$0.10',
    unit: 'per square foot',
    feats: ['Routine cleaning', 'Designed for homes with dogs, cats & other indoor pets', 'Pet-safe Koala Eco products', 'Pet hair removal & odor neutralizing'],
    featured: false,
  },
  {
    ico: null,
    img: starImg,
    name: 'Deep Eco-Friendly Clean',
    amount: '$0.15',
    unit: 'per square foot',
    feats: ['Deep or first-time cleaning', 'Inside appliances & cabinets', 'Baseboards & detailed surfaces', 'Koala Eco products'],
    featured: true,
    badge: 'Most Popular',
  },
  {
    ico: null,
    img: deepImg,
    name: 'Deep Clean — Pet-Friendly',
    amount: '$0.20',
    unit: 'per square foot',
    feats: ['Deep or first-time cleaning', 'Designed for homes with dogs, cats & other indoor pets', 'Pet-safe Koala Eco products', 'Pet hair removal & odor neutralizing'],
    featured: false,
  },
]

const serviceArea = [
  'Columbus, OH', 'Franklin County, OH', 'Delaware, OH', 'Delaware County, OH',
  'Licking County, OH', 'Fairfield County, OH', 'Gahanna, OH', 'Westerville, OH',
  'Reynoldsburg, OH', 'Pickerington, OH', 'Canal Winchester, OH', 'Grove City, OH',
  'Hilliard, OH', 'Dublin, OH', 'Newark, OH', 'Lancaster, OH',
]

export default function Services() {
  return (
    <main style={{ paddingTop: 72 }}>

      {/* ── Page header ── */}
      <section className="svc-header">
        <div className="svc-header-deco-l"><Leaf size={100} color="rgba(122,155,124,0.25)" /></div>
        <div className="svc-header-deco-r"><Mushroom size={90} /></div>
        <div className="svc-header-deco-sp1"><Sparkle size={22} color="#C97B6E" /></div>
        <div className="svc-header-deco-sp2"><Sparkle size={16} color="#7A9B7C" /></div>

        <div className="section-inner" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <ScrollReveal delay={0}><span className="section-label" style={{ color: 'rgba(168,196,168,0.85)' }}>What We Offer</span></ScrollReveal>
          <ScrollReveal delay={100}><h1 className="svc-header-title">Services &amp; Rates</h1></ScrollReveal>
          <ScrollReveal delay={200}><p className="svc-header-sub">
            Eco-friendly cleaning for any type of home, at prices that make sense
          </p></ScrollReveal>
        </div>
      </section>

      <WaveDown from="#2A4A2C" to="#FDF8EE" />

      {/* ── Services grid ── */}
      <section className="svc-section">
        <div className="section-inner">
          <ScrollReveal><span className="section-label" style={{ color: '#7A9B7C' }}>All Home Types</span>
          <h2 className="section-title" style={{ color: '#3D6B40' }}>We clean any kind of home</h2>
          <p className="section-sub">Every space deserves care — big or small, standard or unique</p></ScrollReveal>

          <div className="svc-grid">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="svc-card">
                  <div className="svc-ico">
                    {s.img ? <img src={s.img} alt={s.title} className="svc-ico-img" /> : s.ico}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDown from="#FDF8EE" to="#ECC5BA" />

      {/* ── Pricing ── */}
      <section className="svc-pricing">
        <div className="section-inner">
          <ScrollReveal><span className="section-label" style={{ color: '#C97B6E' }}>Transparent Pricing</span>
          <h2 className="section-title" style={{ color: '#2A4A2C' }}>Simple, honest rates</h2>
          <p className="section-sub">Priced per square foot — you only pay for what you need</p></ScrollReveal>

          <div className="price-grid price-grid-4">
            {pricing.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 100}>
              <div className={`price-card${p.featured ? ' featured' : ''}`}>
                {p.badge && <span className="price-badge">{p.badge}</span>}
                {p.img
                  ? <img src={p.img} alt="" className="price-img" />
                  : <span className="price-ico">{p.ico}</span>
                }
                <h3 className="price-name">{p.name}</h3>
                <p className="price-amount">{p.amount}</p>
                <p className="price-unit">{p.unit}</p>
                <ul className="price-feats">
                  {p.feats.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/book" className="btn-price">Book This</Link>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveUp from="#ECC5BA" to="#FDF8EE" />

      {/* ── Service Area ── */}
      <section className="svc-area">
        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#7A9B7C' }}>Where We Serve</span>
            <h2 className="section-title" style={{ color: '#3D6B40' }}>Service Area</h2>
            <p className="section-sub">Serving Columbus, OH and all surrounding communities</p>
          </ScrollReveal>
          <div className="area-chips">
            {serviceArea.map((a, i) => (
              <ScrollReveal key={a} delay={i * 40}>
                <span className="area-chip">{a}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDown from="#FDF8EE" to="#2A4A2C" />

      {/* ── Bottom CTA ── */}
      <section className="svc-cta">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ color: 'rgba(168,196,168,0.8)' }}>Ready to book?</span>
          <h2 className="svc-cta-title">Let&apos;s get your home sparkling</h2>
          <p className="svc-cta-sub">Koala Eco products · Pet-safe · Columbus &amp; surrounding areas</p>
          <Link to="/book" className="btn-primary svc-cta-btn">
            Book Now <img src={leafImg} alt="" className="btn-leaf-img" />
          </Link>
        </div>
      </section>

    </main>
  )
}
