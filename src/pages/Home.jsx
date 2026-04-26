import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, GitMerge, LayoutDashboard, Bot, Check,
  Wrench, HeartPulse, ShoppingBag, GraduationCap, Building2,
  Phone, MessageSquare, ShieldCheck
} from 'lucide-react';
import { Hero } from '@/components/ui/animated-hero';
import {
  PremiumButton,
  Card3D,
  SectionDivider,
  AnimatedSection,
  fadeInUp,
  scaleIn,
  cinematicStagger,
  springConfigs,
  useLiteMotion
} from '../components/shared/SharedComponents';

export default function Home() {
  const {
    disableInfiniteLoops,
    disableHoverAnimations,
  } = useLiteMotion();

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Maple Tech Solutions | Custom Integrations & CRM for Canadian Businesses</title>
        <meta name="description" content="We build custom integrations and CRM systems for Saskatchewan service businesses — eliminating manual data entry and connecting your existing tools." />
        <link rel="canonical" href="https://mapletech.solutions/" />
      </Helmet>

      {/* ========== HERO SECTION ========== */}
      <Hero />

      {/* WHO WE WORK WITH */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 mb-3">
              Who We Work With
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Built for businesses that are done with generic software
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Trades & Contractors",
                pain: "Missing calls on job sites. Manual quotes. Slow follow-ups. Losing jobs to faster competitors.",
                cta: "Built for the trades",
                href: "/for-trades",
                accent: "from-orange-500 to-amber-500",
                bg: "from-orange-50 to-amber-50",
                border: "border-orange-200 hover:border-orange-400",
              },
              {
                title: "Wellness & Aesthetics",
                pain: "Vagaro, Mindbody, and Jane have gaps. Your workflow doesn't fit their mould — and your clients feel it.",
                cta: "Built for clinics & spas",
                href: "/for-clinics",
                accent: "from-teal-500 to-cyan-500",
                bg: "from-teal-50 to-cyan-50",
                border: "border-teal-200 hover:border-teal-400",
              },
              {
                title: "Construction Operations",
                pain: "ServiceTitan, Vista, Sage 300 — all live in silos. Your team is copy-pasting data between them daily.",
                cta: "See how we connect your stack",
                href: "/for-construction",
                accent: "from-slate-600 to-slate-800",
                bg: "from-slate-50 to-slate-100",
                border: "border-slate-200 hover:border-slate-400",
              },
            ].map((niche) => (
              <motion.div
                key={niche.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                <Link
                  to={niche.href}
                  className={`group flex flex-col h-full rounded-3xl border-2 ${niche.border} bg-gradient-to-br ${niche.bg} p-8 transition-all duration-300 hover:shadow-xl`}
                >
                  <div className={`w-10 h-1.5 rounded-full bg-gradient-to-r ${niche.accent} mb-6`} />
                  <h3 className="text-xl font-black text-slate-900 mb-3">{niche.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-1 mb-6">{niche.pain}</p>
                  <span className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${niche.accent} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-200`}>
                    {niche.cta}
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
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
              whileHover={disableHoverAnimations ? undefined : { boxShadow: "0 40px 90px rgba(249, 115, 22, 0.2)", borderColor: "rgba(249, 115, 22, 0.35)" }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(249,115,22,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(14,165,233,0.1) 0%, transparent 50%)',
                }}
                animate={disableInfiniteLoops ? undefined : { opacity: [0.5, 0.75, 0.5] }}
                transition={disableInfiniteLoops ? undefined : { duration: 4.5, repeat: Infinity }}
              />

              {/* Top Section */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8 relative z-10">
                <motion.div
                  className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center flex-shrink-0"
                  whileHover={disableHoverAnimations ? undefined : { scale: 1.1, rotate: 12, boxShadow: "0 0 30px rgba(249, 115, 22, 0.4)" }}
                  animate={disableInfiniteLoops ? undefined : { rotate: [0, 5, -5, 0] }}
                  transition={disableInfiniteLoops ? undefined : { duration: 5, repeat: Infinity }}
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
                    whileHover={disableHoverAnimations ? undefined : {
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
                  decoding="async"
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
                whileHover={disableHoverAnimations ? undefined : {
                  scale: 1.1,
                  y: -10,
                  boxShadow: "0 25px 60px rgba(14, 165, 233, 0.2)"
                }}
                transition={{ type: "spring", ...springConfigs.snappy }}
              >
                <motion.div
                  whileHover={disableHoverAnimations ? undefined : { scale: 1.2, rotate: 12 }}
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
                whileHover={disableHoverAnimations ? undefined : { 
                  y: -10,
                  boxShadow: "0 30px 80px rgba(6, 182, 212, 0.25)"
                }}
              >
                <div className="mb-6">
                  <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center"
                  whileHover={disableHoverAnimations ? undefined : { scale: 1.1, rotate: 8 }}
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
                whileHover={disableHoverAnimations ? undefined : { 
                  y: -10,
                  boxShadow: "0 30px 80px rgba(249, 115, 22, 0.25)"
                }}
              >
                <div className="mb-6">
                  <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-2xl flex items-center justify-center"
                  whileHover={disableHoverAnimations ? undefined : { scale: 1.1, rotate: 8 }}
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
                whileHover={disableHoverAnimations ? undefined : { 
                  y: -10,
                  boxShadow: "0 30px 80px rgba(20, 184, 166, 0.25)"
                }}
              >
                <div className="mb-6">
                  <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center"
                  whileHover={disableHoverAnimations ? undefined : { scale: 1.1, rotate: 8 }}
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
