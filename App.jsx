import { Routes, Route } from 'react-router-dom';
import Homepage from './src/components/pages/Homepage.jsx';
import NotFound from './src/components/pages/NotFound.jsx';
import AllProducts from './src/components/pages/FilterPage.jsx';
import ProductIdPage from './src/components/pages/ProductIdPage.jsx';
import HeaderContextProvider from './src/context/HeaderContextProvider.jsx';
import WidthContextProvider from './src/context/WidthContextProvider.jsx';
import UserContextProvider from './src/context/UserContextProvider.jsx';
import UserAccountPage from './src/components/pages/UserAccountPage.jsx';
import ToursTypeContextProvider from './src/context/TypesContext.jsx';


function App() {

  return (
    <>
      <HeaderContextProvider>
        <WidthContextProvider>
          <UserContextProvider>
          <ToursTypeContextProvider>
            <Routes>
           {/*    <button>Filter PH</button> */}
              <Route path='/' element={<Homepage />} />
              <Route path='/user-account' element={<UserAccountPage />} />
              <Route path='/filter-page' element={<AllProducts />} />
              <Route path='/filter-page/:productType' element={<AllProducts />} />
              <Route path='/books/:id' element={<ProductIdPage productType='books' />} />
              <Route path='/tours/:id' element={<ProductIdPage productType='tours' />} />
              <Route path='/pc-parts/:id' element={<ProductIdPage productType='pc_parts' />} />
              <Route path='/video-games/:id' element={<ProductIdPage productType='video_games' />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            </ToursTypeContextProvider>
          </UserContextProvider>
        </WidthContextProvider>
      </HeaderContextProvider>
    </>
  )
}

export default App;
