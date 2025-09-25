"use client";

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}

/**
 * Custom hook that uses Intersection Observer API to detect when an element
 * enters or leaves the viewport
 */
export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  const {
    threshold = 0.1, // Trigger when 10% of the element is visible
    rootMargin = '0px',
    root = null
  } = options;

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyIntersecting = entry.isIntersecting;
        
        setIsIntersecting(isCurrentlyIntersecting);
        
        // Track if the element has ever been entered
        if (isCurrentlyIntersecting && !hasEntered) {
          setHasEntered(true);
        }
      },
      {
        threshold,
        rootMargin,
        root
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [threshold, rootMargin, root, hasEntered]);

  return {
    targetRef,
    isIntersecting,
    hasEntered
  };
};
