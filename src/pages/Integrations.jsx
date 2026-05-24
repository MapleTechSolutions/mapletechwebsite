import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  PremiumButton,
  fadeInUp,
  useLiteMotion,
} from '../components/shared/SharedComponents';

export default function Integrations() {
  const { liteMotion } = useLiteMotion();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <Helmet>
        <title>Integrations & ERP | Maple Tech Solutions</title>
        <meta
          name="description"
          content="Integrations and ERP connections for local teams that need their tools, field systems, and accounting software to stay in sync."
        />
        <link rel="canonical" href="https://mapletech.solutions/integrations" />
      </Helmet>

      <motion.div
        className="text-center max-w-2xl"
        variants={liteMotion ? undefined : fadeInUp}
        initial={liteMotion ? false : "hidden"}
        animate="show"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
          Integrations & ERP
        </p>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
          Connecting your tools.
        </h1>
        <p className="text-slate-400 text-lg mb-10">
          This page is being built. Book a call if your team is stuck copying data between apps.
        </p>
        <Link to="/why-us#contact">
          <PremiumButton variant="primary">Book a free strategy call</PremiumButton>
        </Link>
      </motion.div>
    </div>
  );
}
