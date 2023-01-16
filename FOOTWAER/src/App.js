// import "./App.css";
import Adidascom from './components/adidas/Adidascom';
import Center from './components/Center.jsx/Center';
import Dealoftheweek from './components/dealcom/Dealoftheweek';
import Footer from './components/footer/Footer';
import Headercom from './components/Headercom/Headercom';
import Arivalcom from './components/newArival/Arivalcom';
import './Global.scss';

function App() {
  return (
    <>
      <div>
        <Headercom />
        <Center />
        <Adidascom />
        <Arivalcom />
        <Dealoftheweek />
        <Footer />
      </div>
    </>
  );
}

export default App;
