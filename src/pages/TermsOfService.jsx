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

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Terms of Service | Maple Tech Solutions</title>
        <meta name="description" content="Terms of Service for Maple Tech Solutions — governing use of our website and services. Saskatchewan, Canada." />
        <link rel="canonical" href="https://mapletech.solutions/terms" />
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Terms of Service</h1>
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
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing or using the website at mapletech.solutions (the "Site"), you agree to be bound
                by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.
              </p>
              <p>
                These Terms govern your use of the Site only. Separate written agreements govern any software
                development, integration, or consulting services provided by Maple Tech Solutions.
              </p>
            </Section>

            <Section title="2. About Maple Tech Solutions">
              <p>
                Maple Tech Solutions is a software development company based in Saskatchewan, Canada. We design
                and build custom integrations, CRM systems, and AI automation tools for Canadian service businesses.
              </p>
              <p>Contact: <a href="mailto:sales@mapletech.solutions" className="text-cyan-600 hover:underline">sales@mapletech.solutions</a> | +1 (306) 942-1617</p>
            </Section>

            <Section title="3. Use of the Site">
              <p>You may use the Site for lawful purposes only. You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Use the Site in any way that violates applicable Canadian federal, provincial, or local laws</li>
                <li>Transmit any unsolicited commercial communications or spam through the contact form</li>
                <li>Attempt to gain unauthorized access to any portion of the Site or its infrastructure</li>
                <li>Use automated tools to scrape or extract content from the Site</li>
                <li>Impersonate Maple Tech Solutions or any of its employees</li>
              </ul>
            </Section>

            <Section title="4. Intellectual Property">
              <p>
                All content on this Site — including text, graphics, logos, design, and code — is the property
                of Maple Tech Solutions and is protected by applicable Canadian and international intellectual
                property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any content on this
                Site without our prior written consent.
              </p>
            </Section>

            <Section title="5. No Warranty">
              <p>
                THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
                OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, MAPLE TECH SOLUTIONS DISCLAIMS ALL WARRANTIES,
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other
                harmful components.
              </p>
            </Section>

            <Section title="6. Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, MAPLE TECH SOLUTIONS SHALL NOT BE LIABLE FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR
                INABILITY TO USE THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                Our total liability to you for any claim arising from your use of the Site shall not exceed CAD $100.
              </p>
            </Section>

            <Section title="7. External Links">
              <p>
                The Site may contain links to third-party websites. These links are provided for convenience only.
                Maple Tech Solutions has no control over the content of those sites and accepts no responsibility
                for them or for any loss or damage that may arise from your use of them.
              </p>
            </Section>

            <Section title="8. Privacy">
              <p>
                Your use of the Site is also governed by our{' '}
                <Link to="/privacy" className="text-cyan-600 hover:underline">Privacy Policy</Link>,
                which is incorporated into these Terms by reference.
              </p>
            </Section>

            <Section title="9. Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Province of
                Saskatchewan and the federal laws of Canada applicable therein, without regard to conflict of law
                principles. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction
                of the courts of Saskatchewan.
              </p>
            </Section>

            <Section title="10. Changes to Terms">
              <p>
                We reserve the right to update these Terms at any time. We will indicate the date of the most
                recent update at the top of this page. Your continued use of the Site following any changes
                constitutes your acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>For questions about these Terms, contact us:</p>
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
