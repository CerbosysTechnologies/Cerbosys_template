import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Book_section from './Components/Book_section';
import Button_section from './Components/Button_section';
import Consulting_text from './Components/Consulting_text';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Imagegallery from './Components/Imagegallery';
import Library_section from './Components/Library_section';
import Map_section from './Components/Map_section';
import Navbar from './Components/Navbar';
import OurCourse from './Components/OurCourse';
import Testimonial from './Components/Testimonial';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Header/>
   <OurCourse/>
<Imagegallery/>
   <About/>
   <Book_section/>
   <Blog/>
   <Library_section/>
   <Button_section/>
   <Testimonial/>
   <Consulting_text/>
   <Map_section/>
   <Footer/>
    </div>
  );
}

export default App;
