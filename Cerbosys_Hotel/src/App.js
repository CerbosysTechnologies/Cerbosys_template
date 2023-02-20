
import './App.css';
import Footer from './Components/Footer';
import Hotel from './Components/Hotel';
import Imagegallery from './Components/Imagegallery';
import Inputfolder from './Components/Inputfolder';
import Lasticons from './Components/Lasticons';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Hotel/>
  <Inputfolder/>
  <Imagegallery/>
  <Footer/>
  <Lasticons/>
    </div>
  );
}

export default App;
