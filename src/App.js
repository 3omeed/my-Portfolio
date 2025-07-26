import { useState } from "react";

import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Landing from "./Components/landing/Landing";
import Work from "./Components/work/Work";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import NightModeToggle from "./Components/nigthModeToggle/NightModeToggle";

import "./App.css";

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };
  return (
    <div className={`App ${isNightMode ? "night-mode" : ""}`}>
      {/* Desktop Night Mode Toggle */}
      <Header isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
      <Landing isNightMode={isNightMode} />
      <About isNightMode={isNightMode} />
      <Work isNightMode={isNightMode} />
      <Contact isNightMode={isNightMode} />
      <Footer isNightMode={isNightMode} />
    </div>
  );
}

export default App;
