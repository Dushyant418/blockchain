import logo from './logo.svg';

import React, { useEffect } from 'react'
import './App.css';
import Herosection from './components/Herosection';
import Orange_section from './components/Orange_section';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import Utility from './components/Utility';
import Ecosystem from './components/Ecosystem';
import News from './components/News';
import Roadmap from './components/Roadmap';
import Rotate from './components/Rotate';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
      }
    );
  }, [])
  return (
    <div className=' overflow-hidden'>
      <Herosection />
      <Orange_section />
      <About />
      <Tokenomics />
      <Utility />
      <Rotate />
      <Ecosystem />
      <Roadmap />
      <News />
      <Orange_section />
      <Footer />
    </div>
  );
}

export default App;
