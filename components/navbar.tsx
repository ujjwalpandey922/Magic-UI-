"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center space-x-2 text-white">
          <span className="font-bold text-xl">Magic UI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Button className="bg-[#262626] text-white hover:bg-white/90">
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center space-y-4 bg-black/70 backdrop-blur-md p-4"
        >
          <Link
            href="#"
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Log in
          </Link>
          <Button
            className="bg-[#262626] text-white hover:bg-white/90"
            onClick={() => setIsOpen(false)}
          >
            Sign up
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
