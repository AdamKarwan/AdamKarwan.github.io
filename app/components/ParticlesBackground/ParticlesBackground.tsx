"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useRef, useState } from "react";

const ParticlesBackground: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
    // only want to render the particles when the container is on the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    particleContainerRef.current &&
      observer.observe(particleContainerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={particleContainerRef} className="absolute w-full h-full">
      {isInView && (
        <Particles
          className="h-full w-full"
          id="tsparticles"
          options={{
            fpsLimit: 120,
            pauseOnOutsideViewport: true,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            fullScreen: false,
          }}
        />
      )}
    </div>
  );
};

export default ParticlesBackground;
