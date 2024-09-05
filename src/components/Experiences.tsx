import { Experience } from './Experience';

const experiences: Experience[] = [
  {
    id: 'toog',
    title: 'Full-Stack Developer',
    company: 'Toog Software, Australia',
    timeframe: 'September 2022 - Present',
    description:
      'Lead software development and design for a complex enterprise ERP system.',
    achievements: [
      'Developed and maintained both frontend and backend systems of an ERP and job management/quoting application from inception to deployment.',
      'Utilized React to build responsive and user-friendly interfaces.',
      'Leveraged AWS Amplify for backend development, ensuring scalable and secure application infrastructure.',
      'Collaborated with cross-functional teams to deliver scalable web applications.',
      'Ensured code quality and performance through rigorous testing and code reviews.',
      'Implemented RESTful APIs and integrated third-party services to enhance application functionality.',
    ],
    skills: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Amazon Web Services (AWS)',
      'Full-Stack Development',
      'Software Design',
      'Software Infrastructure',
      'User Interface Design',
      'C#',
      'GraphQL',
      'Express.js',
      'REST APIs',
      'JavaScript',
      'Cascading Style Sheets (CSS)',
      'HTML',
      'Linux',
      'Git',
      'GitHub',
      'Jest',
      'Vite',
      'Yarn',
      'npm',
      'Node.js',
    ],
  },
  {
    id: 'cabmaster-dev',
    title: 'Software Developer',
    company: 'CabMaster Software, Bayswater, VIC',
    timeframe: 'April 2019 - September 2022',
    description:
      'Developed and maintained industry-standard software solutions in collaboration with clients.',
    achievements: [
      'Developed and maintained CabMaster, a widely-used cabinet making software.',
      'Fixed bugs and implemented new features to enhance software functionality and user experience.',
      'Authored comprehensive documentation to support users and developers.',
      'Developed and maintained drivers used in hundreds of CNC machines across Australia, enabling automation in the manufacturing process.',
    ],
    skills: [
      'Proprietary Software',
      'CNC Programming',
      'Middleware',
      'SQL',
      'Software Documentation',
      'VBScript',
      'Git',
      'GitHub',
      'Zoho',
      'G-Code',
    ],
  },
  {
    id: 'cabmaster-support',
    title: 'Technical Support',
    company: 'CabMaster Software, Bayswater, VIC',
    timeframe: 'April 2018 - April 2021',
    description: 'Provide advanced technical support and customer service.',
    achievements: [
      'Provided technical support to clients, applying advanced troubleshooting techniques to resolve issues quickly and efficiently.',
      'Acted as a liaison between customers and the development team to provide feedback and implement solutions that addressed both technical and user concerns.',
      'Authored clear, customer-friendly documentation to assist clients with common issues, improving overall customer satisfaction.',
      'Maintained a 99%+ positive feedback rating from customers who received my support.',
      'Provided in-person training to new customers on how to use the software and integrate it with their business.',
      'Configured software and automation solutions to integrate the software with customers’ CNC machines.',
    ],
    skills: [
      'Technical Support',
      'Software Documentation',
      'Employee Training',
      'Customer Product Training',
      'CNC Programming',
      'Zoho',
    ],
  },
];

export function Experiences() {
  return (
    <div>
      <h2 className="mb-4 text-center text-4xl font-semibold text-white">
        Work Experience
      </h2>
      {experiences.map((experience) => (
        <Experience key={experience.id} {...experience} />
      ))}
    </div>
  );
}
