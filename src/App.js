import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
// import '../src/Poppins (2).zip';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
