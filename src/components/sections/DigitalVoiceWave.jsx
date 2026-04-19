import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const DigitalVoiceWave = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Central AI Core */}
      <motion.div
        className="absolute z-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl"
        animate={{
          boxShadow: [
            "0 0 60px rgba(6, 182, 212, 0.5)",
            "0 0 100px rgba(6, 182, 212, 0.8)",
            "0 0 60px rgba(6, 182, 212, 0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Bot size={48} className="text-white" />
      </motion.div>

      {/* Orbiting Nodes */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-cyan-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: [
              Math.cos((angle * Math.PI) / 180) * 150,
              Math.cos(((angle + 360) * Math.PI) / 180) * 150,
            ],
            y: [
              Math.sin((angle * Math.PI) / 180) * 150,
              Math.sin(((angle + 360) * Math.PI) / 180) * 150,
            ],
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear"
          }}
        />
      ))}

      {/* Voice Wave Lines */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute bg-cyan-400/20"
          style={{
            width: '2px',
            height: '60px',
            left: `${35 + i * 5}%`,
            transformOrigin: 'center',
          }}
          animate={{
            scaleY: [0.3, 1, 0.5, 1.2, 0.3],
            opacity: [0.3, 0.8, 0.5, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Pulsing Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border-2 border-cyan-400/30"
          style={{
            width: '80px',
            height: '80px',
            left: '50%',
            top: '50%',
            marginLeft: '-40px',
            marginTop: '-40px',
          }}
          animate={{
            scale: [1, 3, 3],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default DigitalVoiceWave;

