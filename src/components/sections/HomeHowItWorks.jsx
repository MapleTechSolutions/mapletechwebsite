import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PremiumButton,
  fadeInUp,
  cinematicStagger,
  springConfigs,
  useLiteMotion,
} from '../shared/SharedComponents';

const steps = [
  {
    number: '1',
    title: 'Quick Call',
    body: "We learn how your business runs today and where it's getting stuck. 20-30 minutes.",
  },
  {
    number: '2',
    title: 'System Plan',
    body: 'We recommend the right mix: website, automations, CRM, or integrations - based on your actual gaps.',
  },
  {
    number: '3',
    title: 'Build & Launch',
    body: 'We set everything up, train you, and stay close for the first 30 days. You focus on the jobs.',
  },
];

export default function HomeHowItWorks() {
  const { liteMotion } = useLiteMotion();

  return (
    <section aria-label="How it works" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          variants={liteMotion ? undefined : fadeInUp}
          initial={liteMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600 mb-3">The process</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            How working with Maple Tech works
          </h2>
        </motion.div>

        <motion.div
          className="relative grid md:grid-cols-3 gap-12"
          variants={liteMotion ? undefined : cinematicStagger}
          initial={liteMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="hidden md:block absolute top-12 left-0 w-full h-px border-t-2 border-dashed border-slate-200" />
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="relative z-10"
              variants={liteMotion ? undefined : fadeInUp}
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-orange-400 text-white font-black text-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-orange-500/20"
                initial={liteMotion ? false : { scale: 0.5 }}
                whileInView={liteMotion ? undefined : { scale: [0.5, 1.1, 1] }}
                viewport={{ once: true }}
                transition={liteMotion ? undefined : { type: "spring", ...springConfigs.bouncy }}
              >
                {step.number}
              </motion.div>
              <h3 className="text-xl font-black text-slate-900 mb-3 text-center uppercase tracking-tight">{step.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed text-center font-light">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          variants={liteMotion ? undefined : fadeInUp}
          initial={liteMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Link to="/why-us#contact">
            <PremiumButton variant="orange">Book your free strategy call</PremiumButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
