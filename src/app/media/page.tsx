import React from "react";
import MediaHero from "../../components/media/MediaHero";

import MediaContact from "@/components/media/MediaContact";
import MediaGrid from "@/components/media/MediaGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shiksha Nation Media | News, Features & Press Coverage",
  description:
    "Find the latest news, media mentions, and press articles about Shiksha Nation. Stay updated with announcements and insights that shape our learning community.",
};

const Media = () => {
  return (
    <div className="max-w-[1536px] mx-auto px-4">
      <MediaHero />
      <MediaGrid />
      <MediaContact />
    </div>
  );
};

export default Media;
