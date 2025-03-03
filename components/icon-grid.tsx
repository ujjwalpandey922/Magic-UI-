"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Globe,
  Shield,
  FileText,
  Mail,
  Calendar,
  Settings,
  Users,
  Bell,
  Star,
  Cloud,
  Sun,
  Moon,
  Music,
  Video,
  Image,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function IconGrid() {
  const iconRows = [
    [Heart, Globe, Shield, FileText],
    [Mail, Calendar, Settings, Users],
    [Star, Cloud, Sun, Moon],
    [Music, Video, Image, Bell],
  ];

  return (
    <section className="container mx-auto px-4 py-16 relative">
      {/* Moving background icons */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ height: "50%" }}
      >
        {/* Background gradients for magic effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        {iconRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="absolute left-0 right-0 w-full"
            style={{
              bottom: `${rowIndex * 12 + 2}%`,
            }}
          >
            <div
              className="flex items-center relative"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
              }}
            >
              <div
                className="flex gap-2 animate-marquee"
                style={{
                  animationDirection: rowIndex % 2 === 0 ? "normal" : "reverse",
                  animationDuration: rowIndex % 2 === 0 ? "50s" : "40s",
                }}
              >
                {[...Array(3)].map((_, dupeIndex) => (
                  <div key={dupeIndex} className="flex gap-2 min-w-full">
                    {row.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.1)] 
                                 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300
                                 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:opacity-0 before:hover:opacity-100 before:transition-opacity relative overflow-hidden"
                      >
                        <Icon className="w-6 h-6 text-white/90 relative z-10" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
            </div>
            <Heart className="w-16 h-16 text-white/90 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              Stop wasting time on design.
            </h2>
            <p className="text-xl text-white/60">
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
              className="bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 px-8"
            >
              Get Started
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 max-w-5xl mx-auto"
        >
          {iconRows[0].map((Icon, index) => (
            <motion.div
              key={index}
              className="aspect-square flex items-center justify-center rounded-lg bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-sm
                         hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group
                         before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-white/5 before:to-transparent before:opacity-0 before:group-hover:opacity-100 before:transition-opacity relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
            >
              <Icon className="w-6 h-6 text-white/90 relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
