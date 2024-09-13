import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Experiences from "./components/Experiences/Experiences";
import ScrollToExperienceButton from "./components/ScrollToExperienceButton.tsx/ScrollToExperienceButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-950 text-white">
      <main className="flex flex-col items-center justify-center gap-8 px-4">
        <div className="flex min-h-screen flex-col items-center justify-center gap-3">
          <div className="flex flex-grow items-center">
            <section
              id="about-me"
              className="max-w-[min(90vw,42rem)] rounded-lg bg-white bg-opacity-10 p-6 shadow-lg backdrop-blur-md"
            >
              <h1 className="mb-4 text-center text-4xl font-semibold">
                Hi! I'm Adam Karwan
              </h1>
              <p className="text-lg">
                I'm a Full-Stack Developer with over five years of experience in
                the software industry.
                <br />
                I specialize in React.js and have a strong skill set in both
                front-end and back-end technologies.
                <br />I excel in building robust, scalable web applications
                using modern technologies like React, TypeScript, and Tailwind
                CSS.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  title="GitHub"
                  href="https://github.com/AdamKarwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-all hover:scale-110 hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/adam-karwan-7409bb326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-all hover:scale-110 hover:text-gray-400"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a
                  title="Download Resume"
                  href="/Adam-Karwan-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full border-2 border-cyan-600 bg-transparent px-4 py-2 text-white transition-all hover:bg-cyan-600"
                >
                  My Resume
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="transition-all group-hover:scale-110"
                  />
                </a>
              </div>
            </section>
          </div>
          <ScrollToExperienceButton />
        </div>
        <div className="flex w-screen justify-center bg-gray-800">
          <section
            id="work-experience"
            className="max-w-[min(90vw,42rem)] overflow-hidden rounded-lg p-6"
          >
            <Experiences />
          </section>
        </div>
        <section
          id="contact-me"
          className="mb-24 max-w-[min(90vw,42rem)] overflow-hidden rounded-lg bg-white bg-opacity-10 p-6 shadow-lg backdrop-blur-md"
        >
          <h2 className="mb-4 text-center text-3xl font-semibold text-white">
            Contact Me
          </h2>
          <p className="text-center text-lg">
            Feel free to reach out to me at:{" "}
            <a
              href="mailto:akarwan@live.com"
              className="text-cyan-600 hover:text-cyan-700"
            >
              akarwan@live.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
