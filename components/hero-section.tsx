"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { EmailClient } from "@/components/email-client";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create smooth spring animations for the mouse movement
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Convert mouse position to normalized values (-1 to 1)
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32">
      {/* Background gradients */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
      </div> */}

      {/* Animated stars/particles */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          x: useTransform(smoothX, [-1, 1], [-20, 20]),
          y: useTransform(smoothY, [-1, 1], [-20, 20]),
        }}
      >
        {Array.from({ length: 50 }).map((_, i) => {
          const randomX = Math.random() * 100 - 50;
          const randomY = Math.random() * 100 - 50;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translate(${randomX}%, ${randomY}%)`,
              }}
              initial={{ opacity: Math.random() * 0.5 + 0.3 }}
              animate={{
                opacity: [
                  Math.random() * 0.5 + 0.3,
                  Math.random() * 0.8 + 0.5,
                  Math.random() * 0.5 + 0.3,
                ],
              }}
              transition={{
                opacity: {
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          );
        })}
      </motion.div>

      {/* Template badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mb-8"
      >
        <div className="bg-white/10 backdrop-blur-md border border-gray-800/80 text-gray-600 text-sm rounded-full px-2 py-1 flex items-center space-x-2">
          <span className="text-amber-400">✨</span>
          <span>Introducing Magic UI Template</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative text-6xl md:text-8xl font-medium max-w-6xl leading-4 mb-6"
      >
        Magic UI is the new way to build landing pages.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative text-xl text-white/70 max-w-2xl mb-10"
      >
        Beautifully designed, animated components and templates built with
        Tailwind CSS, React, and Framer Motion.
      </motion.p>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative"
      >
        <Button
          size="lg"
          className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg"
        >
          Get Started for free <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>

      {/* Email Client */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative w-full max-w-6xl mx-auto mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px]"
        style={
          {
            "--color-one": "rgb(234 179 8 / 0.2)",
          } as React.CSSProperties
        }
      >
        {/* Gradient background for email client */}
        <div className="absolute -z-10 inset-[50%] bg-red-500 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-yellow-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:animate-image-glow after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
          <EmailClient />
        </div>
      </motion.div>
    </section>
  );
}
