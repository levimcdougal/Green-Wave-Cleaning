import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from '../components/Svgs'
import ScrollReveal from '../components/ScrollReveal'
import '../styles/animations.css'
import leafImg from '../assets/leaf.png'
import houseImg from '../assets/house.png'
import apartImg from '../assets/apart.png'
import boxImg from '../assets/box.png'
import officeImg from '../assets/office.png'
import sprayImg from '../assets/spray.png'
import './Services.css'

const services = [
  { img: houseImg, title: 'Residential Cleaning',   desc: 'Eco-friendly cleaning for homes of all sizes. Reliable, detailed, and safe for your family and pets.' },
  { img: officeImg, title: 'Commercial Cleaning',   desc: 'Professional cleaning for offices and businesses — maintenance and deep cleaning to keep your workspace fresh.' },
  { img: boxImg,   title: 'Move-In / Move-Out',      desc: 'Thorough cleaning before or after a move, ensuring your space is spotless and ready for the next chapter.' },
]

const pricingCategories = [
  {
    label: 'Residential Cleaning Rates',
    note: 'One-time standard cleanings are designed for customers who do not require recurring service and are priced accordingly.',
    items: [
      { img: leafImg, name: 'Maintenance Clean', sub: 'Weekly / Bi-Weekly', amount: '$0.10', unit: 'per sq. ft.', feats: ['Kitchen & bathrooms', 'Dusting & vacuuming', 'Mopping all floors', 'Eco-friendly products'], featured: false },
      { img: houseImg, name: 'Monthly Clean',     amount: '$0.12', unit: 'per sq. ft.', feats: ['Everything in Maintenance Clean', 'Extra attention for less frequent visits', 'Eco-friendly products'], featured: false },
      { img: apartImg, name: 'One-Time Standard Clean', amount: '$0.15', unit: 'per sq. ft.', feats: ['For non-recurring service', 'Full kitchen & bathroom clean', 'Dusting, vacuuming & mopping', 'Eco-friendly products'], featured: false },
      { img: officeImg, name: 'Deep Clean',         amount: '$0.18', unit: 'per sq. ft.', feats: ['Baseboards & blinds dusted', 'Light fixtures & cobweb removal', 'Door frames, trim & outlets cleaned', 'Detailed floor edge cleaning'], featured: true, badge: 'Most Popular' },
      { img: boxImg,  name: 'Move-In / Move-Out Clean', sub: 'Empty Homes Only', amount: '$0.25–$0.30', unit: 'per sq. ft.', feats: ['Inside & outside of appliances & cabinets', 'Detailed kitchen & bathroom scrub', 'Closets, windows & baseboards', 'Top-to-bottom clean'], featured: false },
    ],
  },
  {
    label: 'Commercial Cleaning Rates',
    note: 'After-hours cleaning (evenings/weekends) carries a +15% surcharge. Emergency, short-notice, and holiday service available by custom quote. Custom pricing available for recurring contracts and large facilities.',
    items: [
      { img: officeImg, name: 'Office Maintenance Cleaning', amount: '$0.20', unit: 'per sq. ft.', feats: ['Offices & workstations', 'Breakrooms & restrooms', 'Common area upkeep', 'Eco-friendly products'], featured: false },
      { img: leafImg, name: 'Office Deep Cleaning', amount: '$0.40', unit: 'per sq. ft.', feats: ['Everything in Office Maintenance', 'Baseboards, blinds & vent covers', 'Interior glass & partitions', 'Deep clean restrooms & high-touch areas'], featured: false },
    ],
  },
]

const addOnGroups = [
  {
    label: 'Residential Add-Ons',
    items: [
      { name: 'Inside Oven',                       price: '$45' },
      { name: 'Inside Refrigerator (Empty)',       price: '$50' },
      { name: 'Inside Refrigerator (Contains Food)', price: '$75' },
      { name: 'Laundry Folding',                    price: '$30' },
      { name: 'Dishes',                             price: '$25' },
      { name: 'Pet Hair Treatment',                 price: '$20–$75' },
      { name: 'Ceiling Fan Dusting',                price: '$10 each' },
      { name: 'Wall Washing',                       price: 'Starting at $50' },
      { name: 'Basement Cleaning',                  price: 'Starting at $100' },
      { name: 'Organization & Decluttering',        price: 'Custom Quote' },
    ],
  },
  {
    label: 'Commercial Add-Ons',
    items: [
      { name: 'Conference Room Detailing',          price: 'Starting at $50' },
      { name: 'Inside Refrigerator (Empty)',        price: 'Starting at $50' },
      { name: 'Inside Refrigerator (Contains Food)', price: '$75' },
      { name: 'Inside Microwave Cleaning',          price: 'Starting at $15' },
      { name: 'Baseboard Cleaning',                 price: 'Starting at $50' },
      { name: 'Supply Restocking Assistance',       price: 'Starting at $25' },
      { name: 'Ceiling Fan Dusting',                 price: '$10 per fan' },
      { name: 'Wall Washing',                        price: 'Starting at $75' },
      { name: 'After-Hours Cleaning (Evenings/Weekends)', price: '+15% Surcharge' },
      { name: 'Move-In / Move-Out Office Cleaning', price: 'Custom Quote' },
    ],
  },
]

const serviceMenu = [
  {
    name: 'Maintenance, Monthly & One-Time Standard Clean',
    note: 'The same detailed checklist every visit — whether it’s weekly, bi-weekly, monthly, or a single one-time clean.',
    groups: [
      { label: 'Kitchen', items: ['Countertops & backsplash', 'Sink & faucet', 'Appliance exteriors', 'Microwave interior', 'Vacuum & mop floors'] },
      { label: 'Bathrooms', items: ['Toilets, sinks & mirrors', 'Showers & tubs', 'Trash removal', 'Vacuum & mop floors'] },
      { label: 'Bedrooms & Living Areas', items: ['Dusting', 'Mirrors & glass', 'Vacuuming', 'Mopping', 'Bed making upon request'] },
      { label: 'Throughout the Home', items: ['Light switches & door touchpoints', 'Empty trash cans', 'Vacuum & mop accessible floors'] },
    ],
  },
  {
    name: 'Deep Clean',
    note: 'Includes everything in the Maintenance Clean, plus:',
    flatItems: ['Baseboards', 'Blinds', 'Light fixtures', 'Door frames & trim', 'Cobweb removal', 'Outlet covers & switches', 'Detailed floor edges', 'Extra attention to buildup', 'Thorough cleaning of all areas'],
  },
  {
    name: 'Move-In / Move-Out Clean',
    note: 'A detailed top-to-bottom cleaning to prepare a home for new occupants or leave it move-out ready.',
    groups: [
      { label: 'Kitchen', items: ['Clean & sanitize countertops and backsplash', 'Inside & outside of refrigerator', 'Inside & outside of oven', 'Inside & outside of microwave', 'Inside dishwasher (if applicable)', 'Cabinets, drawers & handles', 'Deep clean stovetop', 'Vacuum & mop floors'] },
      { label: 'Bathrooms', items: ['Deep sanitizing of toilets, sinks, tubs & showers', 'Remove soap scum & buildup', 'Mirrors & fixtures', 'Cabinets & drawers', 'Vacuum & mop floors'] },
      { label: 'Throughout the Home', items: ['Closets & shelving', 'Window sills & tracks', 'Doors, trim & baseboards', 'Ceiling fans (reachable areas)', 'Remove cobwebs', 'Vacuum carpets & floors', 'Mop hard floors', 'Spot-clean walls as needed'] },
    ],
    highlight: { label: 'Included at No Additional Charge', items: ['Refrigerator (inside & out)', 'Oven (inside & out)', 'Microwave (inside & out)', 'Dishwasher (if applicable)'] },
    perfectFor: ['Home Buyers', 'Home Sellers', 'Renters', 'Property Managers', 'Realtors', 'Landlords'],
  },
  {
    name: 'Office Cleaning',
    note: 'Routine maintenance cleaning to keep your workspace fresh and welcoming.',
    groups: [
      { label: 'Offices & Workstations', items: ['Dust desks & work surfaces', 'Wipe high-touch surfaces', 'Empty trash & replace liners', 'Vacuum carpets & rugs', 'Mop hard floors'] },
      { label: 'Breakrooms & Kitchenettes', items: ['Sanitize counters', 'Clean sinks & faucets', 'Wipe appliance exteriors', 'Clean tables & chairs'] },
      { label: 'Restrooms', items: ['Clean & disinfect toilets and urinals', 'Clean sinks & countertops', 'Clean mirrors', 'Refill paper products (client supplied)'] },
      { label: 'Common Areas', items: ['Dust surfaces', 'Interior glass doors', 'Spot-clean doors & switches'] },
    ],
  },
  {
    name: 'Office Deep Cleaning',
    note: 'Includes everything in Office Cleaning, plus:',
    flatItems: ['Baseboards', 'Blinds & window sills', 'Door frames', 'Interior glass partitions', 'Vent covers', 'Refrigerator interior cleaning', 'Microwave interior cleaning', 'Deep restroom detailing', 'Detailed floor cleaning', 'Extra attention to buildup & neglected areas'],
  },
]

function ServiceMenuItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`menu-item${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="menu-question">
        <span>{item.name}</span>
        <span className="menu-chevron">{open ? '−' : '+'}</span>
      </div>
      {open && (
        <div className="menu-body">
          {item.note && <p className="menu-note">{item.note}</p>}

          {item.groups && (
            <div className="menu-groups">
              {item.groups.map(g => (
                <div key={g.label} className="menu-group">
                  <h4>{g.label}</h4>
                  <ul>
                    {g.items.map(i => <li key={i}><Check size={14} /> {i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {item.flatItems && (
            <ul className="menu-flat">
              {item.flatItems.map(i => <li key={i}><Check size={14} /> {i}</li>)}
            </ul>
          )}

          {item.highlight && (
            <div className="menu-highlight">
              <h4>{item.highlight.label}</h4>
              <ul>
                {item.highlight.items.map(i => <li key={i}><Check size={14} /> {i}</li>)}
              </ul>
            </div>
          )}

          {item.perfectFor && (
            <p className="menu-perfect"><strong>Perfect for:</strong> {item.perfectFor.join(', ')}</p>
          )}
        </div>
      )}
    </div>
  )
}

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
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <ScrollReveal delay={0}><span className="section-label" style={{ color: 'rgba(255,255,255,0.75)' }}>What We Offer</span></ScrollReveal>
          <ScrollReveal delay={100}><h1 className="svc-header-title">Services &amp; Rates</h1></ScrollReveal>
          <ScrollReveal delay={200}><p className="svc-header-sub">Eco-friendly cleaning for every need, at prices that make sense</p></ScrollReveal>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="svc-section">
        <div className="section-inner">
          <ScrollReveal><span className="section-label">What We Clean</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">Residential, commercial, and move-in/move-out cleaning</p></ScrollReveal>

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

      {/* ── Pricing ── */}
      <section className="svc-pricing">
        <div className="section-inner">
          <ScrollReveal><span className="section-label">Transparent Pricing</span>
          <h2 className="section-title">Simple, honest rates</h2>
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
                      {p.sub && <p className="price-sub">{p.sub}</p>}
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
              {cat.note && <ScrollReveal><p className="price-note">{cat.note}</p></ScrollReveal>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Full Service Menu ── */}
      <section className="svc-menu">
        <div className="section-inner">
          <ScrollReveal><span className="section-label">What&apos;s Included</span>
          <h2 className="section-title">Full Service Menu</h2>
          <p className="section-sub">Tap a service below to see everything that&apos;s included</p></ScrollReveal>

          <div className="menu-list">
            {serviceMenu.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 60}>
                <ServiceMenuItem item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-Ons ── */}
      <section className="svc-addons">
        <div className="section-inner">
          <ScrollReveal><span className="section-label">Customize Your Clean</span>
          <h2 className="section-title">Add-On Services</h2>
          <p className="section-sub">Enhance any cleaning with these optional extras</p></ScrollReveal>

          {addOnGroups.map((group) => (
            <div key={group.label} className="addon-category">
              <ScrollReveal><h3 className="price-cat-label">{group.label}</h3></ScrollReveal>
              <div className="addons-grid">
                {group.items.map((a, i) => (
                  <ScrollReveal key={a.name} delay={i * 40}>
                    <div className="addon-card">
                      <span className="addon-name">{a.name}</span>
                      <span className="addon-price">{a.price}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="svc-area">
        <div className="section-inner">
          <ScrollReveal>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Where We Serve</span>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>Service Area</h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Serving Columbus, OH and all surrounding communities</p>
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

      {/* ── CTA ── */}
      <section className="svc-cta">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Ready to book?</span>
          <h2 className="svc-cta-title">Let&apos;s get your space sparkling</h2>
          <p className="svc-cta-sub">Eco-friendly · Columbus &amp; surrounding areas</p>
          <Link to="/book" className="btn-primary svc-cta-btn">
            Book Now <img src={sprayImg} alt="" className="btn-leaf-img" />
          </Link>
        </div>
      </section>

    </main>
  )
}
