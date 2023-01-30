import "./App.css";
import AboutUs from "./Componets/AboutUs";
import Bcak from "./Componets/Bcak";
import DeliveryTeam from "./Componets/DeliveryTeam";
import Footer from "./Componets/Footer";
import GetAQuote from "./Componets/GetAQuote";
import Header from "./Componets/Header";
import Navbar from "./Componets/Navbar";
import OURBLOG from "./Componets/OURBLOG";
import OurServices from "./Componets/OurServices";
import Pricing from "./Componets/Pricing";
import Testimonial from "./Componets/Testimonial";
import WhyChooseUs from "./Componets/WhyChooseUs";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <AboutUs />
      <GetAQuote />
      <OurServices />
      <WhyChooseUs />
      <Pricing />
      <DeliveryTeam />
      <Testimonial />
      <OURBLOG />
      <Footer/>
    </div>
  );
}

export default App;
