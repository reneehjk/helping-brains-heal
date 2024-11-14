import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Clinic from './pages/Clinic';
import Communities from './pages/Communities';
import Donations from './pages/Donations';
import News from './pages/News';
import Opportunities from './pages/Opportunities';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
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
