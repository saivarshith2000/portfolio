import SkillBadge from "./SkillBadge";

type ExperienceCardPropType = {
  titleLeft: string;
  titleRight: string;
  intro: string;
  bullets: string[];
  skills: string[];
};

export default function ExperienceCard(props: ExperienceCardPropType) {
  return (
    <div className="space-y-2 rounded-md p-4 hover:bg-gray-500 hover:bg-opacity-20">
      <div className="flex flex-col justify-start font-semibold md:flex-row md:justify-between">
        <p>{props.titleLeft}</p>
        <p>{props.titleRight}</p>
      </div>
      <li className="text-sm text-gray-400">
        {props.intro}
        <ul className="list-inside list-disc">
          {props.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </li>
      <div className="flex flex-row flex-wrap items-center gap-2">
        {props.skills.map((s) => (
          <SkillBadge name={s} key={s} />
        ))}
      </div>
    </div>
  );
}
