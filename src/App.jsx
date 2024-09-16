import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails';
import ContactUs from './Pages/ContactUS/ContactUs';
import Footer from './components/Footer/Footer';
import ProperitesPage from './Pages/Properitespage/ProperitesPage';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='Task_3_ADV' element={<Home />} />
        <Route path='/properties' element={<ProperitesPage />} />
        <Route path='/property-details' element={<PropertyDetails />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer className={location.pathname !== '/' ? 'center' : ''} />
    </>
  )
}

export default App;
