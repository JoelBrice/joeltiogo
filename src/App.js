import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import NofFound from './components/NofFound';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NofFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
