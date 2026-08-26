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
  { img: officeImg, title: 'Hourly Cleaning',   desc: 'A flexible $50-per-hour clean, tailored to your checklist, for appointments up to 6 hours.' },
  { img: boxImg,   title: 'Move-In / Move-Out',      desc: 'Detailed cleaning for empty homes. Book a free in-person quote so Chelsea can assess the scope and schedule enough time.' },
  { img: apartImg, title: 'Deep Cleaning', desc: 'A detailed reset for your home before beginning recurring maintenance service.' },
]

const pricingCategories = [
  {
    label: 'Residential Cleaning Rates',
    note: 'A deep clean is required before recurring maintenance service. Deep cleans may take a full day or multiple days; book a free in-person quote for an accurate plan.',
    items: [
      { img: leafImg, name: 'Weekly Maintenance Clean', amount: '$0.08', unit: 'per sq. ft.', feats: ['Consistent weekly upkeep', 'Kitchen & bathrooms', 'Dusting, vacuuming & mopping', 'Eco-friendly products'], featured: false },
      { img: leafImg, name: 'Bi-Weekly Maintenance Clean', amount: '$0.10', unit: 'per sq. ft.', feats: ['Consistent every-other-week upkeep', 'Kitchen & bathrooms', 'Dusting, vacuuming & mopping', 'Eco-friendly products'], featured: false },
      { img: houseImg, name: 'Every 3 Weeks', amount: '$0.13', unit: 'per sq. ft.', feats: ['Recurring maintenance', 'Kitchen & bathrooms', 'Dusting, vacuuming & mopping', 'Eco-friendly products'], featured: false },
      { img: houseImg, name: 'Monthly Clean', amount: '$0.16', unit: 'per sq. ft.', feats: ['Recurring monthly upkeep', 'Kitchen & bathrooms', 'Dusting, vacuuming & mopping', 'Eco-friendly products'], featured: false },
      { img: apartImg, name: 'Bi-Monthly Clean', amount: '$0.18', unit: 'per sq. ft.', feats: ['Service every two months', 'Detailed recurring upkeep', 'Eco-friendly products'], featured: false },
      { img: apartImg, name: 'Quarterly Clean', amount: '$0.20', unit: 'per sq. ft.', feats: ['Service every three months', 'Detailed recurring upkeep', 'Eco-friendly products'], featured: false },
      { img: officeImg, name: 'Deep Clean', amount: '$0.20–$0.50', unit: 'per sq. ft.', feats: ['Rate depends on soil level', 'Free in-person quote required', 'May require multiple days', 'Nicotine-affected homes: $0.62/sq. ft.'], featured: true, badge: 'Quote Required' },
      { img: boxImg, name: 'Hourly Cleaning', amount: '$50', unit: 'per hour', feats: ['Book up to 6 hours', 'Give Chelsea your checklist', 'Tasks completed within booked time', 'Tailored to your needs'], featured: false },
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
      { name: 'Organization & Decluttering',        price: 'Custom Quote' },
    ],
  },
]

const serviceMenu = [
  {
    name: 'Recurring Maintenance & Hourly Cleaning',
    note: 'The detailed maintenance checklist applies to recurring visits. Hourly appointments follow your prioritized checklist for the amount of time booked.',
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
    perfectFor: ['New homeowners', 'Sellers', 'Renters', 'Landlords'],
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
          <p className="section-sub">Residential, hourly, deep, and move-in/move-out cleaning</p></ScrollReveal>

          <div className="svc-grid svc-grid-4">
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
              <div className={`price-grid price-grid-${cat.items.length <= 2 ? '2' : '3'}`}>
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
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Serving Columbus and Delaware, including Franklin and Delaware counties</p>
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
          <p className="svc-cta-sub">Eco-friendly · Columbus, Franklin County, Delaware &amp; Delaware County</p>
          <Link to="/book" className="btn-primary svc-cta-btn">
            Book Now <img src={sprayImg} alt="" className="btn-leaf-img" />
          </Link>
        </div>
      </section>

    </main>
  )
}
