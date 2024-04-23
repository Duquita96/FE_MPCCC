
import './src/style/App.css'
import MainHeader from './src/components/MainHeader.jsx'
import Footer from './src/components/Footer.jsx'
import ProductPage from "./src/components/ProductPage"
import { useState } from 'react'
import Homepage from './src/components/Homepage';

function App() {

  const [windowWidth, setWindowWith] = useState(window.innerWidth)
  const handleResize = () => {setWindowWith(window.innerWidth)};
  window.addEventListener("resize", handleResize);

  return (
    <>
      <MainHeader />
      <ProductPage />
      <Footer />
      <Homepage windowWidth={windowWidth} />
    </>
  )
}

export default App;
