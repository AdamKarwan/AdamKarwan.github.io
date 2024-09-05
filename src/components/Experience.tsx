export type Experience = {
  id: string;
  title: string;
  logo?: string;
  company: string;
  timeframe: string;
  description: string;
  achievements?: string[];
  skills?: string[];
};

export type ExperienceProps = {
  className?: string;
} & Experience;

export function Experience({
  className,
  title,
  logo,
  company,
  timeframe,
  description,
  achievements,
  skills,
}: ExperienceProps) {
  return (
    <div className={className}>
      <div className="flex items-center">
        {logo && <img className="mr-4 h-12 w-12" src={logo} alt={company} />}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{company}</p>
          <p className="text-sm text-gray-500">{timeframe}</p>
        </div>
      </div>
      <p className="mt-2">{description}</p>
      {achievements && (
        <ul className="mt-2 list-inside list-disc">
          {achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      )}
      {skills && (
        <div className="mt-2">
          <p className="font-semibold">Skills:</p>
          <ul className="list-inside list-disc">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
