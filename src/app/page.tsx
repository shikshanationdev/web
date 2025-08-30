import { CoursesSection, FaqSection, FeaturesSection, Hero, JoinLearnersSection, TopCategoriesSection, QrAppPromo, StatsSection, TestimonialsSection, WhatYouGetSection } from "@/components/HomePageSections";
import PopupBanner from "@/components/PopupBanner";

export default function Home() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <TopCategoriesSection />
      <CoursesSection />
      <WhatYouGetSection />
      <TestimonialsSection />
      <JoinLearnersSection />
      <FaqSection />
      <QrAppPromo />
      <PopupBanner />
    </div>
  );
}
