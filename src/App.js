import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import NofFound from './components/NofFound';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NofFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
