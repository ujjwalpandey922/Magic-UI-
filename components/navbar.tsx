"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Magic UI</span>
        </Link>

        <div className="flex items-center space-x-4">
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
      </div>
    </motion.header>
  );
}
