import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { LearningGoalsSection } from "@/components/LearningGoalSection";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <LearningGoalsSection />
      <Footer />
    </div>
  );
}
