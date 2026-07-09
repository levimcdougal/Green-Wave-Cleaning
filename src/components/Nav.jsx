import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  // prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="nav-logo">
          <img src={logo} alt="GreenWave Cleaning" className="nav-logo-img" />
        </NavLink>

        {/* Desktop links */}
        <ul className="nav-links desktop-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
          <li><NavLink to="/book" className="nav-cta">Book Now</NavLink></li>
        </ul>

        {/* Hamburger button */}
        <button className={`hamburger${open ? ' is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${open ? ' is-open' : ''}`}>
        <ul>
          <li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/book" className="mobile-cta" onClick={() => setOpen(false)}>Book Now</NavLink></li>
        </ul>
      </div>
    </>
  )
}
