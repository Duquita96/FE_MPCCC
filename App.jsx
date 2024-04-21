import { useState } from 'react'
import './src/style/App.css'
import MainHeader from './src/components/MainHeader.jsx'
import CardsSection from './src/components/CardsSection.jsx'
import Footer from './src/components/Footer.jsx'
import WelcomeText from './src/components/WelcomeText'
import ProductsNavBar from './src/components/ProductsNavBar.jsx'
import ServicesNavBar from './src/components/ServicesNavBar.jsx'
import Login from './src/components/Login.jsx'
import MobileNavBar from './src/components/MobileNavBar.jsx'

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [windowWidth, setWindowWith] = useState(window.innerWidth)

  const toggleDisplay = () => {setShowLogin(showLogin ? false : true)};
  const handleResize = () => {setWindowWith(window.innerWidth)};

  window.addEventListener("resize", handleResize);

  return (
    <>
      <MainHeader toggleDisplay={toggleDisplay} windowWidth={windowWidth} />
      {showLogin && <Login />}
      {windowWidth > 600 && <ProductsNavBar />}
      {windowWidth > 600 && <ServicesNavBar />}
      {windowWidth <= 600 && <MobileNavBar toggleDisplay={toggleDisplay} />}
      <WelcomeText />
      <CardsSection />
      <Footer />
    </>
  )
}

export default App;
