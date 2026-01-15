import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, Bot, Phone, MessageSquare, FileText, Star,
  Shield, Zap, TrendingUp, Clock, CheckCircle, AlertTriangle,
  Sparkles, Radio, BarChart3
} from 'lucide-react';
import {
  PremiumButton,
  SectionDivider,
  AnimatedSection,
  fadeInUp,
  scaleIn,
  cinematicStagger,
  springConfigs
} from '../components/shared/SharedComponents';

// ============================================
// DIGITAL VOICE WAVE VISUALIZATION
// ============================================
const DigitalVoiceWave = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Central AI Core */}
      <motion.div
        className="absolute z-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl"
        animate={{
          boxShadow: [
            "0 0 60px rgba(6, 182, 212, 0.5)",
            "0 0 100px rgba(6, 182, 212, 0.8)",
            "0 0 60px rgba(6, 182, 212, 0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Bot size={48} className="text-white" />
      </motion.div>

      {/* Orbiting Nodes */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-cyan-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: [
              Math.cos((angle * Math.PI) / 180) * 150,
              Math.cos(((angle + 360) * Math.PI) / 180) * 150,
            ],
            y: [
              Math.sin((angle * Math.PI) / 180) * 150,
              Math.sin(((angle + 360) * Math.PI) / 180) * 150,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear"
          }}
        />
      ))}

      {/* Voice Wave Lines */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute bg-cyan-400/20"
          style={{
            width: '2px',
            height: '60px',
            left: `${35 + i * 5}%`,
            transformOrigin: 'center',
          }}
          animate={{
            scaleY: [0.3, 1, 0.5, 1.2, 0.3],
            opacity: [0.3, 0.8, 0.5, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Pulsing Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border-2 border-cyan-400/30"
          style={{
            width: '80px',
            height: '80px',
            left: '50%',
            top: '50%',
            marginLeft: '-40px',
            marginTop: '-40px',
          }}
          animate={{
            scale: [1, 3, 3],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

// ============================================
// 1. ACTIVE CALL VISUALIZATION
// ============================================
const PulseCallGraphic = () => {
  const [callsProcessed, setCallsProcessed] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCallsProcessed((prev) => (prev + 1) % 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
      {/* Central Pulse Circle */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 40px rgba(6, 182, 212, 0.6)",
            "0 0 80px rgba(6, 182, 212, 0.9)",
            "0 0 40px rgba(6, 182, 212, 0.6)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Phone size={48} className="text-white" />
      </motion.div>

      {/* Pulsing Rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full border-2 border-cyan-400/40"
          style={{
            width: '100px',
            height: '100px',
          }}
          animate={{
            scale: [1, 3.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.75,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Floating Incoming Calls */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 200;

        return (
          <motion.div
            key={`call-${i}`}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{
              x: Math.cos(angle) * radius - 50,
              y: Math.sin(angle) * radius - 20,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full backdrop-blur-sm"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(6, 182, 212, 0.3)",
                  "0 0 20px rgba(6, 182, 212, 0.6)",
                  "0 0 10px rgba(6, 182, 212, 0.3)",
                ],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Phone size={16} className="text-cyan-400" />
              <span className="text-xs text-cyan-300 font-semibold whitespace-nowrap">
                Incoming
              </span>
            </motion.div>

            {/* Transform to Booked */}
            <motion.div
              className="absolute inset-0 flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/50 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                scale: [0, 0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5 + 1.5,
              }}
            >
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-xs text-green-300 font-semibold whitespace-nowrap">
                Booked
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Stats Counter */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-cyan-400 text-sm font-semibold">
          24/7 Active • Never Misses a Call
        </p>
      </motion.div>
    </div>
  );
};

// ============================================
// 2. FOLLOW-UP LOOP VISUALIZATION
// ============================================
const LoopGraphic = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    { label: "Quote Sent", icon: FileText, color: "cyan" },
    { label: "Wait 2 Days", icon: Clock, color: "orange" },
    { label: "Follow Up", icon: MessageSquare, color: "green" },
    { label: "Deal Closed", icon: CheckCircle, color: "emerald" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-visible p-8">
      {/* Circular Path */}
      <svg className="absolute w-80 h-80" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="rgba(6, 182, 212, 0.2)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Traveling Dot */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-cyan-400 shadow-lg"
        style={{
          offsetPath: "path('M 100 30 A 70 70 0 1 1 99.9 30')",
          offsetDistance: "0%",
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
          boxShadow: [
            "0 0 20px rgba(6, 182, 212, 0.8)",
            "0 0 30px rgba(6, 182, 212, 1)",
            "0 0 20px rgba(6, 182, 212, 0.8)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Step Nodes */}
      {steps.map((step, i) => {
        const angle = (i * 90 - 90) * (Math.PI / 180);
        const radius = 140;
        const Icon = step.icon;
        const isActive = i === activeStep;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="relative flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={`w-20 h-20 rounded-full flex items-center justify-center border-4 ${
                  isActive
                    ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-300 shadow-2xl'
                    : step.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 border-cyan-400/50'
                    : step.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-600 border-orange-400/50'
                    : step.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600 border-green-400/50'
                    : 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-400/50'
                }`}
                animate={{
                  scale: isActive ? [1, 1.15, 1] : 1,
                  boxShadow: isActive
                    ? [
                        '0 0 30px rgba(34, 197, 94, 0.6)',
                        '0 0 50px rgba(34, 197, 94, 0.9)',
                        '0 0 30px rgba(34, 197, 94, 0.6)',
                      ]
                    : [
                        `0 0 20px rgba(6, 182, 212, 0.3)`,
                        `0 0 30px rgba(6, 182, 212, 0.5)`,
                        `0 0 20px rgba(6, 182, 212, 0.3)`,
                      ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <Icon size={28} className="text-white" />
              </motion.div>
              <motion.p
                className={`mt-2 text-sm font-bold whitespace-nowrap px-4 py-2 rounded-full ${
                  isActive
                    ? 'bg-green-500/90 text-white border-2 border-green-300'
                    : 'bg-slate-800/80 text-cyan-300 border border-cyan-500/30'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isActive ? [1, 1.1, 1] : 1
                }}
                transition={{
                  delay: i * 0.2 + 0.3,
                  scale: { duration: 0.5, repeat: Infinity }
                }}
              >
                {step.label}
              </motion.p>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center Text */}
      <motion.div
        className="absolute text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-cyan-400 text-lg font-bold">Automated</p>
        <p className="text-cyan-300 text-sm">Follow-Up Loop</p>
      </motion.div>
    </div>
  );
};

// ============================================
// 3. DOCUMENT BUILDER VISUALIZATION
// ============================================
const DocBuilderGraphic = () => {
  const [buildStage, setBuildStage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setBuildStage((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden p-8">
      {/* Document Sheet */}
      <motion.div
        className="relative w-full max-w-sm h-96 bg-white rounded-lg shadow-2xl overflow-hidden"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        {/* Document Lines */}
        <div className="p-8 space-y-3">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="h-2 bg-gradient-to-r from-slate-300 to-slate-200 rounded"
              style={{
                width: i === 11 ? '60%' : i % 3 === 0 ? '90%' : '100%',
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{
                scaleX: buildStage >= 1 ? 1 : 0,
              }}
              transition={{
                delay: i * 0.02,
                duration: 0.15,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Signature Line */}
          <motion.div
            className="mt-8 pt-4 border-t-2 border-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: buildStage >= 2 ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="relative"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: buildStage >= 2 ? 1 : 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              <svg className="w-32 h-12" viewBox="0 0 100 40">
                <motion.path
                  d="M 10 30 Q 20 10, 40 25 T 80 20"
                  stroke="#1e293b"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: buildStage >= 2 ? 1 : 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                />
              </svg>
              <p className="text-xs text-slate-500 mt-1">Customer Signature</p>
            </motion.div>
          </motion.div>
        </div>

        {/* PAID Stamp */}
        <AnimatePresence>
          {buildStage >= 3 && (
            <motion.div
              className="absolute top-1/2 right-12 -translate-y-1/2"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{
                scale: [0, 1.3, 1],
                rotate: [-45, 15, 12],
                opacity: 1,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center bg-green-500/10 -rotate-12">
                  <p className="text-green-600 text-2xl font-bold tracking-wider">PAID</p>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-green-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Sparkles Effect */}
      {buildStage >= 3 && (
        <>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${50 + (Math.random() - 0.5) * 40}%`,
                top: `${50 + (Math.random() - 0.5) * 40}%`,
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
                y: [0, -50],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
            />
          ))}
        </>
      )}

      {/* Bottom Label */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-cyan-400 text-sm font-semibold">
          Generated in Seconds
        </p>
      </motion.div>
    </div>
  );
};

// ============================================
// RESULT BADGE
// ============================================
const ResultBadge = ({ children }) => (
  <motion.div
    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-semibold shadow-lg"
    initial={{ scale: 0, rotate: -180 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ type: "spring", ...springConfigs.bouncy, delay: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)" }}
  >
    <CheckCircle size={20} />
    {children}
  </motion.div>
);

// ============================================
// ZIG-ZAG FEATURE SECTION
// ============================================
const ZigZagFeature = ({ icon: Icon, headline, problem, solution, result, imagePosition = "right", index, visualization: VisualizationComponent, agentLabel, accentColor = "cyan" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isImageRight = imagePosition === "right";

  // Color mappings
  const colorMap = {
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
      glow: "rgba(6, 182, 212, 0.5)"
    },
    green: {
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      text: "text-green-400",
      glow: "rgba(34, 197, 94, 0.5)"
    },
    orange: {
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      text: "text-orange-400",
      glow: "rgba(249, 115, 22, 0.5)"
    }
  };

  const colors = colorMap[accentColor] || colorMap.cyan;

  return (
    <motion.div
      ref={ref}
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className={`max-w-7xl mx-auto px-6 flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24`}>


        {/* Text Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: isImageRight ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Icon */}
          <motion.div
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-8 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 10, boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)" }}
          >
            <Icon size={32} className="text-white" />
          </motion.div>

          {/* Digital Identity Badge */}
          {agentLabel && (
            <motion.div
              className={`inline-flex items-center gap-3 px-6 py-3 ${colors.bg} border-2 ${colors.border} rounded-full mb-6`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glowing green dot */}
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 8px rgba(34, 197, 94, 0.6)",
                    "0 0 20px rgba(34, 197, 94, 0.9)",
                    "0 0 8px rgba(34, 197, 94, 0.6)",
                  ],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={`text-sm md:text-base font-bold ${colors.text} uppercase tracking-widest`}>
                {agentLabel}
              </span>
            </motion.div>
          )}

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h2>

          {/* The Problem */}
          <div className="mb-6 p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
            <p className="text-slate-300 leading-relaxed italic">
              "{problem}"
            </p>
          </div>

          {/* The Solution */}
          <div className="mb-6 p-6 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-lg">
            <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <Zap size={20} />
              The Solution
            </h3>
            <p className="text-slate-200 leading-relaxed">
              {solution}
            </p>
          </div>

          {/* Result Badge */}
          {result && <ResultBadge>{result}</ResultBadge>}
        </motion.div>

        {/* Visual Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: isImageRight ? 60 : -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative group">
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Animated Visualization */}
            <div className="relative">
              {VisualizationComponent ? <VisualizationComponent /> : (
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 flex items-center justify-center min-h-[400px] border border-cyan-500/20">
                  <Icon size={120} className="text-cyan-500/30" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ============================================
// TOOL CARD
// ============================================
const ToolCard = ({ icon: Icon, headline, copy, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-cyan-500/20 overflow-hidden"
        whileHover={{
          y: -10,
          boxShadow: "0 30px 60px rgba(6, 182, 212, 0.3)",
          borderColor: "rgba(6, 182, 212, 0.5)"
        }}
        transition={{ type: "spring", ...springConfigs.snappy }}
      >
        {/* Background glow on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Icon */}
        <motion.div
          className="relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6"
          whileHover={{ scale: 1.2, rotate: 15 }}
          transition={{ type: "spring", ...springConfigs.bouncy }}
        >
          <Icon size={28} className="text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-4 relative">
          {headline}
        </h3>
        <p className="text-slate-300 leading-relaxed relative">
          {copy}
        </p>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </motion.div>
    </motion.div>
  );
};

// ============================================
// MAIN AUTOMATOR PAGE
// ============================================
export default function Automator() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    window.location.href = '/why-us#contact';
  };

  const goBack = () => {
    navigate('/');
    // Scroll to the AI Employee section after navigation
    setTimeout(() => {
      const element = document.getElementById('ai-employee-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const goToWhyUs = () => {
    navigate('/why-us');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* ========== HERO SECTION ========== */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`grid-v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
              style={{ left: `${i * 5}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`grid-h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
              style={{ top: `${i * 6.66}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

        {/* Radial Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-slate-800 to-blue-600/15"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            variants={cinematicStagger}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-400 mb-8 shadow-lg"
              variants={scaleIn}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} />
              </motion.div>
              The AI Workforce
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Meet Your New 24/7
              </span>
              <br />
              <span className="text-white">Digital Workforce.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              They never sleep, they never complain, and they never call in sick.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              variants={fadeInUp}
            >
              <PremiumButton onClick={scrollToContact}>
                Hire Your AI Team
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </PremiumButton>
              <PremiumButton onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} variant="secondary">
                See How It Works
              </PremiumButton>
            </motion.div>

            {/* Digital Voice Wave Visualization */}
            <motion.div
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <DigitalVoiceWave />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="cyan" />

      {/* ========== FEATURE 1: AI RECEPTIONIST ========== */}
      <div id="features">
        <ZigZagFeature
          icon={Phone}
          agentLabel="AI RECEPTIONIST AGENT"
          accentColor="cyan"
          headline="Is Your Phone Blowing Up While You're Trying to Work?"
          problem="You're on a job site, under a sink, or in a meeting. The phone rings. You ignore it. That wasn't just a missed call, it was a missed paycheck."
          solution="Meet your new AI Receptionist. It answers every single call instantly, 24/7. It speaks naturally, answers questions, and books appointments directly into your calendar. By the time you check your phone, the job is already sold."
          result="Zero Missed Calls. Zero Lost Revenue."
          imagePosition="right"
          index={0}
          visualization={PulseCallGraphic}
        />
      </div>

      <SectionDivider color="cyan" />

      {/* ========== FEATURE 2: FOLLOW-UP ASSISTANT ========== */}
      <ZigZagFeature
        icon={MessageSquare}
        agentLabel="SALES & NURTURE AGENT"
        accentColor="green"
        headline="Stop Chasing Ghosts. Let AI Close the Loop."
        problem="You send a quote, and then... silence. You spend hours manually emailing and texting just to hear 'I'm still thinking about it.'"
        solution="Our Hyper-Realistic AI Assistant handles the chase. It automatically follows up via SMS, Email, and Phone until they book. Have a list of old clients you haven't touched in months? Our AI will text them all personally to re-engage them. It costs 5x more to get a new client than to keep an old one. Stop ignoring your gold mine."
        result="Automated Follow-Up. Endless Persistence."
        imagePosition="left"
        index={1}
        visualization={LoopGraphic}
      />

      <SectionDivider color="cyan" />

      {/* ========== FEATURE 3: INSTANT QUOTER ========== */}
      <ZigZagFeature
        icon={FileText}
        agentLabel="ESTIMATES & ADMIN AGENT"
        accentColor="orange"
        headline="Get Off the Computer and Get Back to Your Family."
        problem="If you run a service business, you know the 'Second Shift'. Coming home after a long day only to spend 2 hours typing up estimates."
        solution="The Automated Quote Engine. Your AI gathers job details and generates a professional estimate instantly. It sends it out, collects the signature, and grabs the deposit while you're driving home."
        result="Instant Quotes. Zero Overtime."
        imagePosition="right"
        index={2}
        visualization={DocBuilderGraphic}
      />

      <SectionDivider color="cyan" />

      {/* ========== NEW TOOLS GRID ========== */}
      <AnimatedSection className="py-24 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plus, Even More AI-Powered Tools
            </h2>
            <p className="text-xl text-slate-300">
              Your complete digital workforce, handling every touchpoint.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <ToolCard
              icon={Star}
              headline="The 'Review Hunter'"
              copy="Turn Happy Clients into 5-Star Reviews. The moment you mark a job 'Complete,' your AI texts the client to ask for a review. If they reply with a complaint, it alerts you instantly before they post it online."
              index={0}
            />
            <ToolCard
              icon={Shield}
              headline="The 'Tire Kicker' Filter"
              copy="Stop Wasting Time on Leads Who Can't Afford You. Our AI Gatekeeper chats with leads to qualify their budget and timeline before they ever reach your phone. Only serious buyers get through."
              index={1}
            />
          </div>
        </div>
      </AnimatedSection>

      <SectionDivider color="orange" />

      {/* ========== THE VISIONARY CLOSER ========== */}
      <AnimatedSection className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-900">
        {/* Enhanced Dramatic background with particles */}
        <div className="absolute inset-0">
          {/* Dramatic spotlight effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.3) 0%, rgba(6,182,212,0.2) 30%, transparent 60%)',
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [0.95, 1.1, 0.95],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Animated border frame */}
          <motion.div
            className="absolute inset-4 md:inset-8 border-2 border-orange-500/30 rounded-3xl"
            animate={{
              borderColor: ["rgba(249, 115, 22, 0.3)", "rgba(249, 115, 22, 0.6)", "rgba(6, 182, 212, 0.6)", "rgba(249, 115, 22, 0.3)"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-cyan-500/20"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Floating particles - fewer on mobile */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-orange-400/40 rounded-full hidden md:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Animated grid overlay */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`grid-line-${i}`}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
                style={{ top: `${i * 10}%` }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Warning Badge - Clean & Professional */}
            <motion.div
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-white font-bold text-lg mb-10 shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(249, 115, 22, 0.5)",
                  "0 0 50px rgba(249, 115, 22, 0.8)",
                  "0 0 30px rgba(249, 115, 22, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <AlertTriangle size={24} className="text-white" />
              </motion.div>
              <span className="tracking-wider">Critical Moment</span>
            </motion.div>

            {/* Enhanced Headline with better typography */}
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-10 lg:mb-12 leading-tight px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              The{' '}
              <motion.span
                className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                'Internet Moment'
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                is Happening Again.
              </motion.span>
            </motion.h2>

            {/* Enhanced content box with better design */}
            <motion.div
              className="relative bg-gradient-to-br from-orange-900/20 via-slate-900/95 to-cyan-900/20 backdrop-blur-xl border-4 border-orange-500/60 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 mb-10 md:mb-16 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              whileHover={{
                borderColor: "rgba(249, 115, 22, 0.9)",
                boxShadow: "0 0 80px rgba(249, 115, 22, 0.4), inset 0 0 60px rgba(249, 115, 22, 0.1)",
                scale: 1.02
              }}
            >
              {/* Glowing corner accents */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-full"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />

              <div className="relative z-10">
                <motion.p
                  className="text-base md:text-xl lg:text-2xl text-slate-200 leading-relaxed mb-6 md:mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Remember when people said the Internet was just a fad? Ten years later, businesses without a website went extinct.
                </motion.p>

                <motion.p
                  className="text-base md:text-xl lg:text-2xl text-slate-200 leading-relaxed mb-6 md:mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.span
                    className="text-cyan-400 font-bold text-lg md:text-2xl lg:text-3xl"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(6, 182, 212, 0.5)",
                        "0 0 30px rgba(6, 182, 212, 0.8)",
                        "0 0 20px rgba(6, 182, 212, 0.5)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AI is that same moment.
                  </motion.span>{' '}
                  Sooner or later, AI will run the backend of every successful local business.
                </motion.p>

                <motion.div
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-400 rounded-r-xl p-4 md:p-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-base md:text-xl lg:text-2xl text-slate-100 leading-relaxed">
                    You have a choice:{' '}
                    <motion.span
                      className="text-green-400 font-bold"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Be the early adopter who uses this leverage to dominate your market
                    </motion.span>
                    , or wait until it's too late to catch up. The future is inevitable. Let's build it today.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: '24/7', label: 'Always Available', icon: Clock, color: 'cyan' },
                { value: '100%', label: 'Response Rate', icon: TrendingUp, color: 'green' },
                { value: '0', label: 'Sick Days', icon: CheckCircle, color: 'orange' },
              ].map(({ value, label, icon: Icon, color }, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <motion.div
                    className={`relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border-2 border-${color}-500/30 rounded-xl md:rounded-2xl p-6 md:p-8 overflow-hidden`}
                    whileHover={{
                      scale: 1.05,
                      borderColor: `rgba(6, 182, 212, 0.6)`,
                      boxShadow: "0 20px 50px rgba(6, 182, 212, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Background glow on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <motion.div
                      className="relative z-10"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Icon size={32} className={`md:w-10 md:h-10 text-${color}-400 mx-auto mb-3 md:mb-4`} />
                      </motion.div>
                      <motion.p
                        className="text-4xl md:text-5xl font-extrabold text-white mb-2"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      >
                        {value}
                      </motion.p>
                      <p className="text-sm md:text-base text-slate-300 font-medium">{label}</p>
                    </motion.div>

                    {/* Corner shine effect */}
                    <motion.div
                      className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionDivider color="cyan" />

      {/* ========== FINAL CTA ========== */}
      <AnimatedSection className="py-32 relative overflow-hidden">
        {/* Dramatic background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-slate-800 to-blue-600/25"
          animate={{
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Robot Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-8 shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(6, 182, 212, 0.5)",
                  "0 0 100px rgba(6, 182, 212, 0.8)",
                  "0 0 60px rgba(6, 182, 212, 0.5)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Bot size={48} className="text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your AI Workforce{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Never Calls in Sick.
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12">
              Stop losing money to missed calls, forgotten follow-ups, and late-night estimate writing.
              Your digital team is ready to work right now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <PremiumButton onClick={scrollToContact} className="text-lg px-12 py-6">
                Hire Your AI Team
                <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={24} />
                </motion.span>
              </PremiumButton>

              <Link to="/platform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <PremiumButton className="text-lg px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Check Out Custom CRM
                  <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={24} />
                  </motion.span>
                </PremiumButton>
              </Link>

              <PremiumButton onClick={goToWhyUs} variant="secondary" className="text-lg px-12 py-6">
                Why Us
                <ArrowRight size={24} />
              </PremiumButton>

              <PremiumButton onClick={goBack} variant="secondary" className="text-lg px-12 py-6">
                <ArrowLeft size={24} />
                Go Back
              </PremiumButton>
            </div>

            <p className="text-sm text-slate-400 mt-8">
              See it in action • Contact us • Book an appointment
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
