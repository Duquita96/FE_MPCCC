import { useState } from 'react'
import './src/style/App.css'
import MainHeader from './src/components/MainHeader.jsx'
import ProductPreview from './src/components/ProductPreview.jsx'
import Footer from './src/components/Footer.jsx'
import WelcomeText from './src/components/WelcomeText'
import ProductsNavBar from './src/components/ProductsNavBar.jsx'
import ServicesNavBar from './src/components/ServicesNavBar.jsx'
import Login from './src/components/Login.jsx'

function App() {

  const [showLogin, setShowLogin] = useState(false);
  const toggleDisplay = () => {setShowLogin(showLogin ? false : true)};

  return (
    <>
      <MainHeader toggleDisplay={toggleDisplay} />
      {showLogin && <Login />}
      <ProductsNavBar />
      <ServicesNavBar />
      <WelcomeText />
      <ProductPreview />
      <Footer />
    </>
  )
}

export default App;
