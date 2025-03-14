import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import KnowMore from "./components/KnowMore";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import About from "./Pages/About";
import Carousel1 from "./components/Carousel1";
import Topseller from "./components/TopSeller";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Always Visible */}
        <Routes>
          {/* Home Page with all sections */}
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <FeaturedProducts />
                <Carousel1 />
                <Topseller />
                <InfoSection />
                <Testimonials />
              </>
            }
          />
          {/* About Page */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer /> {/* Always Visible */}
      </div>
    </Router>
  );
}

export default App;
