import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, GitMerge, LayoutDashboard, Bot, Check,
  Wrench, HeartPulse, ShoppingBag, GraduationCap, Building2,
  Phone, MessageSquare, ShieldCheck
} from 'lucide-react';
import {
  PremiumButton,
  Card3D,
  SectionDivider,
  AnimatedSection,
  fadeInUp,
  scaleIn,
  cinematicStagger,
  springConfigs
} from '../components/shared/SharedComponents';

// ============================================
// FLOATING ANIMATED ORBS BACKGROUND
// ============================================
const FloatingOrbsBackground = () => {
  const orbs = [
    { id: 1, x: 10, y: 20, size: 200, color: 'cyan', delay: 0, duration: 8 },
    { id: 2, x: 80, y: 30, size: 150, color: 'green', delay: 0.3, duration: 9 },
    { id: 3, x: 60, y: 70, size: 180, color: 'orange', delay: 0.6, duration: 10 },
    { id: 4, x: 20, y: 80, size: 120, color: 'cyan', delay: 0.9, duration: 11 },
    { id: 5, x: 85, y: 60, size: 160, color: 'green', delay: 1.2, duration: 12 },
  ];

  const getColorGradient = (color) => {
    const colors = {
      cyan: 'from-cyan-500/20 to-cyan-600/5',
      green: 'from-green-500/20 to-emerald-600/5',
      orange: 'from-orange-500/20 to-red-600/5',
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br ${getColorGradient(orb.color)}`}
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            filter: 'blur(40px)',
            willChange: 'transform',
          }}
          animate={{
            y: [0, 40, 0],
            x: [0, 25, -15, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const { scrollY, scrollYProgress } = useScroll();

  // Mouse position for parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth spring values
  const smoothProgress = useSpring(scrollYProgress, springConfigs.smooth);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 600], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.92]);
  const smoothHeroY = useSpring(heroY, springConfigs.gentle);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Maple Tech Solutions | Custom Integrations & CRM for Canadian Businesses</title>
        <meta name="description" content="We build custom integrations and CRM systems for Saskatchewan service businesses — eliminating manual data entry and connecting your existing tools." />
        <link rel="canonical" href="https://mapletech.solutions/" />
      </Helmet>

      {/* ========== HERO SECTION ========== */}
      <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
        {/* Floating Orbs Background */}
        <FloatingOrbsBackground scrollProgress={smoothProgress} mouseX={mouseX} mouseY={mouseY} />

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
                  className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent inline-flex"
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ type: "spring", ...springConfigs.bouncy }}
                >
                  Seamless Systems.
                </motion.span>{' '}
                <motion.span
                  className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent inline-flex"
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", ...springConfigs.bouncy }}
                >
                  Custom CRMs.
                </motion.span>{' '}
                <motion.span
                  className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent inline-flex"
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
                We build custom integrations and CRM systems for Canadian service businesses — eliminating the manual data entry and copy-pasting that eats your day.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <PremiumButton onClick={() => navigate('/why-us#contact')}>
                  Book a Free Consultation
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={18} />
                  </motion.span>
                </PremiumButton>
                <PremiumButton onClick={() => scrollTo('pivot')} variant="secondary">
                  See Our Solutions
                </PremiumButton>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Network Hub Animation */}
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

              {/* Central Node - Logo */}
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

              {/* Orbit Nodes */}
              {[
                { Icon: LayoutDashboard, top: '8%', left: '12%', color: 'cyan', delay: 0.7 },
                { Icon: GitMerge, top: '3%', right: '18%', color: 'green', delay: 0.85 },
                { Icon: Bot, bottom: '20%', right: '8%', color: 'orange', delay: 1.0 },
                { Icon: Check, bottom: '10%', left: '8%', color: 'cyan', delay: 1.15 },
                { Icon: ArrowRight, top: '40%', right: '3%', color: 'green', delay: 1.3 },
                { Icon: Building2, top: '35%', left: '3%', color: 'orange', delay: 1.45 },
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

      {/* ========== THE PIVOT: BRIDGE VS BUILD ========== */}
      <AnimatedSection id="pivot" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-flex px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-4 shadow-lg"
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
            {/* The Bridge - TEAL */}
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

              <span className="inline-flex px-3 py-1 bg-cyan-500/10 rounded-full text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-4">
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

            {/* The Build - ORANGE */}
            <Card3D glowColor="orange" className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.div
                className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.2, rotate: -15, boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}
                transition={{ type: "spring", ...springConfigs.bouncy }}
              >
                <LayoutDashboard size={32} className="text-orange-500" />
              </motion.div>

              <span className="inline-flex px-3 py-1 bg-orange-500/10 rounded-full text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">
                Option 2
              </span>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">The Build</h3>
              <p className="text-orange-600 font-medium mb-4">Custom CRM</p>

              <p className="text-slate-500 mb-6">
                Tired of generic software? We build streamlined CRM systems from the ground up, tailored exactly to your workflow.
              </p>

              <div className="space-y-3">
                {['Built for your workflow', 'No bloat features', 'One-time investment', 'Scales with you'].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center"
                      whileHover={{ scale: 1.3, backgroundColor: "rgba(249, 115, 22, 0.2)" }}
                    >
                      <Check size={14} className="text-orange-500" />
                    </motion.div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </Card3D>
          </div>

          {/* ========== DIGITAL WORKFORCE BANNER ========== */}
          <motion.div
            id="ai-employee-section"
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 relative overflow-hidden border border-orange-500/20"
              whileHover={{ boxShadow: "0 50px 120px rgba(249, 115, 22, 0.25)", borderColor: "rgba(249, 115, 22, 0.4)" }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(249,115,22,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(14,165,233,0.1) 0%, transparent 50%)',
                }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Top Section */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8 relative z-10">
                <motion.div
                  className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 20, boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)" }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Bot size={40} className="text-orange-400" />
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <span className="inline-flex px-3 py-1 bg-orange-500/20 rounded-full text-xs font-semibold text-orange-400 uppercase tracking-wider mb-2">
                    Add to either path
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">Your Business, Running 24/7</h3>
                  <p className="text-slate-400">
                    Add AI automation to any package — phone answering, automated follow-ups, and instant quote generation without adding headcount.
                  </p>
                </div>

                <Link to="/automator" className="flex-shrink-0">
                  <PremiumButton>
                    Explore AI Workforce
                    <ArrowRight size={18} />
                  </PremiumButton>
                </Link>
              </div>

              {/* Sneak Peek Grid */}
              <div className="grid md:grid-cols-3 gap-4 relative z-10">
                {[
                  { icon: Phone, title: 'AI Receptionist', desc: 'Answer every call, 24/7' },
                  { icon: MessageSquare, title: 'Follow-Up Pro', desc: 'Never lose a lead again' },
                  { icon: Check, title: 'Instant Quotes', desc: 'Send estimates in seconds' }
                ].map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={i}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(249, 115, 22, 0.5)",
                      boxShadow: "0 10px 30px rgba(249, 115, 22, 0.2)"
                    }}
                  >
                    <Icon size={24} className="text-orange-400 mb-2" />
                    <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                    <p className="text-slate-400 text-xs">{desc}</p>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionDivider color="green" />

      {/* ========== CRM TEASER (Laptop on Desk) ========== */}
      <AnimatedSection className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-flex px-4 py-1.5 bg-green-100 rounded-full text-xs font-semibold text-green-700 uppercase tracking-wider mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                Built for Business
              </motion.span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Imagine a CRM{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Built Around YOU.
                </span>
              </h2>

              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                No more forcing your business into rigid, one-size-fits-all software. Your custom CRM adapts to your workflow, not the other way around.
              </p>

              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <Check size={16} className="text-green-600" />
                <p className="text-sm font-medium text-green-700">
                  Tailored strictly to your needs. Built for your business.
                </p>
              </motion.div>

              <Link to="/platform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <PremiumButton>
                  See Your Custom CRM
                  <ArrowRight size={18} />
                </PremiumButton>
              </Link>
            </motion.div>

            {/* Image Right - Laptop Placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-green-200/60 to-cyan-100/40 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* CRM Dashboard Preview Image */}
                <img
                  src="/images/feature-crm-dashboard.svg"
                  alt="Custom CRM Dashboard showing sales pipeline, lead tracking, and business analytics"
                  loading="lazy"
                  className="w-full rounded-xl shadow-2xl border border-slate-200/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]"
                />

                {/* Floating accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-2xl -z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <SectionDivider color="orange" />

      {/* ========== INDUSTRIES GRID ========== */}
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
              If your team is drowning in copy-pasting between apps, we fix that.
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

      {/* ========== EXPLORE SOLUTIONS ========== */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6" 
              variants={fadeInUp}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600" 
              variants={fadeInUp}
            >
              Explore our complete solutions and see how we can help you scale.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* AI Systems Card */}
            <Link to="/automator" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <motion.div
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-3xl p-8 h-full cursor-pointer group hover:border-cyan-500/60 transition-all duration-300"
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 80px rgba(6, 182, 212, 0.25)"
                }}
              >
                <div className="mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Bot size={32} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">AI Workforce</h3>
                <p className="text-slate-600 mb-6">
                  Your digital team that never sleeps. AI receptionists, follow-ups, and automation that scales.
                </p>
                <div className="inline-flex items-center gap-2 text-cyan-600 font-semibold group-hover:text-cyan-700">
                  Explore AI Systems
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Custom CRM Card */}
            <Link to="/platform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <motion.div
                className="bg-gradient-to-br from-orange-500/10 to-green-500/10 border-2 border-orange-500/30 rounded-3xl p-8 h-full cursor-pointer group hover:border-orange-500/60 transition-all duration-300"
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 80px rgba(249, 115, 22, 0.25)"
                }}
              >
                <div className="mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <LayoutDashboard size={32} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom CRM</h3>
                <p className="text-slate-600 mb-6">
                  Built exactly for your workflow. Manage leads, pipelines, and payments without the bloat.
                </p>
                <div className="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:text-orange-700">
                  See Your CRM
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Why Us Card */}
            <Link to="/why-us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <motion.div
                className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-2 border-teal-500/30 rounded-3xl p-8 h-full cursor-pointer group hover:border-teal-500/60 transition-all duration-300"
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 80px rgba(20, 184, 166, 0.25)"
                }}
              >
                <div className="mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <ShieldCheck size={32} className="text-white" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Why Maple Tech?</h3>
                <p className="text-slate-600 mb-6">
                  See why service businesses trust us. Transparent pricing, local support, and real results.
                </p>
                <div className="inline-flex items-center gap-2 text-teal-600 font-semibold group-hover:text-teal-700">
                  Learn Why Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
