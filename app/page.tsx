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
        <Hero />
        <LogosStrip />
        <PositioningStrip />
        <ValuePillars />
        {productStories.map((story, i) => (
          <ProductStory key={story.id} story={story} alt={i % 2 !== 0} />
        ))}
        <BeforeAfter />
        <OutcomeStrip />
        <Method />
        <Deliverables />
        <IsThisForYou />
        <Results />
        <About />
        <InsightsTeaser />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
