import React from 'react';
import { HeartHandshake, UserCheck, MapPin, Target, ArrowRight } from 'lucide-react';

const LocalSupportSection = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Done-For-You Onboarding.",
      description: "Unlike big tech companies that leave you on your own, we handle the setup. We migrate your data, set up your automations, and train your team personally."
    },
    {
      icon: MapPin,
      title: "Proudly Canadian.",
      description: "We are a local business just like you. We understand the Canadian market and we care about growing our local economy together."
    },
    {
      icon: Target,
      title: "Success, Not Just Support.",
      description: "We don't succeed unless you do. Our team works with you proactively to ensure the system is actually driving revenue for your business."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side - LEFT */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/50 to-emerald-100/30 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Main Image */}
              <img 
                src="/images/feature-support.svg"
                alt="Local Canadian Support - Real human support with multiple contact options"
                className="w-full rounded-xl shadow-2xl border border-slate-200/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]"
              />
              
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-teal-500 rounded-2xl -z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
          </div>

          {/* Text Side - RIGHT */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="max-w-xl lg:pl-4">
              {/* Section Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-xl mb-6 shadow-sm">
                <HeartHandshake className="w-7 h-7 text-teal-600" />
              </div>
              
              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
                Local Support. Real Humans. Zero Guesswork.
              </h2>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                We aren't just a software company; we are your neighbors. We help you set up everything so you can focus on running your business, not IT.
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
              
              {/* CTA Link */}
              <a 
                href="/why-us#contact" 
                className="inline-flex items-center gap-2 text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors group"
              >
                Contact us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LocalSupportSection;
