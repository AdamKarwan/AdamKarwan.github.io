"use client";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollToExperienceButton = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToExperience = () => {
    // find the element with the id "work-experience" and scroll to it
    const workExperience = document.getElementById("work-experience");
    workExperience?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToExperience}
      className={`mb-16 text-cyan-600 transition-all duration-300 motion-safe:animate-bounce ${
        isAtTop ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!isAtTop}
      type="button"
      title='Scroll to "Work Experience"'
    >
      <FontAwesomeIcon icon={faArrowDown} size="2x" />
    </button>
  );
};

export default ScrollToExperienceButton;
