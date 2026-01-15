import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, Repeat, Upload, Clock, TrendingUp, ArrowRight,
  Users, Zap
} from 'lucide-react';

const SmartSocialPlannerSection = () => {
  const automationFeatures = [
    {
      icon: Repeat,
      title: "Evergreen Content Queues",
      description: "Load timeless posts once and let them recycle automatically. Your best content keeps working for you, 24/7.",
      color: "purple",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      hoverIconBg: "bg-purple-500"
    },
    {
      icon: Upload,
      title: "Bulk CSV Scheduling",
      description: "Upload an entire month's content in one CSV file. Schedule hundreds of posts across all platforms in under 60 seconds.",
      color: "teal",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      hoverIconBg: "bg-teal-500"
    },
    {
      icon: Clock,
      title: "Time-Travel Posting",
      description: "Schedule posts months in advance. Set it, forget it, and watch your social presence run on autopilot.",
      color: "blue",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverIconBg: "bg-blue-500"
    }
  ];

  const stats = [
    { label: "Time Saved Per Week", value: "8+ Hours", icon: Clock },
    { label: "Posts Scheduled", value: "500+", icon: Upload },
    { label: "Engagement Boost", value: "+340%", icon: TrendingUp },
    { label: "Team Members", value: "Unlimited", icon: Users }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Calendar className="w-4 h-4" />
            Smart Social Planner
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Schedule a Month of Social Content<br />
            <span className="text-purple-600">In 5 Minutes or Less.</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stop scrambling for what to post every day. Plan, schedule, and publish to all your social channels from one unified calendar, then let automation do the rest.
          </motion.p>
        </div>

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
            <span className="font-semibold text-slate-700">Facebook</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
              <span className="text-white font-bold text-sm">IG</span>
            </div>
            <span className="font-semibold text-slate-700">Instagram</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">TT</span>
            </div>
            <span className="font-semibold text-slate-700">TikTok</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200">
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">in</span>
            </div>
            <span className="font-semibold text-slate-700">LinkedIn</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-semibold text-slate-700">Pinterest</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-200">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">▶</span>
            </div>
            <span className="font-semibold text-slate-700">YouTube</span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </motion.div>

        {/* Calendar Visualization */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-200/50 to-teal-100/30 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/images/feature-social-calendar.svg"
              alt="Smart Social Planner calendar showing scheduled posts across multiple platforms"
              className="w-full rounded-xl shadow-2xl border border-slate-200/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500 rounded-2xl -z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Automation Features Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {automationFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={`${feature.bgColor} rounded-2xl p-8 border-2 border-transparent hover:border-${feature.color}-300 transition-all duration-300 group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:${feature.hoverIconBg} transition-colors duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.iconColor} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dark Gradient Stats Row */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-teal-500/10 to-blue-500/10" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="/why-us#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/30 hover:-translate-y-0.5 group"
          >
            Contact us to see the in-depth feature
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default SmartSocialPlannerSection;
