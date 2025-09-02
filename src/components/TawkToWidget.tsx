"use client";

import { useTawkTo } from '@/hooks/useTawkTo';

const TawkToWidget = () => {
  // Initialize Tawk.to - this will load the default widget
  useTawkTo();

  // This component doesn't render anything visible
  // Tawk.to will automatically show its default chat widget
  return null;
};

export default TawkToWidget;
