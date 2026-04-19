import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Lock, Server, MapPin } from 'lucide-react';
import {
  PremiumButton,
  SectionDivider,
  AnimatedSection,
  fadeInUp,
  scaleIn,
  cinematicStagger,
  springConfigs
} from '../components/shared/SharedComponents';

// Import Section Components
import ComparisonTableSection from '../components/sections/ComparisonTableSection';
import LocalSupportSection from '../components/sections/LocalSupportSection';
import { ContactForm } from '../components/sections/ContactFormSection';

export default function WhyUs() {
  const { hash } = useLocation();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (hash === '#contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ========== WHY US HEADER ========== */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-500/20 rounded-full text-sm font-medium text-orange-600 mb-6 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", ...springConfigs.bouncy }}
            >
              Trust & Value
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500 bg-clip-text text-transparent">
                Maple Tech?
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
              We're not just another software company. We're your local partner, committed to your success with transparent, affordable pricing that scales with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton onClick={() => scrollTo('comparison')}>
                See the Comparison
                <ArrowRight size={18} />
              </PremiumButton>
              <PremiumButton onClick={() => scrollTo('contact')} variant="secondary">
                Get Started
              </PremiumButton>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider color="orange" />

      {/* ========== COMPARISON TABLE ========== */}
      <div id="comparison">
        <ComparisonTableSection />
      </div>

      <SectionDivider color="green" />

      {/* ========== LOCAL SUPPORT ========== */}
      <LocalSupportSection />

      <SectionDivider color="cyan" />

      {/* ========== THE LOCAL ADVANTAGE (Regina Skyline) ========== */}
      <AnimatedSection id="local-advantage" className="relative py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", ...springConfigs.snappy }}
          >
            <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <MapPin size={16} className="text-orange-400" />
            </motion.div>
            <span className="text-sm font-semibold text-white">Regina Owned & Operated | Saskatchewan</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built in the Prairies.<br />
            <motion.span
              className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Trusted Across Canada.
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            We believe in the Prairie values of hard work and straight talk. No overseas call centers, just real support from a team right here in Saskatchewan.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={cinematicStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: ShieldCheck, text: 'SOC 2 Compliant' },
              { icon: Lock, text: 'End-to-End Encryption' },
              { icon: Server, text: 'Local Business Support' },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
                variants={scaleIn}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.18)" }}
                transition={{ type: "spring", ...springConfigs.snappy }}
              >
                <Icon size={18} className="text-green-400" />
                <span className="text-sm font-medium text-white">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <SectionDivider color="orange" />

      {/* ========== FINAL CTA ========== */}
      <AnimatedSection id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(14,165,233,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)',
          }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="w-full mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Modernize?
          </motion.h2>
          <motion.p
            className="text-lg text-slate-400 mb-10"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
          >
            Whether you need to connect existing tools or build something new, let's talk about what's possible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24 }}
          >
            <PremiumButton onClick={() => { scrollTo('contact'); }} className="text-lg px-10 py-5">
              Book Your Free Consultation
              <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={20} />
              </motion.span>
            </PremiumButton>
          </motion.div>

          {/* Embedded Contact Form (shared) */}
          <motion.div
            className="mt-12 w-full md:w-[70%] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ContactForm compact={true} />
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
