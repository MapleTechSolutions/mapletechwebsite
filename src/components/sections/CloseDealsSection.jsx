import React from 'react';
import { DollarSign, Kanban, CreditCard, BarChart3, ArrowRight, Quote } from 'lucide-react';

const CloseDealsSection = () => {
  const features = [
    {
      icon: Kanban,
      title: "Visual Pipeline Management.",
      description: "Keep track of where every lead is in your funnel. Drag-and-drop deals as they move from 'New Lead' to 'Closed Won'."
    },
    {
      icon: CreditCard,
      title: "Seamless Payment Collection.",
      description: "Integrate directly with Stripe to collect payments on websites, funnels, and even when clients book appointments."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics.",
      description: "Stop guessing. See exactly how many leads are converting and how much revenue you're generating in real-time."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Text Side - LEFT */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="max-w-xl">
              {/* Section Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-xl mb-6 shadow-sm">
                <DollarSign className="w-7 h-7 text-teal-600" />
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                Close Deals & Get Paid Faster
              </h2>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                Everything you need to manage your pipeline, collect payments, and track your success in one dashboard.
              </p>
              
              {/* Feature List */}
              <div className="space-y-6 mb-10">
                {features.map((feature, index) => (
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
                ))}
              </div>
            </div>
          </div>

          {/* Image Side - RIGHT */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="relative group lg:mt-8">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-slate-200/50 to-slate-100/30 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main Image */}
              <img 
                src="/images/feature-pipeline.svg"
                alt="Sales Pipeline Interface with analytics and payment tracking"
                className="w-full rounded-xl shadow-2xl border border-slate-200/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]"
              />
              
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500 rounded-2xl -z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
            
            {/* CTA Link */}
            <div className="mt-8 text-center lg:text-left">
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

export default CloseDealsSection;
