"use client";

import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

interface ProductSectionProps {
  imageId: string;
  name: string;
  specs: string;
  description: string;
  delay?: number;
}

export default function ProductSection({
  imageId,
  name,
  specs,
  description,
  delay = 0,
}: ProductSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full border-b border-[var(--color-border)] bg-[var(--color-canvas)]"
    >
      <div className="flex flex-col w-full">
        {/* Full-width product imagery as per layout spec */}
        <div className="w-full aspect-[16/9] overflow-hidden">
          <ProjectImage id={imageId} />
        </div>

        <div className="px-8 py-16 md:px-16 md:py-24 max-w-[800px]">
          <h2 className="font-[family-name:var(--font-display)] font-normal text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] text-[var(--color-text)] mb-4">
            {name}
          </h2>
          
          <p className="font-[family-name:var(--font-mono)] text-[14px] leading-[20px] text-[var(--color-accent)] mb-8 uppercase tracking-tight">
            {specs}
          </p>
          
          <p className="font-[family-name:var(--font-body)] text-[17px] leading-[28px] text-[var(--color-text)] opacity-90">
            {description}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
