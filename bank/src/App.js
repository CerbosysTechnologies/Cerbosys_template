import '../src/Component/css/style.css'
import '../src/Component/css/bootstrap.min.css'
import '../src/Component/css/responsive.css'

import Header from './Component/Header';
import About from './Component/About';
import Service from './Component/Service';
import Project from './Component/Project';
import Team from './Component/Team';
import Client from './Component/Client';
import Footer from './Component/Footer';

function App() {
  return (
    <>
     
        <Header />
        <About />
        <Service />
        <Project />
        <Team />
        <Client />
        <Footer />
     
    </>
  );
}

export default App;
