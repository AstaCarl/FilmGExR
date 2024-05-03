import { useEffect, useRef } from 'react';


export function useOverlappedObserver(onIntersecting) {
    const myRef = useRef();

useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOverlapped(true);
        } else {
          setIsOverlapped(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }
    );
  
    if (myRef.current) {
      observer.observe(myRef.current);
    }
  
    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, [onIntersecting]);

  return myRef;


}