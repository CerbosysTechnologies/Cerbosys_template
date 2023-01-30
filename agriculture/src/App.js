import '../src/css/bootstrap.min.css'
import '../src/css/style.css'
import '../src/css/responsive.css'
import './App.css';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Box from './Component/Box';
import Footer from './Component/Footer';
import Hotest from './Component/Hotest';
import Choose from './Component/Choose';
import Product from './Component/Product';
import About from './Component/About';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <Box/>
    <Hotest/>
    <Choose/>
    <Product/>
    <About/>
    <Footer/>
    </>
  );
}

export default App;
