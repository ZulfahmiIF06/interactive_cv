import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Skills';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Skills from './components/Skills';
import Education from './pages/Education';

export default function App() {
  return (
    <div >
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skills" element={< Skills />} />
          <Route path="/education" element={< Education />} />
        </Routes>
        <Contact/>
    </div>
  );
}
