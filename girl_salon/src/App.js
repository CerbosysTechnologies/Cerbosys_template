import './App.css';
import Navbar from './componets/Navbar.jsx'
import Footer from './componets/Footer.jsx'
import Home from './pages/Home';
import WelcomePage from './pages/WelcomePage';
import FeaturedServices from './pages/FeaturedServices';
import NewHirestlyl from './pages/NewHirestlyl';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home/>
     <WelcomePage/>
     <FeaturedServices/>
     <NewHirestlyl/>
     <Experience/>
     <Footer/>
    </div>
  );
}

export default App;
