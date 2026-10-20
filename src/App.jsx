import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav     from './components/Nav'
import Footer  from './components/Footer'
import Home    from './pages/Home'
import Services from './pages/Services'
import BookNow from './pages/BookNow'
import Terms   from './pages/Terms'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])
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
        <Route path="/terms"   element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
