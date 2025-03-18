import './App.css';
import './index.css';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FavoritMenu from './components/FavoritMenu.jsx';
import Location from './components/Location.jsx';
import Galery from './components/Galery.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FavoritMenu />
      <Location />
      <Galery />
      <Footer/>
       </div>
  );
}

export default App;
