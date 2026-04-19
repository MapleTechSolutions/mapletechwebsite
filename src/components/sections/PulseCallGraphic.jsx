import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CheckCircle } from 'lucide-react';

const PulseCallGraphic = () => {
  const [callsProcessed, setCallsProcessed] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCallsProcessed((prev) => (prev + 1) % 100);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
      {/* Central Pulse Circle */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 40px rgba(6, 182, 212, 0.6)",
            "0 0 80px rgba(6, 182, 212, 0.9)",
            "0 0 40px rgba(6, 182, 212, 0.6)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Phone size={48} className="text-white" />
      </motion.div>

      {/* Pulsing Rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full border-2 border-cyan-400/40"
          style={{
            width: '100px',
            height: '100px',
          }}
          animate={{
            scale: [1, 3.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.75,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Floating Incoming Calls */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 200;

        return (
          <motion.div
            key={`call-${i}`}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{
              x: Math.cos(angle) * radius - 50,
              y: Math.sin(angle) * radius - 20,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full backdrop-blur-sm"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(6, 182, 212, 0.3)",
                  "0 0 20px rgba(6, 182, 212, 0.6)",
                  "0 0 10px rgba(6, 182, 212, 0.3)",
                ],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Phone size={16} className="text-cyan-400" />
              <span className="text-xs text-cyan-300 font-semibold whitespace-nowrap">
                Incoming
              </span>
            </motion.div>

            {/* Transform to Booked */}
            <motion.div
              className="absolute inset-0 flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/50 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                scale: [0, 0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5 + 1.5,
              }}
            >
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-xs text-green-300 font-semibold whitespace-nowrap">
                Booked
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Stats Counter */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-cyan-400 text-sm font-semibold">
          24/7 Active • Never Misses a Call
        </p>
      </motion.div>
    </div>
  );
};

export default PulseCallGraphic;

