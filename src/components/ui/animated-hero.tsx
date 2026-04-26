import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Globe,
  LayoutDashboard,
  MoveRight,
  PhoneCall,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const pillars = [
  {
    label: "Custom CRM",
    description: "Pipelines, quoting, and workflows built around your actual process.",
    outcome: "No more spreadsheets",
    icon: LayoutDashboard,
  },
  {
    label: "Websites",
    description: "High-trust pages designed to convert leads into booked calls.",
    outcome: "Leads that actually convert",
    icon: Globe,
  },
  {
    label: "Automations",
    description: "Integrated systems that remove repeat admin and handoffs.",
    outcome: "Hours back every week",
    icon: Workflow,
  },
  {
    label: "AI Workforce",
    description: "Phone, follow-up, and support automations that work around the clock.",
    outcome: "24/7 without extra staff",
    icon: Bot,
  },
];

function Hero() {
  const reduceMotion = useReducedMotion();
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "tailored systems",
      "custom CRMs",
      "websites that convert",
      "smart automations",
      "AI workforces",
    ],
    []
  );

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setTitleNumber((current) => (current === titles.length - 1 ? 0 : current + 1));
    }, 2400);

    return () => window.clearTimeout(timeoutId);
  }, [reduceMotion, titleNumber, titles]);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_28%),radial-gradient(circle_at_85%_18%,_rgba(34,197,94,0.14),_transparent_24%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_52%,_#eef6ff_100%)] pt-28"
    >
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:120px_120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="flex flex-col items-start gap-7">
            <Button variant="secondary" size="sm" className="gap-3 rounded-full border border-slate-200 bg-white/80 px-4 normal-case tracking-normal text-slate-700 shadow-sm" asChild>
              <Link to="/why-us">
                Saskatchewan-built systems for Canadian service teams
                <MoveRight className="h-4 w-4" />
              </Link>
            </Button>

            <div className="flex flex-col gap-5">
              <h1 className="max-w-4xl text-left text-5xl font-black tracking-[-0.06em] text-slate-950 md:text-6xl lg:text-7xl">
                <span className="block">Maple Tech builds</span>
                <span className="relative mt-2 flex h-[1.15em] w-full overflow-hidden text-cyan-700">
                  {titles.map((title, index) => (
                    <motion.span
                      key={title}
                      className="absolute left-0 top-0 font-black"
                      initial={{ opacity: 0, y: 48 }}
                      animate={
                        reduceMotion
                          ? index === 0
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 48 }
                          : titleNumber === index
                            ? { opacity: 1, y: 0 }
                            : {
                                opacity: 0,
                                y: titleNumber > index ? -56 : 56,
                              }
                      }
                      transition={{ type: "spring", stiffness: 70, damping: 18 }}
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
                <span className="mt-2 block text-3xl font-semibold tracking-[-0.04em] text-slate-700 md:text-4xl">
                  for businesses that are done forcing growth through broken tools.
                </span>
              </h1>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-3 bg-slate-950 px-7" asChild>
                <Link to="/why-us#contact">
                  Book a strategy call
                  <PhoneCall className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" className="gap-3 px-7" variant="outline" asChild>
                <Link to="/platform">
                  See the systems
                  <MoveRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-200/40 via-white/30 to-orange-200/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-200/80 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-700">
                    Maple Tech System Stack
                  </p>
                  <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950">
                    One operator-ready setup
                  </h2>
                </div>
                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                  Active
                </div>
              </div>

              <div className="space-y-3">
                {pillars.map(({ label, description, outcome, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.14 + index * 0.08 }}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-[1.4rem] border border-slate-200/80 bg-slate-50/85 p-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-950">
                          {label}
                        </h3>
                        <span className="text-[11px] font-semibold text-emerald-600">
                          {outcome}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-slate-950 px-5 py-4 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                  Outcome
                </p>
                <p className="mt-2 text-base font-medium leading-7 text-slate-200">
                  Fewer manual handoffs, faster follow-up, cleaner lead flow, and a sales
                  system that looks and feels like it belongs to your business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
