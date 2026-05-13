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
import boxImg from '../assets/box.png'
import officeImg from '../assets/office.png'
import './Services.css'

const services = [
  { img: houseImg, title: 'Residential Cleaning',   desc: 'Eco-friendly cleaning for homes of all sizes. Reliable, detailed, and safe for your family and pets.' },
  { img: apartImg, title: 'Office Cleaning',         desc: 'Professional cleaning for offices and commercial spaces — maintenance and deep cleaning to keep your workspace fresh.' },
  { img: boxImg,   title: 'Move-In / Move-Out',      desc: 'Thorough cleaning before or after a move, ensuring your space is spotless and ready for the next chapter.' },
]

const pricingCategories = [
  {
    label: 'Residential Cleaning',
    items: [
      { img: leafImg, name: 'Basic Eco-Friendly Clean',   amount: '$0.05', unit: 'per sq. ft.', feats: ['Routine cleaning', 'General dusting & vacuuming', 'Kitchen & bathroom cleaning', 'Eco-friendly products'], featured: false },
      { img: pawsImg, name: 'Basic Clean — Pet-Friendly', amount: '$0.10', unit: 'per sq. ft.', feats: ['Routine cleaning', 'Designed for homes with dogs, cats & other indoor pets', 'Pet-safe eco-friendly products', 'Pet hair removal & odor neutralizing'], featured: false },
      { img: starImg, name: 'Deep Eco-Friendly Clean',    amount: '$0.15', unit: 'per sq. ft.', feats: ['Deep or first-time cleaning', 'Inside appliances & cabinets', 'Baseboards & detailed surfaces', 'Eco-friendly products'], featured: true, badge: 'Most Popular' },
      { img: deepImg, name: 'Deep Clean — Pet-Friendly',  amount: '$0.20', unit: 'per sq. ft.', feats: ['Deep or first-time cleaning', 'Designed for homes with dogs, cats & other indoor pets', 'Pet-safe eco-friendly products', 'Pet hair removal & odor neutralizing'], featured: false },
    ],
  },
  {
    label: 'Move-In / Move-Out',
    items: [
      { img: houseImg, name: 'Basic Move-In/Out Clean', amount: '$0.35', unit: 'per sq. ft.', feats: ['Eco-friendly products', 'All standard surfaces', 'Kitchen & bathroom deep scrub', 'Ready for move-in or handoff'], featured: false },
      { img: starImg, name: 'Deep Move-In/Out Clean',  amount: '$0.60', unit: 'per sq. ft.', feats: ['Everything in Basic', 'Inside appliances & cabinets', 'Baseboards & detailed surfaces', 'Most thorough clean available'], featured: false },
    ],
  },
  {
    label: 'Office Cleaning',
    items: [
      { img: officeImg, name: 'Office Maintenance Clean', amount: '$0.18', unit: 'per sq. ft.', feats: ['Routine upkeep', 'Desks, surfaces & floors', 'Restroom cleaning', 'Eco-friendly products'], featured: false },
      { img: leafImg, name: 'Deep Office Clean',        amount: '$0.35', unit: 'per sq. ft.', feats: ['Thorough deep clean', 'Inside cabinets & storage areas', 'Detailed surface cleaning', 'Eco-friendly products'], featured: false },
    ],
  },
]

const addOns = [
  { name: 'Wall Spot Washing',             price: '$50+' },
  { name: 'Blind Dusting & Cleaning',      price: '$25' },
  { name: 'Ceiling Fan Cleaning',          price: '$10 each' },
  { name: 'Dishes',                        price: '$25' },
  { name: 'Laundry Folding',               price: '$30' },
  { name: 'Bed Linen Change',              price: '$10 per bed' },
  { name: 'Balcony / Patio Sweep & Wipe',  price: '$40' },
  { name: 'Inside Oven Cleaning',          price: '$45' },
  { name: 'Inside Refrigerator Cleaning',  price: '$75' },
  { name: 'Inside Cabinets & Drawers',     price: '$80' },
  { name: 'Basement Cleaning',             price: '$100+' },
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
          <ScrollReveal delay={200}><p className="svc-header-sub">Eco-friendly cleaning for every need, at prices that make sense</p></ScrollReveal>
        </div>
      </section>

      <WaveDown from="#2A4A2C" to="#FDF8EE" />

      {/* ── Services ── */}
      <section className="svc-section">
        <div className="section-inner">
          <ScrollReveal><span className="section-label" style={{ color: '#7A9B7C' }}>What We Clean</span>
          <h2 className="section-title" style={{ color: '#3D6B40' }}>Our Services</h2>
          <p className="section-sub">Residential, office, and move-in/move-out cleaning</p></ScrollReveal>

          <div className="svc-grid svc-grid-3">
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

          {pricingCategories.map((cat) => (
            <div key={cat.label} className="price-category">
              <ScrollReveal><h3 className="price-cat-label">{cat.label}</h3></ScrollReveal>
              <div className={`price-grid price-grid-${cat.items.length === 4 ? '4' : '2'}`}>
                {cat.items.map((p, i) => (
                  <ScrollReveal key={p.name} delay={i * 80}>
                    <div className={`price-card${p.featured ? ' featured' : ''}`}>
                      {p.badge && <span className="price-badge">{p.badge}</span>}
                      {p.img ? <img src={p.img} alt="" className="price-img" /> : <span className="price-ico">{p.ico}</span>}
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
          ))}
        </div>
      </section>

      <WaveUp from="#ECC5BA" to="#F5EDD8" />

      {/* ── Add-Ons ── */}
      <section className="svc-addons">
        <div className="section-inner">
          <ScrollReveal><span className="section-label" style={{ color: '#7A9B7C' }}>Customize Your Clean</span>
          <h2 className="section-title" style={{ color: '#3D6B40' }}>Add-On Services</h2>
          <p className="section-sub">Enhance any cleaning with these optional extras</p></ScrollReveal>

          <div className="addons-grid">
            {addOns.map((a, i) => (
              <ScrollReveal key={a.name} delay={i * 40}>
                <div className="addon-card">
                  <span className="addon-name">{a.name}</span>
                  <span className="addon-price">{a.price}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDown from="#F5EDD8" to="#7A9B7C" />

      {/* ── Service Area ── */}
      <section className="svc-area">
        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label" style={{ color: 'rgba(253,248,238,0.8)' }}>Where We Serve</span>
            <h2 className="section-title" style={{ color: '#FDF8EE' }}>Service Area</h2>
            <p className="section-sub" style={{ color: 'rgba(253,248,238,0.75)' }}>Serving Columbus, OH and all surrounding communities</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="area-chips">
              {serviceArea.map(a => (
                <span key={a} className="area-chip">{a}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveUp from="#7A9B7C" to="#2A4A2C" />

      {/* ── CTA ── */}
      <section className="svc-cta">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ color: 'rgba(168,196,168,0.8)' }}>Ready to book?</span>
          <h2 className="svc-cta-title">Let&apos;s get your space sparkling</h2>
          <p className="svc-cta-sub">Eco-friendly · Columbus &amp; surrounding areas</p>
          <Link to="/book" className="btn-primary svc-cta-btn">
            Book Now <img src={leafImg} alt="" className="btn-leaf-img" />
          </Link>
        </div>
      </section>

    </main>
  )
}
