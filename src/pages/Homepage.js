import React from 'react';
// import Navbar from '../components/Navbar';
import SliderHomePage from '../components/SlideHomePage';
// import Footer from '../components/Footer';
import ContactUspage from './ContactUspage';
import AboutUspage from '../pages/AboutUspage';

const Homepage = () => {
  return (
    <div>
        <SliderHomePage/>
        <AboutUspage/>
       <ContactUspage/>
    </div>
  );
};

export default Homepage;
