import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import NightModeToggle from './Components/nigthModeToggle/NightModeToggle';
import { useState } from 'react';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    console.log(isNightMode);
    if (!isNightMode) {
      document.documentElement.style.setProperty('--border-color', 'white');
      document.documentElement.style.setProperty('--main-color', 'white');
    } else {
      document.documentElement.style.setProperty('--border-color', "black")
      document.documentElement.style.setProperty('--main-color', "black")
    }
  };
  return (
    <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
      {/* <NightModeToggle
        isNightMode={isNightMode}
        setIsNightMode={setIsNightMode}
      /> */}
      <div>
        <button
          onClick={toggleNightMode}
          className={`btn ${isNightMode ? 'night-mode' : ''}`}
        >
          {isNightMode ? 'Day Mode' : 'Night Mode'}
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
