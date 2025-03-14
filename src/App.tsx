import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import KnowMore from "./components/KnowMore";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import About from "./Pages/About";

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
                <InfoSection />
                <Testimonials />
              </>
            }
          />
          {/* Know More Page */}
          <Route path="/know-more" element={<KnowMore />} />
          {/* About Page */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer /> {/* Always Visible */}
      </div>
    </Router>
  );
}

export default App;
