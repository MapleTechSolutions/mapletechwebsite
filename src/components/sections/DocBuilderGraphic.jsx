import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DocBuilderGraphic = () => {
  const [buildStage, setBuildStage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setBuildStage((prev) => (prev + 1) % 4);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden p-8">
      {/* Document Sheet */}
      <motion.div
        className="relative w-full max-w-sm h-96 bg-white rounded-lg shadow-2xl overflow-hidden"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        {/* Document Lines */}
        <div className="p-8 space-y-3">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="h-2 bg-gradient-to-r from-slate-300 to-slate-200 rounded"
              style={{
                width: i === 11 ? '60%' : i % 3 === 0 ? '90%' : '100%',
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{
                scaleX: buildStage >= 1 ? 1 : 0,
              }}
              transition={{
                delay: i * 0.02,
                duration: 0.15,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Signature Line */}
          <motion.div
            className="mt-8 pt-4 border-t-2 border-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: buildStage >= 2 ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="relative"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: buildStage >= 2 ? 1 : 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              <svg className="w-32 h-12" viewBox="0 0 100 40">
                <motion.path
                  d="M 10 30 Q 20 10, 40 25 T 80 20"
                  stroke="#1e293b"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: buildStage >= 2 ? 1 : 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                />
              </svg>
              <p className="text-xs text-slate-500 mt-1">Customer Signature</p>
            </motion.div>
          </motion.div>
        </div>

        {/* PAID Stamp */}
        <AnimatePresence>
          {buildStage >= 3 && (
            <motion.div
              className="absolute top-1/2 right-12 -translate-y-1/2"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{
                scale: [0, 1.3, 1],
                rotate: [-45, 15, 12],
                opacity: 1,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center bg-green-500/10 -rotate-12">
                  <p className="text-green-600 text-2xl font-bold tracking-wider">PAID</p>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-green-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Sparkles Effect */}
      {buildStage >= 3 && (
        <>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${50 + (Math.random() - 0.5) * 40}%`,
                top: `${50 + (Math.random() - 0.5) * 40}%`,
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [1, 1, 0],
                y: [0, -50],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2.5,
              }}
            />
          ))}
        </>
      )}

      {/* Bottom Label */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-cyan-400 text-sm font-semibold">
          Generated in Seconds
        </p>
      </motion.div>
    </div>
  );
};

export default DocBuilderGraphic;

