
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import GoogleReviews from './components/GoogleReviews'

import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Training from './pages/Training'
import Contact from './pages/Contact'

export default function App(){
  return (
    <>
      <Header />
      <WhatsAppButton />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/training' element={<Training/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <GoogleReviews />
      <Footer />
    </>
  )
}
