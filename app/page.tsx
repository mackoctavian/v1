"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Logo from "./mack-white.png";
import Image from "next/image";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="h-screen flex flex-col items-center justify-center">
          <nav className="w-full bg-transparent">
            <ul className="flex items-center justify-between ">
              <li className="">
                <Image src={Logo} height={40} width={40} alt="logo" />
              </li>
              <li className="hidden">Download</li>
            </ul>
          </nav>
          <TextHoverEffect text="MACK" />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
