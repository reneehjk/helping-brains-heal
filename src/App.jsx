import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Communities from './pages/Communities';
import Donations from './pages/Donations';
import Featured from './pages/Featured';
import Resources from './pages/Resources';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from './pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './util/ScrollToTop';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/resources" element={<Resources />} />
              {/* Catch-all route for undefined paths */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Footer />
        </HelmetProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
