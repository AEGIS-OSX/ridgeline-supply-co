"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "./ProjectImage";

/**
 * T-002: Hero Component
 * Renders the brand introduction, product imagery, and primary waitlist CTA.
 */
export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center px-8 py-24 text-center md:py-32"
    >
      <div className="max-w-[1280px] w-full flex flex-col items-center">
        <h1 className="font-[family-name:var(--font-display)] font-semibold text-[44px] leading-[52px] md:text-[72px] md:leading-[80px] text-[var(--color-iron)] mb-8">
          Ridgeline Supply Co.
        </h1>

        <div className="w-full mb-12 overflow-hidden">
          <ProjectImage 
            id="hero" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="max-w-[600px] flex flex-col items-center">
          <p className="font-[family-name:var(--font-body)] text-[17px] leading-[28px] text-[var(--color-iron)] mb-12">
            30.4 oz cast iron. Sized to nest in a 2L pot.
          </p>

          <a
            href="#waitlist"
            className="inline-block px-8 py-4 bg-[var(--color-oxide)] hover:bg-[var(--color-oxide-hover)] text-[var(--color-canvas)] font-[family-name:var(--font-body)] font-medium text-[17px] transition-colors duration-200"
          >
            Join the Next Pour Waitlist
          </a>
        </div>
      </div>
    </motion.section>
  );
}
