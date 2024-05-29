import logo from './logo.svg';
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

function App() {
  return (
    <>
      <Herosection />
      <Orange_section />
      <About />
      <Tokenomics />
      <Utility />
      <Ecosystem />
      <Roadmap />
      <News />
      <Orange_section />
      <Footer />
    </>
  );
}

export default App;
