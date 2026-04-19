import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap } from 'lucide-react';
import { springConfigs, fadeInUp, scaleIn, cinematicStagger } from '../shared/SharedComponents';
import ResultBadge from './ResultBadge';

const ZigZagFeature = ({ icon: Icon, headline, problem, solution, result, imagePosition = "right", index, visualization: VisualizationComponent, agentLabel, accentColor = "cyan" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isImageRight = imagePosition === "right";

  // Color mappings
  const colorMap = {
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
      glow: "rgba(6, 182, 212, 0.5)"
    },
    green: {
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      text: "text-green-400",
      glow: "rgba(34, 197, 94, 0.5)"
    },
    orange: {
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      text: "text-orange-400",
      glow: "rgba(249, 115, 22, 0.5)"
    }
  };

  const colors = colorMap[accentColor] || colorMap.cyan;

  return (
    <motion.div
      ref={ref}
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className={`max-w-7xl mx-auto px-6 flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24`}>


        {/* Text Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: isImageRight ? -60 : 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Icon */}
          <motion.div
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-8 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 10, boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)" }}
          >
            <Icon size={32} className="text-white" />
          </motion.div>

          {/* Digital Identity Badge */}
          {agentLabel && (
            <motion.div
              className={`inline-flex items-center gap-3 px-6 py-3 ${colors.bg} border-2 ${colors.border} rounded-full mb-6`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Glowing green dot */}
              <motion.div
                className="w-3 h-3 bg-green-400 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 8px rgba(34, 197, 94, 0.6)",
                    "0 0 20px rgba(34, 197, 94, 0.9)",
                    "0 0 8px rgba(34, 197, 94, 0.6)",
                  ],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={`text-sm md:text-base font-bold ${colors.text} uppercase tracking-widest`}>
                {agentLabel}
              </span>
            </motion.div>
          )}

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h2>

          {/* The Problem */}
          <div className="mb-6 p-6 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
            <p className="text-slate-300 leading-relaxed italic">
              "{problem}"
            </p>
          </div>

          {/* The Solution */}
          <div className="mb-6 p-6 bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-lg">
            <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <Zap size={20} />
              The Solution
            </h3>
            <p className="text-slate-200 leading-relaxed">
              {solution}
            </p>
          </div>

          {/* Result Badge */}
          {result && <ResultBadge>{result}</ResultBadge>}
        </motion.div>

        {/* Visual Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: isImageRight ? 60 : -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative group">
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Animated Visualization */}
            <div className="relative">
              {VisualizationComponent ? <VisualizationComponent /> : (
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 flex items-center justify-center min-h-[400px] border border-cyan-500/20">
                  <Icon size={120} className="text-cyan-500/30" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ZigZagFeature;

