import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, MapPin, Wrench, Zap } from 'lucide-react';
import HomeServiceCards from '../components/sections/HomeServiceCards';
import HomeHowItWorks from '../components/sections/HomeHowItWorks';
import {
  PremiumButton,
  SectionDivider,
  MapleLeafOutline,
  MapleLeafSimple,
  fadeInUp,
  scaleIn,
  cinematicStagger,
  springConfigs,
  useLiteMotion,
} from '../components/shared/SharedComponents';

const helpCards = [
  {
    title: 'Trades & Local Services',
    body: 'HVAC, plumbing, cleaning, landscaping, roofing, garage services, and more.',
    cta: 'See Local Business Booster',
    href: '/local-business-booster',
    accent: 'from-orange-500 to-amber-400',
    border: 'border-orange-200 hover:border-orange-400',
    bg: 'from-orange-50 to-amber-50',
    text: 'text-orange-600',
    shadow: 'rgba(249, 115, 22, 0.18)',
    primary: true,
  },
  {
    title: 'Growing Service Businesses',
    body: 'Teams that outgrew spreadsheets and need real systems and pipelines.',
    cta: 'Custom CRM & Automations',
    href: '/custom-crm',
    accent: 'from-green-500 to-emerald-400',
    border: 'border-green-200 hover:border-green-400',
    bg: 'from-green-50 to-emerald-50',
    text: 'text-green-600',
    shadow: 'rgba(34, 197, 94, 0.16)',
  },
  {
    title: 'Established Firms with ERPs',
    body: 'Construction, industrial, or field service companies with tools like Procore, Sage, Vista, or QuickBooks.',
    cta: 'Integrations & ERP',
    href: '/integrations',
    accent: 'from-slate-600 to-slate-800',
    border: 'border-slate-200 hover:border-slate-400',
    bg: 'from-slate-50 to-slate-100',
    text: 'text-slate-700',
    shadow: 'rgba(15, 23, 42, 0.14)',
  },
];

const trustItems = [
  { icon: MapPin, label: 'Regina, Saskatchewan' },
  { icon: Zap, label: '7-14 day setup' },
  { icon: CheckCircle, label: 'No lock-in contracts' },
];

const whyBullets = [
  'We focus on systems that actually get used - not bloated software that needs a consultant to run.',
  'We understand trades and service operations: calls, quotes, jobs, invoices, repeat customers.',
  'We handle the tech so you can focus on running the business. Setup takes days, not months.',
];

export default function Home() {
  const { liteMotion, disableHoverAnimations, disableInfiniteLoops } = useLiteMotion();

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Maple Tech Solutions | Systems & Software for Local Businesses</title>
        <meta
          name="description"
          content="Maple Tech builds websites, automations, and custom CRM systems for local trades and service businesses in Saskatchewan. Done-with-you, not done-for-you."
        />
        <link rel="canonical" href="https://mapletech.solutions/" />
      </Helmet>

      <section aria-label="Hero" className="relative overflow-hidden bg-slate-900 pt-32 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(20,184,166,0.08),transparent_36%),linear-gradient(to_bottom,rgba(15,23,42,0)_0%,rgba(15,23,42,1)_88%)]" />
        {!disableInfiniteLoops && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[0, 2].map((delay) => (
              <motion.div
                key={delay}
                className="absolute w-[34rem] h-[34rem] rounded-full border border-teal-500/10"
                initial={{ scale: 0.8, opacity: 0.06 }}
                animate={{ scale: [0.8, 1.5], opacity: [0.06, 0] }}
                transition={{ duration: 4, delay, repeat: Infinity, ease: "easeOut" }}
              />
            ))}
          </div>
        )}

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
          variants={liteMotion ? undefined : cinematicStagger}
          initial={liteMotion ? false : "hidden"}
          animate="show"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-slate-400 uppercase tracking-[0.15em] mb-8"
            variants={liteMotion ? undefined : fadeInUp}
          >
            <span className={`w-2 h-2 bg-orange-400 rounded-full ${disableInfiniteLoops ? '' : 'animate-pulse'}`} />
            Based in Saskatchewan - Built for Local Business
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.05] mb-8"
            variants={liteMotion ? undefined : fadeInUp}
          >
            Systems and software that help local businesses run{' '}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              smoother.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-10"
            variants={liteMotion ? undefined : fadeInUp}
          >
            Maple Tech builds websites, automations, and integrations for trades and service businesses that are tired of doing everything manually.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            variants={liteMotion ? undefined : fadeInUp}
          >
            <Link to="/why-us#contact">
              <PremiumButton variant="orange">Book a free strategy call</PremiumButton>
            </Link>
            <Link
              to="/local-business-booster"
              className="text-slate-400 hover:text-white font-medium transition-colors text-sm flex items-center gap-1"
            >
              See how we help local businesses
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={liteMotion ? undefined : fadeInUp}
          >
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Icon size={14} className="text-orange-400" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section aria-label="Who we help" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            variants={liteMotion ? undefined : fadeInUp}
            initial={liteMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600 mb-3">Who we help</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Find yourself below.</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={liteMotion ? undefined : cinematicStagger}
            initial={liteMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {helpCards.map((card) => (
              <motion.div key={card.title} variants={liteMotion ? undefined : scaleIn}>
                <Link
                  to={card.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 ${card.border} bg-gradient-to-br ${card.bg} p-8 transition-all duration-300 hover:shadow-xl`}
                >
                  <div className={`absolute left-0 top-0 h-1.5 w-full origin-left scale-x-[0.22] bg-gradient-to-r ${card.accent} transition-transform duration-300 group-hover:scale-x-100`} />
                  <motion.div
                    className="relative flex h-full flex-col"
                    whileHover={disableHoverAnimations ? undefined : { y: -6, boxShadow: `0 24px 60px ${card.shadow}` }}
                    transition={{ type: "spring", ...springConfigs.snappy }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/70 border border-white flex items-center justify-center shadow-sm">
                        <Wrench size={22} className={card.text} />
                      </div>
                      {card.primary && (
                        <span className={`w-2.5 h-2.5 bg-orange-400 rounded-full ${disableInfiniteLoops ? '' : 'animate-pulse'}`} />
                      )}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed flex-1 mb-6">{card.body}</p>
                    <span className={`inline-flex items-center gap-2 text-sm font-bold ${card.text} group-hover:gap-3 transition-all duration-200`}>
                      {card.cta}
                      <ArrowRight size={16} />
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <HomeServiceCards />

      <section aria-label="Why Maple Tech" className="relative overflow-hidden py-24 bg-slate-900">
        <MapleLeafOutline size={400} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.03]" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          variants={liteMotion ? undefined : cinematicStagger}
          initial={liteMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 uppercase tracking-widest mb-8"
            variants={liteMotion ? undefined : fadeInUp}
          >
            <MapleLeafSimple size={14} className="text-orange-400" />
            Built in the Prairies, for local businesses
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-12"
            variants={liteMotion ? undefined : fadeInUp}
          >
            Simple, focused, local.
          </motion.h2>

          <div className="max-w-xl mx-auto">
            {whyBullets.map((bullet) => (
              <motion.div
                key={bullet}
                className="flex items-start gap-4 text-left py-5 border-b border-white/5"
                variants={liteMotion ? undefined : fadeInUp}
              >
                <CheckCircle size={20} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-slate-300 leading-relaxed">{bullet}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <HomeHowItWorks />

      <SectionDivider color="orange" />

      <section aria-label="Final call to action" className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-900 to-teal-950">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
        <motion.div
          className="relative z-10 max-w-2xl mx-auto px-6 text-center"
          variants={liteMotion ? undefined : fadeInUp}
          initial={liteMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Ready to get your local business running on systems instead of chaos?
          </h2>
          <p className="text-slate-400 text-lg font-light mb-10">
            Book a free 20-minute call. No pitch deck, no pressure - just a real conversation about what would help your business.
          </p>
          <Link to="/why-us#contact">
            <PremiumButton variant="orange">Book a call</PremiumButton>
          </Link>
          <Link
            to="/local-business-booster"
            className="text-slate-500 hover:text-slate-300 text-sm mt-4 block transition-colors"
          >
            Or see our Local Business Booster <ArrowRight size={14} className="inline-block" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
