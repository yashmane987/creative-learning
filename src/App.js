import React from 'react';
import './styles/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUspage from './pages/AboutUspage';
import Coursespage from './pages/Coursespage';
import Certificatepage from './pages/Certificatepage';
import Featurespage from './pages/Featurespage';
import Reviewspage from './pages/Reviewspage';
import Policypage from './pages/Policypage';
import ContactUspage from './pages/ContactUspage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Homepage/>} />
  <Route path='aboutus' element={<AboutUspage/>} />
  <Route path='courses' element={<Coursespage/>} />
  <Route path='certificate' element={<Certificatepage/>} />
  <Route path='features' element={<Featurespage/>} />
  <Route path='reviews' element={<Reviewspage/>} />
  <Route path='policy' element={<Policypage/>} />
  <Route path='contactus' element={<ContactUspage/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;