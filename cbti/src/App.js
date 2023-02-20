
import '../src/css/finlon.css'
import '../src/css/bootstrap.min.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Video from './Components/Video';
import Contant from './Components/Contant';
import Loan from './Components/Loan';
import Test from './Components/Test';
import Fact from './Components/Fact';
import Benifit from './Components/Benifit';
import Blog from './Components/Blog';
import Call from './Components/Call';

function App() {
  return (
   <>
   <Header/>
   <Navbar/>
   <About/>
   <Services/>
   <Video/>
   <Contant/>
   <Loan/>
   <Test/>
   <Fact/>
   <Benifit/>
   <Blog/>
   <Call/>
   <Footer/>                          
   </>
  );
}

export default App;
