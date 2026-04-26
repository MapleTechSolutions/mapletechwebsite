import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Calendar, Users, Smartphone, BarChart3 } from 'lucide-react';
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
              Vagaro, Mindbody, and Jane were built for every type of business — which means they're perfect for none of them. We build systems around how your team actually consults, books, retains, and upsells.
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
              The gaps your current software has
            </h2>
            <p className="text-slate-500 text-lg">Every clinic owner we talk to mentions at least three of these.</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
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
            viewport={{ once: true }}
            className="text-center text-slate-500 mt-8 italic"
          >
            You've probably already tried workarounds. Spreadsheets, extra tools, manual processes. We eliminate all of that.
          </motion.p>
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
                viewport={{ once: true, margin: "-60px" }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-6">Why clinics choose us over another software subscription</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-slate-700 font-medium">
              {[
                "You own the system — no vendor lock-in",
                "Built around your workflow",
                "Saskatchewan-based, real support",
                "One build fee, not a forever subscription",
                "Integrated with your existing tools",
              ].map((item) => (
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
              Ready to stop working around your software?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Book a discovery call. We'll map out exactly what a custom system would look like for your clinic — no commitment required.
            </p>
            <Link to="/why-us#contact">
              <PremiumButton>Book a discovery call</PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
