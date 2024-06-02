import { useEffect, useRef } from 'react';

// A custom React hook to observe the intersection of a target element
export function useIntersectionObserver(onIntersecting) {
  // Create ref to store the reference to the target element
  const ref = useRef();

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
      // Options for the IntersectionObserver
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the viewport
        threshold: 1.0, // Full visibility threshold
      }
    );

    // If the target element exists, start observing it
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to stop observing when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onIntersecting]); // Re-run effect if the callback function changes

  // Return the ref to be attached to the target element
  return ref;
}
