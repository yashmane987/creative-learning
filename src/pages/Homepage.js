import React from 'react';
import Navbar from '../components/Navbar';
import SliderHomePage from '../components/SlideHomePage';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <Navbar />
        <SliderHomePage/>
       <Footer />  
    </div>
  );
};

export default Homepage;
