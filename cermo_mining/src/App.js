import '../src/Css/style.css'
import '../src/Css/bootstrap.min.css'
import '../src/Css/templete.css'
import '../src/Css/skin-2.css'
import Header from './Components/Header';
import Nav from './Components/Nav';
import About from './Components/About';
import About1 from './Components/About1';
import Project from './Components/Project';
import Team from './Components/Team';
import Footer from './Components/Footer';
import Counter from './Components/Counter';
import Test from './Components/Test';
import News from './Components/News';

function App() {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <About1/>
   <Project/>
   <Team/>
   <Counter/>
   <Test/>
  <News/>
   <Footer/>
   </>
  );
}

export default App;
