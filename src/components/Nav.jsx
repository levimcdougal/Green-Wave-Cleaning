import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // close menu on route change
  useEffect(() => setOpen(false), [pathname])

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
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/book" className="mobile-cta">Book Now</NavLink></li>
        </ul>
      </div>
    </>
  )
}
