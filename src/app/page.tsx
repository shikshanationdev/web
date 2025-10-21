import { CoursesSection, FaqSection, FeaturesSection, Hero, JoinLearnersSection, TopCategoriesSection, QrAppPromo, StatsSection, TestimonialsSection, WhatYouGetSection, FeaturedMediaSection } from "@/components/HomePageSections";
import PopupBanner from "@/components/PopupBanner";

export default function Home() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <FeaturedMediaSection />
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
