import './App.css';
import NavMenu from './shared/NavMenu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Works from './pages/Works';
import Skills from './pages/Skills';

function App() {
  let dateNow = new Date();

  return (
    <div className="App">
      <header>
        <span>staticvoidmain.dev</span>
      </header>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Router>
      <footer>
        <p className="copyright">&copy; {dateNow.getFullYear()} <a href="mailto:webmaster@computerengineerjay.com" target="_blank" rel="noreferrer">Jay Mendoza</a></p>
      </footer>
    </div>
  );
}

export default App;
