"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "./ProjectImage";

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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1.0],
      }}
      className="w-full border-b-[1px] border-[var(--color-border)] bg-[var(--color-canvas)]"
    >
      <div className="w-full">
        {/* Full-width product imagery */}
        <div className="w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-[var(--color-border)]">
          <ProjectImage 
            id={imageId} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="px-6 py-12 md:px-12 md:py-24 lg:px-24 lg:py-32 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-8 border-b-[1px] border-[var(--color-border)] pb-8">
            <h2 className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] font-[family-name:var(--font-display)] font-normal text-[var(--color-text)]">
              {name}
            </h2>
            <p className="text-[14px] leading-[20px] font-[family-name:var(--font-mono)] text-[var(--color-accent)] tabular-nums">
              {specs}
            </p>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-[17px] leading-[28px] font-[family-name:var(--font-body)] text-[var(--color-text)]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
