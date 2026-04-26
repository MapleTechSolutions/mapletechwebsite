import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PremiumButton, fadeInUp } from '../components/shared/SharedComponents';

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

      {/* INTEGRATION HUB VISUAL */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Maple Tech sits in the middle
            </h2>
            <p className="text-slate-500 text-lg">
              We build the integration layer that connects your existing tools — no rip-and-replace, no retraining your team. Your tools stay. The manual work disappears.
            </p>
          </motion.div>

          {/* Hub diagram */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Center node */}
            <div className="flex justify-center mb-8">
              <div className="w-28 h-28 rounded-full bg-slate-900 border-4 border-cyan-500 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                <div className="text-center">
                  <p className="text-white font-black text-sm">Maple</p>
                  <p className="text-cyan-400 font-black text-sm">Tech</p>
                </div>
              </div>
            </div>

            {/* Tool nodes */}
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`px-4 py-2 rounded-xl border-2 font-semibold text-sm ${tool.color}`}
                >
                  {tool.name}
                </div>
              ))}
            </div>

            <p className="text-center text-slate-400 text-sm mt-6">
              + any tool with an API
            </p>
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
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              "Job created in Procore → automatically synced to Sage 300. No re-entry.",
              "Invoice approved in your ERP → status updated in your PM tool. No chasing.",
              "Timesheet submitted in the field → posted to payroll. No spreadsheet in between.",
              "New vendor added → documents requested automatically. No manual email.",
            ].map((outcome) => (
              <div key={outcome} className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4">
                <span className="text-cyan-500 font-bold text-lg flex-shrink-0">→</span>
                <p className="text-slate-700">{outcome}</p>
              </div>
            ))}
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
