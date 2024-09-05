import FadeInOnScroll from './FadeInOnScroll';

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
      <FadeInOnScroll>
        <div className="flex items-center">
          {logo && <img className="mr-4 h-12 w-12" src={logo} alt={company} />}
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-400">{company}</p>
            <em className="text-sm text-gray-400">{timeframe}</em>
          </div>
        </div>
        <p className="mt-2">{description}</p>
      </FadeInOnScroll>
      {achievements && (
        <ul className="mt-2 list-inside list-disc">
          {achievements.map((achievement) => (
            <FadeInOnScroll key={achievement}>
              <li>{achievement}</li>
            </FadeInOnScroll>
          ))}
        </ul>
      )}
      {skills && (
        <FadeInOnScroll>
          <div className="mt-2">
            <p className="font-semibold">Skills:</p>
            <ul className="list-inside list-disc">
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>
      )}
    </div>
  );
}
