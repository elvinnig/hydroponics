// import { useState, useEffect } from 'react';
 //Components
//  import Lettuce from './components/Lettuce';
//  import Tomatoe from './components/Tomatoe';
//  import Strawberry from './components/Strawberry';

// Styling
import './styles/_general.css';

// Pages
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

// Routing
import { Route, Routes, useNavigate } from 'react-router';

const App = () => {
  // const [ showLandingPage, setShowLandingPage ] = useState( true );

  // Navigation
  const navigate = useNavigate();

  return (
    <>
      
      
      <Routes>
        <Route 
          path='/'
          element={
            <LandingPage setShowLandingPageProps={ () =>  navigate('/home/all') } />
          }
        ></Route>

        <Route 
          path='/home/:status' 
          element={ <HomePage /> } >
        </Route>
        <Route 
          path='/admin' 
          element={ <AdminPage /> } >
        </Route>
      </Routes>
     
    </>
  )
}

export default App