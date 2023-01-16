import "./App.css";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import Cart from "./pages/Cart";
import CtnButhon from "./pages/CtnButhon";
import Home from "./pages/Home";
import PlantsSlider from "./pages/PlantsSlider";

function App() {
  return (
    <>
      <div className="">
        
        <Navbar />
        <Home />
        <PlantsSlider />
        <Cart />
        <CtnButhon/>
        <Footer/>
       

      </div>
    </>
  );
}
export default App;
