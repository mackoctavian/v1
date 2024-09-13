"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Logo from "./mack-white.png";
import Image from "next/image";

// import { useScroll, useTransform } from "framer-motion";

// import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export default function Home() {
  return (
    <main className="bg-black relative">
      <AuroraBackground>
        <nav className="w-full bg-transparent  top-0 sticky ">
          <ul className="flex items-center justify-between px-8 md:px-20 py-4">
            <li>
              <Image src={Logo} height={30} width={30} alt="logo" />
            </li>
            <li className="text-white">Resume</li>
          </ul>
        </nav>
        <div className="w-full h-screen flex flex-col items-center justify-center ">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 w-full"
          >
            <TextHoverEffect text="MACK" />
          </motion.div>

          <span className="md:text-medium font-semibold text-neutral-400 py-4">
            BRINGS IDEAS TO LIFE WITH CODE
          </span>
        </div>
      </AuroraBackground>
    </main>
  );
}

// function GoogleGeminiEffectDemo() {
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
//   const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
//   const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
//   const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
//   const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

//   return (
//     <div
//       className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
//       ref={ref}
//     >
//       <GoogleGeminiEffect
//         pathLengths={[
//           pathLengthFirst,
//           pathLengthSecond,
//           pathLengthThird,
//           pathLengthFourth,
//           pathLengthFifth,
//         ]}
//       />
//     </div>
//   );
// }
