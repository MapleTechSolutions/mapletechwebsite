import React from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone, Link2, Zap, FileStack, Sparkles, ArrowRight,
  Facebook, Chrome
} from 'lucide-react';

const MarketingAutomationSection = () => {
  const features = [
    {
      icon: Link2,
      title: "Unified Ad Hub.",
      subtitle: "Native Integration.",
      description: "Connect your ad accounts instantly. Control your entire marketing strategy without leaving your CRM dashboard.",
      highlight: "Connect Facebook & Google in seconds"
    },
    {
      icon: Zap,
      title: "1-Click Campaign Launch.",
      subtitle: "Launch in One Click.",
      description: "Get your campaigns up and running instantly. Select your goal, set your budget, and click 'Go Live'. We handle the rest.",
      highlight: "No complex settings required"
    },
    {
      icon: FileStack,
      title: "Industry Blueprints.",
      subtitle: "Pre-Built Success.",
      description: "Don't guess what works. Access our library of industry-specific, high-performance ad sets that are proven to convert for your niche.",
      highlight: "Real Estate, Finance, Retail & more"
    },
    {
      icon: Sparkles,
      title: "AI Creative Studio.",
      subtitle: "No Filming Required.",
      description: "No filming. No scripting. No stress. Our AI generates highly personalized ad copy and video creatives for you automatically, saving you hours of work.",
      highlight: "AI writes & designs for you"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Megaphone className="w-4 h-4" />
            Integrated Marketing Automation
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Launch Ads Directly From Your CRM.<br />
            <span className="text-teal-600">No Marketing Degree Required.</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stop juggling multiple ad platforms. Our Built-in Marketing Engine lets you launch
            high-converting Facebook and Google campaigns without ever leaving your dashboard.
          </motion.p>
        </div>

        {/* Platform Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">f</span>
            </div>
            <span className="font-semibold text-slate-700">Meta Ads</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200">
            <div className="w-8 h-8 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center">
              <span className="font-bold text-sm" style={{background: 'linear-gradient(to right, #4285f4, #ea4335, #fbbc05, #34a853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>G</span>
            </div>
            <span className="font-semibold text-slate-700">Google Ads</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">TT</span>
            </div>
            <span className="font-semibold text-slate-700">TikTok Ads</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </motion.div>

        {/* Main Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-teal-600 mb-1">{feature.subtitle}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                      <span className="text-sm text-slate-700 font-medium">{feature.highlight}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Showcase - Two Column */}
        <div className="space-y-20">

          {/* Ad Hub Showcase */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              className="flex-1 w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/50 to-blue-100/30 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/feature-ad-hub.svg"
                  alt="Ad Campaign Hub showing connected Facebook and Google accounts with 1-click launch"
                  className="w-full rounded-xl shadow-2xl border border-slate-200/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-500 rounded-2xl -z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            </motion.div>
            <motion.div
              className="flex-1 w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  1-Click Launch
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  From Zero to Live Campaign in 60 Seconds
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Our streamlined campaign builder eliminates the complexity. Choose your goal,
                  select an industry-proven template, set your budget, and hit launch.
                  The AI handles targeting, bidding, and optimization automatically.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    No complex campaign settings
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Pre-built audience targeting
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Automatic bid optimization
                  </li>
                </ul>
                <a
                  href="/why-us#contact"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors group/link"
                >
                  Contact us to see the in-depth feature
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* AI Creative Showcase */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <motion.div
              className="flex-1 w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/50 to-teal-100/30 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/images/feature-ai-creative.svg"
                  alt="AI Creative Studio generating video ads and copy automatically"
                  className="w-full rounded-xl shadow-2xl border border-slate-200/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500 rounded-2xl -z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            </motion.div>
            <motion.div
              className="flex-1 w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="max-w-lg">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  AI Creates Your Ads. You Just Approve.
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Describe what you're promoting in plain English. Our AI Creative Studio
                  generates scroll-stopping video ads, compelling copy, and multiple variants
                  for A/B testing in seconds.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    No filming or design skills needed
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Multiple creative variants instantly
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Personalized to your brand voice
                  </li>
                </ul>
                <a
                  href="/why-us#contact"
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold text-lg hover:text-purple-700 transition-colors group/link"
                >
                  Contact us to see the in-depth feature
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/why-us#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30 hover:-translate-y-0.5 group"
          >
            Contact us to see the in-depth feature
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketingAutomationSection;
