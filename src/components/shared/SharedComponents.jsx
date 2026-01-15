import React, { useState, useRef } from 'react';
import { motion, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

// ============================================
// MAPLE LEAF SVG COMPONENTS
// ============================================

// Geometric/Polygon style maple leaf (matches logo aesthetic)
export const MapleLeafOutline = ({ size = 100, className = "", style = {} }) => (
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
export const MapleLeafFilled = ({ size = 100, className = "", style = {}, gradient = false }) => (
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
export const MapleLeafSimple = ({ size = 40, className = "", style = {} }) => (
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
export const springConfigs = {
  smooth: { stiffness: 100, damping: 30, mass: 1 },
  bouncy: { stiffness: 300, damping: 20, mass: 0.8 },
  gentle: { stiffness: 50, damping: 25, mass: 1.2 },
  snappy: { stiffness: 400, damping: 35, mass: 0.5 },
  float: { stiffness: 30, damping: 20, mass: 2 },
};

// ============================================
// ENHANCED ANIMATION VARIANTS
// ============================================
export const fadeInUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60, rotateY: 15 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60, rotateY: -15 },
  show: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 15 },
  show: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// Cinematic stagger container
export const cinematicStagger = {
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
// ANIMATED GRADIENT MESH (Enhanced)
// ============================================
export const GradientMeshBackground = ({ scrollProgress }) => {
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
export const AnimatedGridBackground = ({ scrollProgress }) => {
  const gridY = useTransform(scrollProgress, [0, 1], [0, 250]);
  const gridOpacity = useTransform(scrollProgress, [0, 0.5, 1], [0.25, 0.4, 0.25]);
  const smoothGridY = useSpring(gridY, springConfigs.gentle);

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ y: smoothGridY, opacity: gridOpacity }}
    >
      {/* Vertical lines */}
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
        />
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
export const SectionDivider = ({ color = "cyan" }) => {
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
export const PremiumButton = ({ children, onClick, variant = "primary", className = "" }) => {
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
export const Card3D = ({ children, className = "", glowColor = "cyan" }) => {
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
export const ExpandingFeatureCard = ({ icon: Icon, title, description, features, color, index }) => {
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
export const AnimatedSection = ({ children, className = "", id = "" }) => {
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
