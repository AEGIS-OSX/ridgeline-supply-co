"use client";

import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center px-[var(--space-xs)] py-[var(--space-2xl)] md:py-[var(--space-3xl)] bg-[var(--color-canvas)]"
    >
      <h1 className="text-[44px] leading-[52px] md:text-[72px] md:leading-[80px] font-[family-name:var(--font-display)] font-normal text-[var(--color-iron)] mb-[var(--space-md)]">
        Ridgeline Supply Co.
      </h1>

      <div className="w-full max-w-[800px] mb-[var(--space-lg)]">
        <ProjectImage id="hero" />
      </div>

      <p className="text-[17px] leading-[28px] md:text-[20px] md:leading-[32px] font-[family-name:var(--font-body)] text-[var(--color-iron)] max-w-[600px] mb-[var(--space-lg)]">
        30.4 oz cast iron. Sized to nest in a 2L pot.
      </p>

      <a
        href="#waitlist"
        className="inline-block px-[var(--space-lg)] py-[var(--space-xs)] bg-[var(--color-oxide)] hover:bg-[var(--color-oxide-hover)] text-[var(--color-canvas)] font-[family-name:var(--font-body)] font-medium transition-colors duration-200"
      >
        Join the Next Pour Waitlist
      </a>
    </motion.section>
  );
}
