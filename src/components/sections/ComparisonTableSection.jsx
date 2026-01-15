import React from 'react';
import { Check, AlertCircle, ArrowRight } from 'lucide-react';

const ComparisonTableSection = () => {
  const features = [
    { feature: "CRM & Pipeline Management", replaces: "HubSpot, Salesforce", oldPrice: "$99/mo" },
    { feature: "Unlimited Sales Funnels", replaces: "ClickFunnels, Leadpages", oldPrice: "$297/mo" },
    { feature: "Website Builder", replaces: "WordPress, Wix, Squarespace", oldPrice: "$29/mo" },
    { feature: "Surveys & Forms", replaces: "Typeform, JotForm", oldPrice: "$49/mo" },
    { feature: "Email Marketing", replaces: "Mailchimp, ActiveCampaign", oldPrice: "$99/mo" },
    { feature: "2-Way SMS Marketing", replaces: "Twilio, SimpleTexting", oldPrice: "$99/mo" },
    { feature: "Booking & Appointments", replaces: "Calendly, Acuity", oldPrice: "$29/mo" },
    { feature: "Workflow Automations", replaces: "Zapier, Make", oldPrice: "$169/mo" },
    { feature: "Call Tracking", replaces: "CallRail, CallTrackingMetrics", oldPrice: "$49/mo" },
    { feature: "Reputation Management", replaces: "Birdeye, Podium", oldPrice: "$159/mo" },
    { feature: "Analytics & Reporting", replaces: "Google Analytics, Databox", oldPrice: "$299/mo" },
    { feature: "Document Signing", replaces: "DocuSign, PandaDoc", oldPrice: "$47/mo" }
  ];

  const totalOldPrice = features.reduce((sum, item) => {
    const price = parseInt(item.oldPrice.replace(/\D/g, ''));
    return sum + price;
  }, 0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            Stop acting like an IT Manager. Start acting like a CEO.
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Stop Renting Your Growth.<br />
            <span className="text-teal-600">Own Your Platform.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Replace your fragmented, expensive toolset with one streamlined operating system.
            Save time, save money, and save your sanity.
          </p>
        </div>

        {/* Comparison Table - Desktop View */}
        <div className="hidden md:block bg-slate-50 rounded-2xl overflow-hidden shadow-xl border border-slate-200">

          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900 text-white">
            <div className="col-span-4 px-6 py-5 font-semibold text-sm uppercase tracking-wide">
              Feature
            </div>
            <div className="col-span-3 px-4 py-5 font-semibold text-sm uppercase tracking-wide text-center">
              The Old Way
            </div>
            <div className="col-span-2 px-4 py-5 font-semibold text-sm uppercase tracking-wide text-center">
              <span className="text-red-400">Subscription Trap</span>
            </div>
            <div className="col-span-3 px-4 py-5 font-semibold text-sm uppercase tracking-wide text-center bg-teal-600">
              🍁 Maple Tech
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-200">
            {features.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-12 items-center ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                } hover:bg-teal-50/50 transition-colors`}
              >
                <div className="col-span-4 px-6 py-4">
                  <span className="font-medium text-slate-900">{item.feature}</span>
                </div>
                <div className="col-span-3 px-4 py-4 text-center">
                  <span className="text-sm text-slate-500 italic">{item.replaces}</span>
                </div>
                <div className="col-span-2 px-4 py-4 text-center">
                  <span className="text-red-600 font-semibold">{item.oldPrice}</span>
                </div>
                <div className="col-span-3 px-4 py-4 text-center bg-teal-50/50">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-teal-700 font-semibold text-sm">INCLUDED</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Row */}
          <div className="grid grid-cols-12 items-center bg-slate-900 text-white">
            <div className="col-span-4 px-6 py-6">
              <span className="font-bold text-lg">TOTAL MONTHLY COST</span>
            </div>
            <div className="col-span-3 px-4 py-6 text-center">
              <span className="text-slate-400 text-sm">12+ subscriptions to manage</span>
            </div>
            <div className="col-span-2 px-4 py-6 text-center">
              <div className="flex flex-col">
                <span className="text-red-400 font-bold text-2xl">${totalOldPrice.toLocaleString()}+</span>
                <span className="text-red-400/70 text-xs">per month</span>
              </div>
            </div>
            <div className="col-span-3 px-4 py-6 text-center bg-teal-600">
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">PAY FOR WHAT YOU NEED</span>
                <span className="text-teal-100 text-sm">No bloated features you don't use</span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table - Mobile View (Horizontal Scroll) */}
        <div className="md:hidden relative">
          {/* Scroll indicator animation */}
          <div className="absolute -top-8 left-0 right-0 flex justify-center">
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span>Swipe to see more</span>
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-slate-400 border-r-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>

          <div
            className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#cbd5e1 #f1f5f9'
            }}
          >
            {/* Horizontal scroll animation hint */}
            <style>{`
              @keyframes scroll-hint {
                0%, 100% { transform: translateX(0); }
                50% { transform: translateX(20px); }
              }
              .scroll-hint-animation {
                animation: scroll-hint 2s ease-in-out infinite;
              }
            `}</style>

            <div className="inline-block min-w-full scroll-hint-animation">
              <table className="w-full min-w-[600px] bg-slate-50 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                {/* Table Header */}
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Feature</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide">The Old Way</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide">
                      <span className="text-red-400">Old Price</span>
                    </th>
                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide bg-teal-600">
                      🍁 Maple Tech
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-slate-200">
                  {features.map((item, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                    >
                      <td className="px-4 py-3">
                        <span className="font-medium text-slate-900 text-sm">{item.feature}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-xs text-slate-500 italic">{item.replaces}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-red-600 font-semibold text-sm">{item.oldPrice}</span>
                      </td>
                      <td className="px-4 py-3 text-center bg-teal-50/50">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-teal-700 font-semibold text-xs">INCLUDED</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

                {/* Total Row */}
                <tfoot>
                  <tr className="bg-slate-900 text-white">
                    <td className="px-4 py-4">
                      <span className="font-bold text-sm">TOTAL MONTHLY COST</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-slate-400 text-xs">12+ subscriptions</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex flex-col">
                        <span className="text-red-400 font-bold text-lg">${totalOldPrice.toLocaleString()}+</span>
                        <span className="text-red-400/70 text-xs">per month</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center bg-teal-600">
                      <div className="flex flex-col">
                        <span className="font-bold text-sm text-white">PAY FOR WHAT YOU NEED</span>
                        <span className="text-teal-100 text-xs">No bloated features</span>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-8 text-lg">
            Stop working <span className="font-semibold">IN</span> your tech stack.
            Start working <span className="font-semibold">ON</span> your business.
          </p>
          <a
            href="/why-us#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30 hover:-translate-y-0.5 group"
          >
            Contact us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
