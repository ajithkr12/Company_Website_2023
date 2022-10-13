import {BrowserRouter,Routes,Route,} from "react-router-dom";
import NavBar from './componets/NavBar'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogGrid from './pages/BlogGrid';

import BlogSingle from './pages/BlogSingle';
import ScrollTop from './componets/ScrollTop'
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogGrid />} />
        <Route path="/blog" element={<BlogSingle/>} />
      </Routes>
      <ScrollTop/>
    </BrowserRouter>
    
  );
}

export default App;
