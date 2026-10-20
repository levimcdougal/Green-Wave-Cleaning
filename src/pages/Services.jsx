import { petTiers, petIntro, petDensity, hourlyPolicy, hoursPolicy, serviceArea, travelPolicy, propertyConditionPolicy } from '../data/policies'
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
  { img: officeImg, title: 'Commercial & Turnover Cleaning', desc: 'Reliable cleaning for property managers and small commercial spaces like offices.', featured: true },
  { img: houseImg, title: 'Recurring Residential Cleaning', desc: 'Eco-friendly maintenance for your home, with an initial deep clean required before starting any recurring package.' },
  { img: apartImg, title: 'Deep Cleaning', desc: 'A detailed reset for your home before beginning recurring maintenance service.' },
  { img: boxImg, title: 'Hourly Cleaning', desc: 'A flexible $45-per-hour clean, tailored to your checklist, for appointments up to 8 hours.' },
]

const pricingCategories = [
  {
    label: 'Residential Cleaning Rates',
    note: 'An initial deep clean is mandatory before starting any recurring residential package. Deep cleaning is also available for seasonal refreshes. Deep cleans may take a full day or multiple days; book a free in-person quote for an accurate plan.',
    items: [
      { img: leafImg, name: 'Weekly Maintenance Clean', amount: '$0.07', unit: 'per sq. ft.', feats: ['Our highest-discount maintenance tier', 'Kitchen & bathrooms', 'Dusting, vacuuming & mopping', 'Eco-friendly products'], featured: false },
      { img: leafImg, name: 'Bi-Weekly Maintenance Clean', amount: '$0.10', unit: 'per sq. ft.', feats: ['Consistent every-other-week upkeep', 'Kitchen & bathrooms', 'Dusting, vacuuming & mopping', 'Eco-friendly products'], featured: false },
      { img: houseImg, name: 'Monthly / Standard Clean', amount: '$0.13–$0.15', unit: 'per sq. ft.', feats: ['Low-to-moderate traffic homes', 'Every 3 weeks: $0.13 per sq. ft.', 'Every 4 weeks: $0.15 per sq. ft.', 'Kitchen & bathrooms', 'Dusting, vacuuming & mopping', 'Eco-friendly products'], featured: false },
      { img: apartImg, name: 'Bi-Monthly Clean', amount: '$0.18', unit: 'per sq. ft.', feats: ['Service every two months', 'Detailed recurring upkeep', 'Eco-friendly products'], featured: false },
      { img: apartImg, name: 'Quarterly Clean', amount: '$0.20', unit: 'per sq. ft.', feats: ['Service every three months', 'Detailed recurring upkeep', 'Eco-friendly products'], featured: false },
      { img: officeImg, name: 'Deep Clean / First-Time Service', amount: '$0.25–$0.50', unit: 'per sq. ft.', feats: ['Rate depends on initial condition and soil level', 'Free in-person quote required', 'May require multiple days', 'Nicotine remediation: from $0.55/sq. ft.'], featured: true, badge: 'Quote Required' },
      { img: boxImg, name: 'Hourly Cleaning', amount: '$45', unit: 'per hour', feats: ['Book up to 8 hours', 'Give Chelsea your checklist', 'Tasks completed within booked time', 'Tailored to your needs'], featured: false },
    ],
  },
]

const commercialCategories = [
  {
    label: 'Real Estate & Property Turnover Cleans',
    note: 'Streamlined flat-rate pricing for property managers, landlords, and investors. Base turnover order minimum: $165 per single property. Vacant units must be broom-clean; see the condition policy below.',
    items: [
      { img: apartImg, name: '1 Bed / 1 Bath', amount: '$165', unit: 'base turn rate', feats: ['Vacant, broom-clean units'], featured: false },
      { img: apartImg, name: '2 Bed / 1–2 Bath', amount: '$215', unit: 'base turn rate', feats: ['Vacant, broom-clean units'], featured: false },
      { img: apartImg, name: '3 Bed / 2–2.5 Bath', amount: '$265', unit: 'base turn rate', feats: ['Vacant, broom-clean units'], featured: false },
      { img: apartImg, name: '4+ Bed / Large Units', amount: 'Custom', unit: 'on-site quote', feats: ['Assessed for your property'], featured: false },
    ],
  },
  ...[
    ['Standard Office & Professional Spaces', ['$0.20–$0.35', '$0.08', '$0.11', '$0.15'], 'For corporate offices, retail spaces, real estate firms, banks, logistics facilities, and low-traffic professional environments. A $125 minimum visit fee applies to smaller properties.'],
    ['Specialty & High-Traffic Facilities', ['$0.30–$0.45', '$0.12', '$0.15', '$0.20'], 'Customized sanitation and cross-contamination protocols for salons, medical clinics, dental practices, daycares, and fitness centers. A $150 minimum visit fee applies to smaller properties.'],
  ].map(([label, rates, note]) => ({
    label, note,
    items: rates.map((amount, i) => ({ img: officeImg, name: ['Initial / One-Time Deep Clean', 'Weekly Maintenance (4×/month)', 'Bi-Weekly Maintenance (2×/month)', 'Monthly Maintenance (1×/month)'][i], amount, unit: 'per sq. ft.', feats: [], featured: false })),
  })),
]

function PricingCategory({ category: cat }) {
  return (
    <div className="price-category">
      <ScrollReveal><h3 className="price-cat-label">{cat.label}</h3>
        {cat.note && <p className="price-note">{cat.note}</p>}
      </ScrollReveal>
      <div className="price-grid price-grid-3">
        {cat.items.map((p, i) => (
          <ScrollReveal key={p.name} delay={i * 80}>
            <div className={`price-card${p.featured ? ' featured' : ''}`}>
              {p.badge && <span className="price-badge">{p.badge}</span>}
              <img src={p.img} alt="" className="price-img" />
              <h3 className="price-name">{p.name}</h3>
              <p className="price-amount">{p.amount}</p>
              <p className="price-unit">{p.unit}</p>
              <ul className="price-feats">{p.feats.map(f => <li key={f}>{f}</li>)}</ul>
              <Link to="/book" className="btn-price">{cat.label.includes('Residential') ? 'Book This' : 'Request an Assessment'}</Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

const addOnGroups = [
  {
    label: 'Residential Add-Ons',
    items: [
      { name: 'Inside Oven',                       price: '$45' },
      { name: 'Inside Refrigerator (Empty)',       price: '$50' },
      { name: 'Inside Refrigerator (Contains Food)', price: '$75' },
      { name: 'Laundry Folding',                    price: '$30' },
      { name: 'Dishes',                             price: '$25' },
      { name: 'Ceiling Fan Dusting',                price: '$10 each' },
      { name: 'Organization & Decluttering',        price: 'Custom Quote' },
    ],
  },
]

const serviceMenu = [
  {
    name: 'Recurring Maintenance Cleaning Service Guide',
    note: 'To keep your home consistently fresh and beautifully maintained, my Standard Maintenance Cleaning covers the essential, high-touch areas of your living space. As a solo cleaner, I manage my time carefully to ensure every home gets the highest quality care. To keep recurring rates affordable and stay on schedule, tasks that require specialized attention, heavy lifting, or extended time are categorized as Add-On Services.',
    clutter: 'To ensure I can clean effectively and stay on schedule, I ask that surfaces are reasonably cleared before my arrival. If an area or surface is overly cluttered, I will clean around it to protect your belongings and respect my booking timeframe.',
    groups: [
      { label: 'Kitchen & Dining — Included', items: ['Wipe and sanitize countertops and backsplashes', 'Clean major appliance exteriors: stovetop, fridge, oven, and dishwasher', 'Wipe small countertop appliances within easy reach', 'Clean microwave interior', 'Wipe cabinet and drawer exteriors', 'Empty kitchen trash and replace liner', 'Vacuum and mop floors'] },
      { label: 'Kitchen & Dining — Add-Ons (Extra Fee)', items: ['Wash, dry, or put away dishes', 'Detailed refrigerator or oven interior cleaning', 'Wipe or dust window blinds', 'Wash interior window glass'] },
      { label: 'Bathrooms — Included', items: ['Scrub and sanitize toilet, bathtub, and shower stall', 'Clean and polish sinks, faucets, and vanities', 'Clean mirrors', 'Spot-clean accessible light fixtures only when visibly grimy', 'Wipe cabinet exteriors', 'Vacuum and mop floors'] },
      { label: 'Bathrooms — Add-Ons (Extra Fee)', items: ['Wash bathroom ceilings or high walls', 'Detailed grout scrubbing or mold remediation', 'Wipe or dust window blinds'] },
      { label: 'Bedrooms & Living Spaces — Included', items: ['Dust accessible surfaces, including end tables, mantels, and dressers', 'Wipe high-touch door handles and doorknobs', 'Empty small trash bins', 'Thoroughly vacuum carpets, rugs, and hard floors', 'Mop hard floors'] },
      { label: 'Bedrooms & Living Spaces — Add-Ons (Extra Fee)', items: ['Vacuum pet hair from upholstered furniture', 'Laundry, folding clothes, or changing bed linens', 'Hand-wipe baseboards or light switches', 'Wipe or dust window blinds', 'Wash interior window glass'] },
    ],
    highlight: {
      label: 'Strictly Excluded from Maintenance Cleans (Add-On Only)',
      note: 'The following tasks significantly change the time required for a job and must be scheduled and billed as extras ahead of time:',
      items: ['Decluttering and organizing papers, toys, clothing, or countertop clutter require advance scheduling and extra billing.', 'Pet Care Logistics: Letting pets outside, walking dogs, or cleaning litter boxes/accident messes must be scheduled and billed as extras ahead of time.', 'Heavy Lifting & Furniture Moving: Moving large items, heavy furniture, or collapsible dog crates/playpens to vacuum underneath is excluded from maintenance. For safety, I only clean around these items unless they are moved prior to my arrival.', 'Individual blinds, window tracks, and extensive baseboard scrubbing must be scheduled and billed as extras ahead of time.'],
    },
  },
  {
    name: 'Hourly Cleaning',
    note: 'Hourly appointments follow your prioritized checklist for the amount of time booked. Add-on tasks must be agreed upon in advance.',
  },
  {
    name: 'Deep Clean',
    note: 'Includes everything in the Maintenance Clean, plus:',
    flatItems: ['Baseboards', 'Blinds', 'Light fixtures', 'Door frames & trim', 'Cobweb removal', 'Outlet covers & switches', 'Detailed floor edges', 'Extra attention to buildup', 'Thorough cleaning of all areas'],
  },

]

function ServiceMenuItem({ item }) {
  const [open, setOpen] = useState(item.name === 'Recurring Maintenance Cleaning Service Guide')
  return (
    <div className={`menu-item${open ? ' open' : ''}`} >
      <button type="button" className="menu-question" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{item.name}</span>
        <span className="menu-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="menu-body">
          {item.note && <p className="menu-note">{item.note}</p>}

          {item.clutter && <p className="menu-note"><strong>My Clutter Policy: </strong>{item.clutter}</p>}

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
              {item.highlight.note && <p>{item.highlight.note}</p>}
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

export default function Services() {
  return (
    <main style={{ paddingTop: 72 }}>

      {/* ── Page header ── */}
      <section className="svc-header">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <ScrollReveal delay={0}><span className="section-label" style={{ color: 'rgba(255,255,255,0.75)' }}>What We Offer</span></ScrollReveal>
          <ScrollReveal delay={100}><h1 className="svc-header-title">Services &amp; Rates</h1></ScrollReveal>
          <ScrollReveal delay={200}><p className="svc-header-sub">Personal cleaning for homes, property turnovers, and small commercial spaces</p></ScrollReveal>
        </div>
      </section>

      <section className="svc-pricing commercial-focus" aria-labelledby="commercial-heading">
        <div className="section-inner">
          <span className="section-label">Commercial &amp; Property Services</span>
          <h2 id="commercial-heading" className="section-title">Commercial &amp; Turnover Cleanings</h2>
          <p className="section-sub">Personal care for property managers and small commercial spaces across Columbus and Delaware, Franklin, Marion, and Union counties.</p>
          {commercialCategories.map(cat => <PricingCategory key={cat.label} category={cat} />)}
          <div className="condition-policy">
            <h3 className="price-cat-label">Property Condition &amp; Rate Adjustments</h3>
            <p className="menu-note">{propertyConditionPolicy}</p>
          </div>
          <div className="price-note">
            <h3>Corporate Trust &amp; Service Policies</h3>
            <p>Fully licensed and insured, with active EIN credentials. A Certificate of Insurance (COI) and W-9 are available for vendor onboarding.</p>
            <p>Cleaning can be scheduled outside your operating hours to minimize interruptions to staff, tenants, and clients. {hoursPolicy}</p>
            <p>{travelPolicy}</p>
          </div>
          <Link to="/book" className="btn-primary commercial-cta">Book Your On-Site Assessment</Link>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="svc-section">
        <div className="section-inner">
          <ScrollReveal><span className="section-label">What We Clean</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">Commercial and property turnovers, recurring residential, deep, and hourly cleaning</p></ScrollReveal>

          <div className="svc-grid svc-grid-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className={`svc-card${s.featured ? ' svc-card-featured' : ''}`}>
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
          <p className="section-sub">Residential maintenance and deep-clean rates, plus flexible hourly service</p></ScrollReveal>

          {pricingCategories.map(cat => <PricingCategory key={cat.label} category={cat} />)}
        </div>
      </section>

      <section className="svc-menu" id="maintenance-guide">
        <div className="section-inner">
          <h2 className="section-title">Pet Policy</h2>
          <p className="menu-note">{petIntro}</p>
          <div className="addons-grid pet-policy-grid">
            {petTiers.map(([label, fee]) => (
              <div className="addon-card" key={label}><span className="addon-name">{label}</span><span className="addon-price">{fee}</span></div>
            ))}
          </div>
          <p className="price-note">{petDensity}</p>
          <h2 className="section-title">Custom Hourly Bookings</h2>
          <p className="menu-note">{hourlyPolicy}</p>
          <h3>Operating Hours &amp; After-Hours Policy</h3>
          <p className="menu-note">{hoursPolicy}</p>
        </div>
      </section>

      {/* ── Full Service Menu ── */}
      <section className="svc-menu" id="maintenance-guide">
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
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Based in Delaware, OH 43015 — free travel within 20 miles</p>
          </ScrollReveal>
          <ScrollReveal>
            <p style={{ color: 'white' }}>{travelPolicy}</p>
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
          <p className="svc-cta-sub">Columbus · Delaware, Franklin, Marion &amp; Union Counties</p>
          <Link to="/book" className="btn-primary svc-cta-btn">
            Book Now <img src={sprayImg} alt="" className="btn-leaf-img" />
          </Link>
        </div>
      </section>

    </main>
  )
}
