import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Calendar, Users, Smartphone, BarChart3, X, Bell, Star, RotateCcw } from 'lucide-react';
import { PremiumButton, fadeInUp, scaleIn } from '../components/shared/SharedComponents';

const gaps = [
  "Can't customize the client intake form to match your consultation process",
  "Rebooking reminders are generic — no way to personalize by treatment type",
  "No client-facing loyalty or membership system that fits your pricing model",
  "Reporting shows you bookings, not revenue per client or retention rate",
  "Your team works around the software instead of the software working around them",
];

const solutions = [
  {
    icon: Calendar,
    title: "Booking & intake built your way",
    description: "Custom intake forms, consent flows, and rebooking logic that match how your clinic actually works — not a template.",
  },
  {
    icon: Users,
    title: "Client retention system",
    description: "Automated follow-ups, treatment reminders, and re-engagement sequences based on visit history. Set once, runs forever.",
  },
  {
    icon: Smartphone,
    title: "Branded client experience",
    description: "Your clients interact with your brand, not a generic portal. Custom-built client-facing flows that feel premium.",
  },
  {
    icon: BarChart3,
    title: "Revenue & retention reporting",
    description: "See what matters: revenue per client, retention rate, treatment popularity, and where your pipeline is leaking.",
  },
];

export default function ForClinics() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>For Wellness & Aesthetics Businesses | Maple Tech Solutions</title>
        <meta name="description" content="Custom CRM and client management systems for medspas, skin clinics, and aesthetic studios in Canada — built around your workflow, not a template." />
        <link rel="canonical" href="https://mapletech.solutions/for-clinics" />
      </Helmet>

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.08),transparent_50%),radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.06),transparent_50%)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400 mb-4">
              For Wellness & Aesthetics
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
              Your software should fit<br />
              <span className="text-teal-400">your clinic. Not the other way around.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Off-the-shelf booking tools were built for every type of business — which means they're perfect for none of them. We build systems around how your team actually consults, books, retains, and upsells.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/why-us#contact">
                <PremiumButton>Book a discovery call</PremiumButton>
              </Link>
              <Link to="/platform">
                <button className="px-6 py-3 rounded-xl border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-colors font-semibold">
                  See how our CRM works →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GAPS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Your current software wasn't built for clinics like yours.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Sound familiar? These are the gaps we hear every week from clinic owners.</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 space-y-4"
          >
            {gaps.map((gap) => (
              <div key={gap} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-500 text-xs font-bold">✕</span>
                </div>
                <p className="text-slate-700 leading-relaxed">{gap}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center text-slate-500 mt-8 italic"
          >
            You've probably already tried workarounds. Spreadsheets, extra tools, manual processes. We eliminate all of that.
          </motion.p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Other software vs. Maple Tech</h2>
            <p className="text-slate-500 text-lg">Off-the-shelf tools are built for everyone. That means they're built for no one.</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
          >
            {/* Table header */}
            <div className="grid grid-cols-2 gap-0">
              <div className="bg-slate-100 rounded-tl-2xl p-4 text-center">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Other software</p>
              </div>
              <div className="bg-teal-600 rounded-tr-2xl p-4 text-center">
                <p className="text-sm font-bold text-white uppercase tracking-wider">What we build for your clinic</p>
              </div>
            </div>
            {/* Row 1 — Intake */}
            <div className="grid grid-cols-2 gap-0 border-b border-slate-100">
              <div className="bg-slate-50 p-5 flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-500 text-sm leading-relaxed">Generic fields you can't customize to your consultation process</p>
              </div>
              <div className="bg-teal-50 p-5 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <p className="text-teal-800 text-sm leading-relaxed font-medium">Custom intake flows built around your exact services — consent, medical history, preferences</p>
              </div>
            </div>
            {/* Row 2 — Reminders */}
            <div className="grid grid-cols-2 gap-0 border-b border-slate-100">
              <div className="bg-slate-50 p-5 flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-500 text-sm leading-relaxed">One generic reminder template for all clients</p>
              </div>
              <div className="bg-teal-50 p-5 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <p className="text-teal-800 text-sm leading-relaxed font-medium">Treatment-specific reminders that match your rebooking logic and speak in your brand voice</p>
              </div>
            </div>
            {/* Row 3 — Reporting */}
            <div className="grid grid-cols-2 gap-0 border-b border-slate-100">
              <div className="bg-slate-50 p-5 flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-500 text-sm leading-relaxed">Booking counts and occupancy rates</p>
              </div>
              <div className="bg-teal-50 p-5 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <p className="text-teal-800 text-sm leading-relaxed font-medium">Revenue per client, retention rate, treatment popularity, and where your pipeline is leaking</p>
              </div>
            </div>
            {/* Row 4 — Branding */}
            <div className="grid grid-cols-2 gap-0 last:border-b-0 last:rounded-b-2xl overflow-hidden">
              <div className="bg-slate-50 p-5 flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-500 text-sm leading-relaxed">Your clients see the software's logo, not yours</p>
              </div>
              <div className="bg-teal-50 p-5 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <p className="text-teal-800 text-sm leading-relaxed font-medium">Every client-facing touchpoint — booking, confirmation, reminders — shows your brand only</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLIENT EXPERIENCE FLOW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-4">What your clients feel — from booking to rebooking</h2>
            <p className="text-slate-500">When the system is built around your brand, every touchpoint feels intentional.</p>
          </motion.div>
          <div className="relative flex flex-col md:flex-row gap-0 max-w-5xl mx-auto">
            {/* background connector line on desktop */}
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-teal-200" />
            {/* Step 1 — Book */}
            <div className="flex flex-col items-center text-center flex-1 px-4 relative">
              <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-300 flex items-center justify-center mb-4 z-10 relative">
                <Calendar className="w-5 h-5 text-teal-600" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-2">Book</p>
              <p className="text-slate-600 text-sm leading-relaxed">Custom booking page that looks and feels like your brand — not a third-party portal</p>
            </div>
            {/* Step 2 — Confirmation */}
            <div className="flex flex-col items-center text-center flex-1 px-4 relative">
              <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-300 flex items-center justify-center mb-4 z-10 relative">
                <CheckCircle className="w-5 h-5 text-teal-600" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-2">Confirmation</p>
              <p className="text-slate-600 text-sm leading-relaxed">Branded confirmation with your logo, service details, and prep instructions if needed</p>
            </div>
            {/* Step 3 — Reminder */}
            <div className="flex flex-col items-center text-center flex-1 px-4 relative">
              <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-300 flex items-center justify-center mb-4 z-10 relative">
                <Bell className="w-5 h-5 text-teal-600" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-2">Reminder</p>
              <p className="text-slate-600 text-sm leading-relaxed">Treatment-specific reminder sent at the right time — not one generic message for every appointment</p>
            </div>
            {/* Step 4 — Visit */}
            <div className="flex flex-col items-center text-center flex-1 px-4 relative">
              <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-300 flex items-center justify-center mb-4 z-10 relative">
                <Star className="w-5 h-5 text-teal-600" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-2">Visit</p>
              <p className="text-slate-600 text-sm leading-relaxed">Intake and consultation flow that matches exactly how your team works</p>
            </div>
            {/* Step 5 — Rebook */}
            <div className="flex flex-col items-center text-center flex-1 px-4 relative">
              <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-300 flex items-center justify-center mb-4 z-10 relative">
                <RotateCcw className="w-5 h-5 text-teal-600" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-2">Rebook</p>
              <p className="text-slate-600 text-sm leading-relaxed">Automatic follow-up after every visit — personalized by treatment type and visit history</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
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
              What we build for your clinic
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Custom-built, not configured. Every system reflects your brand, your terminology, and your process.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {solutions.map((solution) => (
              <motion.div
                key={solution.title}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-2xl border border-teal-100 bg-gradient-to-b from-white to-teal-50/30 p-6 hover:shadow-lg hover:shadow-teal-100 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mb-4 group-hover:from-teal-500 group-hover:to-cyan-600 transition-all">
                  <solution.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE BUILD WORKS */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">How the build works</h2>
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider">Most clinics are live in 3–4 weeks</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mb-4">
                <span className="text-white font-black text-sm">1</span>
              </div>
              <h3 className="text-white font-bold mb-2">Discovery Call</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We learn how your clinic runs — services, client flow, current tools, and what's frustrating your team.</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mb-4">
                <span className="text-white font-black text-sm">2</span>
              </div>
              <h3 className="text-white font-bold mb-2">Intake &amp; Design</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We map your client journey and design the system around your brand. You approve before we build anything.</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mb-4">
                <span className="text-white font-black text-sm">3</span>
              </div>
              <h3 className="text-white font-bold mb-2">Build</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We build every piece: booking flow, intake forms, reminders, reporting. You get a walkthrough before launch.</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mb-4">
                <span className="text-white font-black text-sm">4</span>
              </div>
              <h3 className="text-white font-bold mb-2">Launch</h3>
              <p className="text-slate-400 text-sm leading-relaxed">We go live and stay close for the first two weeks. Any tweaks, we handle them.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA — SPLIT LAYOUT */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-teal-950">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto px-6 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to build something your clients actually feel?
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Book a free call. We'll look at your current setup and show you what's possible when the software is built around your brand.
            </p>
            <Link to="/why-us#contact">
              <PremiumButton>Book a free discovery call</PremiumButton>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="bg-white/5 rounded-2xl border border-white/10 p-6"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">What software are you currently using?</p>
            <div className="space-y-3">
              {["Vagaro", "Mindbody", "Jane App", "Something else"].map((tool) => (
                <div key={tool} className="flex items-center gap-3 py-2 px-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="text-slate-300 text-sm">{tool}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-4">Mention it on the call — we'll show you what we'd change.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
