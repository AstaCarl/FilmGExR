import { useEffect } from 'react';

export function usePreciseObserver(ref, onIntersecting) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersecting();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onIntersecting, ref]);
}