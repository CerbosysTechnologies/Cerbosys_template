import React from 'react';
import Hugesele from '../../component/allcomponent/Hugesele';
import Newarrival from '../../component/allcomponent/Newarrival';
import Oueproduct from '../../component/allcomponent/product/Ourproduct';

import ResentBlog from '../../component/allcomponent/ResentBlog';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hugesele />
        <Newarrival />
        <Oueproduct />
        <ResentBlog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
