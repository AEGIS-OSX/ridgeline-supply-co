"use client";

import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import HowWePour from "./components/HowWePour";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-iron)]">
      <Hero />

      <ProductSection
        name="The Sixgun"
        specs="1.9 lb (30.4 oz) / $88"
        imageId="feature_1"
        description="A 6-inch skillet cast from recycled iron. Sized to nest inside a standard 2L backpacking pot. Arrives pre-seasoned with grapeseed oil and ready for open flame or direct coals."
      />

      <ProductSection
        name="The Drover"
        specs="10-inch / $145"
        imageId="feature_2"
        description="A full-sized skillet for overlanding and basecamp. The walnut handle is threaded for a secure fit and removes for flat packing. Cast in Bozeman, Montana."
      />

      <ProductSection
        name="The Bones Kit"
        specs="4 oz / $34"
        imageId="feature_3"
        description="Maintenance for seasoned iron. Includes 2 oz of beeswax and grapeseed oil wax and a stainless steel chainmail scrubber."
      />

      <HowWePour />

      <section id="waitlist">
        <WaitlistForm />
      </section>

      <Footer />
    </main>
  );
}
