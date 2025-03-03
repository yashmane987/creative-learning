import React from 'react';
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUspage from './pages/AboutUspage';
import Gallery from './pages/Gallery';
import Coursespage from './pages/Coursespage';
import Certificatepage from './pages/Certificatepage';
import Featurespage from './pages/Featurespage';
import Reviewspage from './pages/Reviewspage';
import Policypage from './pages/Policypage';
import ContactUspage from './pages/ContactUspage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './components/Footer';  
import Navbar from './components/Navbar';  
import Cybersecurity from './pages/Cybersecurity';
import Webdevelopment from './pages/Webdevelopment';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Moved outside of <Routes> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboutus' element={<AboutUspage />} />
        <Route path='/gallery' element={< Gallery/>} />
        <Route path='/courses' element={<Coursespage />} />
        <Route path='/certificate' element={<Certificatepage />} />
        <Route path='/cybersecurity' element={<Cybersecurity />} />
        <Route path='/webdevelopment' element={<Webdevelopment />} />
        <Route path='/features' element={<Featurespage />} />
        <Route path='/reviews' element={<Reviewspage />} />
        <Route path='/policy' element={<Policypage />} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/contactus' element={<ContactUspage />} />
      </Routes>
      <Footer /> {/* Moved outside of <Routes> */}
    </BrowserRouter>
  );
}

export default App;
