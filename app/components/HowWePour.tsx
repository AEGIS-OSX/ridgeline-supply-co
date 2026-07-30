"use client";

import { motion } from "framer-motion";

export default function HowWePour() {
  const facts = [
    "We cast twice a year in Bozeman.",
    "About 200 pieces per pour.",
    "Every pour has sold out from the waitlist before it opened."
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--color-iron)] text-[var(--color-canvas)] py-[var(--space-3xl)] px-[var(--space-md)] md:px-[var(--space-xl)]"
    >
      <div className="max-w-[var(--breakpoint-desktop)] mx-auto">
        <div className="flex flex-col gap-[var(--space-xl)]">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className="border-b border-[#383531] pb-[var(--space-lg)] last:border-0"
            >
              <p className="font-[family-name:var(--font-body)] text-[17px] leading-[28px] md:text-[28px] md:leading-[36px] font-medium">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
