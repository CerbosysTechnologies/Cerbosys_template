import "./App.css";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PlantsSlider from "./pages/PlantsSlider";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <PlantsSlider />
        <Cart />
        <Footer/>
      </div>
    </>
  );
}
export default App;
