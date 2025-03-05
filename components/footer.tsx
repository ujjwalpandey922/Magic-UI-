"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black pt-16">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-wrap gap-8 justify-between py-12 md:flex-nowrap">
          <div className="w-full md:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-8 h-8 rounded-md"></div>
              <span className="font-bold text-xl text-white">Magic UI</span>
            </div>
            <p className="text-gray-400 mb-4">
              UI Library for Design Engineers
            </p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Product",
                links: ["Email Collection", "Pricing", "FAQ"],
              },
              { title: "Community", links: ["Discord", "Twitter", "Email"] },
              { title: "Legal", links: ["Terms", "Privacy"] },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="font-bold mb-4 uppercase text-sm tracking-wider text-white">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8">
          <p className="text-gray-400 text-center md:text-left mt-4 md:mt-0">
            Copyright © 2024 Magic UI. All Rights Reserved.
          </p>

          <div className="flex space-x-6">
            {["facebook", "twitter"].map((platform, index) => (
              <motion.div
                key={platform}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {index === 0 ? (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  ) : (
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  )}
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
