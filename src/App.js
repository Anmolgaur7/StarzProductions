import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/Footer";
import Load from "./components/load";
import { useState, useEffect } from "react";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false); // State to control loading on route switch
  const [isDesktop, setIsDesktop] = useState(false); // State to detect if device is desktop
  const location = useLocation(); // Hook to get the current route location

  // Trigger loading state on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading screen for 2 seconds on route change, adjust duration as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, [location]); // Re-run effect every time the route changes

  // Detect if the device is desktop based on window width
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth > 768); // Set breakpoint for desktop at 768px
    };

    // Run the check on component mount and on window resize
    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);

    return () => window.removeEventListener("resize", checkIfDesktop); // Cleanup the event listener
  }, []);

  return (
    <div className="App">
      {/* Conditionally render animated cursor only on desktop devices */}
      {isDesktop && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
        />
      )}

      {/* Conditionally show loading or main content */}
      {loading ? (
        <Load className="animate-fadeIn" /> // Show loading screen during route change
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default function AppWrapper() {
  // Wrapping App component with Router so that useLocation works correctly
  return (
    <Router>
      <App />
    </Router>
  );
}
