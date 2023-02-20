
import './App.css';

import Header from './component/Header';
import Navbar from './component/Navbar';
import Topsection from './component/Topsection';
import Wallet from './component/Wallet';
import About from './component/About';
import Testinomial from './component/Testinomial';
import Graf from './component/Graf';
import Work from './component/Work';
import Contact from './component/Contact';
import Footer from './component/Footer';



function App() {
  return (

    <>
    <Navbar/>
    <Header/>
    <Topsection/>
    <Wallet/>
    <About/>
    
    <Graf/>
    <Testinomial/>
    <Work/>  
    <Contact/>
    <Footer/>      
    </>

  );
}

export default App;
