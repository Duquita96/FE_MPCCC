import './src/style/App.css'
import MainHeader from './src/components/MainHeader.jsx'
import CardsSection from './src/components/CardsSection.jsx'
import Footer from './src/components/Footer.jsx'
import WelcomeText from './src/components/WelcomeText'
import ProductsNavBar from './src/components/ProductsNavBar.jsx'
import ServicesNavBar from './src/components/ServicesNavBar.jsx'

function App() {


  return (
    <>
      <MainHeader />
      <ProductsNavBar />
      <ServicesNavBar />
      <WelcomeText />
      <CardsSection />
      <Footer />
    </>
  )
}

export default App;
