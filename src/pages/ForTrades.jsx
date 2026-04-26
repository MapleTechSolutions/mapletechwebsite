import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, FileText, Clock, CheckCircle, ArrowDown, Zap, LayoutDashboard } from 'lucide-react';
import { PremiumButton, fadeInUp, scaleIn } from '../components/shared/SharedComponents';

const problems = [
  {
    icon: Phone,
    before: "Phone rings while you're on a job site. You miss it. They call your competitor.",
    after: "Your phone auto-replies in under 60 seconds with your name, your number, and a link to book — even when you're on the roof.",
    label: "Missed calls",
  },
  {
    icon: FileText,
    before: "You quote jobs at night from memory, on your phone's notes app, after a 10-hour day.",
    after: "We build you a quoting tool that pulls your services, your pricing, and sends a branded PDF in minutes.",
    label: "Slow quotes",
  },
  {
    icon: Clock,
    before: "You follow up manually — or forget. The lead goes cold and books someone else.",
    after: "We set up automatic follow-up messages after every inquiry. You stay top of mind without lifting a finger.",
    label: "Lost follow-ups",
  },
];

const services = [
  { icon: Phone, title: "Missed call text-back", description: "Every missed call gets an instant text reply in your name. You keep the lead. Simple." },
  { icon: FileText, title: "Quote builder", description: "A quoting tool that pulls your services, your pricing, and sends a branded PDF in minutes." },
  { icon: Zap, title: "Automated follow-up", description: "Inquiries get a follow-up message automatically — 10 minutes after they contact you, not the next day." },
  { icon: LayoutDashboard, title: "Simple lead tracker", description: "See every lead, every quote, and every job in one place. No spreadsheet. No sticky notes." },
];

export default function ForTrades() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>For Trades & Contractors | Maple Tech Solutions</title>
        <meta name="description" content="We build websites, missed call text-back, and lead systems for contractors in Saskatchewan — so you never miss a job while you're on one." />
        <link rel="canonical" href="https://mapletech.solutions/for-trades" />
      </Helmet>

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 mb-4">
              For Trades & Contractors
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
              You're losing jobs<br />
              <span className="text-orange-400">you don't even know about.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Every missed call, slow quote, and forgotten follow-up is money walking out the door. We fix that — without you needing to learn any software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/why-us#contact">
                <PremiumButton>Book a free 20-min call</PremiumButton>
              </Link>
              <Link to="/why-us">
                <button className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-colors font-semibold">
                  Why local businesses trust us →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-slate-900 border-b border-slate-800">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto grid grid-cols-3 py-14"
        >
          <div className="flex flex-col items-center justify-center text-center px-6 py-6 border-r border-slate-800 last:border-r-0">
            <p className="text-5xl font-black text-orange-400 tracking-tight">&lt; 60</p>
            <p className="text-sm text-orange-300 font-semibold mt-0.5">sec</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">Text-back response time</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-6 py-6 border-r border-slate-800 last:border-r-0">
            <p className="text-5xl font-black text-orange-400 tracking-tight">2</p>
            <p className="text-sm text-orange-300 font-semibold mt-0.5">weeks</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">Typical go-live timeline</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-6 py-6 border-r border-slate-800 last:border-r-0">
            <p className="text-5xl font-black text-orange-400 tracking-tight">0</p>
            <p className="text-sm text-orange-300 font-semibold mt-0.5">training needed</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">Tech learning curve</p>
          </div>
        </motion.div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Sound familiar?
            </h2>
            <p className="text-slate-500 text-lg">Here's what we hear from every contractor before they work with us.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {problems.map((problem) => (
              <motion.div
                key={problem.label}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-3xl border border-slate-200 overflow-hidden bg-white"
              >
                {/* BEFORE half */}
                <div className="bg-red-50 border-l-4 border-red-400 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">Before</p>
                  <div className="w-8 h-8 rounded-xl bg-red-100 flex items-center justify-center">
                    <problem.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-slate-500 line-through text-sm leading-relaxed mt-2">{problem.before}</p>
                </div>
                {/* Divider */}
                <div className="flex items-center gap-2 px-5 py-2 bg-white border-y border-slate-100">
                  <div className="h-px flex-1 bg-slate-200" />
                  <ArrowDown className="w-4 h-4 text-orange-400" />
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                {/* AFTER half */}
                <div className="bg-white border-l-4 border-emerald-400 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">After</p>
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-slate-800 font-medium text-sm leading-relaxed mt-2">{problem.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white">Here's how we do it</h2>
          </motion.div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto px-6">
            {/* dashed connector line on desktop */}
            <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-slate-700" />
            {/* Step 1 */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-orange-400 flex items-center justify-center mb-5 relative z-10">
                <span className="text-2xl font-black text-orange-400">1</span>
              </div>
              <h3 className="text-lg font-black text-white mb-3">We get on a free 20-min call</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Tell us about your business. We'll ask about your biggest leaks — missed calls, slow quotes, forgotten follow-ups.</p>
            </motion.div>
            {/* Step 2 */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-orange-400 flex items-center justify-center mb-5 relative z-10">
                <span className="text-2xl font-black text-orange-400">2</span>
              </div>
              <h3 className="text-lg font-black text-white mb-3">We map what's costing you</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We look at your current setup and tell you exactly what we'd build and what it would cost. No pressure, no guessing.</p>
            </motion.div>
            {/* Step 3 */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-orange-400 flex items-center justify-center mb-5 relative z-10">
                <span className="text-2xl font-black text-orange-400">3</span>
              </div>
              <h3 className="text-lg font-black text-white mb-3">You're live in 2 weeks</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We build it. We set it up. You focus on jobs. The system runs while you work.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              What we build for you
            </h2>
            <p className="text-slate-500 text-lg">No learning curve. No monthly software fee to babysit. Just things that work.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-2xl border border-slate-200 bg-white p-6 border-l-4 border-l-orange-400 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                  <service.icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STAT ROW */}
      <section className="bg-slate-900 border-y border-slate-800 py-14">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-4xl mx-auto px-6 divide-x divide-orange-900/30"
        >
          <div className="flex flex-col items-center text-center px-4 py-6">
            <p className="text-xl font-black text-white mb-1">Saskatchewan</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Based &amp; operated</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 py-6">
            <p className="text-xl font-black text-white mb-1">You own it</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Everything we build</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 py-6">
            <p className="text-xl font-black text-white mb-1">No lock-in</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider">Cancel anytime</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 py-6">
            <p className="text-xl font-black text-white mb-1">We answer</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider">When you call</p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to stop losing jobs to your voicemail?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Book a free 20-minute call. We'll look at your current setup and tell you exactly what's costing you leads.
            </p>
            <Link to="/why-us#contact">
              <PremiumButton>Book a free call — no pressure</PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
