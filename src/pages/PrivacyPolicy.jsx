import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { PremiumButton } from '../components/shared/SharedComponents';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-slate-900 mb-4">{title}</h2>
    <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Privacy Policy | Maple Tech Solutions</title>
        <meta name="description" content="Maple Tech Solutions Privacy Policy — how we collect, use, and protect your personal information in compliance with PIPEDA." />
        <link rel="canonical" href="https://mapletech.solutions/privacy" />
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: January 1, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Section title="1. Who We Are">
              <p>
                Maple Tech Solutions ("Maple Tech," "we," "us," or "our") is a software development company based in
                Saskatchewan, Canada. We build custom integrations, CRM systems, and AI automation tools for
                Canadian service businesses. Our contact information is:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Email: <a href="mailto:sales@mapletech.solutions" className="text-cyan-600 hover:underline">sales@mapletech.solutions</a></li>
                <li>Phone: <a href="tel:+13069421617" className="text-cyan-600 hover:underline">+1 (306) 942-1617</a></li>
                <li>Location: Saskatchewan, Canada</li>
              </ul>
            </Section>

            <Section title="2. What Information We Collect">
              <p>We collect personal information only when you voluntarily provide it to us through the contact form on our website. This includes:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Name</strong> — to address you properly in our response</li>
                <li><strong>Email address</strong> — to reply to your inquiry</li>
                <li><strong>Message content</strong> — to understand your business needs</li>
              </ul>
              <p>
                We do not collect payment information, government identification, or any sensitive personal information
                through this website. We do not use tracking cookies, analytics platforms, or advertising pixels.
              </p>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use the information you provide solely to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Respond to your inquiry or request for a consultation</li>
                <li>Follow up on discussions about potential projects</li>
                <li>Send service-related communications if you become a client</li>
              </ul>
              <p>
                We will not use your information for marketing purposes without your explicit consent, and we will
                never sell, rent, or trade your personal information to third parties.
              </p>
            </Section>

            <Section title="4. Legal Basis (PIPEDA Compliance)">
              <p>
                Maple Tech Solutions operates in accordance with Canada's Personal Information Protection and
                Electronic Documents Act (PIPEDA). We collect personal information only with your knowledge and
                consent (implied when you submit our contact form), and only for the purposes identified above.
              </p>
              <p>
                You have the right to access your personal information held by us, correct inaccuracies, and
                withdraw consent at any time by contacting us at{' '}
                <a href="mailto:sales@mapletech.solutions" className="text-cyan-600 hover:underline">sales@mapletech.solutions</a>.
              </p>
            </Section>

            <Section title="5. How We Store and Protect Your Information">
              <p>
                Contact form submissions are processed by Netlify Forms and stored securely on Netlify's
                infrastructure. We access these submissions only to respond to inquiries. We do not maintain
                a separate database of website visitor information.
              </p>
              <p>
                Our website is served over HTTPS. We apply reasonable technical and organizational safeguards
                appropriate to the sensitivity of the information collected.
              </p>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain contact form submissions and related correspondence for up to 3 years from the date
                of receipt, or for the duration of any business relationship, whichever is longer. After this
                period, records are securely deleted or anonymized.
              </p>
            </Section>

            <Section title="7. Third-Party Services">
              <p>Our website uses the following third-party services:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Netlify</strong> — website hosting and form processing (netlify.com)</li>
                <li><strong>Google Fonts</strong> — font delivery (fonts.googleapis.com)</li>
              </ul>
              <p>
                Each of these services has its own privacy policy governing how they handle data. We encourage
                you to review their policies if you have concerns.
              </p>
            </Section>

            <Section title="8. Your Rights">
              <p>Under PIPEDA, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Know what personal information we hold about you</li>
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Withdraw consent to our use of your information</li>
                <li>Lodge a complaint with the Office of the Privacy Commissioner of Canada</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:sales@mapletech.solutions" className="text-cyan-600 hover:underline">sales@mapletech.solutions</a>.
              </p>
            </Section>

            <Section title="9. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update the "Last updated"
                date at the top of this page. We encourage you to review this policy periodically. Continued use
                of our website after changes are posted constitutes acceptance of the updated policy.
              </p>
            </Section>

            <Section title="10. Contact">
              <p>
                If you have questions or concerns about this Privacy Policy or our privacy practices, please
                contact us:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Email: <a href="mailto:sales@mapletech.solutions" className="text-cyan-600 hover:underline">sales@mapletech.solutions</a></li>
                <li>Phone: <a href="tel:+13069421617" className="text-cyan-600 hover:underline">+1 (306) 942-1617</a></li>
              </ul>
            </Section>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <Link to="/">
                <PremiumButton variant="secondary">← Back to Home</PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
