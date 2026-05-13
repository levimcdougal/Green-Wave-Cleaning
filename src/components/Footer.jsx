import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="GreenWave Cleaning" className="footer-logo-img" />
      </Link>
      <p className="footer-copy">© 2026 GreenWave Cleaning LLC · Columbus &amp; surrounding areas, OH</p>
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/book">Book Now</Link></li>
        <li><Link to="/terms">Terms</Link></li>
      </ul>
    </footer>
  )
}
