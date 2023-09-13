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
    <div className="space-y-2 p-4 hover:bg-gray-500 hover:bg-opacity-20 rounded-md">
      <div className="flex flex-col justify-start md:flex-row md:justify-between font-semibold">
        <p>{props.titleLeft}</p>
        <p>{props.titleRight}</p>
      </div>
      <li className="text-gray-400 text-sm">
        {props.intro}
        <ul className="list-disc list-inside">
          {props.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </li>
      <div className="flex flex-row gap-2 items-center flex-wrap">
        {props.skills.map((s) => (
          <SkillBadge name={s} key={s} />
        ))}
      </div>
    </div>
  );
}
