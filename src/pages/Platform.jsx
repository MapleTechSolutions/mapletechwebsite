import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone, Inbox, Zap, Shield, Cpu, Globe, Wifi, CheckCircle, Star } from 'lucide-react';
import {
  PremiumButton,
  SectionDivider,
  AnimatedSection,
  ExpandingFeatureCard,
  fadeInUp,
  scaleIn,
  cinematicStagger,
  springConfigs
} from '../components/shared/SharedComponents';

// Import Section Components
import LeadCaptureSection from '../components/sections/LeadCaptureSection';
import NurtureLeadsSection from '../components/sections/NurtureLeadsSection';
import CloseDealsSection from '../components/sections/CloseDealsSection';
import ScaleBusinessSection from '../components/sections/ScaleBusinessSection';
import MarketingAutomationSection from '../components/sections/MarketingAutomationSection';
import SmartSocialPlannerSection from '../components/sections/SmartSocialPlannerSection';

export default function Platform() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ========== PLATFORM HEADER ========== */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-500/30 rounded-full text-sm font-medium text-green-700 mb-6 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", ...springConfigs.bouncy }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Sparkles size={16} className="text-green-600" />
              </motion.div>
              Custom-Built for Your Business
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Your Custom CRM.{' '}
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Built Your Way.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-6 max-w-2xl mx-auto">
              Forget off-the-shelf software that forces you to adapt. This is what <span className="font-semibold text-slate-700">YOUR</span> custom CRM looks like, designed around your workflow, not the other way around.
            </p>

            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 border border-green-200 rounded-xl mb-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle size={20} className="text-green-600" />
              <p className="text-sm font-medium text-green-700">
                Every feature below can be customized to fit your exact needs
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton onClick={() => window.scrollBy({ top: 600, behavior: 'smooth' })}>
                Take a Look at Features
                <ArrowRight size={18} />
              </PremiumButton>
              <Link to="/why-us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <PremiumButton variant="secondary">
                  Why Us →
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="cyan" />

      {/* ========== FEATURE 1: LEAD CAPTURE ========== */}
      <LeadCaptureSection />

      <SectionDivider color="green" />

      {/* ========== FEATURE 2: NURTURE LEADS ========== */}
      <NurtureLeadsSection />

      <SectionDivider color="orange" />

      {/* ========== FEATURE 3: PIPELINE & PAYMENTS ========== */}
      <CloseDealsSection />

      <SectionDivider color="cyan" />

      {/* ========== FEATURE 4: SCALE BUSINESS ========== */}
      <ScaleBusinessSection />

      <SectionDivider color="green" />

      {/* ========== MARKETING AUTOMATION SECTION ========== */}
      <MarketingAutomationSection />

      <SectionDivider color="teal" />

      {/* ========== SMART SOCIAL PLANNER SECTION ========== */}
      <SmartSocialPlannerSection />

      <SectionDivider color="purple" />

      {/* ========== AI FEATURES SECTION ========== */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        {/* Section background effects */}
        <motion.div
          className="absolute top-1/4 left-0 w-[800px] h-[800px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)' }}
          animate={{ x: [-200, 150, -200], y: [-100, 150, -100] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-20"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-600 mb-6 shadow-lg"
              variants={scaleIn}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Sparkles size={16} className="text-cyan-500" />
              </motion.div>
              Hover over cards to explore
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
              variants={fadeInUp}
            >
              Powerful Features,{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
                Zero Complexity
              </span>
            </motion.h2>
            <motion.p
              className="text-lg text-slate-500"
              variants={fadeInUp}
            >
              From AI receptionists to unified inboxes, everything you need to automate your business.
            </motion.p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <ExpandingFeatureCard
              icon={Phone}
              title="AI Callers"
              description="24/7 AI receptionists that handle calls, book appointments, and qualify leads while you sleep."
              features={['Never miss a call', 'Books into your calendar', 'Qualifies leads automatically', 'Natural conversation flow']}
              color="orange"
              index={0}
            />
            <ExpandingFeatureCard
              icon={Inbox}
              title="Unified Inbox"
              description="Email, SMS, Instagram, Facebook. All conversations in one place with AI-powered reply suggestions."
              features={['All channels unified', 'AI reply suggestions', 'Never lose a message', 'Smart prioritization']}
              color="green"
              index={1}
            />
            <ExpandingFeatureCard
              icon={Zap}
              title="Smart Workflows"
              description="Automate multi-step processes. When X happens, automatically do Y and Z without manual work required."
              features={['If-then automation', 'Multi-step workflows', 'Zero manual triggers', 'Real-time execution']}
              color="cyan"
              index={2}
            />
          </div>
        </div>
      </AnimatedSection>

      <SectionDivider color="cyan" />

      {/* ========== CLOSER CTA ========== */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-green-900 via-slate-900 to-emerald-900 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(16,185,129,0.1) 0%, transparent 50%)',
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <CheckCircle size={16} className="text-green-400" />
            <span className="text-sm font-semibold text-green-400">One-Time Build, Lifetime Value</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Own Your CRM.{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Stop Renting Features.
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
          >
            A custom-built CRM designed for your business. Get all the features you need without paying for what you don't. Transparent pricing that scales with your growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/why-us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <PremiumButton className="text-lg px-10 py-5">
                  Compare Value & Pricing
                  <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={20} />
                  </motion.span>
                </PremiumButton>
              </Link>
              <Link to="/automator" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <PremiumButton className="text-lg px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Take a look at AI Employees
                  <ArrowRight size={20} />
                </PremiumButton>
              </Link>
              <PremiumButton onClick={() => navigate('/why-us#contact')} variant="secondary" className="text-lg px-10 py-5">
                Schedule a Consultation
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
