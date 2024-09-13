"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css"; // Import the CSS file

interface CarouselProps {
  tags: string[];
}

const Carousel: React.FC<CarouselProps> = ({ tags }) => {
  const trackRef1 = useRef<HTMLDivElement>(null);
  const trackRef2 = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(10); // Default duration

  useEffect(() => {
    if (trackRef1.current && trackRef2.current) {
      // Calculate the duration of the animation so that they scroll at the same speed regardless of how many there are
      const trackWidth = trackRef1.current.scrollWidth;
      const totalWidth = trackWidth; // Since we duplicate the tags
      const speed = 50; // Pixels per second
      const newDuration = totalWidth / speed;
      setDuration(newDuration);
    }
  }, [tags]);

  return (
    <div className="relative max-w-full whitespace-nowrap">
      <div
        ref={trackRef1}
        className="absolute left-0 top-0 inline-block"
        style={{
          animation: `scroll ${duration}s linear infinite`,
          transform: "translateZ(0)",
        }}
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mx-2 inline-block rounded-xl bg-cyan-700 px-2 text-lg"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        ref={trackRef2}
        className="absolute left-0 top-0 inline-block"
        style={{
          animation: `scroll ${duration}s linear infinite`,
          transform: "translateZ(0)",
          animationDelay: `-${duration / 2}s`,
        }}
      >
        {tags.map((tag, index) => (
          <span
            key={index + tags.length}
            className="mx-2 inline-block rounded-xl bg-cyan-700 px-2 text-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
