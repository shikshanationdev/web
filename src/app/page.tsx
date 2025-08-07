import { CoursesSection, FaqSection, FeaturesSection, Hero, JoinLearnersSection, LearningGoalsSection, QrAppPromo, StatsSection, TestimonialsSection, WhatYouGetSection } from "@/components/HomePageSections";

export default function Home() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <LearningGoalsSection />
      <CoursesSection />
      <WhatYouGetSection />
      <TestimonialsSection />
      <JoinLearnersSection />
      <FaqSection />
      <QrAppPromo />
    </div>
  );
}
