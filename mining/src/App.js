import '../src/css/style.css'
import '../src/css/bootstrap.min.css'

import '../src/css/responsive.css'
import Header from "./Component/Header"
import Box from './Component/Box'
import Footeer from './Component/Footeer'
import About from './Component/About'
import Project from './Component/Project'
import Choice from './Component/Choice'
import Staff from './Component/Staff'
import Truck from './Component/Truck'
import Client from './Component/Client'



function App() {
  return (
    <>
    <Header/>
    <Box/>
    <About/>
    <Project/>
    <Choice/>
    <Staff/>
   <Truck/>
   <Client/>
    <Footeer/>
    </>
  );
}

export default App;
