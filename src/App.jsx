import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Import Pages
import Home from './pages/Home';
import Platform from './pages/Platform';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import Automator from './pages/Automator';

// Import Shared Components
import {
  PremiumButton,
  GradientMeshBackground,
  AnimatedGridBackground,
  springConfigs
} from './components/shared/SharedComponents';

// ============================================
// NAVBAR COMPONENT
// ============================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    // If we're on a different page, navigate to Why Us and then scroll
    if (location.pathname !== '/why-us') {
      window.location.href = '/why-us#contact';
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'AI Workforce', path: '/automator' },
    { name: 'Custom CRM', path: '/platform' },
    { name: 'Why Us', path: '/why-us' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.5)' : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" onClick={scrollToTop}>
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.png" alt="Maple Tech Solutions" className="h-20 w-auto object-contain" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((item, i) => (
            <Link key={item.path} to={item.path} onClick={scrollToTop}>
              <motion.button
                className={`px-4 py-2 text-sm font-medium rounded-lg relative overflow-hidden ${
                  location.pathname === item.path
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.6 }}
                whileHover={{ scale: 1.08 }}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-slate-100 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.button>
            </Link>
          ))}
          <PremiumButton onClick={scrollToContact} className="ml-2">
            Get Started
          </PremiumButton>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setMobileMenu(!mobileMenu)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileMenu ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 p-4 shadow-lg"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
          >
            {navLinks.map((item, i) => (
              <Link key={item.path} to={item.path} onClick={scrollToTop}>
                <motion.button
                  className={`block w-full text-left px-4 py-3 rounded-lg ${
                    location.pathname === item.path
                      ? 'bg-cyan-50 text-cyan-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  {item.name}
                </motion.button>
              </Link>
            ))}
            <motion.button
              onClick={scrollToContact}
              className="block w-full text-left px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * navLinks.length }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ============================================
// FOOTER COMPONENT
// ============================================
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div className="flex items-center gap-3 bg-white rounded-lg p-3" whileHover={{ scale: 1.05 }}>
            <img src="/logo.png" alt="Maple Tech Solutions" className="h-10 w-auto object-contain" />
          </motion.div>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <motion.a href="/why-us#contact" className="hover:text-white transition-colors font-medium" whileHover={{ scale: 1.08 }}>
              sales@mapletech.solutions
            </motion.a>
            <span>|</span>
            <motion.a href="tel:+13069421617" className="hover:text-white transition-colors font-medium" whileHover={{ scale: 1.08 }}>
              +1 (306) 942-1617
            </motion.a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© 2025 Maple Tech Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.a href="#" className="hover:text-slate-300 transition-colors" whileHover={{ scale: 1.08 }}>Privacy Policy</motion.a>
            <motion.a href="#" className="hover:text-slate-300 transition-colors" whileHover={{ scale: 1.08 }}>Terms of Service</motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN APP COMPONENT
// ============================================
function AppContent() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, springConfigs.smooth);

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden relative">
      {/* ========== LAYERED ANIMATED BACKGROUNDS ========== */}
      <GradientMeshBackground scrollProgress={smoothProgress} />
      <AnimatedGridBackground scrollProgress={smoothProgress} />

      {/* ========== NAVBAR ========== */}
      <Navbar />

      {/* ========== ROUTES ========== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/automator" element={<Automator />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ========== FOOTER ========== */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
