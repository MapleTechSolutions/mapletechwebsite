import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PremiumButton } from '../components/shared/SharedComponents';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 pt-24">
      <Helmet>
        <title>Page Not Found | Maple Tech Solutions</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="text-center max-w-lg">
        <motion.div
          className="w-24 h-24 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
        >
          <img src="/logo.png" alt="Maple Tech Solutions" className="h-16 w-auto object-contain" />
        </motion.div>

        <motion.h1
          className="text-8xl font-extrabold text-white mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
            404
          </span>
        </motion.h1>

        <motion.p
          className="text-xl font-semibold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Page not found
        </motion.p>

        <motion.p
          className="text-slate-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/">
            <PremiumButton>Back to Home</PremiumButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
