import '../src/css/style.css'
import '../src/css/swiper-bundle.min.css'
import About from './Components/About';
import Counter from './Components/Counter';
import Header from './Components/Header';
import HeaderBox from './Components/HeaderBox';
import Hero from './Components/Hero';
import Section from './Components/Section';
import Service from './Components/Service';
import Work from './Components/Work';
import Test from './Components/Test';
import Client from './Components/Client';
import Footer from './Components/Footer';

function App() {
  return (
   <>
   <Header/>
   <HeaderBox/>
   <Hero/>
   <Section/>
   <About/>
   <Service/>
   <Work/>
   <Counter/>
   <Test/>
   <Client/>
   <Footer/>
   </>
  );
}

export default App;
