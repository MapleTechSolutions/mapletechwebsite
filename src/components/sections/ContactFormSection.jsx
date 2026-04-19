import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Sparkles, Send, User, Mail, Phone, Building2, Briefcase, ArrowRight } from 'lucide-react';
import { springConfigs } from '../shared/SharedComponents';

function encode(data) {
  return Object.keys(data)
    .map((key) => {
      const value = Array.isArray(data[key]) ? data[key].join(', ') : data[key];
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    })
    .join('&');
}

export function ContactForm({ compact = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    interests: [],
    additionalInformation: '',
    consent: false,
    'bot-field': '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    page_url: '',
    referrer: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setForm((f) => ({
      ...f,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      page_url: window.location.toString(),
      referrer: document.referrer || ''
    }));
  }, []);

  function validate() {
    const e = {};

    // Name validation
    if (!form.name.trim()) {
      e.name = 'Name is required.';
    } else if (form.name.trim().length < 2) {
      e.name = 'Please enter your full name.';
    }

    // Email validation
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(form.email)) {
        e.email = 'Please enter a valid business email.';
      }
    }

    // Phone validation
    if (!form.phone.trim()) {
      e.phone = 'Phone number is required.';
    } else {
      const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
      const digitsOnly = form.phone.replace(/\D/g, '');
      if (!phoneRegex.test(form.phone) || digitsOnly.length < 10) {
        e.phone = 'Please enter a valid phone number (at least 10 digits).';
      }
    }

    // Industry validation
    if (!form.industry) {
      e.industry = 'Please select your industry.';
    }

    // Interests validation (at least one must be selected)
    if (form.interests.length === 0) {
      e.interests = 'Please select at least one area of interest.';
    }

    // Challenge and referral fields removed (optional fields)

    // Consent validation
    if (!form.consent) {
      e.consent = 'You must consent to be contacted.';
    }

    // Bot field check
    if (form['bot-field']) {
      e.bot = 'Bot detected.';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Close dropdown if open
    setInterestsDropdownOpen(false);

    // Clear previous errors
    setErrors({});

    if (!validate()) {
      // Scroll to first error
      const firstError = document.querySelector('.text-red-600');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setSubmitting(true);

    const payload = {
      'form-name': 'contact',
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      company: form.company.trim() || 'Not provided',
      industry: form.industry,
      interests: form.interests,
      additionalInformation: form.additionalInformation.trim() || 'Not provided',
      consent: form.consent ? 'yes' : 'no',
      'bot-field': form['bot-field'],
      utm_source: form.utm_source,
      utm_medium: form.utm_medium,
      utm_campaign: form.utm_campaign,
      page_url: form.page_url,
      referrer: form.referrer
    };

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload)
      });

      if (res.ok) {
        setSuccess(true);
        // Reset form to initial state
        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          interests: [],
          additionalInformation: '',
          consent: false,
          'bot-field': '',
          utm_source: form.utm_source,
          utm_medium: form.utm_medium,
          utm_campaign: form.utm_campaign,
          page_url: form.page_url,
          referrer: form.referrer
        });
        setErrors({});
        // Scroll to success message
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        const text = await res.text();
        setErrors({ submit: 'Unable to submit form. Please try again or contact us directly at sales@mapletech.solutions' });
      }
    } catch (err) {
      setErrors({ submit: 'Network error. Please check your connection and try again.' });
    }

    setSubmitting(false);
  }

  // Helper function to handle checkbox changes
  const handleInterestChange = (interest) => {
    setForm((prev) => {
      const interests = prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests };
    });
  };

  // State for dropdown toggle
  const [interestsDropdownOpen, setInterestsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (interestsDropdownOpen && !event.target.closest('.interests-dropdown')) {
        setInterestsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [interestsDropdownOpen]);

  // If compact is true, return a smaller wrapper (useful when embedded)
  return (
    <div className={compact ? 'mt-8' : 'min-h-screen bg-gradient-to-b from-slate-50 to-white py-28'}>
      <div className={compact ? 'w-full md:w-[70%] mx-auto' : 'max-w-6xl mx-auto px-6'}>
        {!compact && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-700 mb-6 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", ...springConfigs.bouncy }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Sparkles size={16} className="text-cyan-600" />
              </motion.div>
              Let's Transform Your Business
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Get In Touch{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours to discuss how we can help streamline your business.
            </p>
          </motion.div>
        )}

        {success ? (
          <motion.div
            className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", ...springConfigs.bouncy }}
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <motion.div
                className="flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              <div className="flex-1">
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-green-900 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Thank You!
                </motion.h3>
                <motion.p
                  className="text-green-800 text-lg md:text-xl mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  We've received your message and appreciate you reaching out to Maple Tech Solutions.
                </motion.p>
                <motion.div
                  className="bg-white/80 backdrop-blur-sm border-2 border-green-300/50 rounded-xl p-5 mb-4 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-green-900 font-semibold flex items-center gap-3 text-lg">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <AlertCircle className="w-6 h-6 text-green-600" />
                    </motion.div>
                    Our team will get in touch with you within 24 hours.
                  </p>
                </motion.div>
                <motion.p
                  className="text-green-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  In the meantime, feel free to explore our solutions or call us directly at{' '}
                    <a href="tel:+13069421617" className="font-bold underline hover:text-green-900 transition-colors">
                    +1 (306) 942-1617
                  </a>
                  .
                </motion.p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-8 bg-white/90 backdrop-blur-md p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl border border-slate-200/50 w-full lg:w-[90%] xl:w-[80%] mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/40 to-green-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100/30 to-cyan-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" value={form['bot-field']} onChange={() => {}} />
            <input type="hidden" name="industry" value={form.industry} />
            <input type="hidden" name="interests" value={form.interests.join(', ')} />
            <input type="hidden" name="additionalInformation" value={form.additionalInformation} />

            {/* Contact Information Section */}
            <motion.div
              className="border-b border-slate-200 pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Full Name */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-cyan-600" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full px-4 py-3.5 border rounded-xl bg-white hover:border-cyan-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                      errors.name ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <motion.div className="text-red-600 text-sm mt-2 flex items-center gap-1" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}><AlertCircle className="w-4 h-4" />{errors.name}</motion.div>}
                </div>

                {/* Business Email */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-600" />
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full px-4 py-3.5 border rounded-xl bg-white hover:border-cyan-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                      errors.email ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-300'
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <motion.div className="text-red-600 text-sm mt-2 flex items-center gap-1" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}><AlertCircle className="w-4 h-4" />{errors.email}</motion.div>}
                </div>

                {/* Phone Number */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-600" />
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`w-full px-4 py-3.5 border rounded-xl bg-white hover:border-cyan-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-sm hover:shadow-md ${
                      errors.phone ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-300'
                    }`}
                    placeholder="(306) 123-4567"
                  />
                  {errors.phone && <motion.div className="text-red-600 text-sm mt-2 flex items-center gap-1" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}><AlertCircle className="w-4 h-4" />{errors.phone}</motion.div>}
                </div>

                {/* Company Name */}
                <div className="relative group sm:col-span-2 lg:col-span-3">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-cyan-600" />
                    Company Name <span className="text-slate-400 text-xs font-normal">(optional)</span>
                  </label>
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3.5 border border-slate-300 rounded-xl bg-white hover:border-cyan-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                    placeholder="Your Company Inc."
                  />
                </div>
              </div>
            </motion.div>

            {/* Business Details Section */}
            <motion.div
              className="border-b border-slate-200 pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Business Details</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Industry */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Industry / Business Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="industry"
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className={`w-full px-4 py-3.5 border rounded-xl bg-white hover:border-green-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm hover:shadow-md appearance-none cursor-pointer ${
                      errors.industry ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select your industry...</option>
                    <option value="Trades & Field Services">Trades & Field Services (HVAC, Plumbing, Electrical)</option>
                    <option value="Wellness & Healthcare">Wellness & Healthcare (Chiropractors, Dentists, Physio)</option>
                    <option value="Retail & E-Commerce">Retail & E-Commerce</option>
                    <option value="Coaching & Consulting">Coaching & Consulting</option>
                    <option value="Professional Services">Professional Services (Legal, Accounting)</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Home Services">Home Services (Cleaning, Landscaping)</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 top-[42px] pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {errors.industry && <motion.div className="text-red-600 text-sm mt-2 flex items-center gap-1" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}><AlertCircle className="w-4 h-4" />{errors.industry}</motion.div>}
                </div>

                {/* What are you interested in? - Dropdown with Checkboxes */}
                <div className="relative interests-dropdown">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What are you interested in? <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setInterestsDropdownOpen(!interestsDropdownOpen)}
                      className={`w-full px-4 py-3.5 border rounded-xl text-left bg-white hover:border-green-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm hover:shadow-md flex items-center justify-between ${
                        errors.interests ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-300'
                      }`}
                    >
                      <span className={form.interests.length === 0 ? 'text-slate-400' : 'text-slate-900 text-sm'}>
                        {form.interests.length === 0
                          ? 'Select services...'
                          : form.interests.length === 1
                          ? form.interests[0]
                          : `${form.interests.length} services selected`}
                      </span>
                      <motion.svg
                        className="w-5 h-5 flex-shrink-0 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: interestsDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>

                    {interestsDropdownOpen && (
                      <motion.div
                        className="absolute z-10 w-full mt-2 bg-white border border-slate-300 rounded-xl shadow-2xl max-h-80 overflow-y-auto"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        {[
                          'Custom Integrations (Connect existing tools)',
                          'Custom CRM Development',
                          'AI Automation & Workforce',
                          'Marketing Automation',
                          'Website Development',
                          'Lead Management System',
                          'Not sure - Need consultation'
                        ].map((interest, idx) => (
                          <label key={idx} className="flex items-start gap-3 p-4 hover:bg-gradient-to-r hover:from-green-50 hover:to-cyan-50 cursor-pointer border-b border-slate-100 last:border-b-0 transition-colors">
                            <input
                              type="checkbox"
                              name="interests"
                              value={interest}
                              checked={form.interests.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                              className="mt-1 w-4 h-4 text-green-600 focus:ring-green-500 rounded"
                            />
                            <span className="text-sm text-slate-700">{interest}</span>
                          </label>
                        ))}
                      </motion.div>
                    )}
                  </div>
                  {errors.interests && <motion.div className="text-red-600 text-sm mt-2 flex items-center gap-1" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}><AlertCircle className="w-4 h-4" />{errors.interests}</motion.div>}
                </div>

                {/* Biggest Challenge & referral fields removed */}
              </div>

              {/* Current Tools field removed */}

                {/* Additional Information - Optional Textarea */}
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Additional Information <span className="text-slate-400 text-xs font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="additionalInformation"
                    value={form.additionalInformation}
                    onChange={(e) => setForm({ ...form, additionalInformation: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3.5 border border-slate-300 rounded-xl bg-white hover:border-green-400 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all shadow-sm hover:shadow-md resize-none"
                    placeholder="Any additional details you'd like us to know..."
                  />
                </div>
            </motion.div>

            {/* Hidden tracking fields */}
            <input type="hidden" name="utm_source" value={form.utm_source} />
            <input type="hidden" name="utm_medium" value={form.utm_medium} />
            <input type="hidden" name="utm_campaign" value={form.utm_campaign} />
            <input type="hidden" name="page_url" value={form.page_url} />
            <input type="hidden" name="referrer" value={form.referrer} />

            {/* Consent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="flex items-start gap-4 p-5 bg-slate-50 hover:bg-slate-100 rounded-xl cursor-pointer transition-colors group border-2 border-transparent hover:border-cyan-200">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className={`mt-1 w-5 h-5 text-cyan-600 focus:ring-2 focus:ring-cyan-500 rounded transition-all ${
                    errors.consent ? 'border-red-500 ring-2 ring-red-200' : ''
                  }`}
                />
                <span className="text-sm text-slate-700 leading-relaxed">
                  I agree to be contacted by Maple Tech Solutions and consent to the processing of my data according to the <a href="/privacy" className="text-cyan-600 font-semibold underline hover:text-cyan-700 transition-colors">Privacy Policy</a>. <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.consent && <motion.div className="text-red-600 text-sm mt-2 flex items-center gap-1 ml-1" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}><AlertCircle className="w-4 h-4" />{errors.consent}</motion.div>}
            </motion.div>

            {/* Submit Error */}
            {errors.submit && (
              <motion.div
                className="p-5 bg-red-50 border-2 border-red-200 rounded-xl text-red-700 flex items-start gap-3 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{errors.submit}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-5 bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-lg rounded-2xl disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-500 shadow-2xl shadow-cyan-500/30 hover:shadow-green-500/40 flex items-center justify-center gap-3 relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", ...springConfigs.snappy }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 group-hover:animate-shimmer" />

                {submitting ? (
                  <>
                    <motion.div
                      className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending Your Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                    <span>Send Message</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </>
                )}
              </motion.button>

              <p className="text-center text-sm text-slate-500 mt-4">
                <span className="text-red-500">*</span> Required fields • We'll respond within 24 hours
              </p>
            </motion.div>

            <style>{`
              .bg-size-200 {
                background-size: 200% 100%;
              }
              .bg-pos-0 {
                background-position: 0% 0%;
              }
              .bg-pos-100 {
                background-position: 100% 0%;
              }
              @keyframes shimmer {
                from {
                  transform: translateX(-100%) skewX(-12deg);
                }
                to {
                  transform: translateX(200%) skewX(-12deg);
                }
              }
              .animate-shimmer {
                animation: shimmer 1.5s infinite;
              }
            `}</style>
          </motion.form>
        )}
      </div>
    </div>
  );
}
