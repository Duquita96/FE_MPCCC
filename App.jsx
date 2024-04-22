import { useState } from 'react'
import Homepage from './src/components/Homepage';

function App() {

  const [windowWidth, setWindowWith] = useState(window.innerWidth)
  const handleResize = () => {setWindowWith(window.innerWidth)};
  window.addEventListener("resize", handleResize);

  return (
    <>
      <Homepage windowWidth={windowWidth} />
    </>
  )
}

export default App;
