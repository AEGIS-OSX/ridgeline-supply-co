"use client";

import { motion } from "framer-motion";

/**
 * T-004: How We Pour (Dark Flip Section)
 * A high-contrast, dark-flip section detailing the foundry process.
 * Matches the visual density and typographic precision of linear.app.
 */
export default function HowWePour() {
  const facts = [
    "We cast twice a year in Bozeman.",
    "About 200 pieces per pour.",
    "Every pour has sold out from the waitlist before it opened."
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--color-iron)] text-[var(--color-canvas)] py-[var(--space-3xl)]"
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">
        <div className="flex flex-col space-y-16 md:space-y-24">
          {facts.map((fact, index) => (
            <div 
              key={index} 
              className="border-t border-[var(--color-border)] pt-8 md:pt-12"
            >
              <p className="font-[family-name:var(--font-display)] text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[44px] lg:leading-[52px] max-w-3xl">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
