import Experience, { ExperienceType } from "./components/Experience";

const experiences: ExperienceType[] = [
  {
    id: "toog",
    title: "Full-Stack Software Engineer",
    company: "Toog Software, Australia",
    timeframe: "September 2022 - Present",
    description:
      "Led the development of a CRM/Job Management and Quoting system",
    achievements: [
      "Developed and maintained frontend and backend systems, utilizing AWS, React, and modern web technologies.",
      "Conducted code reviews, implemented automated testing, and enforced best practices.",
      "Collaborated with cross-functional teams to deliver scalable web applications.",
      "Built RESTful APIs and integrated third-party services.",
      "Wrote Python scripts for data backfilling and handling webhooks.",
      "Developed .NET applications and libraries for imports and third-party integrations.",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Amazon Web Services (AWS)",
      "Full-Stack Development",
      "Software Design",
      "Software Infrastructure",
      "User Interface Design",
      "C#",
      "GraphQL",
      "Express.js",
      "REST APIs",
      "JavaScript",
      "Cascading Style Sheets (CSS)",
      "HTML",
      "Linux",
      "Git",
      "GitHub",
      "Jest",
      "Vite",
      "Yarn",
      "npm",
      "Node.js",
    ],
  },
  {
    id: "cabmaster-dev",
    title: "Software Developer",
    company: "CabMaster Software, Bayswater, VIC",
    timeframe: "April 2019 - September 2022",
    description:
      "Developed and maintained industry-standard software solutions for the cabinet-making industry.",
    achievements: [
      "Maintained and enhanced CabMaster, a widely-used cabinet-making software.",
      "Fixed bugs and implemented new features to improve functionality and user experience.",
      "Authored comprehensive documentation for users and developers.",
      "Developed and maintained drivers for CAD/CAM software, enabling automation in hundreds of CNC machines across Australia.",
      "Created a Python application to visualize and create tool profiles, aiding the development process.",
      "Developed a .NET application to combine label files from multiple jobs, reducing paper waste when printing",
    ],
    skills: [
      "Proprietary Software",
      "CNC Programming",
      "Middleware",
      "SQL",
      "Software Documentation",
      "VBScript",
      "Git",
      "GitHub",
      "Zoho",
      "G-Code",
      "C#",
      ".NET",
      "Python",
    ],
  },
  {
    id: "cabmaster-support",
    title: "Technical Support",
    company: "CabMaster Software, Bayswater, VIC",
    timeframe: "April 2018 - April 2021",
    description:
      "Provided advanced technical support and customer service for software users.",
    achievements: [
      "Applied advanced troubleshooting techniques to resolve client issues quickly and efficiently",
      "Acted as a liaison between customers and the development team, ensuring both technical and user concerns were addressed",
      "Authored clear, user-friendly documentation to assist clients, improving customer satisfaction",
      "Maintained a 99%+ positive feedback rating from customers",
      "Delivered in-person training to new customers on software usage and business integration",
      "Configured software and automation solutions for seamless integration with customers’ CNC machines",
    ],
    skills: [
      "Technical Support",
      "Software Documentation",
      "Employee Training",
      "Customer Product Training",
      "CNC Programming",
      "Zoho",
    ],
  },
];

export default function Experiences() {
  return (
    <div>
      <h2 className="mb-6 text-center text-4xl font-semibold text-white">
        Work Experience
      </h2>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id} className="mb-24">
            <Experience {...experience} />
          </li>
        ))}
      </ul>
    </div>
  );
}
