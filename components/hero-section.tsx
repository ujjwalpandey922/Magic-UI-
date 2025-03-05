"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { Particles } from "./magicui/particles";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative mb-8"
      >
        <div className="z-10 flex min-h-64 items-center justify-center">
          <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Introducing Magic UI</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative text-4xl md:text-6xl lg:text-8xl font-medium max-w-6xl leading-tight mb-6"
      >
        Magic UI is the new way to build landing pages.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative text-lg md:text-xl text-white/70 max-w-2xl mb-10 px-4"
      >
        Beautifully designed, animated components and templates built with
        Tailwind CSS, React, and Framer Motion.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative"
      >
        <Button
          size="lg"
          className="bg-white text-black hover:bg-white/90 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
        >
          Get Started for free <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="relative w-full max-w-6xl mx-auto mt-16 md:mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px]"
        style={
          {
            "--color-one": "rgb(234 179 8 / 0.2)",
          } as React.CSSProperties
        }
      >
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[250%] h-[150%] -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-yellow-700 via-transparent to-transparent w-full h-full rounded-full blur-[200px] opacity-50"></div>
        </div>
        <div className="relative rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:animate-image-glow after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
          <Image
            src={"https://startup-template-sage.vercel.app/hero-dark.png"}
            alt="Hero Image"
            width={2000}
            height={1000}
            className="w-full h-full object-cover rounded-lg"
          />
          <BorderBeam duration={10} size={150} />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[0] h-1/5 bg-gradient-to-t from-black"></div>
    </section>
  );
}
