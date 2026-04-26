import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageSquare, FileText, Clock, CheckCircle, ArrowRight } from 'lucide-react';
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
  {
    title: "A website that works while you work",
    description: "A clean, fast site built to turn visitors into booked calls — not a brochure that just sits there.",
    icon: "🌐",
  },
  {
    title: "Missed call text-back",
    description: "Every missed call gets an instant text reply in your name. You keep the lead. Simple.",
    icon: "💬",
  },
  {
    title: "Automated follow-up",
    description: "Inquiries get a follow-up message automatically — 10 minutes after they contact you, not the next day.",
    icon: "⚡",
  },
  {
    title: "Simple lead tracker",
    description: "See every lead, every quote, and every job in one place. No spreadsheet. No sticky notes.",
    icon: "📋",
  },
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
                viewport={{ once: true, margin: "-60px" }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">{problem.label}</p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  <span className="text-slate-400 line-through">{problem.before}</span>
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-800 font-medium leading-relaxed">{problem.after}</p>
                </div>
              </motion.div>
            ))}
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
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-3xl flex-shrink-0">{service.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL TRUST BAR */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-4">Why local contractors choose Maple Tech</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-slate-700 font-medium">
              {["Saskatchewan-based", "Plain English, no jargon", "You own everything we build", "No long-term contracts", "Call us — we answer"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
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
