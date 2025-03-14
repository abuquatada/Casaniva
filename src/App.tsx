import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import KnowMore from "./components/KnowMore";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <HeroBanner />
        <FeaturedProducts />
        <InfoSection />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/know-more" element={<KnowMore />} />
        </Routes>
        <Testimonials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
