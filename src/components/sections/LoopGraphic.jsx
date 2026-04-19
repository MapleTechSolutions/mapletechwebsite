import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const LoopGraphic = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    { label: "Quote Sent", icon: FileText, color: "cyan" },
    { label: "Wait 2 Days", icon: Clock, color: "orange" },
    { label: "Follow Up", icon: MessageSquare, color: "green" },
    { label: "Deal Closed", icon: CheckCircle, color: "emerald" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-visible p-8">
      {/* Circular Path */}
      <svg className="absolute w-80 h-80" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="rgba(6, 182, 212, 0.2)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Traveling Dot */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-cyan-400 shadow-lg"
        style={{
          offsetPath: "path('M 100 30 A 70 70 0 1 1 99.9 30')",
          offsetDistance: "0%",
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
          boxShadow: [
            "0 0 20px rgba(6, 182, 212, 0.8)",
            "0 0 30px rgba(6, 182, 212, 1)",
            "0 0 20px rgba(6, 182, 212, 0.8)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Step Nodes */}
      {steps.map((step, i) => {
        const angle = (i * 90 - 90) * (Math.PI / 180);
        const radius = 140;
        const Icon = step.icon;
        const isActive = i === activeStep;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="relative flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={`w-20 h-20 rounded-full flex items-center justify-center border-4 ${
                  isActive
                    ? 'bg-gradient-to-br from-green-400 to-green-500 border-green-300 shadow-2xl'
                    : step.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 border-cyan-400/50'
                    : step.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-600 border-orange-400/50'
                    : step.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600 border-green-400/50'
                    : 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-400/50'
                }`}
                animate={{
                  scale: isActive ? [1, 1.15, 1] : 1,
                  boxShadow: isActive
                    ? [
                        '0 0 30px rgba(34, 197, 94, 0.6)',
                        '0 0 50px rgba(34, 197, 94, 0.9)',
                        '0 0 30px rgba(34, 197, 94, 0.6)',
                      ]
                    : [
                        `0 0 20px rgba(6, 182, 212, 0.3)`,
                        `0 0 30px rgba(6, 182, 212, 0.5)`,
                        `0 0 20px rgba(6, 182, 212, 0.3)`,
                      ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <Icon size={28} className="text-white" />
              </motion.div>
              <motion.p
                className={`mt-2 text-sm font-bold whitespace-nowrap px-4 py-2 rounded-full ${
                  isActive
                    ? 'bg-green-500/90 text-white border-2 border-green-300'
                    : 'bg-slate-800/80 text-cyan-300 border border-cyan-500/30'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isActive ? [1, 1.1, 1] : 1
                }}
                transition={{
                  delay: i * 0.2 + 0.3,
                  scale: { duration: 0.5, repeat: Infinity }
                }}
              >
                {step.label}
              </motion.p>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center Text */}
      <motion.div
        className="absolute text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-cyan-400 text-lg font-bold">Automated</p>
        <p className="text-cyan-300 text-sm">Follow-Up Loop</p>
      </motion.div>
    </div>
  );
};


export default LoopGraphic;

