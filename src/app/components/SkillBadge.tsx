type SkillBadgePropType = {
  name: string;
};

export default function SkillBadge({ name }: SkillBadgePropType) {
  return (
    <span className="bg-red-400 bg-opacity-30 px-1.5 py-1 font-bold rounded-md text-xs text-red-500">
      {name}
    </span>
  );
}
