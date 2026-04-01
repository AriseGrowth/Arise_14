import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosStrip from "@/components/LogosStrip";
import PositioningStrip from "@/components/PositioningStrip";
import ValuePillars from "@/components/ValuePillars";
import ProductStory from "@/components/ProductStory";
import BeforeAfter from "@/components/BeforeAfter";
import OutcomeStrip from "@/components/OutcomeStrip";
import Method from "@/components/Method";
import Deliverables from "@/components/Deliverables";
import IsThisForYou from "@/components/IsThisForYou";
import Results from "@/components/Results";
import InsightsTeaser from "@/components/InsightsTeaser";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollProgress from "@/components/ScrollProgress";
import { productStories } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        {/* 01 Hero */}
        <Hero />

        {/* 02 Client logos */}
        <LogosStrip />

        {/* 03 Positioning */}
        <PositioningStrip />

        {/* 04 Value pillars */}
        <ValuePillars />

        {/* 05–08 Product stories */}
        {productStories.map((story, i) => (
          <ProductStory key={story.id} story={story} alt={i % 2 !== 0} />
        ))}

        {/* 09 Before / After */}
        <BeforeAfter />

        {/* 10 Outcomes */}
        <OutcomeStrip />

        {/* 11 Method */}
        <Method />

        {/* 12 Deliverables / Pricing */}
        <Deliverables />

        {/* 13 Is this for you */}
        <IsThisForYou />

        {/* 14 Results */}
        <Results />

        {/* 15 About David */}
        <About />

        {/* 16 Insights */}
        <InsightsTeaser />

        {/* 17 FAQ */}
        <FAQ />

        {/* 18 Final CTA */}
        <FinalCTA />
      </main>

      <Footer />

      {/* Floating: WhatsApp + mobile sticky bar */}
      <FloatingCTA />
    </>
  );
}
