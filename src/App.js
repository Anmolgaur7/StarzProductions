import "./App.css";
import Navbar from "../src/components/Navbar";
import Landing from "../src/pages/Landing";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/Footer";

function App() {
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
      <Navbar />
      <Landing />
      <Footer/>
    </div>
  );
}

export default App;
