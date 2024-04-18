import './src/style/App.css'
import MainHeader from './src/components/MainHeader.jsx'
import CardsSection from './src/components/CardsSection.jsx'
import Footer from './src/components/Footer.jsx'
import WelcomeText from './src/components/WelcomeText'

function App() {


  return (
    <>
      <MainHeader />
      <WelcomeText />
      <CardsSection />
      <Footer />
    </>
  )
}

export default App;
