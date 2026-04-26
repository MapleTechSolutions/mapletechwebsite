import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowDown, CheckCircle } from 'lucide-react';
import { PremiumButton, fadeInUp, scaleIn } from '../components/shared/SharedComponents';

const tools = [
  { name: "ServiceTitan", color: "bg-blue-50 border-blue-200 text-blue-700" },
  { name: "Viewpoint Vista", color: "bg-slate-50 border-slate-300 text-slate-700" },
  { name: "Sage 300 CRE", color: "bg-green-50 border-green-200 text-green-700" },
  { name: "Procore", color: "bg-orange-50 border-orange-200 text-orange-700" },
  { name: "QuickBooks", color: "bg-teal-50 border-teal-200 text-teal-700" },
  { name: "Foundation", color: "bg-purple-50 border-purple-200 text-purple-700" },
];

export default function ForConstruction() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>For Construction Operations | Maple Tech Solutions</title>
        <meta name="description" content="Maple Tech connects your construction software stack — ServiceTitan, Vista, Sage 300, and more — eliminating the manual data entry between them. Saskatchewan-based." />
        <link rel="canonical" href="https://mapletech.solutions/for-construction" />
      </Helmet>

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
              For Construction Operations
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
              Your tools don't talk to each other.<br />
              <span className="text-cyan-400">We make them.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              ServiceTitan, Vista, Sage 300, Procore — your team is copying data between these every day. That's admin time you're paying for that should be automatic.
            </p>
            <Link to="/why-us#contact">
              <PremiumButton>Let's talk about your stack</PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTEGRATION HUB — ANIMATED SVG DIAGRAM */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-black text-white mb-4">Maple Tech sits in the middle</h2>
            <p className="text-slate-400 text-lg">We build the integration layer that connects your existing tools — no rip-and-replace.</p>
          </motion.div>

          {/* Diagram container */}
          <div className="relative w-full max-w-2xl mx-auto" style={{ aspectRatio: '4/3' }}>
            {/* SVG animated lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid meet"
              overflow="visible"
            >
              {/* ServiceTitan — top center (200, 30) */}
              <motion.line
                x1="200" y1="150" x2="200" y2="30"
                stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"
                animate={{ strokeDashoffset: [24, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0 }}
              />
              {/* Procore — top right (340, 75) */}
              <motion.line
                x1="200" y1="150" x2="340" y2="75"
                stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"
                animate={{ strokeDashoffset: [24, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.3 }}
              />
              {/* Sage 300 — bottom right (340, 225) */}
              <motion.line
                x1="200" y1="150" x2="340" y2="225"
                stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"
                animate={{ strokeDashoffset: [24, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.6 }}
              />
              {/* QuickBooks — bottom center (200, 270) */}
              <motion.line
                x1="200" y1="150" x2="200" y2="270"
                stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"
                animate={{ strokeDashoffset: [24, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.9 }}
              />
              {/* Foundation — bottom left (60, 225) */}
              <motion.line
                x1="200" y1="150" x2="60" y2="225"
                stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"
                animate={{ strokeDashoffset: [24, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1.2 }}
              />
              {/* Vista — top left (60, 75) */}
              <motion.line
                x1="200" y1="150" x2="60" y2="75"
                stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"
                animate={{ strokeDashoffset: [24, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1.5 }}
              />
            </svg>

            {/* Center Maple Tech node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.4)]">
                <div className="text-center">
                  <p className="text-white font-black text-xs leading-none">Maple</p>
                  <p className="text-cyan-400 font-black text-xs leading-none">Tech</p>
                </div>
              </div>
            </div>

            {/* Tool nodes — positioned absolutely in a circle */}
            {/* ServiceTitan — top center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="absolute top-[5%] left-1/2 -translate-x-1/2 px-3 py-2 rounded-xl border-2 font-bold text-xs whitespace-nowrap z-10 bg-blue-50 border-blue-200 text-blue-700"
            >
              ServiceTitan
            </motion.div>
            {/* Procore — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="absolute top-[25%] right-[5%] px-3 py-2 rounded-xl border-2 font-bold text-xs whitespace-nowrap z-10 bg-orange-50 border-orange-200 text-orange-700"
            >
              Procore
            </motion.div>
            {/* Sage 300 — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true, margin: "-80px" }}
              className="absolute bottom-[25%] right-[5%] px-3 py-2 rounded-xl border-2 font-bold text-xs whitespace-nowrap z-10 bg-green-50 border-green-200 text-green-700"
            >
              Sage 300 CRE
            </motion.div>
            {/* QuickBooks — bottom center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true, margin: "-80px" }}
              className="absolute bottom-[5%] left-1/2 -translate-x-1/2 px-3 py-2 rounded-xl border-2 font-bold text-xs whitespace-nowrap z-10 bg-teal-50 border-teal-200 text-teal-700"
            >
              QuickBooks
            </motion.div>
            {/* Foundation — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true, margin: "-80px" }}
              className="absolute bottom-[25%] left-[5%] px-3 py-2 rounded-xl border-2 font-bold text-xs whitespace-nowrap z-10 bg-purple-50 border-purple-200 text-purple-700"
            >
              Foundation
            </motion.div>
            {/* Vista — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
              className="absolute top-[25%] left-[5%] px-3 py-2 rounded-xl border-2 font-bold text-xs whitespace-nowrap z-10 bg-slate-50 border-slate-300 text-slate-700"
            >
              Viewpoint Vista
            </motion.div>
          </div>

          <p className="text-slate-500 text-sm text-center mt-6">+ any tool with an API</p>
        </div>
      </section>

      {/* COST OF DISCONNECTED TOOLS */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Before block */}
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">Without a connector</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
              {["Procore", "Sage 300", "Vista"].map((tool) => (
                <div key={tool} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 border border-red-900/50">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-slate-300 text-sm font-semibold">{tool}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-center text-sm mb-2">
              Your estimator adds a job in Procore. Your office enters it again in Sage 300. Your PM updates Vista separately.
            </p>
            <p className="text-red-400 text-center text-sm font-semibold">That's 3 people touching 1 job.</p>

            {/* Arrow divider */}
            <div className="flex justify-center my-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-8 bg-cyan-800" />
                <ArrowDown className="w-5 h-5 text-cyan-400" />
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">With Maple Tech</p>
                <div className="w-px h-8 bg-cyan-800" />
              </div>
            </div>

            {/* After block */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {["Procore", "Sage 300", "Vista"].map((tool) => (
                <div key={tool} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 border border-cyan-700/50">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-white text-sm font-semibold">{tool}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-center text-sm mt-4">One entry. Synced everywhere. Automatically.</p>
          </motion.div>
        </div>
      </section>

      {/* WHAT THIS MEANS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-3">What this means in practice</h2>
          </motion.div>
          <div className="space-y-3">
            {[
              { trigger: "Job created in Procore", result: "automatically synced to Sage 300. No re-entry." },
              { trigger: "Invoice approved in your ERP", result: "status updated in your PM tool. No chasing." },
              { trigger: "Timesheet submitted in the field", result: "posted to payroll. No spreadsheet in between." },
              { trigger: "New vendor added", result: "documents requested automatically. No manual email." },
            ].map((outcome) => (
              <motion.div
                key={outcome.trigger}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-slate-200"
              >
                <div className="bg-slate-50 p-4 border-l-4 border-cyan-400 flex items-center">
                  <p className="text-slate-800 font-bold text-sm">{outcome.trigger}</p>
                </div>
                <div className="bg-white p-4 flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  <p className="text-slate-600 text-sm">{outcome.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOL GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-3">Tools we connect</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-6">
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className={`rounded-xl border-2 p-4 text-center font-bold text-sm ${tool.color}`}
              >
                {tool.name}
              </motion.div>
            ))}
            {/* "Your stack here" placeholder */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-xl border-2 border-dashed border-slate-300 p-4 text-center font-semibold text-sm text-slate-400 col-span-full md:col-span-1"
            >
              Your stack here
            </motion.div>
          </div>
          <p className="text-center text-slate-500 text-sm">If it has an API, we can connect it.</p>
        </div>
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
              Tell us what tools you're running
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              We'll assess your stack and tell you what's possible to automate — no commitment, no sales pitch.
            </p>
            <Link to="/why-us#contact">
              <PremiumButton>Start the conversation</PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
