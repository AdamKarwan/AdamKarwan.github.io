import React, { useEffect, useRef, useState } from 'react';
import './FadeInOnScroll.css'; // Import the CSS file

function FadeInOnScroll({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // if the element is in the viewport, make it visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-on-scroll ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default FadeInOnScroll;
