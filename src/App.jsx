import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav     from './components/Nav'
import Footer  from './components/Footer'
import Home    from './pages/Home'
import Services from './pages/Services'
import BookNow from './pages/BookNow'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book"    element={<BookNow />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
