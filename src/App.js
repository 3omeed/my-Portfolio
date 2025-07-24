import "./App.css";
import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Landing from "./Components/landing/Landing";
import Work from "./Components/work/Work";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import { useState } from "react";

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };
  return (
    <div className={`App ${isNightMode ? "night-mode" : ""}`}>
      <div className="nighty-holder">
        <button
          onClick={toggleNightMode}
          className={`btn nighty ${isNightMode ? "night-mode" : ""}`}
        >
          {isNightMode ? "Day Mode" : "Night Mode"}
        </button>
      </div>
      <Header isNightMode={isNightMode} />
      <Landing isNightMode={isNightMode} />
      <About isNightMode={isNightMode} />
      <Work isNightMode={isNightMode} />
      <Contact isNightMode={isNightMode} />
      <Footer isNightMode={isNightMode} />
    </div>
  );
}

export default App;
