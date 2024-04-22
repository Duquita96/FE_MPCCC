import { useState } from 'react'
import './src/style/App.css'
import MainHeader from './src/components/MainHeader.jsx'
import ProductPreview from './src/components/ProductPreview.jsx'
import Footer from './src/components/Footer.jsx'
import WelcomeText from './src/components/WelcomeText'
import ProductsNavBar from './src/components/ProductsNavBar.jsx'
import ServicesNavBar from './src/components/ServicesNavBar.jsx'
import Login from './src/components/Login.jsx'
import MobileNavBar from './src/components/MobileNavBar.jsx'
import Cart from './src/components/Cart.jsx'

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [windowWidth, setWindowWith] = useState(window.innerWidth)

  const toggleLogin = () => {setShowCart(showCart ? false : null); setShowLogin(showLogin ? false : true)};
  const toggleCart = () => {setShowLogin(showLogin? false: null); setShowCart(showCart ? false : true)};
  const toggleFunctions = {toggleLogin, toggleCart};

  const handleResize = () => {setWindowWith(window.innerWidth)};
  window.addEventListener("resize", handleResize);

  return (
    <>
      <MainHeader toggleFunctions={toggleFunctions} windowWidth={windowWidth} />
      {showLogin && <Login />}
      {showCart && <Cart/>}
      {windowWidth > 768 && <ProductsNavBar />}
      {windowWidth > 768 && <ServicesNavBar />}
      {windowWidth <= 768 && <MobileNavBar toggleFunctions={toggleFunctions} />}
      <WelcomeText />
      <ProductPreview />
      <Footer />
    </>
  )
}

export default App;
