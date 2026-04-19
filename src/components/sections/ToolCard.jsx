import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { springConfigs } from '../shared/SharedComponents';

const ToolCard = ({ icon: Icon, headline, copy, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-cyan-500/20 overflow-hidden"
        whileHover={{
          y: -10,
          boxShadow: "0 30px 60px rgba(6, 182, 212, 0.3)",
          borderColor: "rgba(6, 182, 212, 0.5)"
        }}
        transition={{ type: "spring", ...springConfigs.snappy }}
      >
        {/* Background glow on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Icon */}
        <motion.div
          className="relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6"
          whileHover={{ scale: 1.2, rotate: 15 }}
          transition={{ type: "spring", ...springConfigs.bouncy }}
        >
          <Icon size={28} className="text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-4 relative">
          {headline}
        </h3>
        <p className="text-slate-300 leading-relaxed relative">
          {copy}
        </p>

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </motion.div>
    </motion.div>
  );
};

export default ToolCard;

