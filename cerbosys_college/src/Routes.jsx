import React from 'react';
import Client from './Commponets/Client';
import Courses from './Commponets/Courses';
import Events from './Commponets/Events';
import Feature from './Commponets/Feature';
import Footer from './Commponets/Footer';
import Hero from './Commponets/Hero';
import Navbar from './Commponets/Navbar';
import Register from './Commponets/Register';
import Trainers from './Commponets/Trainers';
function Routes() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Courses />
      <Register />
      <Trainers />
      <Events />
      <Client />
      <Footer />
    </div>
  );
}

export default Routes;
