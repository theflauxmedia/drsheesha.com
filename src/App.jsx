import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import JsonLd from './components/JsonLd';
import Home from './pages/Home';
import About from './pages/About';
import MenuRedirect from './components/MenuRedirect';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route path="/menu" element={<MenuRedirect />} />
        <Route
          path="/events"
          element={
            <PageTransition>
              <Events />
            </PageTransition>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageTransition>
              <Gallery />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <SmoothScroll>
      <div className="app-shell">
        <SEO />
        <JsonLd />
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </SmoothScroll>
  </BrowserRouter>
);

export default App;
