import React from 'react';
import Navbar from '../components/Navbar';
import SliderHomePage from '../components/SlideHomePage';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
      <Navbar />
       <div className="main-content">
        <SliderHomePage/>
      </div>
       <Footer />  
    </div>
  );
};

export default Homepage;
