"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Globe,
  Shield,
  FileText,
  Settings,
  Users,
  FlagTriangleRight,
  LucideHeartHandshake,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "./magicui/marquee";
const iconRows = [Heart, Globe, Shield, FileText, Settings, Users];
const colors = [
  "from-cyan-500 via-blue-500 to-indigo-500",
  "from-pink-500 via-red-500 to-yellow-500",
  "from-green-500 via-teal-500 to-blue-500",
  "from-purple-500 via-violet-500 to-rose-500",
  "from-orange-500 via-amber-500 to-yellow-500",
  "from-gray-500 via-slate-500 to-zinc-500",
];
export function IconGrid() {
  return (
    <section className="w-full relative">
      {/* Moving background icons */}
      <div
        className="absolute bottom-1/4 right-0 overflow-hidden w-full bg-transparent"
        style={{ height: "100%" }}
      >
        {[5, 10, 15, 20].map((duration, i) => (
          <Marquee key={i} reverse className={`[--duration:${duration}s]`}>
            {iconRows.map((Icon, index) => (
              <IconWrapper
                key={index}
                Icon={Icon}
                colorIndex={index % colors.length}
              />
            ))}
          </Marquee>
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-[16%] h-1/3 bg-gradient-to-t from-black"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 pt-28 relative">
        <div className="flex flex-col items-center text-center mb-16 rounded-full bg-black/20 w-full  max-w-max mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="p-4 rounded-3xl border border-gray-700/50 bg-black/60 w-max mx-auto">
              <LucideHeartHandshake className="w-12 md:w-16 h-12 md:h-16 text-white/90 mx-auto drop-shadow" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Stop wasting time on design.
            </h2>
            <p className="text-lg md:text-xl text-white/60">
              Start your 7-day free trial. No credit card required.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-inherit border border-gray-500/50 rounded-full text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base hover:bg-gray-500/40"
            >
              Get Started <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Icon Wrapper Component
const IconWrapper = ({
  Icon,
  colorIndex,
}: {
  Icon: any;
  colorIndex: number;
}) => (
  <motion.div
    className="aspect-square relative flex items-center justify-center rounded-lg bg-gradient-to-br from-white/[0.03] p-6 to-white/[0.01] border border-white/10 backdrop-blur-sm
               hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group"
    whileHover={{
      scale: 1.05,
      boxShadow: "0 0 20px rgba(255,255,255,0.1)",
    }}
  >
    <Icon className="w-8 h-8 text-white backdrop-filter-2xl relative z-10 transition-transform duration-300 group-hover:scale-110" />
    <div
      className={`pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r ${colors[colorIndex]} opacity-70 blur-[20px] filter`}
    ></div>
  </motion.div>
);
