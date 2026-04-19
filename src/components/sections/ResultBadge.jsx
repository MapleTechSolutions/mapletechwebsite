import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { springConfigs } from '../shared/SharedComponents';

const ResultBadge = ({ children }) => (
  <motion.div
    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-semibold shadow-lg"
    initial={{ scale: 0, rotate: -180 }}
    whileInView={{ scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ type: "spring", ...springConfigs.bouncy, delay: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)" }}
  >
    <CheckCircle size={20} />
    {children}
  </motion.div>
);

export default ResultBadge;

