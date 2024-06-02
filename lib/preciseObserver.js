import { useEffect } from 'react';

// A custom React hook to observe the precise intersection of a target element
export function usePreciseObserver(ref, onIntersecting) {
  useEffect(() => {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      // Callback function triggered when intersection occurs
      ([entry]) => {
        if (entry.isIntersecting) {
          // Call the provided callback function when intersecting
          onIntersecting();
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the viewport
        threshold: 0, // Precise intersection threshold (0 means only when fully visible)
      }
    );

    // If the target element exists, start observing it
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to stop observing when the component unmounts or ref changes
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onIntersecting, ref]);
}
