import React from 'react';
import { CheckCircle, Zap, Share2, Smartphone, ArrowRight } from 'lucide-react';

const NurtureLeadsSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Smart Follow-Up Campaigns.",
      description: "Don't just send one email. Build automated multi-step sequences that engage leads immediately and consistently."
    },
    {
      icon: Share2,
      title: "Multi-Channel Reach.",
      description: "Connect where your clients are. Send SMS, Emails, Voicemail Drops, and Messenger DMs from one single automation flow."
    },
    {
      icon: Smartphone,
      title: "Unified Mobile App.",
      description: "Manage two-way conversations from anywhere. Our full-featured mobile app keeps you connected to your leads on the go."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side - LEFT */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/50 to-emerald-100/30 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main Image */}
              <img 
                src="/images/feature-unified-inbox.svg"
                alt="Unified Inbox Interface showing multi-channel conversations"
                className="w-full rounded-xl shadow-2xl border border-slate-200/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]"
              />
              
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-500 rounded-2xl -z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
          </div>

          {/* Text Side - RIGHT */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="max-w-xl lg:pr-4">
              {/* Section Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-xl mb-6 shadow-sm">
                <CheckCircle className="w-7 h-7 text-teal-600" />
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                Turn Leads into Loyal Clients
              </h2>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                Capturing the lead is just the start. Our multi-channel automation ensures you never lose touch with a potential client automatically.
              </p>
              
              {/* Feature List */}
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-teal-500" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA Link */}
              <a 
                href="/why-us#contact" 
                className="inline-flex items-center gap-2 text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors group"
              >
                Contact us to see the in-depth feature
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NurtureLeadsSection;
