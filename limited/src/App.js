import "../src/css/libraries.css"
import '../src/css/style.css'
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import About  from "./Component/About";
import Banner from "./Component/Banner";
import Services from "./Component/Services";
import Video from "./Component/Video";
import Portfolio from "./Component/Portfolio";
import Layout from "./Component/Layout";
import Content from "./Component/Content";
import Blog from "./Component/Blog";



function App() {
  return (
    <div>
     <Header/>
     <Navbar/>
     
     <About/>
   <Banner/>
   <Services/>
   <Video/>
   <Portfolio/>
   <Layout/>
   <Content/>
  <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
