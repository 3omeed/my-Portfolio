import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isStyleMode, setisStyleMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    if (!isNightMode) {
      // document.documentElement.style.setProperty('--border-color', '#d6d5d2');
      document.documentElement.style.setProperty('--border-color', 'white');
      document.documentElement.style.setProperty('--main-color', '#424cd9');
      document.documentElement.style.setProperty('--select-color', '#d6d5d2');
      document.documentElement.style.setProperty('--saturated-color', 'white');
    } else {
      document.documentElement.style.setProperty('--border-color', 'black');
      document.documentElement.style.setProperty('--main-color', '#d6d5d2');
      document.documentElement.style.setProperty('--select-color', 'white');
      document.documentElement.style.setProperty('--saturated-color', 'black');
    }
  };
  const toggleStylishMode = () => {
    setisStyleMode(!isStyleMode);
    if (!isStyleMode) {
      // document.documentElement.style.setProperty('--border-color', '#d6d5d2');
      document.documentElement.style.setProperty('--border-color', 'rgb(30, 180, 30)');
      document.documentElement.style.setProperty('--main-color', 'black');
      document.documentElement.style.setProperty('--select-color', 'green');
      document.documentElement.style.setProperty('--saturated-color', 'white');

    } else {
      document.documentElement.style.setProperty('--border-color', 'black');
      document.documentElement.style.setProperty('--main-color', 'white');
      document.documentElement.style.setProperty('--select-color', 'white');
      document.documentElement.style.setProperty('--saturated-color', 'black');
    }
  };
  return (
    <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
      <div className="nighty-holder">
        <button
          onClick={toggleNightMode}
          className={`btn nighty ${isNightMode ? 'night-mode' : ''}`}
        >
          {isNightMode ? 'Day Mode' : 'Night Mode'}
        </button>

        {/* <button
          onClick={toggleStylishMode}
          className={`btn nighty ${isNightMode ? 'night-mode' : ''}`}
        >
          {isNightMode ? 'Normal' : 'stylish?'}
        </button> */}
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
