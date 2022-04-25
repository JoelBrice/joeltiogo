import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
