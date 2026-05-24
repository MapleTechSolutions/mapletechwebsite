import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Import Pages
const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Automator = lazy(() => import('./pages/Automator'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const LocalBusinessBooster = lazy(() => import('./pages/LocalBusinessBooster'));
const Integrations = lazy(() => import('./pages/Integrations'));
const Websites = lazy(() => import('./pages/Websites'));

// Import Shared Components
import {
  PremiumButton,
  GradientMeshBackground,
  AnimatedGridBackground,
  springConfigs,
  ErrorBoundary,
  useLiteMotion,
} from './components/shared/SharedComponents';

// ============================================
// NAVBAR COMPONENT
// ============================================
function Navbar() {
  const { disableHoverAnimations, liteMotion } = useLiteMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      navigate('/why-us#contact');
    } else {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Local Booster', path: '/local-business-booster' },
    { name: 'Custom CRM', path: '/custom-crm' },
    { name: 'AI Workforce', path: '/ai-workforce' },
    { name: 'Why Us', path: '/why-us' },
  ];

  return (
    <motion.nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.5)' : 'none',
      }}
      initial={liteMotion ? false : { y: -100 }}
      animate={liteMotion ? undefined : { y: 0 }}
      transition={liteMotion ? undefined : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" onClick={scrollToTop}>
          <motion.div
            className="flex items-center gap-3"
            whileHover={disableHoverAnimations ? undefined : { scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.png" alt="Maple Tech Solutions" className="h-20 w-auto object-contain" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((item, i) => (
            <Link key={item.path} to={item.path} onClick={scrollToTop}>
              <motion.div
                className={`px-4 py-2 text-sm font-medium rounded-lg relative overflow-hidden ${
                  location.pathname === item.path
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.6 }}
                whileHover={disableHoverAnimations ? undefined : { scale: 1.04 }}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-slate-100 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={disableHoverAnimations ? undefined : { scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.div>
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
        aria-label="Toggle menu"
        aria-expanded={mobileMenu}
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
                <motion.div
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
                </motion.div>
              </Link>
            ))}
            <motion.div
              onClick={scrollToContact}
              className="block w-full text-left px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * navLinks.length }}
            >
              Get Started
            </motion.div>
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
  const { disableHoverAnimations } = useLiteMotion();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div className="flex items-center gap-3 bg-white rounded-lg p-3" whileHover={disableHoverAnimations ? undefined : { scale: 1.03 }}>
            <img src="/logo.png" alt="Maple Tech Solutions" loading="lazy" className="h-10 w-auto object-contain" />
          </motion.div>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <motion.a href="/why-us#contact" className="hover:text-white transition-colors font-medium" whileHover={disableHoverAnimations ? undefined : { scale: 1.03 }}>
              sales@mapletech.solutions
            </motion.a>
            <span>|</span>
            <motion.a href="tel:+13069421617" className="hover:text-white transition-colors font-medium" whileHover={disableHoverAnimations ? undefined : { scale: 1.03 }}>
              +1 (306) 942-1617
            </motion.a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Maple Tech Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.div whileHover={disableHoverAnimations ? undefined : { scale: 1.03 }}>
              <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            </motion.div>
            <motion.div whileHover={disableHoverAnimations ? undefined : { scale: 1.03 }}>
              <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            </motion.div>
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
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans overflow-x-hidden relative">
      {/* ========== LAYERED ANIMATED BACKGROUNDS ========== */}
      <GradientMeshBackground scrollProgress={smoothProgress} />
      <AnimatedGridBackground scrollProgress={smoothProgress} />

      {/* ========== NAVBAR ========== */}
      <Navbar />

      {/* ========== ROUTES ========== */}
      <main>
        <ErrorBoundary key={location.pathname}>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/custom-crm" element={<Platform />} />
              <Route path="/automator" element={<Automator />} />
              <Route path="/ai-workforce" element={<Automator />} />
              <Route path="/local-business-booster" element={<LocalBusinessBooster />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/websites" element={<Websites />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

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
