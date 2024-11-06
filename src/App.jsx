import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Clinic from './pages/Clinic';
import Communities from './pages/Communities';
import Donations from './pages/Donations';
import News from './pages/News';
import Opportunities from './pages/Opportunities';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Router>
        <nav className="bg-background p-4 space-x-4 fixed top-0 left-0 z-20 shadow-sm font-satoshiMedium w-full">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/donations" className="hover:underline">Donations</a>
          <a href="/news" className="hover:underline">News</a>
          <a href="/opportunities" className="hover:underline">Opportunities</a>
          <a href="/clinic" className="hover:underline">Clinic</a>
          <a href="/communities" className="hover:underline">Communities</a>
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
      <Footer />
    </div>
  );
}

export default App;
