import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Hero from './pagas/Hero';
import HOTTEST from './pagas/HOTTEST';
import Orderhere from './pagas/Orders/Order_here';
import Category from './pagas/Category';

function App() {
  return (
    <div >
      <Navbar/>  
      <Hero/>
      <HOTTEST/>
      <Orderhere/> <br />
    <Category/>
    </div>
  );
}

export default App;
