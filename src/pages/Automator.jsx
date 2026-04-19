import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight, ArrowLeft, Bot, Phone, MessageSquare, FileText, Star,
  Shield, TrendingUp, Clock, CheckCircle, AlertTriangle, Sparkles
} from 'lucide-react';
import {
  PremiumButton,
  SectionDivider,
  AnimatedSection,
  fadeInUp,
  scaleIn,
  cinematicStagger
} from '../components/shared/SharedComponents';
import DigitalVoiceWave from '../components/sections/DigitalVoiceWave';
import PulseCallGraphic from '../components/sections/PulseCallGraphic';
import LoopGraphic from '../components/sections/LoopGraphic';
import DocBuilderGraphic from '../components/sections/DocBuilderGraphic';
import ResultBadge from '../components/sections/ResultBadge';
import ZigZagFeature from '../components/sections/ZigZagFeature';
import ToolCard from '../components/sections/ToolCard';

export default function Automator() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/why-us#contact');
  };

  const goBack = () => {
    navigate('/');
    // Scroll to the AI Employee section after navigation
    setTimeout(() => {
      const element = document.getElementById('ai-employee-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const goToWhyUs = () => {
    navigate('/why-us');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>AI Workforce & Automation | Maple Tech Solutions</title>
        <meta name="description" content="Hire your first AI employee — 24/7 phone answering, automated follow-ups, and instant quote generation for Canadian service businesses." />
        <link rel="canonical" href="https://mapletech.solutions/automator" />
      </Helmet>

      {/* ========== HERO SECTION ========== */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`grid-v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
              style={{ left: `${i * 5}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`grid-h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
              style={{ top: `${i * 6.66}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>

        {/* Radial Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-slate-800 to-blue-600/15"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            variants={cinematicStagger}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-400 mb-8 shadow-lg"
              variants={scaleIn}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} />
              </motion.div>
              The AI Workforce
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Meet Your New 24/7
              </span>
              <br />
              <span className="text-white">Digital Workforce.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              They never sleep, they never complain, and they never call in sick.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              variants={fadeInUp}
            >
              <PremiumButton onClick={scrollToContact}>
                Hire Your AI Team
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={18} />
                </motion.span>
              </PremiumButton>
              <PremiumButton onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} variant="secondary">
                See How It Works
              </PremiumButton>
            </motion.div>

            {/* Digital Voice Wave Visualization */}
            <motion.div
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <DigitalVoiceWave />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="cyan" />

      {/* ========== FEATURE 1: AI RECEPTIONIST ========== */}
      <div id="features">
        <ZigZagFeature
          icon={Phone}
          agentLabel="AI RECEPTIONIST AGENT"
          accentColor="cyan"
          headline="Is Your Phone Blowing Up While You're Trying to Work?"
          problem="You're on a job site, under a sink, or in a meeting. The phone rings. You ignore it. That wasn't just a missed call, it was a missed paycheck."
          solution="Meet your new AI Receptionist. It answers every single call instantly, 24/7. It speaks naturally, answers questions, and books appointments directly into your calendar. By the time you check your phone, the job is already sold."
          result="Zero Missed Calls. Zero Lost Revenue."
          imagePosition="right"
          index={0}
          visualization={PulseCallGraphic}
        />
      </div>

      <SectionDivider color="cyan" />

      {/* ========== FEATURE 2: FOLLOW-UP ASSISTANT ========== */}
      <ZigZagFeature
        icon={MessageSquare}
        agentLabel="SALES & NURTURE AGENT"
        accentColor="green"
        headline="Stop Chasing Ghosts. Let AI Close the Loop."
        problem="You send a quote, and then... silence. You spend hours manually emailing and texting just to hear 'I'm still thinking about it.'"
        solution="Our Hyper-Realistic AI Assistant handles the chase. It automatically follows up via SMS, Email, and Phone until they book. Have a list of old clients you haven't touched in months? Our AI will text them all personally to re-engage them. It costs 5x more to get a new client than to keep an old one. Stop ignoring your gold mine."
        result="Automated Follow-Up. Endless Persistence."
        imagePosition="left"
        index={1}
        visualization={LoopGraphic}
      />

      <SectionDivider color="cyan" />

      {/* ========== FEATURE 3: INSTANT QUOTER ========== */}
      <ZigZagFeature
        icon={FileText}
        agentLabel="ESTIMATES & ADMIN AGENT"
        accentColor="orange"
        headline="Get Off the Computer and Get Back to Your Family."
        problem="If you run a service business, you know the 'Second Shift'. Coming home after a long day only to spend 2 hours typing up estimates."
        solution="The Automated Quote Engine. Your AI gathers job details and generates a professional estimate instantly. It sends it out, collects the signature, and grabs the deposit while you're driving home."
        result="Instant Quotes. Zero Overtime."
        imagePosition="right"
        index={2}
        visualization={DocBuilderGraphic}
      />

      <SectionDivider color="cyan" />

      {/* ========== NEW TOOLS GRID ========== */}
      <AnimatedSection className="py-24 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plus, Even More AI-Powered Tools
            </h2>
            <p className="text-xl text-slate-300">
              Your complete digital workforce, handling every touchpoint.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <ToolCard
              icon={Star}
              headline="The 'Review Hunter'"
              copy="Turn Happy Clients into 5-Star Reviews. The moment you mark a job 'Complete,' your AI texts the client to ask for a review. If they reply with a complaint, it alerts you instantly before they post it online."
              index={0}
            />
            <ToolCard
              icon={Shield}
              headline="The 'Tire Kicker' Filter"
              copy="Stop Wasting Time on Leads Who Can't Afford You. Our AI Gatekeeper chats with leads to qualify their budget and timeline before they ever reach your phone. Only serious buyers get through."
              index={1}
            />
          </div>
        </div>
      </AnimatedSection>

      <SectionDivider color="orange" />

      {/* ========== THE VISIONARY CLOSER ========== */}
      <AnimatedSection className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-900">
        {/* Enhanced Dramatic background with particles */}
        <div className="absolute inset-0">
          {/* Dramatic spotlight effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.3) 0%, rgba(6,182,212,0.2) 30%, transparent 60%)',
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [0.95, 1.1, 0.95],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Animated border frame */}
          <motion.div
            className="absolute inset-4 md:inset-8 border-2 border-orange-500/30 rounded-3xl"
            animate={{
              borderColor: ["rgba(249, 115, 22, 0.3)", "rgba(249, 115, 22, 0.6)", "rgba(6, 182, 212, 0.6)", "rgba(249, 115, 22, 0.3)"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-cyan-500/20"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Floating particles - fewer on mobile */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-orange-400/40 rounded-full hidden md:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Animated grid overlay */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`grid-line-${i}`}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
                style={{ top: `${i * 10}%` }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Warning Badge - Clean & Professional */}
            <motion.div
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-white font-bold text-lg mb-10 shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(249, 115, 22, 0.5)",
                  "0 0 50px rgba(249, 115, 22, 0.8)",
                  "0 0 30px rgba(249, 115, 22, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <AlertTriangle size={24} className="text-white" />
              </motion.div>
              <span className="tracking-wider">Critical Moment</span>
            </motion.div>

            {/* Enhanced Headline with better typography */}
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-10 lg:mb-12 leading-tight px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              The{' '}
              <motion.span
                className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                'Internet Moment'
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                is Happening Again.
              </motion.span>
            </motion.h2>

            {/* Enhanced content box with better design */}
            <motion.div
              className="relative bg-gradient-to-br from-orange-900/20 via-slate-900/95 to-cyan-900/20 backdrop-blur-xl border-4 border-orange-500/60 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 mb-10 md:mb-16 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              whileHover={{
                borderColor: "rgba(249, 115, 22, 0.9)",
                boxShadow: "0 0 80px rgba(249, 115, 22, 0.4), inset 0 0 60px rgba(249, 115, 22, 0.1)",
                scale: 1.02
              }}
            >
              {/* Glowing corner accents */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-tr-full"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />

              <div className="relative z-10">
                <motion.p
                  className="text-base md:text-xl lg:text-2xl text-slate-200 leading-relaxed mb-6 md:mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Remember when people said the Internet was just a fad? Ten years later, businesses without a website went extinct.
                </motion.p>

                <motion.p
                  className="text-base md:text-xl lg:text-2xl text-slate-200 leading-relaxed mb-6 md:mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.span
                    className="text-cyan-400 font-bold text-lg md:text-2xl lg:text-3xl"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(6, 182, 212, 0.5)",
                        "0 0 30px rgba(6, 182, 212, 0.8)",
                        "0 0 20px rgba(6, 182, 212, 0.5)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    AI is that same moment.
                  </motion.span>{' '}
                  Sooner or later, AI will run the backend of every successful local business.
                </motion.p>

                <motion.div
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-400 rounded-r-xl p-4 md:p-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-base md:text-xl lg:text-2xl text-slate-100 leading-relaxed">
                    You have a choice:{' '}
                    <motion.span
                      className="text-green-400 font-bold"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Be the early adopter who uses this leverage to dominate your market
                    </motion.span>
                    , or wait until it's too late to catch up. The future is inevitable. Let's build it today.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Stats Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {[
                { value: '24/7', label: 'Always Available', icon: Clock, color: 'cyan' },
                { value: '100%', label: 'Response Rate', icon: TrendingUp, color: 'green' },
                { value: '0', label: 'Sick Days', icon: CheckCircle, color: 'orange' },
              ].map(({ value, label, icon: Icon, color }, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                >
                  <motion.div
                    className={`relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border-2 border-${color}-500/30 rounded-xl md:rounded-2xl p-6 md:p-8 overflow-hidden`}
                    whileHover={{
                      scale: 1.05,
                      borderColor: `rgba(6, 182, 212, 0.6)`,
                      boxShadow: "0 20px 50px rgba(6, 182, 212, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Background glow on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <motion.div
                      className="relative z-10"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Icon size={32} className={`md:w-10 md:h-10 text-${color}-400 mx-auto mb-3 md:mb-4`} />
                      </motion.div>
                      <motion.p
                        className="text-4xl md:text-5xl font-extrabold text-white mb-2"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      >
                        {value}
                      </motion.p>
                      <p className="text-sm md:text-base text-slate-300 font-medium">{label}</p>
                    </motion.div>

                    {/* Corner shine effect */}
                    <motion.div
                      className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionDivider color="cyan" />

      {/* ========== FINAL CTA ========== */}
      <AnimatedSection className="py-32 relative overflow-hidden">
        {/* Dramatic background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-slate-800 to-blue-600/25"
          animate={{
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Robot Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-8 shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(6, 182, 212, 0.5)",
                  "0 0 100px rgba(6, 182, 212, 0.8)",
                  "0 0 60px rgba(6, 182, 212, 0.5)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Bot size={48} className="text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your AI Workforce{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Never Calls in Sick.
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12">
              Stop losing money to missed calls, forgotten follow-ups, and late-night estimate writing.
              Your digital team is ready to work right now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <PremiumButton onClick={scrollToContact} className="text-lg px-12 py-6">
                Hire Your AI Team
                <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={24} />
                </motion.span>
              </PremiumButton>

              <Link to="/platform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <PremiumButton className="text-lg px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Check Out Custom CRM
                  <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={24} />
                  </motion.span>
                </PremiumButton>
              </Link>

              <PremiumButton onClick={goToWhyUs} variant="secondary" className="text-lg px-12 py-6">
                Why Us
                <ArrowRight size={24} />
              </PremiumButton>

              <PremiumButton onClick={goBack} variant="secondary" className="text-lg px-12 py-6">
                <ArrowLeft size={24} />
                Go Back
              </PremiumButton>
            </div>

            <p className="text-sm text-slate-400 mt-8">
              See it in action • Contact us • Book an appointment
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
