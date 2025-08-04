import { Navbar, Footer } from "@/components";
import { FeaturesSection, Hero, LearningGoalsSection, StatsSection, CopyrightSection, CoursesSection, WhatYouGetSection, LearningStatsSection, TestimonialsSection } from "@/components/HomePageSections";

export default function Home() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <LearningGoalsSection />
      <CoursesSection />
      <WhatYouGetSection />
      <LearningStatsSection />
      <TestimonialsSection />
      <Footer />
      <CopyrightSection />
    </div>
  );
}
