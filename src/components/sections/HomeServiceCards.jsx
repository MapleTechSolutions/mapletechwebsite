import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, GitMerge, Globe, LayoutDashboard, Wrench } from 'lucide-react';
import {
  scaleIn,
  cinematicStagger,
  springConfigs,
  useLiteMotion,
} from '../shared/SharedComponents';

const services = [
  {
    icon: Wrench,
    title: 'Local Business Booster',
    body: 'A done-with-you system for local trades and service businesses: website, missed-call text back, follow-up automations, and review engine.',
    href: '/local-business-booster',
    iconClass: 'bg-orange-500/10 text-orange-500',
    linkClass: 'text-orange-500',
    hoverClass: 'hover:border-orange-300 hover:shadow-orange-100/80',
  },
  {
    icon: Globe,
    title: 'Website Design for Local Businesses',
    body: 'Fast, mobile-first websites built to generate calls and inquiries - not just look good.',
    href: '/websites',
    iconClass: 'bg-cyan-500/10 text-cyan-500',
    linkClass: 'text-cyan-500',
    hoverClass: 'hover:border-cyan-300 hover:shadow-cyan-100/80',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom CRM & Automations',
    body: 'Custom pipelines, automations, and dashboards for when off-the-shelf tools hit their ceiling.',
    href: '/custom-crm',
    iconClass: 'bg-green-500/10 text-green-500',
    linkClass: 'text-green-500',
    hoverClass: 'hover:border-green-300 hover:shadow-green-100/80',
  },
  {
    icon: GitMerge,
    title: 'Integrations & ERP',
    body: 'Connecting tools like Procore, Sage, Vista, and QuickBooks so your team stops doing double data entry.',
    href: '/integrations',
    iconClass: 'bg-slate-500/10 text-slate-600',
    linkClass: 'text-slate-600',
    hoverClass: 'hover:border-slate-400 hover:shadow-slate-200/80',
  },
];

export default function HomeServiceCards() {
  const { liteMotion, disableHoverAnimations } = useLiteMotion();

  return (
    <section aria-label="What we do" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={liteMotion ? undefined : scaleIn}
          initial={liteMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600 mb-3">What we do</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            What Maple Tech can do for your business
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={liteMotion ? undefined : cinematicStagger}
          initial={liteMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map(({ icon: Icon, title, body, href, iconClass, linkClass, hoverClass }) => (
            <motion.div key={title} variants={liteMotion ? undefined : scaleIn}>
              <Link
                to={href}
                className={`group block h-full bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl ${hoverClass} transition-all duration-300`}
              >
                <motion.div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconClass}`}
                  whileHover={disableHoverAnimations ? undefined : { rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", ...springConfigs.snappy }}
                >
                  <Icon size={28} />
                </motion.div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{body}</p>
                <span className={`inline-flex items-center gap-2 text-sm font-bold ${linkClass} group-hover:gap-3 transition-all duration-200`}>
                  Learn more
                  <ArrowRight size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
