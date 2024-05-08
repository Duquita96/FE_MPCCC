import { Routes, Route } from 'react-router-dom';
import Homepage from './src/components/pages/Homepage.jsx';
import NotFound from './src/components/pages/NotFound.jsx';
import ProductPage from './src/components/pages/ProductsPage.jsx';
import ProductIdPage from './src/components/pages/ProductIdPage.jsx';
import HeaderContextProvider from './src/context/HeaderContextProvider.jsx';
import WidthContextProvider from './src/context/WidthContextProvider.jsx';
import UserContextProvider from './src/context/UserContextProvider.jsx';


function App() {

  return (
    <>
      <HeaderContextProvider>
        <WidthContextProvider>
          <UserContextProvider>
            <Routes>
              <Route path='/' element={<Homepage />} />
              {/*<Route path='/product' element={<ProductPage />} />*/}
              <Route path='/filter-page' element={<ProductPage />} />
              <Route path='/book/:id' element={<ProductIdPage productType='book' />} />
              <Route path='/tour/:id' element={<ProductIdPage productType='tour' />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </UserContextProvider>
        </WidthContextProvider>
      </HeaderContextProvider>
    </>
  )
}

export default App;
