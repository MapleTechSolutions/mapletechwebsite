import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import {
  ArrowRight, Check, GitMerge, LayoutDashboard, Bot, Clock,
  CalendarCheck, Brain, Sparkles, Inbox, Mail, MessageSquare,
  Phone, Calendar, Database, Receipt, BarChart3, Link, RefreshCw,
  ShieldCheck, Wrench, HeartPulse, ShoppingBag, GraduationCap,
  Building2, Lock, Server, Menu, X, CheckCircle, MapPin, Users,
  Zap, ArrowRightLeft, Star, Package, FileText, ClipboardList, Truck,
  MousePointer, Layers, Shield, Cpu, Globe, Wifi
} from 'lucide-react';

// Section Components
import LeadCaptureSection from './sections/LeadCaptureSection';
import NurtureLeadsSection from './sections/NurtureLeadsSection';
import CloseDealsSection from './sections/CloseDealsSection';
import ScaleBusinessSection from './sections/ScaleBusinessSection';
import LocalSupportSection from './sections/LocalSupportSection';
import ComparisonTableSection from './sections/ComparisonTableSection';

// ============================================
// MAPLE LEAF SVG COMPONENTS
// ============================================

// Geometric/Polygon style maple leaf (matches logo aesthetic)
const MapleLeafOutline = ({ size = 100, className = "", style = {} }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    className={className}
    style={style}
  >
    <path
      d="M50 5 L55 20 L70 15 L65 30 L85 25 L75 40 L95 45 L78 55 L88 70 L70 65 L72 85 L55 75 L50 95 L45 75 L28 85 L30 65 L12 70 L22 55 L5 45 L25 40 L15 25 L35 30 L30 15 L45 20 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Filled geometric maple leaf
const MapleLeafFilled = ({ size = 100, className = "", style = {}, gradient = false }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    style={style}
  >
    {gradient && (
      <defs>
        <linearGradient id="mapleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8"/>
          <stop offset="50%" stopColor="#22C55E" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#F97316" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
    )}
    <path
      d="M50 5 L55 20 L70 15 L65 30 L85 25 L75 40 L95 45 L78 55 L88 70 L70 65 L72 85 L55 75 L50 95 L45 75 L28 85 L30 65 L12 70 L22 55 L5 45 L25 40 L15 25 L35 30 L30 15 L45 20 Z"
      fill={gradient ? "url(#mapleGradient)" : "currentColor"}
    />
  </svg>
);

// Simplified maple leaf for smaller sizes
const MapleLeafSimple = ({ size = 40, className = "", style = {} }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 40 40" 
    className={className}
    style={style}
  >
    <path
      d="M20 2 L23 10 L32 8 L28 16 L38 18 L30 24 L36 32 L26 28 L24 38 L20 30 L16 38 L14 28 L4 32 L10 24 L2 18 L12 16 L8 8 L17 10 Z"
      fill="currentColor"
    />
  </svg>
);

// ============================================
// SPRING CONFIGURATIONS (Premium Physics)
// ============================================
const springConfigs = {
  smooth: { stiffness: 100, damping: 30, mass: 1 },
  bouncy: { stiffness: 300, damping: 20, mass: 0.8 },
  gentle: { stiffness: 50, damping: 25, mass: 1.2 },
  snappy: { stiffness: 400, damping: 35, mass: 0.5 },
  float: { stiffness: 30, damping: 20, mass: 2 },
};

// ============================================
// ENHANCED ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { 
      duration: 0.9, 
      ease: [0.22, 1, 0.36, 1] // Custom ease-out
    } 
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60, rotateY: 15 },
  show: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60, rotateY: -15 },
  show: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 15 },
  show: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

// Cinematic stagger container
const cinematicStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15
    }
  }
};


// ============================================
// HERO MAPLE LEAF CLUSTER
// ============================================
const HeroMapleLeafCluster = ({ scrollProgress, mouseX, mouseY }) => {
  const clusterY = useTransform(scrollProgress, [0, 0.3], [0, 80]);
  const clusterScale = useTransform(scrollProgress, [0, 0.3], [1, 0.9]);
  const clusterOpacity = useTransform(scrollProgress, [0, 0.3], [1, 0]);

  // Mouse parallax for central leaf
  const leafX = useTransform(mouseX, [0, 1], [-20, 20]);
  const leafY = useTransform(mouseY, [0, 1], [-20, 20]);
  const smoothLeafX = useSpring(leafX, springConfigs.float);
  const smoothLeafY = useSpring(leafY, springConfigs.float);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      style={{ y: clusterY, scale: clusterScale, opacity: clusterOpacity }}
    >
      {/* Large central gradient maple leaf */}
      <motion.div
        className="absolute"
        style={{ x: smoothLeafX, y: smoothLeafY }}
        animate={{
          rotate: [0, 3, -2, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="500" height="500" viewBox="0 0 100 100" style={{ opacity: 0.08 }}>
          <defs>
            <linearGradient id="heroLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9"/>
              <stop offset="50%" stopColor="#22C55E"/>
              <stop offset="100%" stopColor="#F97316"/>
            </linearGradient>
          </defs>
          <path
            d="M50 5 L55 20 L70 15 L65 30 L85 25 L75 40 L95 45 L78 55 L88 70 L70 65 L72 85 L55 75 L50 95 L45 75 L28 85 L30 65 L12 70 L22 55 L5 45 L25 40 L15 25 L35 30 L30 15 L45 20 Z"
            fill="url(#heroLeafGradient)"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// ANIMATED GRADIENT MESH (Enhanced)
// ============================================
const GradientMeshBackground = ({ scrollProgress }) => {
  const meshX = useTransform(scrollProgress, [0, 1], [0, 150]);
  const meshY = useTransform(scrollProgress, [0, 1], [0, 80]);
  const meshRotate = useTransform(scrollProgress, [0, 1], [0, 15]);
  
  const smoothMeshX = useSpring(meshX, springConfigs.gentle);
  const smoothMeshY = useSpring(meshY, springConfigs.gentle);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
        style={{ x: smoothMeshX, y: smoothMeshY, rotate: meshRotate }}
      >
        {/* Teal blob */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 120, 0],
            y: [0, 60, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Green blob */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-[550px] h-[550px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orange blob */}
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

// ============================================
// ANIMATED GRID WITH MAPLE LEAF NODES
// ============================================
const AnimatedGridBackground = ({ scrollProgress }) => {
  const gridY = useTransform(scrollProgress, [0, 1], [0, 250]);
  const gridOpacity = useTransform(scrollProgress, [0, 0.5, 1], [0.25, 0.4, 0.25]);
  const smoothGridY = useSpring(gridY, springConfigs.gentle);

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ y: smoothGridY, opacity: gridOpacity }}
    >
      {/* Vertical lines with maple leaf intersections */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px"
          style={{
            left: `${(i + 1) * 8}%`,
            background: 'linear-gradient(180deg, transparent 0%, rgba(14, 165, 233, 0.08) 50%, transparent 100%)',
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scaleY: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        >
        </motion.div>
      ))}
      {/* Horizontal lines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${(i + 1) * 10}%`,
            background: 'linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, 0.08) 50%, transparent 100%)',
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scaleX: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 6 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};

// ============================================
// SECTION DIVIDER (Animated Wipe)
// ============================================
const SectionDivider = ({ color = "cyan" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const colorMap = {
    cyan: "from-transparent via-cyan-500/30 to-transparent",
    green: "from-transparent via-green-500/30 to-transparent",
    orange: "from-transparent via-orange-500/30 to-transparent",
  };

  return (
    <motion.div
      ref={ref}
      className="relative h-px w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${colorMap[color]}`}
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
};

// ============================================
// PREMIUM BUTTON WITH RIPPLE
// ============================================
const PremiumButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    setRipples([...ripples, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const baseClasses = variant === "primary"
    ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-white"
    : "bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-600";

  return (
    <motion.button
      onClick={(e) => { addRipple(e); onClick?.(e); }}
      className={`relative overflow-hidden px-8 py-4 font-semibold rounded-xl ${baseClasses} ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === "primary" 
          ? "0 0 50px rgba(14, 165, 233, 0.5)" 
          : "0 0 30px rgba(14, 165, 233, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{ left: ripple.x, top: ripple.y }}
          initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.5 }}
          animate={{ width: 300, height: 300, x: -150, y: -150, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Shimmer effect */}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
      )}
    </motion.button>
  );
};

// ============================================
// 3D LIFT CARD
// ============================================
const Card3D = ({ children, className = "", glowColor = "cyan" }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const glowColors = {
    cyan: "rgba(14, 165, 233, 0.4)",
    green: "rgba(34, 197, 94, 0.4)",
    orange: "rgba(249, 115, 22, 0.4)",
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 20);
    setRotateY((centerX - x) / 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      whileHover={{
        boxShadow: `0 30px 60px ${glowColors[glowColor]}, 0 0 0 1px ${glowColors[glowColor]}`,
        y: -10,
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// EXPANDING FEATURE CARD (Enhanced)
// ============================================
const ExpandingFeatureCard = ({ icon: Icon, title, description, features, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const colorConfig = {
    orange: {
      bg: 'bg-orange-500/10',
      text: 'text-orange-500',
      glow: 'rgba(249, 115, 22, 0.5)',
      gradient: 'from-orange-500 to-orange-400',
    },
    green: {
      bg: 'bg-green-500/10',
      text: 'text-green-500',
      glow: 'rgba(34, 197, 94, 0.5)',
      gradient: 'from-green-500 to-green-400',
    },
    cyan: {
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-500',
      glow: 'rgba(14, 165, 233, 0.5)',
      gradient: 'from-cyan-500 to-cyan-400',
    },
  };

  const colors = colorConfig[color];

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200 cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -20 : 0,
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -3 : 0,
          boxShadow: isHovered 
            ? `0 40px 80px ${colors.glow}`
            : '0 4px 20px rgba(0,0,0,0.05)',
        }}
        transition={{ type: "spring", ...springConfigs.snappy }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated gradient border */}
        <motion.div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.gradient}`}
          style={{ padding: '2px' }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-white rounded-3xl" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon with wobble */}
          <motion.div 
            className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 relative`}
            animate={{
              scale: isHovered ? 1.25 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0,
              boxShadow: isHovered ? `0 0 40px ${colors.glow}` : "none",
            }}
            transition={{ type: "spring", ...springConfigs.bouncy }}
          >
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Icon size={32} className={colors.text} />
            </motion.div>
          </motion.div>
          
          <motion.h3 
            className="text-xl font-bold text-slate-900 mb-3"
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ type: "spring", ...springConfigs.snappy }}
          >
            {title}
          </motion.h3>
          
          <p className="text-slate-500 mb-6">{description}</p>
          
          <div className="space-y-3">
            {features.map((feature, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-3 text-sm text-slate-600"
                animate={{ 
                  x: isHovered ? 15 : 0,
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ 
                  type: "spring", 
                  ...springConfigs.snappy,
                  delay: i * 0.06 
                }}
              >
                <motion.div
                  className={`w-6 h-6 rounded-full ${colors.bg} flex items-center justify-center`}
                  animate={{ 
                    scale: isHovered ? [1, 1.4, 1] : 1,
                    rotate: isHovered ? 360 : 0,
                  }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Check size={14} className={colors.text} />
                </motion.div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Learn more indicator */}
          <motion.div
            className={`mt-6 flex items-center gap-2 ${colors.text} font-medium`}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 15 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span>Explore feature</span>
            <motion.div animate={{ x: isHovered ? [0, 8, 0] : 0 }} transition={{ duration: 0.8, repeat: Infinity }}>
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// ANIMATED SECTION WRAPPER
// ============================================
const AnimatedSection = ({ children, className = "", id = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
export default function MapleTechPremium() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth spring values
  const smoothProgress = useSpring(scrollYProgress, springConfigs.smooth);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenu(false);
  };

  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 600], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.92]);
  const smoothHeroY = useSpring(heroY, springConfigs.gentle);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-50 font-sans overflow-x-hidden relative">
      {/* ========== LAYERED ANIMATED BACKGROUNDS ========== */}
      <GradientMeshBackground scrollProgress={smoothProgress} />
      <AnimatedGridBackground scrollProgress={smoothProgress} />

      {/* ========== NAVBAR ========== */}
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
          <motion.button 
            onClick={() => scrollTo('home')} 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.png" alt="Maple Tech Solutions" className="h-12 w-auto object-contain" />
          </motion.button>
          
          <div className="hidden md:flex items-center gap-2">
            {['Solutions', 'Features', 'Industries', 'About'].map((item, i) => (
              <motion.button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())} 
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg relative overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.6 }}
                whileHover={{ scale: 1.08 }}
              >
                <span className="relative z-10">{item}</span>
                <motion.div 
                  className="absolute inset-0 bg-slate-100 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.button>
            ))}
            <PremiumButton onClick={() => scrollTo('contact')} className="ml-2">
              Get Started
            </PremiumButton>
          </div>

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
              {['Solutions', 'Features', 'Industries', 'About', 'Contact'].map((item, i) => (
                <motion.button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())} 
                  className="block w-full text-left px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ========== HERO SECTION ========== */}
      <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
        {/* Hero Maple Leaf Cluster */}
        <HeroMapleLeafCluster scrollProgress={smoothProgress} mouseX={mouseX} mouseY={mouseY} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            style={{ opacity: heroOpacity, scale: heroScale, y: smoothHeroY }}
          >
            {/* Hero Content */}
            <motion.div 
              className="text-center lg:text-left"
              variants={cinematicStagger}
              initial="hidden"
              animate="show"
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-cyan-500/20 rounded-full text-sm font-medium text-cyan-600 mb-6 shadow-lg shadow-cyan-500/10"
                variants={fadeInUp}
              >
                <motion.span 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Integrations • CRM • AI Automation
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight"
                variants={fadeInUp}
              >
                <motion.span 
                  className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent inline-block"
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ type: "spring", ...springConfigs.bouncy }}
                >
                  Seamless Systems.
                </motion.span>{' '}
                <motion.span 
                  className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent inline-block"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", ...springConfigs.bouncy }}
                >
                  Custom CRMs.
                </motion.span>{' '}
                <motion.span 
                  className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent inline-block"
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ type: "spring", ...springConfigs.bouncy }}
                >
                  Zero Data Entry.
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0"
                variants={fadeInUp}
              >
                We bridge the gap between the software you have and the automation you need. Keep the tools you love—we'll make them work together.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <PremiumButton onClick={() => scrollTo('contact')}>
                  Book a Free Consultation
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={18} />
                  </motion.span>
                </PremiumButton>
                <PremiumButton onClick={() => scrollTo('solutions')} variant="secondary">
                  See How It Works
                </PremiumButton>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div 
              className="relative h-80 lg:h-[500px]"
              style={{ y: smoothHeroY }}
            >
              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#22C55E" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#F97316" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                {[
                  "M100 80 Q 200 150, 250 250",
                  "M380 60 Q 300 150, 250 250",
                  "M420 250 Q 350 250, 250 250",
                  "M100 380 Q 180 320, 250 250",
                  "M400 400 Q 330 340, 250 250",
                  "M60 220 Q 140 230, 250 250"
                ].map((d, i) => (
                  <motion.path 
                    key={i} 
                    d={d} 
                    stroke="url(#heroLineGrad)" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.5, delay: i * 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </svg>

              {/* Central Node */}
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center z-10"
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.6, type: "spring", ...springConfigs.bouncy }}
                whileHover={{ scale: 1.15, boxShadow: "0 30px 100px rgba(14, 165, 233, 0.4)" }}
              >
                <motion.img 
                  src="/logo.png" 
                  alt="Maple Tech" 
                  className="w-24 h-24 object-contain"
                  animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Orbit Nodes with wobble */}
              {[
                { Icon: Calendar, top: '8%', left: '12%', color: 'cyan', delay: 0.7 },
                { Icon: Receipt, top: '3%', right: '18%', color: 'green', delay: 0.85 },
                { Icon: Phone, bottom: '20%', right: '8%', color: 'orange', delay: 1.0 },
                { Icon: Database, bottom: '10%', left: '8%', color: 'cyan', delay: 1.15 },
                { Icon: BarChart3, top: '40%', right: '3%', color: 'green', delay: 1.3 },
                { Icon: Mail, top: '35%', left: '3%', color: 'orange', delay: 1.45 },
              ].map(({ Icon, color, delay, ...pos }, i) => (
                <motion.div 
                  key={i} 
                  className={`absolute w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border-2 ${
                    color === 'cyan' ? 'border-cyan-500/30' : color === 'green' ? 'border-green-500/30' : 'border-orange-500/30'
                  }`}
                  style={pos}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay, type: "spring", ...springConfigs.bouncy }}
                  whileHover={{ 
                    scale: 1.35,
                    rotate: 10,
                    boxShadow: color === 'cyan' 
                      ? "0 0 50px rgba(14, 165, 233, 0.6)"
                      : color === 'green'
                      ? "0 0 50px rgba(34, 197, 94, 0.6)"
                      : "0 0 50px rgba(249, 115, 22, 0.6)",
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: 5 + i * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4
                    }}
                  >
                    <Icon size={28} className={
                      color === 'cyan' ? 'text-cyan-500' : color === 'green' ? 'text-green-500' : 'text-orange-500'
                    } />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="cyan" />

      {/* ========== SOLUTIONS SECTION ========== */}
      <AnimatedSection id="solutions" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-4 shadow-lg"
              variants={scaleIn}
            >
              Two Paths, One Goal
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              variants={fadeInUp}
            >
              Choose Your Path to Automation
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-500"
              variants={fadeInUp}
            >
              Whether you love your current tools or need a fresh start, we have a solution that fits.
            </motion.p>
          </motion.div>

          {/* Path Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {/* The Bridge */}
            <Card3D glowColor="cyan" className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200 overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              
              <motion.div 
                className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.2, rotate: 15, boxShadow: "0 0 30px rgba(14, 165, 233, 0.5)" }}
                transition={{ type: "spring", ...springConfigs.bouncy }}
              >
                <GitMerge size={32} className="text-cyan-500" />
              </motion.div>
              
              <span className="inline-block px-3 py-1 bg-cyan-500/10 rounded-full text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-4">
                Option 1
              </span>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">The Bridge</h3>
              <p className="text-cyan-600 font-medium mb-4">Custom Integrations</p>
              
              <p className="text-slate-500 mb-6">
                Love your booking app but hate the manual data entry? We build secure API middleware that syncs data automatically.
              </p>
              
              <div className="space-y-3">
                {['Keep tools you already know', 'Eliminate copy-pasting', 'Sync automatically', 'Zero errors'].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center"
                      whileHover={{ scale: 1.3, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
                    >
                      <Check size={14} className="text-cyan-500" />
                    </motion.div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </Card3D>

            {/* The Build */}
            <Card3D glowColor="green" className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200 overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-400"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              
              <motion.div 
                className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.2, rotate: -15, boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)" }}
                transition={{ type: "spring", ...springConfigs.bouncy }}
              >
                <LayoutDashboard size={32} className="text-green-500" />
              </motion.div>
              
              <span className="inline-block px-3 py-1 bg-green-500/10 rounded-full text-xs font-semibold text-green-600 uppercase tracking-wider mb-4">
                Option 2
              </span>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">The Build</h3>
              <p className="text-green-600 font-medium mb-4">Custom CRM</p>
              
              <p className="text-slate-500 mb-6">
                Tired of generic software? We build streamlined CRM systems from the ground up—tailored exactly to your workflow.
              </p>
              
              <div className="space-y-3">
                {['Built for your workflow', 'No bloat features', 'No confusing subscriptions', 'Scales with you'].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center"
                      whileHover={{ scale: 1.3, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
                    >
                      <Check size={14} className="text-green-500" />
                    </motion.div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </Card3D>
          </div>

          {/* AI Automator Banner */}
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
              whileHover={{ boxShadow: "0 50px 120px rgba(249, 115, 22, 0.25)" }}
            >
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(249,115,22,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(14,165,233,0.1) 0%, transparent 50%)',
                }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div 
                className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10"
                whileHover={{ scale: 1.2, rotate: 20, boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)" }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Bot size={40} className="text-orange-400" />
              </motion.div>
              
              <div className="flex-1 text-center md:text-left relative z-10">
                <span className="inline-block px-3 py-1 bg-orange-500/20 rounded-full text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
                  Add to either path
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">The Automator: AI Staff & Automation</h3>
                <p className="text-slate-400">
                  Layer on 24/7 AI receptionists, unified messaging inboxes, and smart workflow automation.
                </p>
              </div>
              
              <PremiumButton onClick={() => scrollTo('features')} className="flex-shrink-0 relative z-10">
                Learn More
              </PremiumButton>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionDivider color="green" />

      {/* ========== FEATURE STACK: LEAD CAPTURE ========== */}
      <LeadCaptureSection />

      <SectionDivider color="cyan" />

      {/* ========== FEATURE STACK: NURTURE LEADS ========== */}
      <NurtureLeadsSection />

      <SectionDivider color="green" />

      {/* ========== FEATURE STACK: CLOSE DEALS ========== */}
      <CloseDealsSection />

      <SectionDivider color="orange" />

      {/* ========== FEATURE STACK: SCALE BUSINESS ========== */}
      <ScaleBusinessSection />

      <SectionDivider color="cyan" />

      {/* ========== FEATURE STACK: LOCAL SUPPORT ========== */}
      <LocalSupportSection />

      <SectionDivider color="green" />

      {/* ========== FEATURE STACK: COMPARISON TABLE ========== */}
      <ComparisonTableSection />

      <SectionDivider color="orange" />

      {/* ========== ORIGINAL FEATURES SECTION (AI Features) ========== */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        {/* Section background effects */}
        <motion.div
          className="absolute top-1/4 left-0 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)' }}
          animate={{ x: [-200, 150, -200], y: [-100, 150, -100] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-20"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-600 mb-6 shadow-lg"
              variants={scaleIn}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Sparkles size={16} className="text-cyan-500" />
              </motion.div>
              Hover over cards to explore
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
              variants={fadeInUp}
            >
              Powerful Features,{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
                Zero Complexity
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-500"
              variants={fadeInUp}
            >
              From AI receptionists to unified inboxes—everything you need to automate your business.
            </motion.p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <ExpandingFeatureCard
              icon={Phone}
              title="AI Callers"
              description="24/7 AI receptionists that handle calls, book appointments, and qualify leads while you sleep."
              features={['Never miss a call', 'Books into your calendar', 'Qualifies leads automatically', 'Natural conversation flow']}
              color="orange"
              index={0}
            />
            <ExpandingFeatureCard
              icon={Inbox}
              title="Unified Inbox"
              description="Email, SMS, Instagram, Facebook—all conversations in one place with AI-powered reply suggestions."
              features={['All channels unified', 'AI reply suggestions', 'Never lose a message', 'Smart prioritization']}
              color="green"
              index={1}
            />
            <ExpandingFeatureCard
              icon={Zap}
              title="Smart Workflows"
              description="Automate multi-step processes. When X happens, automatically do Y and Z—no manual work required."
              features={['If-then automation', 'Multi-step workflows', 'Zero manual triggers', 'Real-time execution']}
              color="cyan"
              index={2}
            />
          </div>

          {/* Additional Features */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 mt-12"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: Shield, title: 'Secure & Private', color: 'cyan' },
              { icon: Cpu, title: 'AI-Powered', color: 'green' },
              { icon: Globe, title: 'Cloud-Based', color: 'orange' },
              { icon: Wifi, title: 'Always Connected', color: 'cyan' },
            ].map(({ icon: Icon, title, color }, i) => (
              <motion.div
                key={i}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-200 cursor-pointer"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.08,
                  y: -8,
                  boxShadow: color === 'cyan' 
                    ? "0 25px 60px rgba(14, 165, 233, 0.25)"
                    : color === 'green'
                    ? "0 25px 60px rgba(34, 197, 94, 0.25)"
                    : "0 25px 60px rgba(249, 115, 22, 0.25)"
                }}
                transition={{ type: "spring", ...springConfigs.snappy }}
              >
                <motion.div
                  className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                    color === 'cyan' ? 'bg-cyan-500/10' : color === 'green' ? 'bg-green-500/10' : 'bg-orange-500/10'
                  }`}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: "spring", ...springConfigs.bouncy }}
                >
                  <Icon size={24} className={
                    color === 'cyan' ? 'text-cyan-500' : color === 'green' ? 'text-green-500' : 'text-orange-500'
                  } />
                </motion.div>
                <p className="font-semibold text-slate-700">{title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionDivider color="orange" />

      {/* ========== INDUSTRIES ========== */}
      <AnimatedSection id="industries" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-3xl font-bold text-slate-900 mb-4" variants={fadeInUp}>
              Built for Service Businesses
            </motion.h2>
            <motion.p className="text-slate-500" variants={fadeInUp}>
              We specialize in industries where manual data entry eats up your day.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: Wrench, name: 'Trades & Field Services' },
              { icon: HeartPulse, name: 'Wellness & Healthcare' },
              { icon: ShoppingBag, name: 'Retail & E-Commerce' },
              { icon: GraduationCap, name: 'Coaching & Consulting' },
              { icon: Building2, name: 'Professional Services' },
            ].map(({ icon: Icon, name }, i) => (
              <motion.div 
                key={i} 
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center cursor-pointer border border-slate-200"
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.1,
                  y: -10,
                  boxShadow: "0 25px 60px rgba(14, 165, 233, 0.2)"
                }}
                transition={{ type: "spring", ...springConfigs.snappy }}
              >
                <motion.div
                  whileHover={{ scale: 1.4, rotate: 20 }}
                  transition={{ type: "spring", ...springConfigs.bouncy }}
                >
                  <Icon size={32} className="mx-auto mb-3 text-cyan-500" />
                </motion.div>
                <p className="text-sm font-medium text-slate-700">{name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionDivider color="cyan" />

      {/* ========== CASE STUDY ========== */}
      <AnimatedSection className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 60px 140px rgba(14, 165, 233, 0.3)" }}
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 20% 50%, rgba(14,165,233,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)',
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full">
                  <CheckCircle size={14} className="text-green-400" />
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Real World Result</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={cinematicStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[
                  { label: 'The Client', title: 'The Plumbing Co.', desc: 'Local plumbing company, 12 technicians' },
                  { label: 'The Problem', content: 'Office staff spent <span class="text-orange-400 font-semibold">10 hours/week</span> manually copying invoices.' },
                  { label: 'The Solution', content: 'Custom API bridge that auto-syncs to accounting <span class="text-green-400 font-semibold">instantly</span>.' },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <h4 className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">{item.label}</h4>
                    {item.title ? (
                      <>
                        <p className="text-white text-lg font-semibold">{item.title}</p>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </>
                    ) : (
                      <p className="text-white" dangerouslySetInnerHTML={{ __html: item.content }} />
                    )}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-6">
                  {[
                    { value: '100%', label: 'Automated', color: 'text-green-400' },
                    { value: '0', label: 'Errors', color: 'text-cyan-400' },
                    { value: '10hrs', label: 'Saved/Week', color: 'text-orange-400' },
                  ].map(({ value, label, color }, i) => (
                    <motion.div 
                      key={i}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.12, type: "spring", ...springConfigs.bouncy }}
                      whileHover={{ scale: 1.15 }}
                    >
                      <p className={`text-3xl font-bold ${color}`}>{value}</p>
                      <p className="text-xs text-slate-400">{label}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + i * 0.12, type: "spring", ...springConfigs.bouncy }}
                    >
                      <Star size={20} className="text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionDivider color="green" />

      {/* ========== PRAIRIE TRUST SECTION ========== */}
      <AnimatedSection id="about" className="relative py-24 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/prairie-hero.jpeg")' }}
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", ...springConfigs.snappy }}
          >
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <MapPin size={16} className="text-orange-400" />
            </motion.div>
            <span className="text-sm font-semibold text-white">Locally Owned & Operated | Regina, SK</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built in the Prairies.<br />
            <motion.span 
              className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Trusted Across Canada.
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            We believe in the Prairie values of hard work and straight talk. No overseas call centers—just real support from a team right here in Saskatchewan.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: ShieldCheck, text: 'SOC 2 Compliant' },
              { icon: Lock, text: 'End-to-End Encryption' },
              { icon: Server, text: 'Canadian Data Centers' },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
                variants={scaleIn}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.18)" }}
                transition={{ type: "spring", ...springConfigs.snappy }}
              >
                <Icon size={18} className="text-green-400" />
                <span className="text-sm font-medium text-white">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionDivider color="orange" />

      {/* ========== FINAL CTA ========== */}
      <AnimatedSection id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(14,165,233,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)',
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Eliminate the Busywork?
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-400 mb-10"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
          >
            Whether you need to connect existing tools or build something new, let's talk about what's possible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
          >
            <PremiumButton onClick={() => window.location.href = '/why-us#contact'} className="text-lg px-10 py-5">
              Book Your Free Consultation
              <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={20} />
              </motion.span>
            </PremiumButton>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ========== FOOTER ========== */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div className="flex items-center gap-3 bg-white rounded-lg p-3" whileHover={{ scale: 1.05 }}>
              <img src="/logo.png" alt="Maple Tech Solutions" className="h-10 w-auto object-contain" />
            </motion.div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <motion.a href="/why-us#contact" className="hover:text-white transition-colors" whileHover={{ scale: 1.08, color: "#0EA5E9" }}>
                sales@mapletech.solutions
              </motion.a>
              <span>|</span>
              <motion.a href="tel:+13069421617" className="hover:text-white transition-colors" whileHover={{ scale: 1.08, color: "#0EA5E9" }}>
                +1 (306) 942-1617
              </motion.a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© 2025 Maple Tech Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <motion.a href="#" className="hover:text-slate-300" whileHover={{ scale: 1.08 }}>Privacy Policy</motion.a>
              <motion.a href="#" className="hover:text-slate-300" whileHover={{ scale: 1.08 }}>Terms of Service</motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
