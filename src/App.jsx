import React, {Fragment} from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import FeaturedOn from './components/FeaturedOn/FeaturedOn'
import Analytics from './components/Analytics/Analytics'
import GetOurApp from './components/GetOurApp/GetOurApp'
import Testimonials from './components/Testimonials/Testimonials'
import CtaSection from './components/CtaSection/CtaSection'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <Fragment>
            <Navbar/>
            <HeroSection/>
            <FeaturedOn/>
            <Analytics/>
            <GetOurApp/> 
            <Testimonials />
           <CtaSection />
          <Footer />
        </Fragment>
    )
}

export default App