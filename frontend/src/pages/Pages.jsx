import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/NavBar/NavBar';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/InfoSection';
import Services from '../components/Services/Services'
import ContactSection from '../components/Contact/ContactSection';
import Message from '../components/MessageSection/Message';
import Footer from '../components/Footer/Footer';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjService } from '../components/Services/DataS';
import { homeObjContact } from '../components/Contact/DataC';

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <Services {...homeObjService} />
      <ContactSection {...homeObjContact}/>
      <Message />
      <Footer />
    </>
  )
}

export default Home
