import AboutHero from "@/components/about/AboutHero";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import MissionVisionCard from "@/components/about/MissionVisionCard";
import ManagementTeam from "@/components/about/ManagementTeam";
import {
  StatesSection,
  TestimonialsSection,
} from "@/components/HomePageSections";
import React from "react";
import AffiliationsCertifications from "@/components/about/AffiliationsCertifications";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import GetInTouchSection from "@/components/about/GetInTouchSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Shiksha Nation",
  description:
    "Learn how Shiksha Nation helps students build strong learning habits, stay motivated, and achieve their goals through expert guidance and supportive resources",
};

const About = () => {
  return (
    <div className="max-w-[1536px] mx-auto">
      <AboutHero />
      <AboutWhoWeAre />
      <MissionVisionCard />
      <StatesSection />
      <ManagementTeam />
      <AffiliationsCertifications />
      <WhyChooseUs />
      <TestimonialsSection />
      <GetInTouchSection />
    </div>
  );
};

export default About;
