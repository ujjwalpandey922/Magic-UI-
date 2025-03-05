"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-lg font-medium text-gray-400 mb-2">Pricing</h2>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Simple pricing for everyone.
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <div className="flex items-center space-x-2">
          <span className={isAnnual ? "text-gray-400" : "text-white"}>
            Annual
          </span>
          <Switch
            checked={!isAnnual}
            onCheckedChange={() => setIsAnnual(!isAnnual)}
          />
          <span className={!isAnnual ? "text-gray-400" : "text-white"}>
            Monthly
          </span>
        </div>
        <div className="bg-amber-400/10 text-amber-400 text-sm px-3 py-1 rounded-full flex items-center">
          <Sparkles className="w-4 h-4 mr-1" />2 MONTHS FREE
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Basic Plan */}
        <motion.div variants={item}>
          <Card className="bg-black/40 border border-white/10 overflow-hidden h-full flex flex-col">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Basic</h3>
              <p className="text-sm text-gray-400 mb-4">
                A basic plan for startups and individual users
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? "8" : "10"}
                </span>
                <span className="text-gray-400">/ month</span>
              </div>
              <Button className="w-full mb-6">Subscribe</Button>

              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>AI-powered analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Basic support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>5 projects limit</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Access to basic AI tools</span>
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Premium Plan */}
        <motion.div variants={item}>
          <Card className="bg-black/40 border border-amber-500/50 overflow-hidden h-full flex flex-col relative">
            <div className="absolute top-0 right-0 bg-amber-500 text-black px-3 py-1 text-xs font-bold">
              POPULAR
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Premium</h3>
              <p className="text-sm text-gray-400 mb-4">
                A premium plan for growing businesses
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? "16" : "20"}
                </span>
                <span className="text-gray-400">/ month</span>
              </div>
              <Button className="w-full mb-6 bg-amber-500 hover:bg-amber-600 text-black">
                Subscribe
              </Button>

              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Advanced AI insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Access to all AI tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Custom integrations</span>
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div variants={item}>
          <Card className="bg-black/40 border border-white/10 overflow-hidden h-full flex flex-col">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Enterprise</h3>
              <p className="text-sm text-gray-400 mb-4">
                An enterprise plan with advanced features for large
                organizations
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? "40" : "50"}
                </span>
                <span className="text-gray-400">/ month</span>
              </div>
              <Button className="w-full mb-6">Subscribe</Button>

              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Custom AI solutions</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Access to all AI tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Data security and compliance</span>
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>

        {/* Ultimate Plan */}
        <motion.div variants={item}>
          <Card className="bg-black/40 border border-white/10 overflow-hidden h-full flex flex-col">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Ultimate</h3>
              <p className="text-sm text-gray-400 mb-4">
                The ultimate plan with all features for industry leaders
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? "64" : "80"}
                </span>
                <span className="text-gray-400">/ month</span>
              </div>
              <Button className="w-full mb-6">Subscribe</Button>

              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Bespoke AI development</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>White-glove support</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Priority access to new AI tools</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>Highest data security and compliance</span>
                </li>
              </ul>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
