import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  PremiumButton,
  fadeInUp,
  useLiteMotion,
} from '../components/shared/SharedComponents';

export default function LocalBusinessBooster() {
  const { liteMotion } = useLiteMotion();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <Helmet>
        <title>Local Business Booster | Maple Tech Solutions</title>
        <meta
          name="description"
          content="Done-with-you systems for local trades and service businesses — website, automations, follow-up, and more."
        />
        <link rel="canonical" href="https://mapletech.solutions/local-business-booster" />
      </Helmet>

      <motion.div
        className="text-center max-w-2xl"
        variants={liteMotion ? undefined : fadeInUp}
        initial={liteMotion ? false : "hidden"}
        animate="show"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-4">
          Local Business Booster
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
          This page is being built.
        </h1>
        <p className="text-slate-400 text-lg mb-10">
          The full Local Business Booster page is coming soon. Book a call to learn how the system works.
        </p>
        <Link to="/why-us#contact">
          <PremiumButton variant="orange">Book a free strategy call</PremiumButton>
        </Link>
      </motion.div>
    </div>
  );
}
