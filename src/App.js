import "./App.css";
import Navbar from "./components/Navbar"; // Correct path for Navbar
import Landing from "./pages/Landing"; // Correct path for Landing
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/Footer";
import Load from "./components/load"; // Ensure the path and casing are correct
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true); // State to control loading

  useEffect(() => {
    // Set timeout to change loading state after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this duration if needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="App">
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
      {loading ? (
        <Load className='animate-fadeIn' /> // Show loading screen
      ) : (
        <div>
          <Navbar />
          <Landing />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
