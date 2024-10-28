import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Clinic from './pages/Clinic';
import Communities from './pages/Communities';
import Donations from './pages/Donations';
import News from './pages/News';
import Opportunities from './pages/Opportunities';


function App() {
  return (
    <Router>
      <nav className="p-4 space-x-4 fixed top-0 left-0 z-20">
        <a href="/" className="text-blue-500 hover:underline">Home</a>
        <a href="/about" className="text-blue-500 hover:underline">About</a>
        <a href="/clinic" className="text-blue-500 hover:underline">Clinic</a>
        <a href="/communities" className="text-blue-500 hover:underline">Communities</a>
        <a href="/donations" className="text-blue-500 hover:underline">Donations</a>
        <a href="/news" className="text-blue-500 hover:underline">News</a>
        <a href="/opportunities" className="text-blue-500 hover:underline">Opportunities</a>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/news" element={<News />} />
        <Route path="/opportunities" element={<Opportunities />} />
      </Routes>
    </Router>
  );
}

export default App;
