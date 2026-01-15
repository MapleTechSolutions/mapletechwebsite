import React from 'react';
import { Target, Layout, FormInput, CalendarCheck, ArrowRight } from 'lucide-react';

const LeadCaptureSection = () => {
  const features = [
    {
      icon: Layout,
      title: "Build Custom Funnels & Websites.",
      description: "Our intuitive builder lets you create high-performing landing pages with custom menus in one place.",
      image: "/images/feature-funnels.svg",
      imageAlt: "Funnel builder interface showing visual funnel stages and conversion metrics"
    },
    {
      icon: CalendarCheck,
      title: "Automated Appointment Scheduling.",
      description: "Stop playing phone tag. Our built-in calendar lets clients book themselves, syncing directly to your team's schedule.",
      image: "/images/feature-calendar.svg",
      imageAlt: "Appointment calendar with scheduled meetings and availability"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-6 shadow-sm">
            <Target className="w-8 h-8 text-teal-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Smart Lead Capture & Scheduling
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Maple Tech's Smart CRM is a full-suite platform for modern businesses. 
            Build high-converting pages and capture leads instantly.
          </p>
        </div>

        {/* Alternating Feature Rows */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;
            
            return (
              <div 
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Image Side */}
                <div className="flex-1 w-full lg:w-1/2">
                  <div className="relative group">
                    {/* Decorative background element */}
                    <div 
                      className={`absolute -inset-4 bg-gradient-to-br ${
                        isEven 
                          ? 'from-teal-200/60 to-teal-100/40' 
                          : 'from-slate-200/60 to-slate-100/40'
                      } rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                    />
                    
                    {/* Main Image */}
                    <img 
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full rounded-xl shadow-2xl border border-slate-200/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]"
                    />
                    
                    {/* Floating teal accent */}
                    <div 
                      className={`absolute ${
                        isEven ? '-bottom-4 -right-4' : '-bottom-4 -left-4'
                      } w-24 h-24 bg-teal-500 rounded-2xl -z-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 w-full lg:w-1/2">
                  <div className={`max-w-xl ${isEven ? 'lg:pl-4' : 'lg:pr-4'}`}>
                    {/* Feature Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-500 rounded-xl mb-6 shadow-lg shadow-teal-500/25">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Feature Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                      {feature.title}
                    </h3>
                    
                    {/* Feature Description */}
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                      {feature.description}
                    </p>
                    
                    {/* Feature-specific CTA */}
                    <a 
                      href="/why-us#contact" 
                      className="inline-flex items-center gap-2 text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors group/link"
                    >
                      Contact us to see the in-depth feature
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <a 
            href="/why-us#contact" 
            className="inline-flex items-center gap-3 text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors group"
          >
            Contact us to see the in-depth feature
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
