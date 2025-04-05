import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FavoritMenu from "./components/FavoritMenu.jsx";
import Location from "./components/Location.jsx";
import Galery from "./components/Galery.jsx";
import Footer from "./components/Footer.jsx";
import Thumnail from "./components/Thumnail.jsx";
import About from "./components/AboutUs.jsx";


function Home() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FavoritMenu />
      <Location />
      <Galery />
      <Footer />
    </div>
  );
}

function ThumbnailPage() {
  return (
    <div className="App">
      <Navbar />
      <Thumnail />
      <Footer />
    </div>
  );
}

function AboutPage(){
  return (
    <div className="App">
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thumbnails" element={<ThumbnailPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
export default App;







