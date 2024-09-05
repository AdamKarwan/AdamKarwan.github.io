import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css'; // Import the CSS file

interface CarouselProps {
  tags: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ tags }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(10); // Default duration

  useEffect(() => {
    if (trackRef.current) {
      // we calculate the duration of the animation so that they scroll at the same speed regardless of how many there are
      const trackWidth = trackRef.current.scrollWidth;
      const totalWidth = trackWidth / 2; // Since we duplicate the tags
      const speed = 100; // Pixels per second
      const newDuration = totalWidth / speed;
      setDuration(newDuration);
    }
  }, [tags]);
  return (
    <div className="position-relative max-w-full overflow-hidden whitespace-nowrap">
      <div
        ref={trackRef}
        className="inline-block animate-[scroll_linear_infinite]"
        style={{
          animationDuration: `${duration}s`,
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
