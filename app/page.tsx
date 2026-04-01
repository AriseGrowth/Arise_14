import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PositioningStrip from "@/components/PositioningStrip";
import ValuePillars from "@/components/ValuePillars";
import ProductStory from "@/components/ProductStory";
import OutcomeStrip from "@/components/OutcomeStrip";
import Method from "@/components/Method";
import Results from "@/components/Results";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { productStories } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Positioning strip */}
        <PositioningStrip />

        {/* 03 — Value pillars */}
        <ValuePillars />

        {/* 04–07 — Product stories */}
        {productStories.map((story, i) => (
          <ProductStory
            key={story.id}
            story={story}
            alt={i % 2 !== 0}
          />
        ))}

        {/* 08 — Outcome strip */}
        <OutcomeStrip />

        {/* 09 — Method */}
        <Method />

        {/* 10 — Results */}
        <Results />

        {/* 11 — Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
