// import react-router-dom
import { Routes, Route } from 'react-router-dom'
// components
import Navbar from '../components/navbar/Navbar';
import NavbarTop from '../components/navbvarTop/NavbarTop';
import Footer from '../components/footer/Footer';
// pages
import Home from '../pages/Home';

const MainRouter = () => {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default MainRouter